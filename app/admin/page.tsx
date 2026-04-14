"use client";

import { useEffect, useState } from "react";
import { defaultContent, type SiteContent } from "../lib/content";

type Section = keyof SiteContent;

const SECTION_LABELS: Record<Section, string> = {
  hero: "히어로 (상단)",
  cta: "청렴신고 CTA",
  construction01: "공사 01 — 후문 자동문",
  construction02: "공사 02 — 정원 서재",
  contract: "계약 정보",
  contact: "연락처 섹션",
  footer: "푸터",
};

const FIELD_LABELS: Record<string, string> = {
  org: "기관명",
  title: "제목",
  description: "설명",
  label: "라벨",
  highlight: "강조 텍스트",
  titleSuffix: "제목 뒷부분",
  sectionTitle: "섹션 제목",
  sectionSub: "섹션 설명",
  amount: "금액",
  amountUnit: "금액 단위",
  amountSub: "금액 보조",
  period: "기간 수치",
  periodUnit: "기간 단위",
  periodSub: "기간 보조",
  name: "계약명",
  contractor: "시공사",
  method: "계약방법",
  issuer: "발주처",
  disclaimer: "면책 문구",
  imagePosition: "이미지 위치 (예: center 40%)",
  address: "주소",
  policy: "정책 안내",
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem("admin-pw");
    if (saved) {
      setPassword(saved);
      setAuthed(true);
    }
  }, []);

  useEffect(() => {
    if (!authed) return;
    setLoading(true);
    fetch("/api/content")
      .then((r) => r.json())
      .then((data) => setContent(data))
      .catch(() => setContent(defaultContent))
      .finally(() => setLoading(false));
  }, [authed]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    sessionStorage.setItem("admin-pw", password);
    setAuthed(true);
  }

  function updateField(section: Section, field: string, value: string) {
    setContent((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  }

  async function handleSave() {
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/content", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": password,
        },
        body: JSON.stringify(content),
      });
      if (!res.ok) {
        const data = await res.json();
        setMessage(data.error === "Unauthorized" ? "비밀번호가 틀렸습니다." : "저장 실패");
        return;
      }
      setMessage("저장 완료!");
      setTimeout(() => setMessage(""), 3000);
    } catch {
      setMessage("저장 중 오류가 발생했습니다.");
    } finally {
      setSaving(false);
    }
  }

  function handleReset() {
    if (confirm("모든 문구를 기본값으로 되돌리시겠습니까?")) {
      setContent(defaultContent);
    }
  }

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7F8FA] px-5">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm rounded-2xl bg-white border border-[#E5E8EB] p-8"
        >
          <h1 className="text-xl font-extrabold text-[#191F28]">관리자 로그인</h1>
          <p className="mt-1 text-[13px] text-[#6B7684]">
            문구 수정을 위해 비밀번호를 입력하세요.
          </p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            className="mt-4 w-full rounded-xl border border-[#E5E8EB] bg-[#F7F8FA] px-4 py-3 text-[14px] text-[#191F28] outline-none focus:border-[#3182F6] focus:ring-1 focus:ring-[#3182F6] transition"
            autoFocus
          />
          <button
            type="submit"
            className="mt-3 w-full rounded-xl bg-[#191F28] py-3 text-[14px] font-bold text-white active:scale-[0.98] transition"
          >
            로그인
          </button>
        </form>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7F8FA]">
        <p className="text-[#6B7684]">불러오는 중...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E5E8EB]">
        <div className="mx-auto max-w-2xl flex items-center justify-between px-5 py-3">
          <div>
            <h1 className="text-[15px] font-extrabold text-[#191F28]">문구 관리</h1>
            <p className="text-[11px] text-[#ADB3BA]">종로도서관 시설공사 안내</p>
          </div>
          <div className="flex items-center gap-2">
            {message && (
              <span
                className={`text-[12px] font-semibold ${
                  message.includes("완료") ? "text-emerald-500" : "text-[#F04452]"
                }`}
              >
                {message}
              </span>
            )}
            <button
              onClick={handleReset}
              className="rounded-lg border border-[#E5E8EB] px-3 py-1.5 text-[12px] font-semibold text-[#6B7684] active:scale-95 transition"
            >
              초기화
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="rounded-lg bg-[#3182F6] px-4 py-1.5 text-[12px] font-bold text-white active:scale-95 transition disabled:opacity-50"
            >
              {saving ? "저장 중..." : "저장"}
            </button>
          </div>
        </div>
      </header>

      {/* 편집 영역 */}
      <div className="mx-auto max-w-2xl px-5 py-6 space-y-5">
        {(Object.keys(SECTION_LABELS) as Section[]).map((section) => (
          <div
            key={section}
            className="rounded-xl bg-white border border-[#E5E8EB] overflow-hidden"
          >
            <div className="px-5 py-3 border-b border-[#E5E8EB] bg-[#F7F8FA]">
              <h2 className="text-[13px] font-bold text-[#191F28]">
                {SECTION_LABELS[section]}
              </h2>
            </div>
            <div className="p-5 space-y-4">
              {Object.entries(content[section]).map(([field, value]) => (
                <div key={field}>
                  <label className="block text-[11px] font-semibold text-[#ADB3BA] tracking-wide mb-1.5">
                    {FIELD_LABELS[field] || field}
                  </label>
                  {String(value).includes("\n") || String(value).length > 40 ? (
                    <textarea
                      value={String(value)}
                      onChange={(e) =>
                        updateField(section, field, e.target.value)
                      }
                      rows={3}
                      className="w-full rounded-lg border border-[#E5E8EB] bg-[#F7F8FA] px-3 py-2.5 text-[13px] text-[#191F28] outline-none focus:border-[#3182F6] focus:ring-1 focus:ring-[#3182F6] transition resize-none"
                    />
                  ) : (
                    <input
                      type="text"
                      value={String(value)}
                      onChange={(e) =>
                        updateField(section, field, e.target.value)
                      }
                      className="w-full rounded-lg border border-[#E5E8EB] bg-[#F7F8FA] px-3 py-2.5 text-[13px] text-[#191F28] outline-none focus:border-[#3182F6] focus:ring-1 focus:ring-[#3182F6] transition"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className="text-center text-[11px] text-[#ADB3BA] pb-6">
          변경사항은 저장 후 약 1분 이내에 반영됩니다.
        </p>
      </div>
    </div>
  );
}
