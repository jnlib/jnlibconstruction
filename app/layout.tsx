import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "종로도서관 시설공사 안내",
  description:
    "서울특별시교육청 종로도서관 시설공사 안내. 후문 자동개폐시스템 구축 및 정원 서재 환경개선 공사. 공사 진행률, 관계자 정보, 청렴 신고 채널을 투명하게 공개합니다.",
  openGraph: {
    title: "종로도서관 시설공사 안내",
    description: "투명하게 공개하는 종로도서관 환경개선 공사 현황",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#eef2ff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-[#191F28]">
        {children}
      </body>
    </html>
  );
}
