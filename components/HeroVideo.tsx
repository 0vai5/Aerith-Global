"use client";

import { useEffect, useRef } from "react";

type Props = { mp4: string; webm?: string };

/**
 * Decorative background video. It only loads and plays when it's appropriate:
 * desktop width, no reduced-motion preference, no data-saver mode.
 * Otherwise the server-rendered poster image in Hero stays as the static background.
 */
export function HeroVideo({ mp4, webm }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;

    if (reduceMotion || !isDesktop || connection?.saveData) return;

    // Gentle crossfade from the poster once frames are actually playing
    const onPlaying = () => {
      video.style.opacity = "1";
    };
    video.addEventListener("playing", onPlaying);

    // Pause when the hero scrolls out of view to save CPU/battery
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
    observer.observe(video);

    return () => {
      video.removeEventListener("playing", onPlaying);
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700"
      muted
      loop
      playsInline
      preload="none"
      tabIndex={-1}
      aria-hidden="true"
    >
      {webm && <source src={webm} type="video/webm" />}
      <source src={mp4} type="video/mp4" />
    </video>
  );
}