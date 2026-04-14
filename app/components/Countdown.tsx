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
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0b3a82] p-6 text-white shadow-[0_20px_60px_-15px_rgba(11,58,130,0.5)]">
      {/* 3D 배경 오브 */}
      <div
        aria-hidden
        className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-blue-400/40 to-purple-500/30 blur-2xl animate-glow"
      />
      <div
        aria-hidden
        className="absolute -bottom-16 -left-8 h-48 w-48 rounded-full bg-gradient-to-tr from-cyan-400/30 to-blue-600/20 blur-2xl animate-glow"
        style={{ animationDelay: "-2s" }}
      />
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-white/5 blur-xl"
      />

      <div className="relative z-10">
        {/* 상태 */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span
              className={`absolute inline-flex h-full w-full animate-ping rounded-full ${dotColor} opacity-75`}
            />
            <span
              className={`relative inline-flex h-2.5 w-2.5 rounded-full ${dotColor}`}
            />
          </span>
          <span className="text-[12px] font-semibold tracking-wide text-blue-100/80">
            LIVE · {statusLabel}
          </span>
        </div>

        <p className="mt-3 text-[13px] text-blue-200/70">공사 종료까지</p>

        {/* 큰 숫자 */}
        <div className="mt-1 flex items-baseline">
          <span
            className="text-6xl font-black tabular-nums tracking-tighter bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent"
            style={{ fontFeatureSettings: '"tnum"' }}
          >
            {mounted ? days : "--"}
          </span>
          <span className="ml-1.5 text-xl font-bold text-blue-200/80">일</span>
        </div>

        {/* 시간 칩 */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          <TimeChip label="시간" value={mounted ? hours : 0} />
          <TimeChip label="분" value={mounted ? minutes : 0} />
          <TimeChip label="초" value={mounted ? seconds : 0} />
        </div>

        {/* 프로그레스 */}
        <div className="mt-5">
          <div className="flex items-center justify-between text-[12px]">
            <span className="font-medium text-blue-200/60">진행률</span>
            <span className="font-bold tabular-nums text-white">
              {progress.toFixed(1)}%
            </span>
          </div>
          <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="relative h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 transition-[width] duration-700 ease-out"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            </div>
          </div>
          <div className="mt-2 flex justify-between text-[11px] text-blue-200/50">
            <span>2026. 4. 9. 착공</span>
            <span>2026. 5. 12. 준공</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimeChip({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 px-2 py-2.5 text-center">
      <div
        className="text-xl font-bold tabular-nums text-white"
        style={{ fontFeatureSettings: '"tnum"' }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-[10px] font-medium text-blue-200/60">{label}</div>
    </div>
  );
}
