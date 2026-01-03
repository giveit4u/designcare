import type { Metadata } from "next";
import "./globals.css";
import "./styles/normalize.css";
import "./styles/webflow.css";
import "./styles/design-care.webflow.css";

export const metadata: Metadata = {
  title: "디자인케어 | 채용보다 효율적인 구독형 디자인 서비스",
  description: "구인공고, 면접 없이 월 구독형으로 전담 디자인팀을 이용하세요. 무제한 디자인 요청으로 비용 절감과 브랜드 경쟁력을 동시에 높여드립니다.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" data-wf-page="67af545a6f6103ad56b52242" data-wf-site="67af545a6f6103ad56b521d0">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
