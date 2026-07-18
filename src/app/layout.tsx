import type { Metadata } from 'next';
import './globals.css';
import 'katex/dist/katex.min.css';

export const metadata: Metadata = {
  title: '初中数学超纲方法课程 | 小灰教育',
  description:
    '谢立威老师11年一线教学经验，20次课系统掌握超纲方法，降维打击中考压轴题。沪教版（五四制），面向上海中考/一模二模/四校八大自招。',
  keywords: [
    '初中数学',
    '超纲方法',
    '中考压轴题',
    '上海中考',
    '四校八大',
    '自招',
    '小灰教育',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
