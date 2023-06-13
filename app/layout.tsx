import "./globals.css";
import { Roboto, Noto_Sans_KR } from "next/font/google";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const notoSansKr = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-notoSansKr",
});

export const metadata = {
  title: "Chan Studio",
  description: "Chan Studio 사이트에 오신것을 환영합니다",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${roboto.variable} ${notoSansKr.variable}`}>
        {children}
      </body>
    </html>
  );
}
