export type SiteContent = {
  hero: {
    org: string;
    title: string;
    description: string;
  };
  cta: {
    label: string;
    title: string;
    highlight: string;
    titleSuffix: string;
    description: string;
  };
  construction01: {
    title: string;
    description: string;
    imagePosition: string;
  };
  construction02: {
    title: string;
    description: string;
    disclaimer: string;
  };
  contract: {
    sectionTitle: string;
    amount: string;
    amountUnit: string;
    amountSub: string;
    period: string;
    periodUnit: string;
    periodSub: string;
    name: string;
    contractor: string;
    method: string;
    issuer: string;
  };
  contact: {
    sectionTitle: string;
    sectionSub: string;
  };
  footer: {
    org: string;
    address: string;
    policy: string;
  };
};

export const defaultContent: SiteContent = {
  hero: {
    org: "서울특별시교육청 종로도서관",
    title: "시설공사 안내",
    description:
      "더 나은 공간을 만들기 위한 변화의 과정을\n투명하게 공개합니다.",
  },
  cta: {
    label: "청렴 신고센터",
    title: "부정 · 비리를",
    highlight: "익명으로 신고",
    titleSuffix: "하세요",
    description:
      "금품 · 향응 요구, 부실시공, 안전 위반 등\n어떤 제보도 비밀이 보장됩니다.",
  },
  construction01: {
    title: "후문 자동 개폐 시스템",
    description:
      "기존 수동 철문을 자바라 자동문으로 교체합니다.\n주차와 출입 편의가 크게 향상됩니다.",
    imagePosition: "center 60%",
  },
  construction02: {
    title: "정원 서재 환경 개선",
    description:
      "노후 시설물 정비, 파고라 및 휴게공간 조성,\n자동 관수시설을 설치합니다.",
    disclaimer:
      "※ 시공사 제공 참고 시안. 실제 시공 결과와 차이가 있을 수 있습니다.",
  },
  contract: {
    sectionTitle: "공사 계약 현황",
    amount: "55,000,000",
    amountUnit: "원",
    amountSub: "VAT 포함",
    period: "34",
    periodUnit: "일",
    periodSub: "4/9 → 5/12",
    name: "(환경개선공사) 종로도서관 후문 자동개폐시스템 구축 및 정원 서재 환경개선 공사",
    contractor: "토브이앤씨㈜",
    method: "여성기업 수의계약",
    issuer: "종로도서관 행정지원과",
  },
  contact: {
    sectionTitle: "연락처 · 신고 채널",
    sectionSub: "언제든 연락주세요. 24시간 접수합니다.",
  },
  footer: {
    org: "서울특별시교육청 종로도서관",
    address: "서울시 종로구 사직로9길 15-14",
    policy: "서울시교육청 청렴 가시화 지침에 따라 공개",
  },
};
