import { NextResponse } from "next/server";

// TODO (needs cousin's input): create a Google Apps Script web app bound to
// the lead-capture Sheet, deploy it, and set QUOTE_APPS_SCRIPT_URL in
// .env.local / Vercel env vars to its /exec URL. Until that's set, this
// route validates and logs the submission but doesn't deliver it anywhere.
const SCRIPT_URL = process.env.QUOTE_APPS_SCRIPT_URL;

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, message } = body;
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  if (!SCRIPT_URL) {
    console.warn(
      "QUOTE_APPS_SCRIPT_URL not set — quote request received but not delivered:",
      body,
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  const res = await fetch(SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Delivery failed" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, delivered: true });
}