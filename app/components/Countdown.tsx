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

  const statusBadge = {
    before: { text: "공사 준비 중", color: "bg-amber-400" },
    ongoing: { text: "공사 진행 중", color: "bg-emerald-400" },
    done: { text: "공사 완료", color: "bg-blue-400" },
  }[status];

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b3a82] via-[#1e6bd6] to-[#3b8bff] p-6 text-white shadow-[0_20px_60px_-15px_rgba(11,58,130,0.5)]">
      {/* 배경 블롭 */}
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span
              className={`absolute inline-flex h-full w-full animate-ping rounded-full ${statusBadge.color} opacity-75`}
            />
            <span
              className={`relative inline-flex h-2.5 w-2.5 rounded-full ${statusBadge.color}`}
            />
          </span>
          <span className="text-xs font-semibold tracking-wider text-blue-50">
            LIVE · {statusBadge.text}
          </span>
        </div>

        <p className="mt-3 text-sm text-blue-100">공사 종료까지</p>

        <div className="mt-2 flex items-end gap-3">
          <div className="flex items-baseline">
            <span
              className="text-7xl font-black tabular-nums tracking-tight"
              style={{ fontFeatureSettings: '"tnum"' }}
            >
              {mounted ? days : "—"}
            </span>
            <span className="ml-1 text-2xl font-bold text-blue-100">일</span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          <TimeChip label="시간" value={mounted ? hours : 0} />
          <TimeChip label="분" value={mounted ? minutes : 0} />
          <TimeChip label="초" value={mounted ? seconds : 0} />
        </div>

        {/* 프로그레스 바 */}
        <div className="mt-5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-blue-100">진행률</span>
            <span className="font-bold tabular-nums">
              {progress.toFixed(1)}%
            </span>
          </div>
          <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-white/15">
            <div
              className="relative h-full rounded-full bg-gradient-to-r from-cyan-300 to-white transition-[width] duration-700 ease-out"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </div>
          </div>
          <div className="mt-2 flex justify-between text-[11px] text-blue-100">
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
    <div className="rounded-xl bg-white/10 px-2 py-2 text-center backdrop-blur-sm ring-1 ring-white/20">
      <div
        className="text-xl font-bold tabular-nums"
        style={{ fontFeatureSettings: '"tnum"' }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-[10px] font-medium text-blue-100">{label}</div>
    </div>
  );
}
