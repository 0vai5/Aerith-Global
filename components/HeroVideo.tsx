type Props = { mp4: string; webm?: string };

export function HeroVideo({ mp4, webm }: Props) {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      muted
      loop
      autoPlay
      playsInline
      preload="auto"
      tabIndex={-1}
      aria-hidden="true"
    >
      {webm && <source src={webm} type="video/webm" />}
      <source src={mp4} type="video/mp4" />
    </video>
  );
}
