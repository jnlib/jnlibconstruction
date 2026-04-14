import Image from "next/image";
import Countdown from "./components/Countdown";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import { getContent } from "./lib/content-store";

const SUPERVISOR_TEL = "02-721-0703";
const MAIN_TEL = "02-721-0729";
const ACRC_TEL = "1398";

const NAVER_FORM_INTEGRITY = "https://naver.me/54KQ7DFY";
const NAVER_FORM_COMPLAINT = "https://naver.me/xfbJEHWM";

function nl2br(text: string) {
  return text.split("\n").map((line, i, arr) =>
    i < arr.length - 1 ? (
      <span key={i}>
        {line}
        <br />
      </span>
    ) : (
      <span key={i}>{line}</span>
    ),
  );
}

export default async function Page() {
  const c = await getContent();

  return (
    <main className="relative mx-auto w-full max-w-screen-sm overflow-hidden bg-white">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#eef2ff] via-[#f0f4ff] to-[#e8f0fe] px-6 pt-14 pb-16">
        {/* 메쉬 그라데이션 오브 */}
        <div
          aria-hidden
          className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-br from-blue-300/40 to-cyan-200/30 blur-3xl animate-mesh"
        />
        <div
          aria-hidden
          className="absolute top-10 -right-16 h-72 w-72 rounded-full bg-gradient-to-bl from-violet-300/30 to-blue-300/20 blur-3xl animate-mesh"
          style={{ animationDelay: "-3s" }}
        />
        <div
          aria-hidden
          className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-gradient-to-tr from-indigo-300/20 to-pink-200/20 blur-3xl animate-mesh"
          style={{ animationDelay: "-7s" }}
        />

        {/* 격자 패턴 오버레이 */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(49,130,246,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(49,130,246,.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-md border border-[#3182F6]/15 px-4 py-1.5 text-[11px] font-semibold text-[#3182F6] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3182F6] animate-glow" />
            {c.hero.org}
          </div>

          <h1 className="mt-6 text-[36px] font-black leading-[1.1] tracking-tight">
            <span className="bg-gradient-to-r from-[#191F28] via-[#1e3a5f] to-[#3182F6] bg-clip-text text-transparent">
              {c.hero.title}
            </span>
          </h1>

          <p className="mt-5 text-[15px] leading-[1.8] text-[#6B7684]">
            {nl2br(c.hero.description)}
          </p>

          {/* 태그 */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["환경개선공사", "청렴서약", "정보공개"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/60 backdrop-blur-sm border border-[#3182F6]/10 px-3.5 py-1 text-[11px] font-semibold text-[#3182F6]/70 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVE COUNTDOWN ── */}
      <section className="px-5 pb-2 animate-fade-up-delay">
        <Countdown />
      </section>

      {/* ── 청렴신고 CTA ── */}
      <section className="px-5 mt-10 animate-fade-up-delay-2">
        <div className="gradient-border">
          <div className="relative overflow-hidden rounded-2xl bg-white p-6">
            {/* 배경 장식 */}
            <div
              aria-hidden
              className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-red-100 to-orange-100 blur-2xl"
            />
            <div className="relative z-10">
              <p className="text-[13px] font-bold text-[#F04452]">
                {c.cta.label}
              </p>
              <h2 className="mt-2 text-[22px] font-black leading-tight text-[#191F28]">
                {c.cta.title}
                <br />
                <span className="bg-gradient-to-r from-[#F04452] to-[#ec4899] bg-clip-text text-transparent">
                  {c.cta.highlight}
                </span>
                {c.cta.titleSuffix}
              </h2>
              <p className="mt-2 text-[13px] leading-relaxed text-[#6B7684]">
                {nl2br(c.cta.description)}
              </p>

              <div className="mt-5 space-y-2">
                <a
                  href={NAVER_FORM_INTEGRITY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-3d group flex items-center justify-between rounded-xl bg-gradient-to-r from-[#191F28] to-[#2d3748] px-5 py-4 text-white shadow-[0_10px_30px_-10px_rgba(25,31,40,0.5)]"
                >
                  <div>
                    <div className="text-[11px] font-medium text-[#ADB3BA]">
                      네이버 폼 (익명)
                    </div>
                    <div className="text-[15px] font-bold">
                      청렴신고 바로가기
                    </div>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 border border-white/10 group-hover:bg-white/20 transition">
                    <ArrowIcon />
                  </div>
                </a>
                <a
                  href={NAVER_FORM_COMPLAINT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-3d group flex items-center justify-between rounded-xl border border-[#E5E8EB] bg-white px-5 py-4 text-[#191F28]"
                >
                  <div>
                    <div className="text-[11px] font-medium text-[#6B7684]">
                      네이버 폼
                    </div>
                    <div className="text-[15px] font-bold">
                      공사 불편사항 신고
                    </div>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F7F8FA] border border-[#E5E8EB] group-hover:bg-[#E5E8EB] transition">
                    <ArrowIcon />
                  </div>
                </a>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href={`tel:${SUPERVISOR_TEL}`}
                  className="card-3d flex items-center gap-2.5 rounded-xl border border-[#E5E8EB] px-3 py-3"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100">
                    <PhoneIcon className="text-[#3182F6]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-[#ADB3BA]">감독관</div>
                    <div className="truncate text-xs font-bold text-[#191F28]">
                      {SUPERVISOR_TEL}
                    </div>
                  </div>
                </a>
                <a
                  href={`tel:${ACRC_TEL}`}
                  className="card-3d flex items-center gap-2.5 rounded-xl border border-[#E5E8EB] px-3 py-3"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-orange-50">
                    <PhoneIcon className="text-[#F04452]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-[#ADB3BA]">권익위</div>
                    <div className="truncate text-xs font-bold text-[#191F28]">
                      {ACRC_TEL}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 공사 1: 후문 자동문 ── */}
      <section className="px-5 mt-16">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#3182F6] to-[#1e6bd6] text-xs font-black text-white shadow-[0_4px_12px_-2px_rgba(49,130,246,0.4)]">
            01
          </span>
          <div>
            <h2 className="text-[20px] font-extrabold leading-tight text-[#191F28]">
              {c.construction01.title}
            </h2>
          </div>
        </div>
        <p className="mt-3 text-[14px] leading-[1.7] text-[#6B7684]">
          {nl2br(c.construction01.description)}
        </p>

        <div className="mt-5">
          <BeforeAfterSlider
            beforeSrc="/images/before-gate.jpg"
            afterSrc="/images/after-gate.jpg"
            alt="후문"
            objectPosition={c.construction01.imagePosition}
          />
        </div>
      </section>

      {/* ── 공사 2: 정원 서재 ── */}
      <section className="px-5 mt-16">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-xs font-black text-white shadow-[0_4px_12px_-2px_rgba(16,185,129,0.4)]">
            02
          </span>
          <div>
            <h2 className="text-[20px] font-extrabold leading-tight text-[#191F28]">
              {c.construction02.title}
            </h2>
          </div>
        </div>
        <p className="mt-3 text-[14px] leading-[1.7] text-[#6B7684]">
          {nl2br(c.construction02.description)}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="card-3d group relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#191F28] shadow-[0_8px_24px_-6px_rgba(0,0,0,0.15)]"
            >
              <Image
                src={`/images/garden-${n}.jpg`}
                alt={`정원 시안 ${n}`}
                fill
                sizes="(max-width: 640px) 50vw, 300px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-2.5">
                <span className="glass-dark rounded-md border border-white/10 px-2.5 py-1 text-[10px] font-bold tracking-wider text-white">
                  시안 0{n}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[11px] text-[#ADB3BA]">
          {c.construction02.disclaimer}
        </p>
      </section>

      {/* ── 계약 정보 ── */}
      <section className="px-5 mt-16">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#191F28] to-[#374151] text-xs font-black text-white">
            i
          </span>
          <h2 className="text-[20px] font-extrabold text-[#191F28]">
            {c.contract.sectionTitle}
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="card-3d relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#EBF3FE] to-[#dbeafe] p-4 border border-blue-200/50">
            <div
              aria-hidden
              className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-blue-300/30 blur-xl"
            />
            <p className="text-[11px] font-bold tracking-wider text-[#3182F6]">
              계약금액
            </p>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-[22px] font-black tabular-nums text-[#191F28]">
                {c.contract.amount}
              </span>
              <span className="text-sm font-bold text-[#191F28]">
                {c.contract.amountUnit}
              </span>
            </div>
            <p className="mt-1 text-[11px] text-[#6B7684]">
              {c.contract.amountSub}
            </p>
          </div>
          <div className="card-3d relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-4 border border-emerald-200/50">
            <div
              aria-hidden
              className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-emerald-300/30 blur-xl"
            />
            <p className="text-[11px] font-bold tracking-wider text-emerald-600">
              공사 기간
            </p>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-[22px] font-black tabular-nums text-[#191F28]">
                {c.contract.period}
              </span>
              <span className="text-sm font-bold text-[#191F28]">
                {c.contract.periodUnit}
              </span>
            </div>
            <p className="mt-1 text-[11px] text-[#6B7684]">
              {c.contract.periodSub}
            </p>
          </div>
        </div>

        <div className="mt-3 overflow-hidden rounded-2xl bg-[#F7F8FA] border border-[#E5E8EB] p-5">
          <p className="text-[11px] font-bold tracking-wider text-[#ADB3BA]">
            계약명
          </p>
          <p className="mt-1.5 text-[14px] font-semibold leading-relaxed text-[#191F28]">
            {c.contract.name}
          </p>

          <div className="mt-4 grid grid-cols-2 gap-4 border-t border-[#E5E8EB] pt-4">
            <Field label="시공사" value={c.contract.contractor} />
            <Field label="계약방법" value={c.contract.method} />
            <Field label="발주" value={c.contract.issuer} />
            <Field label="감독" value={SUPERVISOR_TEL} />
          </div>
        </div>
      </section>

      {/* ── 문의 · 신고 채널 ── */}
      <section className="px-5 mt-16">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-[0_4px_12px_-2px_rgba(139,92,246,0.4)]">
            <PhoneIcon className="text-white" />
          </span>
          <div>
            <h2 className="text-[20px] font-extrabold text-[#191F28]">
              {c.contact.sectionTitle}
            </h2>
            <p className="text-[12px] text-[#6B7684]">
              {c.contact.sectionSub}
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <ChannelCard
            title="종로도서관 행정지원과"
            sub="공사 관련 문의 · 민원"
            tel={SUPERVISOR_TEL}
          />
        </div>
      </section>

      {/* ── 푸터 ── */}
      <footer className="mt-20 bg-gradient-to-b from-[#0f172a] to-[#191F28] px-6 py-12 text-center">
        <div className="text-[14px] font-bold text-white">{c.footer.org}</div>
        <div className="mt-2 text-[13px] leading-relaxed text-blue-200/50">
          {c.footer.address}
          <br />
          대표 {MAIN_TEL} · jnlib@sen.go.kr
        </div>
        <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-[10px] text-white/40">
          {c.footer.policy}
        </div>
      </footer>
    </main>
  );
}

/* ─── 서브 컴포넌트 ─── */

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function PhoneIcon({ className = "text-[#6B7684]" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-bold tracking-wider text-[#ADB3BA]">
        {label}
      </p>
      <p className="mt-0.5 text-[13px] font-semibold text-[#191F28]">
        {value}
      </p>
    </div>
  );
}

function ChannelCard({
  title,
  sub,
  tel,
  href,
  link,
}: {
  title: string;
  sub: string;
  tel?: string;
  href?: string;
  link?: string;
}) {
  const target = href ?? (tel ? `tel:${tel}` : "#");
  return (
    <a
      href={target}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className="card-3d group flex items-center justify-between rounded-xl border border-[#E5E8EB] bg-white p-4"
    >
      <div className="min-w-0 flex-1">
        <div className="text-[15px] font-bold text-[#191F28]">{title}</div>
        <div className="text-[12px] text-[#6B7684] mt-0.5">{sub}</div>
        {link && (
          <div className="text-[12px] text-[#3182F6] mt-0.5">{link}</div>
        )}
      </div>
      {tel ? (
        <span className="shrink-0 rounded-xl bg-gradient-to-r from-[#191F28] to-[#374151] px-3.5 py-2 text-xs font-bold text-white shadow-[0_2px_8px_-2px_rgba(25,31,40,0.3)]">
          {tel}
        </span>
      ) : (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F7F8FA] border border-[#E5E8EB] group-hover:bg-[#E5E8EB] transition">
          <ArrowIcon />
        </span>
      )}
    </a>
  );
}
