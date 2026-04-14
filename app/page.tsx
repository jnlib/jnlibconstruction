import Image from "next/image";

const SUPERVISOR_TEL = "02-721-0703";
const MAIN_TEL = "02-721-0700";
const ACRC_TEL = "1398";

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-screen-sm">
      {/* 헤더 */}
      <header className="bg-gradient-to-br from-[#0b3a82] to-[#1e6bd6] px-5 pt-8 pb-6 text-white">
        <p className="text-xs font-medium tracking-wider text-blue-100">
          서울특별시교육청 종로도서관
        </p>
        <h1 className="mt-1 text-xl font-bold leading-snug">
          공사현장 청렴 안내
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-blue-50">
          본 공사는 청렴한 절차로 추진되고 있습니다.
          <br />
          부정한 행위를 발견하시면 즉시 신고해주세요.
        </p>
      </header>

      {/* 1. 청렴신고 (최상단 CTA) */}
      <section className="px-5 -mt-3">
        <div className="rounded-2xl border-2 border-red-500 bg-white p-5 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
              !
            </span>
            <h2 className="text-base font-bold text-red-600">
              부패·비리 신고
            </h2>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            공사 관계자의 금품·향응 요구, 부실시공, 안전 위반 등 부정한 행위를
            보거나 들으셨다면 익명으로 신고할 수 있습니다.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-2">
            <a
              href={`tel:${SUPERVISOR_TEL}`}
              className="flex items-center justify-between rounded-xl bg-red-600 px-4 py-3 text-white shadow-sm active:scale-[0.98] transition"
            >
              <span className="text-sm font-semibold">감독관에 바로 전화</span>
              <span className="text-base font-bold">{SUPERVISOR_TEL}</span>
            </a>
            <a
              href={`tel:${ACRC_TEL}`}
              className="flex items-center justify-between rounded-xl bg-slate-800 px-4 py-3 text-white shadow-sm active:scale-[0.98] transition"
            >
              <span className="text-sm font-semibold">
                국민권익위원회 (익명)
              </span>
              <span className="text-base font-bold">☎ {ACRC_TEL}</span>
            </a>
            <a
              href="https://www.acrc.go.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 active:scale-[0.98] transition"
            >
              온라인 신고 (acrc.go.kr) →
            </a>
          </div>
        </div>
      </section>

      {/* 2. 공사현황 BEFORE/AFTER */}
      <section className="px-5 mt-8">
        <SectionTitle eyebrow="공사현황" title="BEFORE / AFTER" />

        {/* 공사 1: 후문 자동문 */}
        <article className="mt-4 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
          <div className="bg-slate-100 px-4 py-3">
            <p className="text-xs font-medium text-blue-700">공사 ①</p>
            <h3 className="mt-0.5 text-base font-bold text-slate-900">
              후문 자동 개폐 시스템
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">
              기존 수동 철문 → 자바라 자동문 교체. 주차 및 출입 편의 증대.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-slate-200">
            <BeforeAfter
              label="BEFORE"
              src="/images/before-gate.jpg"
              alt="공사 전: 녹색 수동 철문"
            />
            <BeforeAfter
              label="AFTER"
              src="/images/after-gate.jpg"
              alt="공사 후: 자바라 자동문 설치 완료"
            />
          </div>
        </article>

        {/* 공사 2: 정원 서재 - 시안 대기 */}
        <article className="mt-4 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
          <div className="bg-slate-100 px-4 py-3">
            <p className="text-xs font-medium text-blue-700">공사 ②</p>
            <h3 className="mt-0.5 text-base font-bold text-slate-900">
              정원 서재 환경 개선
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">
              노후 시설물 정비, 파고라 및 휴게공간 조성, 자동 관수시설 설치.
            </p>
          </div>
          <div className="px-4 py-8 text-center">
            <p className="text-xs text-slate-500">
              시공사 제공 시안 이미지 게시 예정
            </p>
          </div>
        </article>
      </section>

      {/* 3. 공사 정보 */}
      <section className="px-5 mt-8">
        <SectionTitle eyebrow="계약 정보" title="공사 개요" />
        <dl className="mt-4 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
          <InfoRow
            label="계약명"
            value="(환경개선공사) 종로도서관 후문 자동개폐시스템 구축 및 정원 서재 환경개선 공사"
          />
          <InfoRow label="계약금액" value="55,000,000원 (VAT 포함)" />
          <InfoRow label="계약기간" value="2026. 4. 9. ~ 2026. 5. 12." />
          <InfoRow label="계약방법" value="여성기업 수의계약" />
          <InfoRow label="시공사" value="토브이앤씨 주식회사" />
          <InfoRow
            label="발주기관"
            value="서울특별시교육청 종로도서관 행정지원과"
            last
          />
        </dl>
      </section>

      {/* 4. 관계자 실명 공개 */}
      <section className="px-5 mt-8">
        <SectionTitle eyebrow="투명 공개" title="공사 관계자" />
        <div className="mt-4 grid gap-3">
          <PersonCard
            role="발주·감독"
            org="종로도서관 행정지원과"
            tel={SUPERVISOR_TEL}
            email="jnlib@sen.go.kr"
          />
          <PersonCard
            role="시공사"
            org="토브이앤씨 주식회사"
            note="여성기업 수의계약"
          />
        </div>
        <p className="mt-3 text-[11px] leading-relaxed text-slate-500">
          서울시교육청 「공사현장 청렴 가시화 및 청렴서약 체계 구축」 지침에
          따라 공사 관계자 정보를 공개합니다.
        </p>
      </section>

      {/* 5. 신고 채널 */}
      <section className="px-5 mt-8 mb-12">
        <SectionTitle eyebrow="문의·신고" title="채널 안내" />
        <div className="mt-4 space-y-2">
          <ChannelRow
            title="종로도서관 행정지원과"
            sub="공사 관련 민원·문의"
            tel={SUPERVISOR_TEL}
          />
          <ChannelRow
            title="종로도서관 대표번호"
            sub="일반 문의"
            tel={MAIN_TEL}
          />
          <ChannelRow
            title="국민권익위원회"
            sub="익명 부패·공익 신고"
            tel={ACRC_TEL}
            link="https://www.acrc.go.kr"
          />
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-slate-900 px-5 py-6 text-center text-xs text-slate-400">
        <p className="font-semibold text-slate-200">
          서울특별시교육청 종로도서관
        </p>
        <p className="mt-1">서울시 종로구 사직로9길 15-14</p>
        <p className="mt-1">대표 {MAIN_TEL} · jnlib@sen.go.kr</p>
      </footer>
    </main>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
        {eyebrow}
      </p>
      <h2 className="mt-1 text-lg font-bold text-slate-900">{title}</h2>
    </div>
  );
}

function BeforeAfter({
  label,
  src,
  alt,
}: {
  label: "BEFORE" | "AFTER";
  src: string;
  alt: string;
}) {
  const tone =
    label === "BEFORE"
      ? "bg-slate-700 text-white"
      : "bg-blue-600 text-white";
  return (
    <div className="relative aspect-[4/3] bg-slate-100">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 50vw, 300px"
        className="object-cover"
      />
      <span
        className={`absolute left-2 top-2 rounded-md px-2 py-0.5 text-[10px] font-bold tracking-wider shadow ${tone}`}
      >
        {label}
      </span>
    </div>
  );
}

function InfoRow({
  label,
  value,
  last,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-0.5 px-4 py-3 ${
        last ? "" : "border-b border-slate-100"
      }`}
    >
      <dt className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </dt>
      <dd className="text-sm leading-snug text-slate-900">{value}</dd>
    </div>
  );
}

function PersonCard({
  role,
  org,
  tel,
  email,
  note,
}: {
  role: string;
  org: string;
  tel?: string;
  email?: string;
  note?: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-blue-700">
        {role}
      </p>
      <p className="mt-1 text-base font-bold text-slate-900">{org}</p>
      {note && <p className="mt-0.5 text-xs text-slate-500">{note}</p>}
      {(tel || email) && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tel && (
            <a
              href={`tel:${tel}`}
              className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white active:scale-95 transition"
            >
              ☎ {tel}
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 active:scale-95 transition"
            >
              ✉ {email}
            </a>
          )}
        </div>
      )}
    </div>
  );
}

function ChannelRow({
  title,
  sub,
  tel,
  link,
}: {
  title: string;
  sub: string;
  tel: string;
  link?: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="text-[11px] text-slate-500">{sub}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-blue-600 underline"
          >
            {link.replace("https://", "")}
          </a>
        )}
      </div>
      <a
        href={`tel:${tel}`}
        className="ml-3 shrink-0 rounded-lg bg-blue-600 px-3 py-2 text-xs font-bold text-white active:scale-95 transition"
      >
        ☎ {tel}
      </a>
    </div>
  );
}
