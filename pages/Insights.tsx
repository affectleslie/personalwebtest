
import React, { useState } from 'react';
import { Insight } from '../types';

const MOCK_INSIGHTS: Insight[] = [
  {
    id: '1',
    type: 'image',
    title: '城市边缘的寂静',
    description: '在冬日的黄昏，捕捉到了这一抹略显落寞却又温柔的紫色。天空在这一刻变得异常宽广。',
    detailedContent: '这张照片拍摄于城郊的一处废弃工厂旁。当时光线正好穿透云层，形成了一种近乎超现实的色彩。这种大面积的留白让我感受到一种难得的安宁，仿佛整个世界都静止了。',
    date: '2024-12-01',
    imageUrl: 'https://picsum.photos/seed/insight1/1200/900'
  },
  {
    id: '2',
    type: 'quote',
    title: '海德格尔《存在与时间》',
    description: '“此在在世界之中就是在寓于世界中的那种状态下被照亮的。”',
    detailedContent: '海德格尔在这里探讨了“此在”与其存在环境的本质联系。我们不是独立于世界之外的观察者，而是始终被抛入其中的参与者。',
    date: '2024-11-15'
  },
  {
    id: '3',
    type: 'link',
    title: '深度阅读：未来的数字媒介',
    description: '一篇关于AR技术如何改变人类空间感知的研究。',
    date: '2024-10-22',
    url: 'https://example.com'
  },
  {
    id: '4',
    type: 'image',
    title: '抽象的秩序',
    description: '建筑的线条在光影下形成了天然的几何。这种秩序感令人着迷。',
    detailedContent: '观察建筑的阴影是一种很有趣的消遣。随着太阳的移动，几何图形在墙面上不断重组。这是大自然与人造结构之间的无声对话。',
    date: '2024-09-30',
    imageUrl: 'https://picsum.photos/seed/insight2/1200/1600'
  }
];

export const Insights: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedInsight = MOCK_INSIGHTS.find(i => i.id === selectedId);

  if (selectedInsight && (selectedInsight.type === 'image' || selectedInsight.type === 'quote')) {
    return (
      <div className="animate-in fade-in zoom-in-95 duration-500 max-w-3xl mx-auto">
        <button 
          onClick={() => setSelectedId(null)}
          className="mb-12 group flex items-center text-xs tracking-widest text-neutral-400 hover:text-black transition-colors"
        >
          <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span>
          返回
        </button>

        {selectedInsight.type === 'image' ? (
          <div className="space-y-8">
            <div className="aspect-auto bg-neutral-100 overflow-hidden shadow-2xl">
              <img 
                src={selectedInsight.imageUrl} 
                alt={selectedInsight.title} 
                className="w-full h-auto grayscale-0"
              />
            </div>
            <div>
              <span className="text-[10px] tracking-widest text-neutral-400 font-medium uppercase mb-4 block">
                {selectedInsight.date} / IMAGE CAPTURE
              </span>
              <h1 className="text-3xl font-bold serif mb-6">{selectedInsight.title}</h1>
              <p className="text-neutral-700 leading-loose text-lg font-light">
                {selectedInsight.detailedContent || selectedInsight.description}
              </p>
            </div>
          </div>
        ) : (
          <div className="min-h-[50vh] flex flex-col justify-center items-center text-center px-8">
             <span className="text-[10px] tracking-widest text-neutral-400 font-medium uppercase mb-8 block">
                {selectedInsight.date} / FRAGMENT
              </span>
              <p className="text-3xl serif leading-relaxed mb-12 italic text-neutral-800">
                “{selectedInsight.description}”
              </p>
              <div className="w-12 h-[1px] bg-neutral-300 mb-6"></div>
              <h2 className="text-sm uppercase tracking-widest font-light text-neutral-500 mb-8">{selectedInsight.title}</h2>
              <p className="text-neutral-600 max-w-md font-light leading-loose">
                {selectedInsight.detailedContent}
              </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-16">
        <h1 className="text-4xl font-bold mb-4 serif">我见何物</h1>
        <p className="text-neutral-500 font-light">被时间捕获的瞬间，书籍的断章，以及有趣的链接。</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {MOCK_INSIGHTS.map((insight) => (
          <div 
            key={insight.id} 
            className="break-inside-avoid mb-4 group cursor-pointer"
            onClick={() => {
              if (insight.type !== 'link') {
                setSelectedId(insight.id);
              }
            }}
          >
            {insight.type === 'image' && (
              <div className="bg-white p-2 border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                <div className="overflow-hidden aspect-video mb-4">
                  <img 
                    src={insight.imageUrl} 
                    alt={insight.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <h3 className="text-lg font-bold serif mb-1 group-hover:text-black">{insight.title}</h3>
                <p className="text-sm text-neutral-500 font-light mb-2 line-clamp-2">{insight.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest">{insight.date}</span>
                  <span className="text-[10px] font-bold text-black opacity-0 group-hover:opacity-100 transition-opacity">查看详情 →</span>
                </div>
              </div>
            )}

            {insight.type === 'quote' && (
              <div className="bg-neutral-900 text-white p-8 flex flex-col justify-center items-center text-center min-h-[200px] hover:bg-black transition-colors group-hover:-translate-y-1 duration-300">
                <p className="text-lg serif leading-relaxed mb-4 italic line-clamp-3">
                  {insight.description}
                </p>
                <div className="w-8 h-[1px] bg-neutral-700 mb-2"></div>
                <h3 className="text-xs uppercase tracking-widest font-light text-neutral-400">{insight.title}</h3>
                <span className="mt-4 text-[10px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">展开阅读</span>
              </div>
            )}

            {insight.type === 'link' && (
              <a 
                href={insight.url} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="block bg-white border border-neutral-100 p-6 hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold serif">{insight.title}</h3>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-sm opacity-70 font-light mb-4 line-clamp-2">{insight.description}</p>
                <span className="text-[10px] opacity-40 uppercase tracking-widest">{insight.date}</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
