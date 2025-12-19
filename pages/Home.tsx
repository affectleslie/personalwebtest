
import React from 'react';

export const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 serif tracking-tight">我是谁</h1>
        <p className="text-xl text-neutral-500 font-light leading-relaxed max-w-2xl">
          一名在代码与文字间穿梭的观测者，试图在嘈杂的世界中保持一点纯粹的静默。
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-10">
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-4">精神内核</h2>
            <p className="leading-loose text-neutral-700">
              相信极简主义不仅是一种美学，更是一种生存哲学。剔除冗余的信息、无效的社交和多余的欲望，
              让本质的东西显现出来。我喜欢在清晨阅读，在深夜编码，在雨天思考。
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-4">关注领域</h2>
            <ul className="space-y-2 text-neutral-700">
              <li>• 数字艺术与程序美学</li>
              <li>• 认知神经科学与AI</li>
              <li>• 存在主义哲学</li>
              <li>• 荒野徒步与自然摄影</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-4">正在发生的</h2>
            <div className="p-4 bg-neutral-50 border-l-2 border-black">
              <p className="text-sm italic text-neutral-600 italic">
                “目前正在探索大语言模型如何重塑个体的创作流。我想找到那个介于‘人’与‘算法’之间的那个微妙的平衡点。”
              </p>
            </div>
          </section>
        </div>

        <div className="relative group">
          <div className="aspect-[3/4] overflow-hidden bg-neutral-200">
            <img 
              src="https://picsum.photos/seed/portrait/800/1066" 
              alt="Portrait" 
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <p className="mt-4 text-[10px] text-neutral-400 uppercase tracking-widest text-right">
            Captured in Dec, 2024
          </p>
        </div>
      </div>

      <footer className="mt-24 pt-12 border-t border-neutral-100 flex justify-between items-center text-xs text-neutral-400 tracking-widest">
        <span>STAY HUNGRY, STAY FOOLISH</span>
        <span>© 2024 MY SPIRIT CORNER</span>
      </footer>
    </div>
  );
};
