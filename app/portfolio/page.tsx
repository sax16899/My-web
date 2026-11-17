import React from 'react';
import Link from 'next/link';
import Section from '../components/Section';
import MediaGrid from '../components/MediaGrid';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="flex items-center justify-between p-6 bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Viewx</div>
        <div className="space-x-8 hidden md:flex">
          <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">服務項目</Link>
          <Link href="/portfolio" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">作品清單</Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">關於我們</Link>
        </div>
        <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">← 回首頁</Link>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">專案實錄與技術驗證</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Viewx 的實作經驗建立在對影像、轉播技術以及高密度內容生產的深刻理解。
            我們從品牌廣告、大型活動轉播到複雜的技術實測，提供多維度的解決方案。
          </p>
        </div>
        <MediaGrid
          items={[
            {
              title: '品牌宣傳與廣告 (Branding & Commercials)',
              description: '針對品牌價值的精確轉化，我們提供從初期廣告宣傳、MV 拍攝到短影音精華切片的完整產出。包含品牌宣傳片、廣告與 MV、以及快速、精純的短影音產出。',
              type: 'portfolio',
              image: '/images/brand-commercial.jpg'
            },
            {
              title: '大型活動與轉播 (Events & Streaming)',
              description: '面對大型轉播與穩定性挑戰，我們提供基於高頻發放技術的架構，確保每一刻的轉折點都能完美地傳達給觀眾。包含多路同步轉播、大型活動錄影、以及專業轉播架構支持。',
              type: 'event',
              image: '/images/event-broadcast.jpg'
            },
            {
              title: '技術實測與開發 (Technical & Development)',
              description: '針對無法處理的技術障礙，我們提供高難度的技術實測與檢索。我們不只是執行指令，我們提供解決方案。包含技術實測、設計、以及自動化流程的建立。',
              type: 'portfolio',
              image: '/images/tech-demo.jpg'
            }
          ]}
        />
        <div className="mt-20 pt-12 border-t border-gray-200 bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-8 text-center">重點案例深入分析</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-600">品牌宣傳與廣告</h3>
              <p className="text-gray-600 leading-relaxed">
                針對品牌價值的精確轉化，我們提供從初期廣告宣傳、MV 拍攝到短影音精華切片的完整產出。我們不僅是記錄，而是透過高度設計感，將品牌核心意識轉化為具備視覺美學的畫面。
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-600">大型活動與轉播</h3>
              <p className="text-gray-600 leading-relaxed">
                面對大型轉播與穩定性挑戰，我們提供基於高頻發放技術的架構，確保每一刻的轉折點都能完美地傳達給觀眾。我們解決技術瓶頸，讓內容流暢與無縫地觸達大眾。
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
