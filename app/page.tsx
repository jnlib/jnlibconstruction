import Image from "next/image";
import Countdown from "./components/Countdown";
import BeforeAfterSlider from "./components/BeforeAfterSlider";

const SUPERVISOR_TEL = "02-721-0703";
const MAIN_TEL = "02-721-0700";
const ACRC_TEL = "1398";

// TODO: 사용자에게 받는 즉시 교체
const NAVER_FORM_URL = "https://naver.me/REPLACE_WITH_REAL_URL";

export default function Page() {
  return (
    <main className="relative mx-auto w-full max-w-screen-sm overflow-hidden bg-white">
      {/* ============== HERO ============== */}
      <section className="relative overflow-hidden bg-[#0a1628] px-6 pt-14 pb-20 text-white">
        {/* 그라데이션 메쉬 */}
        <div
          aria-hidden
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/40 blur-3xl animate-mesh"
        />
        <div
          aria-hidden
          className="absolute top-20 -right-20 h-80 w-80 rounded-full bg-cyan-400/30 blur-3xl animate-mesh"
          style={{ animationDelay: "-4s" }}
        />
        <div
          aria-hidden
          className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl animate-mesh"
          style={{ animationDelay: "-8s" }}
        />

        <div className="relative animate-fade-up">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold backdrop-blur-md ring-1 ring-white/20">
            <span className="text-base">🏛️</span>
            서울특별시교육청 종로도서관
          </div>

          <h1 className="mt-5 text-[34px] font-black leading-[1.15] tracking-tight">
            종로도서관
            <br />
            시설공사 안내
          </h1>

          <p className="mt-4 text-[15px] leading-relaxed text-blue-100/90">
            더 나은 공간을 만들기 위한 변화의 과정을
            <br />
            투명하게 공개합니다.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Pill>🏗️ 환경개선공사</Pill>
            <Pill>🤝 청렴서약</Pill>
            <Pill>📢 정보공개</Pill>
          </div>
        </div>
      </section>

      {/* ============== LIVE COUNTDOWN (hero와 겹침) ============== */}
      <section className="relative -mt-12 px-5">
        <Countdown />
      </section>

      {/* ============== 청렴신고 CTA ============== */}
      <section className="px-5 mt-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-50 to-orange-50 p-6 ring-1 ring-rose-100">
          <div
            aria-hidden
            className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-rose-200/50 blur-2xl"
          />
          <div className="relative">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-3 py-1 text-[11px] font-bold text-rose-600">
              <span>🛡️</span> 청렴 신고센터
            </div>
            <h2 className="mt-3 text-2xl font-black leading-tight text-[#0a1628]">
              부정·비리를
              <br />
              <span className="text-rose-600">익명으로 신고</span>하세요
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              금품·향응 요구, 부실시공, 안전 위반 등<br />
              어떤 제보도 비밀이 보장됩니다.
            </p>

            <a
              href={NAVER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 flex items-center justify-between rounded-2xl bg-[#0a1628] px-5 py-4 text-white shadow-[0_10px_30px_-10px_rgba(10,22,40,0.5)] active:scale-[0.98] transition"
            >
              <div>
                <div className="text-[11px] font-medium text-slate-400">
                  네이버 폼 (익명)
                </div>
                <div className="text-base font-bold">청렴신고 바로가기</div>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 group-active:translate-x-0.5 transition">
                <ArrowIcon />
              </div>
            </a>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <a
                href={`tel:${SUPERVISOR_TEL}`}
                className="flex items-center gap-2 rounded-xl bg-white px-3 py-3 ring-1 ring-slate-200 active:scale-95 transition"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-base">
                  📞
                </span>
                <div className="min-w-0">
                  <div className="text-[10px] text-slate-500">감독관</div>
                  <div className="truncate text-xs font-bold text-[#0a1628]">
                    {SUPERVISOR_TEL}
                  </div>
                </div>
              </a>
              <a
                href={`tel:${ACRC_TEL}`}
                className="flex items-center gap-2 rounded-xl bg-white px-3 py-3 ring-1 ring-slate-200 active:scale-95 transition"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-50 text-base">
                  🚨
                </span>
                <div className="min-w-0">
                  <div className="text-[10px] text-slate-500">권익위</div>
                  <div className="truncate text-xs font-bold text-[#0a1628]">
                    ☎ {ACRC_TEL}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============== 공사 1: 후문 자동문 ============== */}
      <section className="px-5 mt-12">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-black text-white">
            01
          </span>
          <span className="text-xs font-bold tracking-wider text-blue-600">
            CONSTRUCTION
          </span>
        </div>
        <h2 className="mt-2 text-2xl font-black leading-tight text-[#0a1628]">
          후문 자동 개폐 시스템
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          기존 수동 철문을 자바라 자동문으로 교체합니다.
          <br />
          주차와 출입 편의가 크게 향상됩니다.
        </p>

        <div className="mt-5">
          <BeforeAfterSlider
            beforeSrc="/images/before-gate.jpg"
            afterSrc="/images/after-gate.jpg"
            alt="후문"
          />
        </div>
      </section>

      {/* ============== 공사 2: 정원 서재 ============== */}
      <section className="px-5 mt-12">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-xs font-black text-white">
            02
          </span>
          <span className="text-xs font-bold tracking-wider text-emerald-600">
            CONSTRUCTION
          </span>
        </div>
        <h2 className="mt-2 text-2xl font-black leading-tight text-[#0a1628]">
          정원 서재 환경 개선
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          노후 시설물 정비, 파고라 및 휴게공간 조성,
          <br />
          자동 관수시설을 설치합니다.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200"
            >
              <Image
                src={`/images/garden-${n}.jpg`}
                alt={`정원 시안 ${n}`}
                fill
                sizes="(max-width: 640px) 50vw, 300px"
                className="object-cover transition group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                <span className="text-[10px] font-bold tracking-wider text-white">
                  시안 0{n}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[11px] text-slate-400">
          ※ 시공사 제공 참고 시안. 실제 시공 결과와 차이가 있을 수 있습니다.
        </p>
      </section>

      {/* ============== 공사 정보 카드 ============== */}
      <section className="px-5 mt-14">
        <div className="text-center">
          <p className="text-xs font-bold tracking-wider text-blue-600">
            CONTRACT
          </p>
          <h2 className="mt-1 text-2xl font-black text-[#0a1628]">
            계약 정보
          </h2>
        </div>

        {/* 큰 숫자 카드들 */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <StatCard
            label="계약금액"
            value="55,000,000"
            unit="원"
            sub="VAT 포함"
            tone="blue"
          />
          <StatCard
            label="공사 기간"
            value="34"
            unit="일"
            sub="4/9 → 5/12"
            tone="emerald"
          />
        </div>

        <div className="mt-3 overflow-hidden rounded-2xl bg-[#f6f8fb] p-5 ring-1 ring-slate-100">
          <p className="text-[11px] font-bold tracking-wider text-slate-400">
            계약명
          </p>
          <p className="mt-1.5 text-sm font-semibold leading-relaxed text-[#0a1628]">
            (환경개선공사) 종로도서관 후문 자동개폐시스템 구축 및 정원 서재
            환경개선 공사
          </p>

          <div className="mt-4 grid grid-cols-2 gap-4 border-t border-slate-200 pt-4">
            <Field label="시공사" value="토브이앤씨㈜" />
            <Field label="계약방법" value="여성기업 수의계약" />
            <Field label="발주" value="종로도서관 행정지원과" />
            <Field label="감독" value={SUPERVISOR_TEL} />
          </div>
        </div>
      </section>

      {/* ============== 관계자 / 채널 ============== */}
      <section className="px-5 mt-14">
        <div className="text-center">
          <p className="text-xs font-bold tracking-wider text-blue-600">
            CONTACT
          </p>
          <h2 className="mt-1 text-2xl font-black text-[#0a1628]">
            문의 · 신고 채널
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            언제든 연락주세요. 24시간 접수합니다.
          </p>
        </div>

        <div className="mt-6 space-y-3">
          <ChannelCard
            icon="🏛️"
            title="종로도서관 행정지원과"
            sub="공사 관련 문의 · 민원"
            tel={SUPERVISOR_TEL}
            tone="blue"
          />
          <ChannelCard
            icon="📞"
            title="종로도서관 대표"
            sub="일반 문의"
            tel={MAIN_TEL}
            tone="slate"
          />
          <ChannelCard
            icon="🚨"
            title="국민권익위원회"
            sub="익명 부패·공익 신고"
            tel={ACRC_TEL}
            link="https://www.acrc.go.kr"
            tone="rose"
          />
          <ChannelCard
            icon="📝"
            title="청렴신고 폼 (네이버)"
            sub="익명 온라인 제보"
            href={NAVER_FORM_URL}
            tone="dark"
          />
        </div>
      </section>

      {/* ============== 푸터 ============== */}
      <footer className="mt-16 bg-[#0a1628] px-6 py-10 text-center text-xs text-slate-400">
        <div className="text-base font-bold text-white">
          서울특별시교육청 종로도서관
        </div>
        <div className="mt-2 leading-relaxed">
          서울시 종로구 사직로9길 15-14
          <br />
          대표 {MAIN_TEL} · jnlib@sen.go.kr
        </div>
        <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-[10px] ring-1 ring-white/10">
          🤝 서울시교육청 청렴 가시화 지침에 따라 공개
        </div>
      </footer>
    </main>
  );
}

/* ============================================================
   서브 컴포넌트
============================================================ */

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold backdrop-blur-md ring-1 ring-white/15">
      {children}
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function StatCard({
  label,
  value,
  unit,
  sub,
  tone,
}: {
  label: string;
  value: string;
  unit: string;
  sub: string;
  tone: "blue" | "emerald";
}) {
  const toneMap = {
    blue: "from-blue-50 to-blue-100/50 text-blue-600",
    emerald: "from-emerald-50 to-emerald-100/50 text-emerald-600",
  };
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${toneMap[tone]} p-4 ring-1 ring-slate-100`}
    >
      <p className="text-[11px] font-bold tracking-wider opacity-80">
        {label}
      </p>
      <div className="mt-2 flex items-baseline gap-1">
        <span className="text-2xl font-black tabular-nums text-[#0a1628]">
          {value}
        </span>
        <span className="text-sm font-bold text-[#0a1628]">{unit}</span>
      </div>
      <p className="mt-1 text-[11px] text-slate-500">{sub}</p>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-bold tracking-wider text-slate-400">
        {label}
      </p>
      <p className="mt-0.5 text-xs font-semibold text-[#0a1628]">{value}</p>
    </div>
  );
}

function ChannelCard({
  icon,
  title,
  sub,
  tel,
  href,
  link,
  tone,
}: {
  icon: string;
  title: string;
  sub: string;
  tel?: string;
  href?: string;
  link?: string;
  tone: "blue" | "slate" | "rose" | "dark";
}) {
  const toneMap = {
    blue: "bg-blue-600 text-white",
    slate: "bg-slate-700 text-white",
    rose: "bg-rose-600 text-white",
    dark: "bg-[#0a1628] text-white",
  };
  const target = href ?? (tel ? `tel:${tel}` : "#");
  return (
    <a
      href={target}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-slate-200 transition active:scale-[0.98] hover:ring-slate-300"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-2xl ring-1 ring-slate-100">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-[15px] font-bold text-[#0a1628]">{title}</div>
        <div className="text-[11px] text-slate-500">{sub}</div>
        {link && (
          <div className="text-[11px] text-blue-600">
            {link.replace("https://", "")}
          </div>
        )}
      </div>
      {tel ? (
        <span
          className={`shrink-0 rounded-xl px-3 py-2 text-xs font-bold ${toneMap[tone]}`}
        >
          ☎ {tel}
        </span>
      ) : (
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${toneMap[tone]} group-active:translate-x-0.5 transition`}
        >
          <ArrowIcon />
        </span>
      )}
    </a>
  );
}
