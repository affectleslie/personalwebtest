
import React, { useState } from 'react';
import { Thought } from '../types';

const MOCK_THOUGHTS: Thought[] = [
  {
    id: '1',
    title: '在AI时代，我们该如何定义“原创”？',
    date: '2024-12-15',
    excerpt: '当生成式AI可以瞬间产出成千上万的图像和文字，个体的独特性是否正在被概率分布所消解？',
    content: `
      当我们谈论“原创”时，我们通常指的是某种从无到有的创造，或者是某种深刻打上了个人烙印的表达。然而，在生成式AI横行的今天，创作的门槛被无限拉低。

      现在的“创作”往往变成了“筛选”与“提示”。如果你提供了一个精妙的Prompt，AI产出了一个完美的结局，这算谁的功劳？

      或许，未来的原创性不再体现在技术性的完成度上，而在于“意图”的深度和“选择”的品味。算法可以模拟风格，但它无法模拟在无数个平庸的选择中，为了那一丝微妙的直觉而放弃效率的“固执”。

      真正的独特性，或许正是那些算法无法解释的、甚至是不符合逻辑的偏差。
    `,
    tags: ['技术', '哲学']
  },
  {
    id: '2',
    title: '消失的专注力：论社交媒体的注意力经济',
    date: '2024-11-20',
    excerpt: '我们不再是信息的消费者，而是注意力的被剥夺者。如何通过数字排毒找回深层思考的能力？',
    content: `
      在这个短视频和即时通讯充斥的时代，我们的注意力被切碎成了以秒为单位的切片。这种碎片化的状态不仅剥夺了我们的时间，更侵蚀了我们进行深层、连续思考的能力。

      我们习惯了快速的反馈，习惯了多巴胺的即时分泌。一旦进入需要深度沉浸的阅读或创作状态，大脑便会本能地感到焦虑，渴望去刷新那个红色的通知圆点。

      数字排毒（Digital Detox）不应该只是一个口号，而应该是一场夺回自我的革命。每天预留两小时的“断网时间”，你会发现，那些所谓错过的紧急信息其实并不重要，而你重新找回的思考深度，才是真正的财富。
    `,
    tags: ['生活方式']
  },
  {
    id: '3',
    title: '代码中的诗意',
    date: '2024-10-05',
    excerpt: '一段优雅的代码和一首绝妙的十四行诗有着惊人的共同点：它们都在用最有限的规则去构建最宽广的世界。',
    content: `
      优秀的架构就像精美的古典建筑，每一根支柱都有其存在的必要性，每一处雕花都符合审美的逻辑。

      当我们编写函数时，我们是在定义逻辑，也是在构建世界。那种“大道至简”的纯粹，与诗歌中的凝练是相通的。代码运行成功时的那种畅快，本质上是一种逻辑之美在物理世界（或者说数字世界）中的完美落地。

      我始终相信，一个好的程序员，首先应该是一个诗人或哲学家。
    `,
    tags: ['编程', '美学']
  }
];

export const Thoughts: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedThought = MOCK_THOUGHTS.find(t => t.id === selectedId);

  if (selectedThought) {
    return (
      <div className="animate-in fade-in slide-in-from-right-4 duration-500 max-w-2xl mx-auto">
        <button 
          onClick={() => setSelectedId(null)}
          className="mb-12 group flex items-center text-xs tracking-widest text-neutral-400 hover:text-black transition-colors"
        >
          <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span>
          返回列表
        </button>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] tracking-widest text-neutral-400 font-medium">
              {selectedThought.date}
            </span>
            <div className="flex gap-2">
              {selectedThought.tags.map(tag => (
                <span key={tag} className="text-[10px] px-2 py-0.5 border border-neutral-200 text-neutral-500 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <h1 className="text-4xl font-bold serif leading-tight mb-8">
            {selectedThought.title}
          </h1>
        </header>

        <div className="prose prose-neutral max-w-none">
          {selectedThought.content.split('\n').map((para, i) => (
            para.trim() && (
              <p key={i} className="text-neutral-700 leading-loose text-lg mb-8 font-light">
                {para.trim()}
              </p>
            )
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-neutral-100 flex justify-center">
          <div className="w-2 h-2 bg-neutral-200 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-16">
        <h1 className="text-4xl font-bold mb-4 serif">我想什么</h1>
        <p className="text-neutral-500 font-light">关于技术、生活与存在的随机思绪。</p>
      </header>

      <div className="space-y-16">
        {MOCK_THOUGHTS.map((thought) => (
          <article 
            key={thought.id} 
            className="group cursor-pointer"
            onClick={() => setSelectedId(thought.id)}
          >
            <div className="flex items-baseline justify-between mb-3">
              <span className="text-[10px] tracking-widest text-neutral-400 font-medium">
                {thought.date}
              </span>
              <div className="flex gap-2">
                {thought.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 border border-neutral-200 text-neutral-500 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h2 className="text-2xl font-bold serif mb-4 group-hover:text-neutral-600 transition-colors">
              {thought.title}
            </h2>
            <p className="text-neutral-600 leading-relaxed font-light line-clamp-2">
              {thought.excerpt}
            </p>
            <div className="mt-6 flex items-center text-xs font-medium tracking-widest uppercase text-black">
              <span className="mr-2">阅读全文</span>
              <div className="h-[1px] w-8 bg-black group-hover:w-16 transition-all duration-300"></div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 text-center">
        <button className="text-xs tracking-widest text-neutral-400 hover:text-black transition-colors uppercase py-10">
          暂时只有这么多 / 回到顶部
        </button>
      </div>
    </div>
  );
};
