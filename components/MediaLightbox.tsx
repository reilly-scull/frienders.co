"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Img } from "@/lib/content";

/**
 * Renders a grid of image/video tiles (using whatever grid class the caller
 * passes, e.g. "trip-extras" or "gallery-strip") where every tile opens in a
 * full-screen lightbox on click. Video tiles show a play badge over their
 * poster frame and play inline once opened.
 */
export default function MediaLightbox({
  items,
  gridClassName,
  sizes,
}: {
  items: Img[];
  gridClassName: string;
  sizes: string;
}) {
  const [open, setOpen] = useState<Img | null>(null);
  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <>
      <div className={gridClassName}>
        {items.map((item) => (
          <div
            className="media-tile"
            key={item.video ?? item.src}
            onClick={() => setOpen(item)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              sizes={sizes}
              loading="lazy"
            />
            {item.video && (
              <span className="play-badge" aria-hidden="true">
                <span>
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path d="M8 5v14l11-7z" fill="currentColor" />
                  </svg>
                </span>
              </span>
            )}
          </div>
        ))}
      </div>
      <div className={`media-lightbox ${open ? "open" : ""}`} onClick={close}>
        {open &&
          (open.video ? (
            <video
              src={open.video}
              poster={open.src}
              controls
              autoPlay
              playsInline
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <Image
              src={open.src}
              alt={open.alt}
              width={open.width}
              height={open.height}
              sizes="100vw"
            />
          ))}
      </div>
    </>
  );
}
