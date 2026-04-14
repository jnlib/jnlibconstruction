"use client";

import { useEffect, useState } from "react";

const START = new Date("2026-04-09T00:00:00+09:00").getTime();
const END = new Date("2026-05-12T23:59:59+09:00").getTime();
const TOTAL = END - START;

function getState() {
  const now = Date.now();
  const remaining = Math.max(0, END - now);
  const elapsed = Math.max(0, Math.min(TOTAL, now - START));
  const progress = Math.min(100, Math.max(0, (elapsed / TOTAL) * 100));

  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remaining / (1000 * 60)) % 60);
  const seconds = Math.floor((remaining / 1000) % 60);

  let status: "before" | "ongoing" | "done" = "ongoing";
  if (now < START) status = "before";
  else if (now > END) status = "done";

  return { days, hours, minutes, seconds, progress, status, elapsed, remaining };
}

export default function Countdown() {
  const [state, setState] = useState(() => getState());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const tick = () => setState(getState());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const { days, hours, minutes, seconds, progress, status } = state;

  const statusInfo = {
    before: { text: "공사 준비", color: "#f59e0b", bg: "#fef3c7" },
    ongoing: { text: "공사 진행 중", color: "#1bbf83", bg: "#e0f7ed" },
    done: { text: "공사 완료", color: "#3182f6", bg: "#e8f3ff" },
  }[status];

  return (
    <div className="relative overflow-hidden rounded-[28px] bg-white p-6 ring-1 ring-[#e5e8eb] shadow-[0_24px_60px_-24px_rgba(25,31,40,0.18)]">
      {/* 상단 라이브 인디케이터 */}
      <div className="flex items-center justify-between">
        <div
          className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1"
          style={{ backgroundColor: statusInfo.bg }}
        >
          <span className="relative flex h-2 w-2">
            <span
              className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full"
              style={{ backgroundColor: statusInfo.color }}
            />
            <span
              className="relative inline-flex h-2 w-2 rounded-full"
              style={{ backgroundColor: statusInfo.color }}
            />
          </span>
          <span
            className="text-[11px] font-bold"
            style={{ color: statusInfo.color }}
          >
            LIVE · {statusInfo.text}
          </span>
        </div>
        <span className="text-[11px] font-semibold text-[#8b95a1]">
          공사 종료까지
        </span>
      </div>

      {/* 큰 D-day */}
      <div className="mt-4 flex items-end gap-2">
        <span className="text-[80px] font-black leading-none tracking-[-0.04em] tnum text-[#191f28]">
          {mounted ? days : "—"}
        </span>
        <div className="pb-3">
          <span className="text-2xl font-black text-[#191f28]">일</span>
          <p className="text-[11px] font-medium text-[#8b95a1]">남았어요</p>
        </div>
      </div>

      {/* HH:MM:SS */}
      <div className="mt-3 flex items-center gap-1 text-[#4e5968]">
        <TimeBlock value={mounted ? hours : 0} label="시간" />
        <Colon />
        <TimeBlock value={mounted ? minutes : 0} label="분" />
        <Colon />
        <TimeBlock value={mounted ? seconds : 0} label="초" />
      </div>

      {/* 진행률 바 */}
      <div className="mt-6">
        <div className="flex items-baseline justify-between">
          <span className="text-[11px] font-bold text-[#8b95a1]">진행률</span>
          <span className="text-lg font-black tnum text-[#191f28]">
            {progress.toFixed(1)}
            <span className="text-xs text-[#8b95a1]">%</span>
          </span>
        </div>
        <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-[#f2f4f6]">
          <div
            className="relative h-full rounded-full bg-gradient-to-r from-[#3182f6] to-[#1bbf83] transition-[width] duration-700 ease-out"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          </div>
        </div>
        <div className="mt-2 flex justify-between text-[10px] font-semibold text-[#8b95a1]">
          <span>2026.04.09 착공</span>
          <span>2026.05.12 준공</span>
        </div>
      </div>
    </div>
  );
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-1 flex-col items-center rounded-xl bg-[#f2f4f6] py-2.5">
      <span className="text-xl font-black tnum text-[#191f28]">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] font-semibold text-[#8b95a1]">{label}</span>
    </div>
  );
}

function Colon() {
  return (
    <span className="px-0.5 text-xl font-black text-[#cbd2d9]">:</span>
  );
}
