import React from 'react';
import Link from 'next/link';
import Section from './components/Section';
import HeroSection from './components/HeroSection';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="flex items-center justify-between p-6 bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Viewx</div>
        <div className="space-x-8 hidden md:flex">
          <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">服務項目</Link>
          <Link href="/portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">作品清單</Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">關於我們</Link>
        </div>
        <Link href="/contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-md font-medium text-sm">開始諮詢</Link>
      </nav>

      <HeroSection
        title="我們是您的影音夥伴"
        subtitle="在 Viewx，我們深思細節。無論是大型活動轉播、專業影音製作，還是細致的活動記錄，我們提供技術支持與專業產出。我們不只是提供完成產品，我們提供完整的解決方案。"
        buttons={[
          { label: '建立專案諮詢', variant: 'primary', href: '/contact' },
          { label: '查看作品清單', variant: 'secondary', href: '/portfolio' }
        ]}
      />

      <main>
        <section className="py-20 px-4 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">專業服務項目</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Viewx 提供全方位、高穩定度的影音解決方案。我們不僅是負責「拍攝」，我們致力於將您的產品價值與活動轉折點，以最專業的技術標準轉化為高品質的視覺內容。
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors duration-300">
                <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">活動轉播</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                針對大型活動、政府辦公、及高穩定度發放需求，提供多路同步傳輸的專業轉播架構。
              </p>
            </div>
            <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors duration-300">
                <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-6 4h1m-4 4h1m-1 4h2m2-4h2m3 4V8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h1m10 0a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">影音製作</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                包含品牌宣傳、專題廣告、到短影音的快速產出。從前期規劃到後期剪接一條龍服務。
              </p>
            </div>
            <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors duration-300">
                <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">活動紀錄</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                針對大型專案、教學課程、或歷史性活動，我們提供高度細致的錄製與整理服務。
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">精選作品</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  從品牌廣告到大型活動轉播，我們的每一次拍攝都追求完美。查看我們的實作經驗，感受每一幀背後的用心。
                </p>
                <Link href="/portfolio" className="inline-block px-8 py-4 rounded-full font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
                  查看更多作品 →
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-square relative group">
                  <Image src="/images/brand-commercial.jpg" alt="品牌宣傳" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md aspect-square relative group mt-8">
                  <Image src="/images/event-broadcast.jpg" alt="大型活動" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 md:p-16 text-center text-white shadow-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">準備好開始了嗎？</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
              無論是什麼規模的專案，我們都期待與您合作。讓我們一起創造精彩的視覺內容。
            </p>
            <Link href="/contact" className="inline-block px-8 py-4 rounded-full font-semibold bg-white text-blue-700 hover:bg-blue-50 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
              立即諮詢
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white/60 py-10 px-4 text-center text-sm">
        <div className="max-w-5xl mx-auto">
          <div className="text-lg font-bold text-white mb-2">Viewx</div>
          <p>專業影音製作・活動轉播・活動紀錄</p>
          <p className="mt-4 text-white/40">© 2026 Viewx. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
