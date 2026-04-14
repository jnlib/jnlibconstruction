"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
  beforePosition?: string;
  afterPosition?: string;
};

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  alt,
  beforePosition = "center 60%",
  afterPosition = "center 45%",
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
    <div className="card-3d rounded-2xl p-[1.5px] bg-gradient-to-br from-[#3182F6]/30 via-transparent to-[#a855f7]/30">
      <div
        ref={ref}
        className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-[14px] bg-[#191F28] touch-none cursor-grab active:cursor-grabbing"
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
          style={{ objectPosition: afterPosition }}
          priority
        />
        <span className="absolute right-3 top-3 z-10 glass-dark rounded-lg px-3 py-1.5 text-[11px] font-bold tracking-wider text-white border border-white/10">
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
            style={{ objectPosition: beforePosition }}
          />
          <span className="absolute left-3 top-3 glass-dark rounded-lg px-3 py-1.5 text-[11px] font-bold tracking-wider text-white border border-white/10">
            BEFORE
          </span>
        </div>

        {/* 핸들 라인 */}
        <div
          className="absolute top-0 bottom-0 z-10 w-[2px] bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] ring-2 ring-white/50">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#191F28"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#191F28"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginLeft: -6 }}
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>

        {/* 힌트 */}
        <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 glass-dark rounded-full px-4 py-1.5 text-[10px] font-medium text-white/90 border border-white/10">
          좌우로 드래그
        </div>
      </div>
    </div>
  );
}
