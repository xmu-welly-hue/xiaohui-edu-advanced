'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export function PricingSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="pricing" ref={ref} className="relative py-20 sm:py-28 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-gold-500 text-sm font-medium tracking-wider uppercase mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">课程定价</h2>
        </div>

        {/* Pricing card */}
        <div className={`max-w-lg mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="relative rounded-2xl bg-gradient-to-b from-navy-800/80 to-navy-900/80 border border-gold-500/20 overflow-hidden">
            {/* Top accent */}
            <div className="h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400" />

            <div className="p-8 sm:p-10">
              {/* Course summary */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-3">初中数学超纲方法课程</h3>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gold-500/10 border border-gold-500/20">
                  <span className="text-gold-400 font-bold text-base sm:text-lg">20次课</span>
                  <span className="text-gold-500/40">·</span>
                  <span className="text-gold-400 font-bold text-base sm:text-lg">40课时</span>
                  <span className="text-gold-500/40">·</span>
                  <span className="text-gold-300/60 text-sm">沪教版（五四制）</span>
                </div>
              </div>

              {/* Price display */}
              <div className="text-center mb-8">
                {/* Original price */}
                <div className="mb-3">
                  <span className="text-gold-300/40 text-lg line-through">
                    ¥12,000
                  </span>
                  <span className="text-gold-300/40 text-sm ml-2">（300元/小时）</span>
                </div>

                {/* Discounted price */}
                <div className="relative inline-block">
                  <p className="text-5xl sm:text-6xl font-bold text-white mb-2">
                    ¥<span className="gold-shimmer">10,800</span>
                  </p>
                  <div className="absolute -top-3 -right-16 sm:-right-20 px-3 py-1 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 text-xs font-bold">
                    省 ¥1,200
                  </div>
                </div>
                <p className="text-gold-300/50 text-sm mt-2">打包优惠价</p>
              </div>

              {/* Benefits list */}
              <div className="space-y-3 mb-8">
                {[
                  '20次系统课程（每次2小时）',
                  '60+超纲方法全面覆盖',
                  '9大知识模块体系化教学',
                  '中考压轴真题多方法对比',
                  '微积分启蒙彩蛋课',
                  '课后答疑与学习跟踪',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gold-300/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <a
                href="#contact"
                className="block w-full text-center px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 font-bold text-lg hover:from-gold-400 hover:to-gold-300 transition-all duration-300 shadow-lg shadow-gold-500/20 pulse-ring"
              >
                立即咨询报名
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
