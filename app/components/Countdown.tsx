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

  return { days, hours, minutes, seconds, progress, status };
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

  const statusLabel = {
    before: "공사 준비 중",
    ongoing: "공사 진행 중",
    done: "공사 완료",
  }[status];

  const dotColor = {
    before: "bg-amber-400",
    ongoing: "bg-emerald-400",
    done: "bg-blue-400",
  }[status];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0b3a82] p-5 text-white shadow-[0_12px_40px_-10px_rgba(11,58,130,0.4)]">
      {/* 배경 오브 */}
      <div
        aria-hidden
        className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/20 blur-2xl animate-glow"
      />
      <div
        aria-hidden
        className="absolute -bottom-12 -left-6 h-32 w-32 rounded-full bg-gradient-to-tr from-cyan-400/20 to-blue-600/15 blur-2xl animate-glow"
        style={{ animationDelay: "-2s" }}
      />

      <div className="relative z-10">
        {/* 상단: 상태 + 남은 일수 한 줄 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span
                className={`absolute inline-flex h-full w-full animate-ping rounded-full ${dotColor} opacity-75`}
              />
              <span
                className={`relative inline-flex h-2 w-2 rounded-full ${dotColor}`}
              />
            </span>
            <span className="text-[11px] font-semibold tracking-wide text-blue-100/70">
              LIVE · {statusLabel}
            </span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-[11px] text-blue-200/50">종료까지</span>
            <span
              className="text-3xl font-black tabular-nums tracking-tighter bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent"
              style={{ fontFeatureSettings: '"tnum"' }}
            >
              {mounted ? days : "--"}
            </span>
            <span className="text-sm font-bold text-blue-200/60">일</span>
          </div>
        </div>

        {/* 시간 칩 */}
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          <TimeChip label="시간" value={mounted ? hours : 0} />
          <TimeChip label="분" value={mounted ? minutes : 0} />
          <TimeChip label="초" value={mounted ? seconds : 0} />
        </div>

        {/* 프로그레스 */}
        <div className="mt-3">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-medium text-blue-200/50">진행률</span>
            <span className="font-bold tabular-nums text-white/90">
              {progress.toFixed(1)}%
            </span>
          </div>
          <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="relative h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 transition-[width] duration-700 ease-out"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            </div>
          </div>
          <div className="mt-1.5 flex justify-between text-[10px] text-blue-200/40">
            <span>2026. 4. 9.</span>
            <span>2026. 5. 12.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimeChip({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg bg-white/8 backdrop-blur-sm border border-white/8 px-2 py-1.5 text-center">
      <div
        className="text-base font-bold tabular-nums text-white"
        style={{ fontFeatureSettings: '"tnum"' }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-[9px] font-medium text-blue-200/50">{label}</div>
    </div>
  );
}
