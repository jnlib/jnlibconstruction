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
    <>
      <main className="relative mx-auto w-full max-w-screen-sm overflow-hidden bg-white pb-28">
        {/* ═══════════════ HERO ═══════════════ */}
        <section className="relative overflow-hidden bg-[#0a0e1a] px-6 pt-16 pb-24 text-white noise">
          <div
            aria-hidden
            className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-[#3182f6]/40 blur-[100px] animate-aurora"
          />
          <div
            aria-hidden
            className="absolute top-10 -right-24 h-72 w-72 rounded-full bg-[#7c3aed]/35 blur-[100px] animate-aurora"
            style={{ animationDelay: "-5s" }}
          />
          <div
            aria-hidden
            className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#06b6d4]/30 blur-[100px] animate-aurora"
            style={{ animationDelay: "-9s" }}
          />

          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              maskImage:
                "radial-gradient(ellipse at center top, black 30%, transparent 70%)",
            }}
          />

          <div className="relative animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur-md">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[11px] font-bold tracking-wide text-white/90">
                {c.hero.org}
              </span>
            </div>

            <h1 className="mt-6 text-[44px] font-black leading-[1.05] tracking-[-0.035em]">
              종로도서관
              <br />
              <span className="bg-gradient-to-r from-[#7dd3fc] via-[#a5b4fc] to-[#f0abfc] bg-clip-text text-transparent">
                {c.hero.title}
              </span>
            </h1>

            <p className="mt-5 max-w-[24rem] text-[15px] leading-relaxed text-white/70">
              {nl2br(c.hero.description)}
            </p>

            <div className="mt-7 flex items-center gap-2.5 text-[11px]">
              <MetaTag>🏗️ 환경개선공사</MetaTag>
              <MetaTag>🤝 청렴서약</MetaTag>
              <MetaTag>📢 정보공개</MetaTag>
            </div>
          </div>
        </section>

        {/* ═══════════════ LIVE COUNTDOWN ═══════════════ */}
        <section className="relative -mt-16 px-5 z-10">
          <Countdown />
        </section>

        {/* ═══════════════ BENTO STATS ═══════════════ */}
        <section className="px-5 mt-6">
          <div className="grid grid-cols-6 gap-2.5">
            <BentoTile className="col-span-6 bg-gradient-to-br from-[#3182f6] to-[#1b64da] text-white p-5 overflow-hidden relative">
              <div
                aria-hidden
                className="absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-white/10 blur-2xl"
              />
              <div className="relative">
                <p className="text-[11px] font-bold tracking-wider text-white/70">
                  CONTRACT AMOUNT · 계약금액
                </p>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-[44px] font-black leading-none tracking-tight tnum">
                    {c.contract.amount}
                  </span>
                  <span className="text-xl font-black">
                    {c.contract.amountUnit}
                  </span>
                </div>
                <p className="mt-1 text-[11px] font-semibold text-white/70">
                  {c.contract.amountSub} · {c.contract.method}
                </p>
              </div>
            </BentoTile>

            <BentoTile className="col-span-3 bg-[#f2f4f6] p-4">
              <p className="text-[10px] font-bold tracking-wider text-[#8b95a1]">
                기간
              </p>
              <p className="mt-2 text-2xl font-black tnum text-[#191f28]">
                {c.contract.period}
                <span className="text-sm">{c.contract.periodUnit}</span>
              </p>
              <p className="mt-1 text-[10px] font-semibold text-[#8b95a1]">
                {c.contract.periodSub}
              </p>
            </BentoTile>

            <BentoTile className="col-span-3 bg-[#f2f4f6] p-4">
              <p className="text-[10px] font-bold tracking-wider text-[#8b95a1]">
                시공사
              </p>
              <p className="mt-2 text-base font-black leading-tight text-[#191f28]">
                {c.contract.contractor}
              </p>
              <p className="mt-1 text-[10px] font-semibold text-[#8b95a1]">
                여성기업
              </p>
            </BentoTile>
          </div>
        </section>

        {/* ═══════════════ 청렴신고 (메인 CTA) ═══════════════ */}
        <section id="report" className="px-5 mt-12">
          <SectionLabel color="#f04452">REPORT · {c.cta.label}</SectionLabel>
          <h2 className="mt-2 text-[28px] font-black leading-[1.15] tracking-tight text-[#191f28]">
            {c.cta.title}
            <br />
            <span className="text-[#f04452]">{c.cta.highlight}</span>
            {c.cta.titleSuffix}
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-[#4e5968]">
            {nl2br(c.cta.description)}
          </p>

          <div className="mt-5 space-y-2.5">
            <a
              href={NAVER_FORM_INTEGRITY}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 overflow-hidden rounded-3xl bg-[#191f28] p-5 text-white shadow-[0_24px_50px_-20px_rgba(25,31,40,0.5)] active:scale-[0.98] transition"
            >
              <div
                aria-hidden
                className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#f04452]/20 blur-2xl"
              />
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur">
                <ShieldIcon />
              </div>
              <div className="relative min-w-0 flex-1">
                <div className="text-[10px] font-bold tracking-wider text-white/50">
                  PRIORITY · 청렴신고
                </div>
                <div className="mt-0.5 text-[17px] font-black leading-tight">
                  부패·비리 신고하기
                </div>
                <div className="text-[11px] font-semibold text-white/60">
                  네이버폼 · 익명 보장
                </div>
              </div>
              <ArrowCircle className="bg-white text-[#191f28]" />
            </a>

            <a
              href={NAVER_FORM_COMPLAINT}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-3xl bg-white p-5 ring-1 ring-[#e5e8eb] active:scale-[0.98] transition hover:ring-[#3182f6]"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#e8f3ff]">
                <ConeIcon />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-bold tracking-wider text-[#3182f6]">
                  공사 민원
                </div>
                <div className="mt-0.5 text-[17px] font-black leading-tight text-[#191f28]">
                  공사 불편사항 신고
                </div>
                <div className="text-[11px] font-semibold text-[#8b95a1]">
                  소음·먼지·통행 등
                </div>
              </div>
              <ArrowCircle className="bg-[#191f28] text-white" />
            </a>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2.5">
            <QuickTel
              icon="📞"
              label="감독관"
              tel={SUPERVISOR_TEL}
              tone="blue"
            />
            <QuickTel icon="🚨" label="권익위" tel={ACRC_TEL} tone="rose" />
          </div>
        </section>

        {/* ═══════════════ 공사 01: 후문 ═══════════════ */}
        <section className="px-5 mt-16">
          <BigNumber n="01" color="#3182f6" />
          <SectionLabel color="#3182f6">CONSTRUCTION 01</SectionLabel>
          <h2 className="mt-2 text-[28px] font-black leading-[1.15] tracking-tight text-[#191f28]">
            {c.construction01.title}
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-[#4e5968]">
            {nl2br(c.construction01.description)}
          </p>

          <div className="mt-5">
            <BeforeAfterSlider
              beforeSrc="/images/before-gate.jpg"
              afterSrc="/images/after-gate.jpg"
              alt="후문"
            />
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            <FeatureChip icon="🚗">주차 편의</FeatureChip>
            <FeatureChip icon="🔐">자동 보안</FeatureChip>
            <FeatureChip icon="♿">접근성</FeatureChip>
          </div>
        </section>

        {/* ═══════════════ 공사 02: 정원 ═══════════════ */}
        <section className="px-5 mt-16">
          <BigNumber n="02" color="#1bbf83" />
          <SectionLabel color="#1bbf83">CONSTRUCTION 02</SectionLabel>
          <h2 className="mt-2 text-[28px] font-black leading-[1.15] tracking-tight text-[#191f28]">
            {c.construction02.title}
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-[#4e5968]">
            {nl2br(c.construction02.description)}
          </p>

          <div className="mt-5 grid grid-cols-6 gap-2.5">
            <GardenTile n={1} className="col-span-4 aspect-[4/3]" priority />
            <GardenTile n={2} className="col-span-2 aspect-square" />
            <GardenTile n={3} className="col-span-2 aspect-square" />
            <GardenTile n={4} className="col-span-4 aspect-[4/3]" />
          </div>
          <p className="mt-3 text-[11px] font-medium text-[#8b95a1]">
            {c.construction02.disclaimer}
          </p>

          <div className="mt-4 grid grid-cols-3 gap-2">
            <FeatureChip icon="🌳">파고라</FeatureChip>
            <FeatureChip icon="💧">자동 관수</FeatureChip>
            <FeatureChip icon="🪑">휴게공간</FeatureChip>
          </div>
        </section>

        {/* ═══════════════ 계약명 디테일 ═══════════════ */}
        <section className="px-5 mt-16">
          <SectionLabel color="#3182f6">CONTRACT DETAIL</SectionLabel>
          <h2 className="mt-2 text-[28px] font-black leading-[1.15] tracking-tight text-[#191f28]">
            {c.contract.sectionTitle}
          </h2>

          <div className="mt-5 overflow-hidden rounded-[24px] bg-gradient-to-br from-[#f8fafc] to-[#f2f4f6] p-6 ring-1 ring-[#e5e8eb]">
            <p className="text-[10px] font-bold tracking-wider text-[#8b95a1]">
              계약명
            </p>
            <p className="mt-2 text-[15px] font-black leading-relaxed text-[#191f28]">
              {c.contract.name}
            </p>

            <div className="my-5 h-px bg-gradient-to-r from-transparent via-[#e5e8eb] to-transparent" />

            <dl className="grid grid-cols-2 gap-y-4 gap-x-3">
              <DetailField
                label="계약금액"
                value={`${c.contract.amount}${c.contract.amountUnit}`}
              />
              <DetailField label="VAT" value={c.contract.amountSub} />
              <DetailField label="계약기간" value="2026.04.09 ~ 05.12" full />
              <DetailField label="시공사" value={c.contract.contractor} />
              <DetailField label="계약방법" value={c.contract.method} />
              <DetailField label="발주기관" value={c.contract.issuer} full />
              <DetailField label="감독" value={SUPERVISOR_TEL} />
              <DetailField label="이메일" value="jnlib@sen.go.kr" />
            </dl>
          </div>
        </section>

        {/* ═══════════════ 신고·문의 채널 ═══════════════ */}
        <section className="px-5 mt-16">
          <SectionLabel color="#191f28">CONTACT</SectionLabel>
          <h2 className="mt-2 text-[28px] font-black leading-[1.15] tracking-tight text-[#191f28]">
            {c.contact.sectionTitle}
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-[#4e5968]">
            {c.contact.sectionSub}
          </p>

          <div className="mt-5 space-y-2.5">
            <ChannelCard
              icon="🏛️"
              title="종로도서관 행정지원과"
              sub="공사 관련 문의·민원"
              tel={SUPERVISOR_TEL}
              accent="#3182f6"
            />
            <ChannelCard
              icon="📞"
              title="종로도서관 대표"
              sub="일반 문의"
              tel={MAIN_TEL}
              accent="#4e5968"
            />
            <ChannelCard
              icon="🚨"
              title="국민권익위원회"
              sub="익명 부패·공익 신고"
              tel={ACRC_TEL}
              link="https://www.acrc.go.kr"
              accent="#f04452"
            />
            <ChannelCard
              icon="🛡️"
              title="청렴신고 폼"
              sub="익명 부패·비리 온라인 제보"
              href={NAVER_FORM_INTEGRITY}
              accent="#191f28"
            />
            <ChannelCard
              icon="🚧"
              title="공사 불편사항 신고"
              sub="소음·먼지·통행 등"
              href={NAVER_FORM_COMPLAINT}
              accent="#3182f6"
            />
          </div>
        </section>

        {/* ═══════════════ 트러스트 배너 ═══════════════ */}
        <section className="px-5 mt-16">
          <div className="relative overflow-hidden rounded-[28px] bg-[#0a0e1a] p-6 text-white noise">
            <div
              aria-hidden
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#3182f6]/30 blur-3xl"
            />
            <div className="relative">
              <div className="text-3xl">🤝</div>
              <h3 className="mt-3 text-xl font-black leading-tight">
                왜 이렇게 공개하나요?
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-white/70">
                {c.footer.policy}에 따라, 공사 정보·관계자·진행 현황을 시민이
                직접 확인할 수 있도록 전면 공개합니다.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════ FOOTER ═══════════════ */}
        <footer className="mt-12 px-6 py-10 text-center">
          <div className="text-base font-black text-[#191f28]">
            {c.footer.org}
          </div>
          <div className="mt-2 text-[12px] leading-relaxed text-[#8b95a1]">
            {c.footer.address}
            <br />
            대표 {MAIN_TEL} · jnlib@sen.go.kr
          </div>
          <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-[#f2f4f6] px-3 py-1.5 text-[10px] font-bold text-[#4e5968]">
            <span>🔒</span> {c.footer.policy}
          </div>
        </footer>
      </main>

      {/* ═══════════════ 스티키 하단 CTA ═══════════════ */}
      <div className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-screen-sm safe-bottom">
        <div className="mx-3 mb-3 flex gap-2 rounded-2xl border border-[#e5e8eb] bg-white/90 p-1.5 shadow-[0_20px_50px_-15px_rgba(25,31,40,0.25)] backdrop-blur-xl">
          <a
            href={NAVER_FORM_INTEGRITY}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#191f28] py-3 text-[13px] font-black text-white active:scale-[0.97] transition"
          >
            🛡️ 청렴신고
          </a>
          <a
            href={NAVER_FORM_COMPLAINT}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#3182f6] py-3 text-[13px] font-black text-white active:scale-[0.97] transition"
          >
            🚧 불편신고
          </a>
        </div>
      </div>
    </>
  );
}

/* ════════════════════════════════════════════
   서브 컴포넌트
═══════════════════════════════════════════════ */

function MetaTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-bold text-white/85 backdrop-blur-sm">
      {children}
    </span>
  );
}

function SectionLabel({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="h-1 w-6 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span
        className="text-[11px] font-black tracking-[0.15em]"
        style={{ color }}
      >
        {children}
      </span>
    </div>
  );
}

function BigNumber({ n, color }: { n: string; color: string }) {
  return (
    <div
      className="pointer-events-none mb-1 text-[110px] font-black leading-none tracking-tighter opacity-[0.06]"
      style={{ color }}
      aria-hidden
    >
      {n}
    </div>
  );
}

function BentoTile({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-[20px] ring-1 ring-[#e5e8eb] ${className}`}>
      {children}
    </div>
  );
}

function FeatureChip({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center gap-1.5 rounded-2xl bg-[#f2f4f6] px-2 py-2.5 text-[12px] font-bold text-[#4e5968]">
      <span className="text-base">{icon}</span>
      <span>{children}</span>
    </div>
  );
}

function GardenTile({
  n,
  className,
  priority,
}: {
  n: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-[#f2f4f6] ring-1 ring-[#e5e8eb] ${className}`}
    >
      <Image
        src={`/images/garden-${n}.jpg`}
        alt={`정원 시안 ${n}`}
        fill
        sizes="(max-width: 640px) 80vw, 400px"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        priority={priority}
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-2.5">
        <span className="text-[10px] font-black tracking-wider text-white">
          시안 0{n}
        </span>
      </div>
    </div>
  );
}

function DetailField({
  label,
  value,
  full,
}: {
  label: string;
  value: string;
  full?: boolean;
}) {
  return (
    <div className={full ? "col-span-2" : ""}>
      <dt className="text-[10px] font-bold tracking-wider text-[#8b95a1]">
        {label}
      </dt>
      <dd className="mt-1 text-[13px] font-black text-[#191f28]">{value}</dd>
    </div>
  );
}

function QuickTel({
  icon,
  label,
  tel,
  tone,
}: {
  icon: string;
  label: string;
  tel: string;
  tone: "blue" | "rose";
}) {
  const bg = tone === "blue" ? "bg-[#e8f3ff]" : "bg-[#ffeaec]";
  return (
    <a
      href={`tel:${tel}`}
      className="flex items-center gap-2.5 rounded-2xl bg-white p-3 ring-1 ring-[#e5e8eb] active:scale-[0.97] transition"
    >
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-xl ${bg} text-lg`}
      >
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-[10px] font-bold text-[#8b95a1]">{label}</div>
        <div className="truncate text-[13px] font-black text-[#191f28] tnum">
          {tel}
        </div>
      </div>
    </a>
  );
}

function ChannelCard({
  icon,
  title,
  sub,
  tel,
  href,
  link,
  accent,
}: {
  icon: string;
  title: string;
  sub: string;
  tel?: string;
  href?: string;
  link?: string;
  accent: string;
}) {
  const target = href ?? (tel ? `tel:${tel}` : "#");
  return (
    <a
      href={target}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-3 rounded-3xl bg-white p-4 ring-1 ring-[#e5e8eb] transition active:scale-[0.98] hover:ring-[#cbd2d9]"
    >
      <span
        className="flex shrink-0 items-center justify-center rounded-2xl text-2xl"
        style={{
          backgroundColor: `${accent}12`,
          width: 52,
          height: 52,
        }}
      >
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-[14px] font-black text-[#191f28]">{title}</div>
        <div className="text-[11px] font-semibold text-[#8b95a1]">{sub}</div>
        {link && (
          <div className="text-[11px] font-bold text-[#3182f6]">
            {link.replace("https://", "")}
          </div>
        )}
      </div>
      {tel ? (
        <span
          className="shrink-0 rounded-xl px-3 py-2 text-[11px] font-black text-white tnum"
          style={{ backgroundColor: accent }}
        >
          ☎ {tel}
        </span>
      ) : (
        <ArrowCircle
          className="text-white"
          style={{ backgroundColor: accent }}
        />
      )}
    </a>
  );
}

function ArrowCircle({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition group-active:translate-x-0.5 ${className}`}
      style={style}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </span>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ConeIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#3182f6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 18h20" />
      <path d="m4.5 18 6-15h3l6 15" />
      <path d="M6.5 14h11" />
      <path d="M8 10h8" />
    </svg>
  );
}
