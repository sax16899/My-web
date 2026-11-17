import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Section from '../components/Section';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="flex items-center justify-between p-6 bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Viewx</div>
        <div className="space-x-8 hidden md:flex">
          <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">服務項目</Link>
          <Link href="/portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">作品清單</Link>
          <Link href="/about" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">關於我們</Link>
        </div>
        <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">← 回首頁</Link>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] relative">
            <Image
              src="/images/about-crew.jpg"
              alt="Viewx 團隊"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">誰是 Viewx？</h1>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              你好，我們是 Viewx。我們不是一個冷冰冰的廣告商，我們是你的影音夥伴。
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              我們深深紮根於「細節」和「實際」。無論是一個簡單的短影音，還是複雜的跨時區大型活動轉播，我們認為每一個鏡頭背後都隱藏著一個故事。我們的使命是捕捉這些故事，並用專業的技術將其轉譯成最動人的視覺語言。
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
          <div className="grid grid-cols-3 gap-8 text-center mb-8">
            <div>
              <div className="text-3xl font-extrabold text-blue-600 mb-2">4K+</div>
              <div className="text-gray-500 text-sm">高畫質產出</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-blue-600 mb-2">100+</div>
              <div className="text-gray-500 text-sm">完成案件</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-blue-600 mb-2">5+</div>
              <div className="text-gray-500 text-sm">年專業經驗</div>
            </div>
          </div>
          <p className="text-lg leading-relaxed text-center text-gray-700">
            無論你是需要技術支持的專業人士，還是正在籌劃夢想中的活動創辦人，Viewx 提供的都是最直覺、最可靠的協作體驗。我們不只是給你看漂亮的影片，我們提供的是你能用在實務上的解決方案。
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Link href="/contact" className="px-8 py-4 rounded-full font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 inline-block">建立專案諮詢</Link>
          <Link href="/" className="px-8 py-4 rounded-full font-medium bg-gray-100 text-gray-900 hover:bg-gray-200 transition-all duration-300 shadow-sm active:scale-95 inline-block">回首頁</Link>
        </div>
      </main>
    </div>
  );
}
