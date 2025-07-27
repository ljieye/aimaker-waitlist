import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AI Maker - 下一代 AI 创作平台",
  description: "加入 AI Maker 等待列表，成为第一批体验革命性 AI 创作工具的用户。",
  keywords: ["AI", "创作", "等待列表", "人工智能", "内容生成"],
  authors: [{ name: "AI Maker Team" }],
  openGraph: {
    title: "AI Maker - 下一代 AI 创作平台",
    description: "加入 AI Maker 等待列表，成为第一批体验革命性 AI 创作工具的用户。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
