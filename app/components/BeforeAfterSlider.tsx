"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
};

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  alt,
}: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200 touch-none"
      onMouseDown={(e) => {
        dragging.current = true;
        updateFromClientX(e.clientX);
      }}
      onMouseMove={(e) => {
        if (dragging.current) updateFromClientX(e.clientX);
      }}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => {
        dragging.current = true;
        updateFromClientX(e.touches[0].clientX);
      }}
      onTouchMove={(e) => {
        if (dragging.current) updateFromClientX(e.touches[0].clientX);
      }}
      onTouchEnd={() => (dragging.current = false)}
    >
      {/* AFTER (배경, 전체) */}
      <Image
        src={afterSrc}
        alt={`${alt} - 후`}
        fill
        sizes="(max-width: 640px) 100vw, 600px"
        className="object-cover"
        priority
      />
      <span className="absolute right-3 top-3 z-10 rounded-full bg-blue-600 px-3 py-1 text-[11px] font-bold tracking-wider text-white shadow-lg">
        AFTER
      </span>

      {/* BEFORE (위에서 클립) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={`${alt} - 전`}
          fill
          sizes="(max-width: 640px) 100vw, 600px"
          className="object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-slate-900/90 px-3 py-1 text-[11px] font-bold tracking-wider text-white shadow-lg backdrop-blur">
          BEFORE
        </span>
      </div>

      {/* 핸들 */}
      <div
        className="absolute top-0 bottom-0 z-10 w-0.5 bg-white shadow-[0_0_15px_rgba(0,0,0,0.4)]"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl ring-4 ring-white/30">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0b3a82"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 18 3 12 9 6" style={{ display: "none" }} />
          </svg>
          <svg
            className="absolute"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0b3a82"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transform: "translateX(7px)" }}
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </div>

      {/* 힌트 */}
      <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium text-white backdrop-blur">
        ← 좌우로 드래그 →
      </div>
    </div>
  );
}
