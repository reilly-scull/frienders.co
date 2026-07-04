"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type Shot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export default function Gallery({ shots }: { shots: Shot[] }) {
  const [openShot, setOpenShot] = useState<Shot | null>(null);

  const close = useCallback(() => setOpenShot(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close]);

  return (
    <>
      <div className="masonry">
        {shots.map((shot) => (
          <figure
            key={shot.src}
            className="shot reveal"
            onClick={() => setOpenShot(shot)}
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              sizes="(max-width: 560px) 100vw, (max-width: 980px) 50vw, 33vw"
              loading="lazy"
            />
            <figcaption>{shot.caption}</figcaption>
          </figure>
        ))}
      </div>
      <div id="lightbox" className={openShot ? "open" : ""} onClick={close}>
        {openShot && (
          <Image
            src={openShot.src}
            alt={openShot.alt}
            width={openShot.width}
            height={openShot.height}
            sizes="100vw"
          />
        )}
      </div>
    </>
  );
}
