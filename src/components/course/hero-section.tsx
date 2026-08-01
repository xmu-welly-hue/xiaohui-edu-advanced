'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { MathFormula } from './math-formula';

export function HeroSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950 hero-grid"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-950/60 to-navy-950 pointer-events-none" />

      {/* Floating decorative math symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] text-gold-500/10 text-6xl font-serif animate-pulse">
          ∫
        </div>
        <div className="absolute top-[25%] right-[15%] text-gold-500/10 text-5xl font-serif animate-pulse" style={{ animationDelay: '1s' }}>
          ∑
        </div>
        <div className="absolute bottom-[30%] left-[20%] text-gold-500/10 text-4xl font-serif animate-pulse" style={{ animationDelay: '2s' }}>
          π
        </div>
        <div className="absolute bottom-[20%] right-[25%] text-gold-500/10 text-5xl font-serif animate-pulse" style={{ animationDelay: '0.5s' }}>
          ∞
        </div>
        <div className="absolute top-[60%] left-[5%] text-gold-500/8 text-3xl font-serif animate-pulse" style={{ animationDelay: '1.5s' }}>
          Δ
        </div>
        <div className="absolute top-[40%] right-[8%] text-gold-500/8 text-4xl font-serif animate-pulse" style={{ animationDelay: '3s' }}>
          √
        </div>
      </div>

      {/* Content */}
      <div className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Brand */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-gold-500/20 bg-navy-900/50 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
              <span className="text-navy-950 font-bold text-sm">灰</span>
            </div>
            <span className="text-gold-300 font-medium tracking-wide text-sm">小灰教育</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          初中数学
          <br />
          <span className="gold-shimmer">超纲方法课程</span>
        </h1>

        {/* Slogan */}
        <p className="text-lg sm:text-xl text-gold-300/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          以高阶思维降维打击中考压轴题
          <br className="hidden sm:block" />
          23次课 · 10大模块 · 55个核心方法
        </p>

        {/* Math formula showcase */}
        <div className="mb-10 flex flex-wrap justify-center gap-4 text-gold-400/50 text-sm">
          <MathFormula formula="e^{i\pi} + 1 = 0" />
          <MathFormula formula="\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}" />
          <MathFormula formula="\sum_{k=1}^{n} k = \frac{n(n+1)}{2}" />
        </div>

        {/* Teacher info badge */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-4 rounded-2xl bg-navy-800/50 border border-gold-500/10 backdrop-blur-sm mb-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-600 to-navy-700 flex items-center justify-center border border-gold-500/20">
              <span className="text-gold-400 font-serif text-lg">谢</span>
            </div>
            <div className="text-left">
              <p className="text-white font-medium">谢立威老师</p>
              <p className="text-gold-300/60 text-sm">厦门大学 · 11年上海一线教学</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-gold-500/20" />
          <div className="text-left sm:text-center">
            <p className="text-gold-400 text-sm font-medium">沪教版（五四制）</p>
            <p className="text-gold-300/60 text-xs">中考 / 一模二模 / 四校八大自招</p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="pulse-ring inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 font-bold text-lg hover:from-gold-400 hover:to-gold-300 transition-all duration-300 shadow-lg shadow-gold-500/20"
          >
            了解课程定价
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="#outline"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-gold-500/30 text-gold-300 font-medium hover:bg-gold-500/10 transition-all duration-300"
          >
            查看课程大纲
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none" />
    </section>
  );
}
