"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

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
  const [hint, setHint] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
    setHint(false);
  }, []);

  // 첫 진입 시 한 번 부드럽게 좌우로 흔들어 인지
  useEffect(() => {
    let t1: NodeJS.Timeout, t2: NodeJS.Timeout, t3: NodeJS.Timeout;
    t1 = setTimeout(() => setPos(35), 800);
    t2 = setTimeout(() => setPos(65), 1500);
    t3 = setTimeout(() => setPos(50), 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-[24px] bg-[#f2f4f6] ring-1 ring-[#e5e8eb] touch-none cursor-ew-resize shadow-[0_20px_50px_-20px_rgba(25,31,40,0.25)]"
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
      <div className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-[#3182f6] px-3 py-1 text-[10px] font-black tracking-wider text-white shadow-lg">
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
        AFTER
      </div>

      {/* BEFORE (위에서 클립) */}
      <div
        className="absolute inset-0 overflow-hidden transition-[clip-path] duration-700 ease-out"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={`${alt} - 전`}
          fill
          sizes="(max-width: 640px) 100vw, 600px"
          className="object-cover"
        />
        <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-[#191f28]/95 px-3 py-1 text-[10px] font-black tracking-wider text-white shadow-lg backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
          BEFORE
        </div>
      </div>

      {/* 핸들 라인 */}
      <div
        className="absolute top-0 bottom-0 z-10 w-[3px] bg-white shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-[left] duration-700 ease-out"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.3)] ring-2 ring-white/60">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3182f6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <svg
            className="-ml-1"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3182f6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </div>

      {/* 힌트 */}
      {hint && (
        <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 animate-float rounded-full bg-black/70 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur">
          ← 좌우로 드래그해 비교하기 →
        </div>
      )}
    </div>
  );
}
