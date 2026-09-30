import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "강아름 (Areum Kang) | Backend Engineer",
  description: "데이터 흐름을 추적해 정합성을 지키고 시스템의 안정성을 높이는 사람",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
