import React from 'react';
import Link from 'next/link';
import Section from '../components/Section';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="flex items-center justify-between p-6 bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Viewx</div>
        <div className="space-x-8 hidden md:flex">
          <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">服務項目</Link>
          <Link href="/portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">作品清單</Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">關於我們</Link>
        </div>
        <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">← 回首頁</Link>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">聯絡 Viewx</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            準備好開啟您的下一個專案了嗎？無論是簡單的短影音或複雜的大型轉播，我們都準備好與您合作。
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">電子郵件</h3>
              <p className="text-blue-600 font-medium">hello@viewx.com</p>
              <p className="text-gray-500 text-sm mt-1">24 小時內回覆</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Instagram</h3>
              <p className="text-blue-600 font-medium">@viewx_official</p>
              <p className="text-gray-500 text-sm mt-1">歡迎追蹤我們的日常</p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-600 mb-6">留下您的基本需求，我們將在 24 小時內與您聯繫。</p>
            <Link href="mailto:hello@viewx.com" className="inline-block px-8 py-4 rounded-full font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
              直接发送邮件
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
