import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection({ title, subtitle, buttons }: { title: string; subtitle: string; buttons: { label: string; variant: 'primary' | 'secondary'; href: string }[] }) {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
          專業影音製作・活動轉播・活動紀錄
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 text-white drop-shadow-lg">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {buttons.map((btn, idx) => (
            <Link
              key={idx}
              href={btn.href}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg inline-block ${btn.variant === 'secondary' ? 'bg-white/90 text-gray-900 hover:bg-white hover:shadow-xl' : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl'}`}
            >
              {btn.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
