import React from 'react';
import Link from 'next/link';
import Section from '../components/Section';
import MediaGrid from '../components/MediaGrid';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="flex items-center justify-between p-6 bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Viewx</div>
        <div className="space-x-8 hidden md:flex">
          <Link href="/services" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">服務項目</Link>
          <Link href="/portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">作品清單</Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">關於我們</Link>
        </div>
        <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">← 回首頁</Link>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">專業服務項目</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Viewx 提供全方位、高穩定度的影音解決方案。我們不僅是負責「拍攝」，我們致力於將您的產品價值與活動轉折點，以最專業的技術標準轉化為高品質的視覺內容。
          </p>
        </div>
        <MediaGrid
          items={[
            {
              title: '活動轉播 (Live Streaming)',
              description: '針對大型活動、政府辦公、及高穩定度發放需求，提供多路同步傳輸的專業轉播架構。無論是 Zoom、YouTube 還是多平台同步發送，我們解決技術瓶頸，確保每一刻的轉折點都能流暢且無縫地傳達給全球觀眾。',
              type: 'service',
              image: '/images/live-streaming.jpg'
            },
            {
              title: '影音製作 (Video Production)',
              description: '包含品牌宣傳、專題廣告、到短影音的快速產出。我們從前期規劃、拍攝指導到後期剪接一條龍服務，確保內容與您想傳達的「核心價值」與「視覺美學」完全吻合。',
              type: 'service',
              image: '/images/video-production.jpg'
            },
            {
              title: '活動紀錄 (Archiving)',
              description: '針對大型專案、教學課程、或歷史性活動，我們提供高度細致的錄製與整理服務。我們確保每一刻的關鍵資訊，都能完美地被保留在高品質的影像紀錄裡。',
              type: 'service',
              image: '/images/event-recording.jpg'
            }
          ]}
        />
      </main>
    </div>
  );
}
