'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';

interface Module {
  name: string;
  count: number;
  color: string;
  icon: string;
}

const modules: Module[] = [
  { name: '函数与最值', count: 8, color: 'from-blue-500 to-blue-600', icon: 'ƒ' },
  { name: '几何证明', count: 12, color: 'from-emerald-500 to-emerald-600', icon: '△' },
  { name: '代数方程', count: 9, color: 'from-violet-500 to-violet-600', icon: 'χ' },
  { name: '不等式', count: 7, color: 'from-amber-500 to-amber-600', icon: '≥' },
  { name: '数列规律', count: 4, color: 'from-cyan-500 to-cyan-600', icon: 'aₙ' },
  { name: '数论逻辑', count: 4, color: 'from-rose-500 to-rose-600', icon: 'mod' },
  { name: '三角变换', count: 2, color: 'from-indigo-500 to-indigo-600', icon: 'θ' },
  { name: '组合概率', count: 3, color: 'from-teal-500 to-teal-600', icon: 'C' },
  { name: '微积分启蒙', count: 0, color: 'from-gold-400 to-gold-600', icon: '∫' },
];

export function ModulesSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-gold-500 text-sm font-medium tracking-wider uppercase mb-3">9 Major Modules</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">9大知识模块</h2>
          <p className="text-gold-300/60 max-w-lg mx-auto">
            覆盖初中数学全部超纲领域，共计60+核心方法，构建完整的高阶解题体系
          </p>
        </div>

        {/* Module grid */}
        <div className={`grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {modules.map((mod, index) => (
            <div
              key={mod.name}
              className="group relative rounded-xl bg-navy-800/40 border border-navy-600/20 p-5 sm:p-6 card-glow overflow-hidden"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Background icon */}
              <div className="absolute -right-2 -top-2 text-5xl sm:text-6xl font-serif text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-300">
                {mod.icon}
              </div>

              {/* Content */}
              <div className="relative">
                <div className={`inline-flex w-10 h-10 rounded-lg bg-gradient-to-br ${mod.color} items-center justify-center mb-3 text-white font-bold text-sm shadow-lg`}>
                  {mod.icon}
                </div>
                <h3 className="text-white font-semibold text-base sm:text-lg mb-1">
                  {mod.name}
                </h3>
                <p className="text-gold-300/50 text-sm">
                  {mod.count > 0 ? `${mod.count} 个方法` : '彩蛋内容'}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${mod.color} opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className={`mt-12 grid grid-cols-3 gap-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {[
            { label: '核心方法', value: '60+' },
            { label: '知识模块', value: '9' },
            { label: '课程次数', value: '20次' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl bg-navy-800/30 border border-navy-600/20">
              <p className="text-2xl sm:text-3xl font-bold gold-shimmer">{stat.value}</p>
              <p className="text-gold-300/50 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
