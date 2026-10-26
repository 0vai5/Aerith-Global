import { NextResponse } from "next/server";
import { Resend } from "resend";

const SCRIPT_URL = process.env.QUOTE_APPS_SCRIPT_URL;
const SECRET = process.env.QUOTE_SHARED_SECRET;
const RESEND_KEY = process.env.RESEND_API_KEY;
const FROM = process.env.QUOTE_FROM_EMAIL;
const NOTIFY_TO = process.env.QUOTE_NOTIFY_EMAIL;

const resend = RESEND_KEY ? new Resend(RESEND_KEY) : null;

const MAX = { short: 200, message: 5000 };
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: bots fill the hidden field, humans never see it
  if (body.website) return NextResponse.json({ ok: true });

  const payload = {
    name: clean(body.name, MAX.short),
    company: clean(body.company, MAX.short),
    email: clean(body.email, MAX.short),
    phone: clean(body.phone, 50),
    category: clean(body.category, 100),
    urgency: clean(body.urgency, 20),
    quantity: clean(body.quantity, MAX.short),
    message: clean(body.message, MAX.message),
  };

  if (!payload.name || !payload.message || !isEmail(payload.email)) {
    return NextResponse.json(
      { error: "Missing or invalid fields" },
      { status: 400 },
    );
  }

  // Not configured: fail loudly in production, log in dev
  if (!SCRIPT_URL || !SECRET) {
    if (process.env.NODE_ENV === "production") {
      console.error("QUOTE_APPS_SCRIPT_URL / QUOTE_SHARED_SECRET not set");
      return NextResponse.json({ error: "Not configured" }, { status: 500 });
    }
    console.warn("Dev: quote not saved (env vars missing):", payload);
    return NextResponse.json({ ok: true, delivered: false });
  }

  // 1) Save to the Sheet FIRST so a lead is never lost
  try {
    const res = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, secret: SECRET }),
      signal: AbortSignal.timeout(15000),
    });
    const result = await res.json().catch(() => null);
    if (!res.ok || !result?.ok) {
      console.error("Sheet write failed:", result);
      return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("Sheet write error:", err);
    return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
  }

  // 2) Notify the representative. A failure here is logged, never shown to the
  //    user, because the lead is already safely in the Sheet.
  if (resend && FROM && NOTIFY_TO) {
    try {
      const urgent = payload.urgency === "urgent";
      const { error } = await resend.emails.send({
        from: FROM,
        to: NOTIFY_TO,
        replyTo: payload.email,
        subject: `${urgent ? "[URGENT / AOG] " : ""}New quote request: ${payload.name}${
          payload.company ? ` (${payload.company})` : ""
        }`,
        text:
          `Name: ${payload.name}\n` +
          `Company: ${payload.company || "-"}\n` +
          `Email: ${payload.email}\n` +
          `Phone: ${payload.phone || "-"}\n` +
          `Category: ${payload.category || "-"}\n` +
          `Timeline: ${payload.urgency || "-"}\n` +
          `Quantity: ${payload.quantity || "-"}\n\n` +
          `Message:\n${payload.message}`,
      });
      if (error) console.error("Resend error:", error);
    } catch (err) {
      console.error("Resend threw:", err);
    }
  } else {
    console.warn("Resend not configured: lead saved to Sheet, no email sent");
  }

  return NextResponse.json({ ok: true });
}