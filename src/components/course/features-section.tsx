'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const features = [
  {
    title: '超纲方法降维打击',
    desc: '用高中乃至竞赛级别的方法，从更高维度审视初中题目，让压轴题迎刃而解',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: '常规 vs 超纲对比',
    desc: '每道题展示常规解法与超纲解法的对比，让学生深刻理解方法优势所在',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: '90分钟6段式教学',
    desc: '科学分段，讲练结合，保持注意力高效集中，确保每个知识点当堂消化',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: '精准定位适用人群',
    desc: '八年级及以上，校内数学稳定85分以上，目标自招或冲刺满分的优秀学生',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

export function FeaturesSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-navy-950">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-gold-500 text-sm font-medium tracking-wider uppercase mb-3">Features</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">课程特色</h2>
        </div>

        {/* Features grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl bg-navy-800/30 border border-navy-600/20 hover:border-gold-500/20 transition-all duration-300 card-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 flex items-center justify-center text-gold-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gold-300/50 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
