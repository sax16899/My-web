import React from 'react';
import Image from 'next/image';

type MediaItem = {
  title: string;
  description: string;
  type: string;
  image?: string;
};

const imageMap: Record<string, string> = {
  'service': '/images/service-live-stream.jpg',
  'portfolio': '/images/portfolio-brand.jpg',
  'event': '/images/portfolio-event.jpg',
};

export default function MediaGrid({ items }: { items: MediaItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
      {items.map((item: MediaItem, index: number) => {
        const imgSrc = item.image || imageMap[item.type] || null;
        return (
          <div key={index} className="group border rounded-2xl hover:shadow-xl transition-all duration-500 bg-white overflow-hidden">
            {imgSrc ? (
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={imgSrc}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            ) : (
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-gray-100 rounded-t-2xl flex items-center justify-center">
                <svg className="w-16 h-16 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
