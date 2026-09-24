import Image from "next/image";

/**
 * Continuously scrolling image strip. The list is rendered twice so the
 * -50% keyframe loops seamlessly; the duplicate is hidden from assistive tech.
 */
export function ImageMarquee({
  images,
  height = 200,
  durationSeconds = 48,
}: {
  images: readonly { src: string; alt: string }[];
  height?: number;
  durationSeconds?: number;
}) {
  if (images.length === 0) return null;

  return (
    <div className="overflow-hidden">
      <div
        className="flex w-max gap-3.5 animate-marquee motion-reduce:animate-none"
        style={{ animationDuration: `${durationSeconds}s` }}
      >
        {[0, 1].map((pass) => (
          <div key={pass} className="flex gap-3.5" aria-hidden={pass === 1 ? true : undefined}>
            {images.map((img, i) => (
              <figure
                key={`${pass}-${i}`}
                className="relative flex-none overflow-hidden rounded-[10px] bg-white/5"
                style={{ height, width: Math.round(height * 1.45) }}
              >
                <Image
                  src={img.src}
                  alt={pass === 1 ? "" : img.alt}
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </figure>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
