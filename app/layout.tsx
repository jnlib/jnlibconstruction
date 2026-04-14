import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "종로도서관 공사현장 청렴 안내 | 환경개선공사",
  description:
    "서울특별시교육청 종로도서관 후문 자동개폐시스템 구축 및 정원 서재 환경개선 공사 현장 안내. 부패·비리 신고 및 공사 정보 공개.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b3a82",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
