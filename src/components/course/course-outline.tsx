'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

interface Lesson {
  number: string;
  topic: string;
  methods: string[];
  isSpecial?: boolean;
  icon?: string;
}

const lessons: Lesson[] = [
  { number: '01', topic: '函数最值入门', methods: ['幂函数求导', '判别式法'] },
  { number: '02', topic: '不等式求最值', methods: ['二元均值不等式', '三元均值不等式', '柯西不等式'] },
  { number: '03', topic: '几何解题新思路', methods: ['坐标法', '正弦定理', '余弦定理'] },
  { number: '04', topic: '直线方程与位置关系', methods: ['五种直线方程', '平行/垂直/重合判定'] },
  { number: '05', topic: '距离公式与夹角公式', methods: ['点到直线距离', '平行线距离', '夹角公式', '到角公式'] },
  { number: '06', topic: '对称问题与面积坐标', methods: ['四种对称', '三角形面积坐标', '定比分点'] },
  { number: '07', topic: '代数解题技巧', methods: ['韦达定理进阶', '待定系数法', '赋值法', '试根法'] },
  { number: '08', topic: '导数进阶', methods: ['切线/单调性', '含参讨论'] },
  { number: '09', topic: '函数图像变换', methods: ['平移变换', '对称变换', '翻折变换'] },
  { number: '10', topic: '几何证明利器', methods: ['向量法', '面积法', '斯特瓦尔特定理'] },
  { number: '11', topic: '代数变形进阶', methods: ['换元法', '轮换对称与齐次化', '函数方程思想'] },
  { number: '12', topic: '因式分解进阶', methods: ['十字相乘进阶', '分组分解', '添拆项法'] },
  { number: '13', topic: '对称与构造', methods: ['对称假设法', '放缩法', '构造法'] },
  { number: '14', topic: '数列与规律', methods: ['等差/等比求和', '递推思想'] },
  { number: '15', topic: '数论与逻辑', methods: ['同余模运算', '鸽巢原理', '反证法', '极端原理'] },
  { number: '16', topic: '三角恒等变换', methods: ['和差公式', '倍角/半角公式'] },
  { number: '17', topic: '组合与概率', methods: ['排列组合基本公式', '容斥原理', '二项式定理'] },
  { number: '18', topic: '拉格朗日乘数', methods: ['约束条件下求极值'] },
  { number: '19', topic: '几何定理进阶', methods: ['托勒密定理', '梅涅劳斯/塞瓦定理', '费马点'] },
  { number: '20', topic: '四点共圆与圆幂', methods: ['四点共圆判定', '圆幂定理'] },
  { number: '21', topic: '复数几何', methods: ['旋转与对称'] },
  { number: '22', topic: '数学归纳法', methods: ['证明"对所有n成立"'] },
  { number: '23', topic: '不等式高阶', methods: ['排序不等式', '琴生不等式', '舒尔不等式'] },
  { number: '🏆', topic: '综合实战', methods: ['10道中考压轴真题 × 多方法对比'], isSpecial: true, icon: 'trophy' },
  { number: '🎁', topic: '微积分启蒙彩蛋', methods: ['刘徽割圆术→极限', '速度-时间图→积分直觉'], isSpecial: true, icon: 'gift' },
];

function LessonCard({ lesson, index }: { lesson: Lesson; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`group rounded-xl border transition-all duration-300 ${
        lesson.isSpecial
          ? 'border-gold-500/30 bg-gradient-to-r from-navy-800/80 to-navy-900/80'
          : 'border-navy-600/30 bg-navy-800/40 hover:border-gold-500/20 hover:bg-navy-800/60'
      } card-glow`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-4 p-4 sm:p-5 text-left cursor-pointer"
      >
        {/* Lesson number */}
        <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg ${
          lesson.isSpecial
            ? 'bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950'
            : 'bg-navy-700/50 text-gold-400 border border-gold-500/10'
        }`}>
          {lesson.number}
        </div>

        {/* Topic */}
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-medium text-base sm:text-lg truncate">
            {lesson.topic}
          </h3>
          <p className="text-gold-300/50 text-sm mt-0.5">
            {lesson.methods.length} 个核心方法
          </p>
        </div>

        {/* Expand icon */}
        <svg
          className={`w-5 h-5 text-gold-400/60 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expandable content */}
      <div className={`collapsible-content ${isOpen ? 'open' : ''}`}>
        <div>
          <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
            <div className="border-t border-navy-600/30 pt-4">
              <p className="text-gold-300/60 text-xs uppercase tracking-wider mb-3 font-medium">核心方法</p>
              <div className="flex flex-wrap gap-2">
                {lesson.methods.map((method) => (
                  <span
                    key={method}
                    className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm ${
                      lesson.isSpecial
                        ? 'bg-gold-500/15 text-gold-300 border border-gold-500/20'
                        : 'bg-navy-700/50 text-gold-300/80 border border-navy-600/30'
                    }`}
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CourseOutline() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="outline" ref={ref} className="relative py-20 sm:py-28 bg-navy-950">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-gold-500 text-sm font-medium tracking-wider uppercase mb-3">Course Outline</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">23次课程大纲</h2>
          <p className="text-gold-300/60 max-w-lg mx-auto">
            从基础到竞赛，系统构建超纲方法论。点击展开查看每课核心方法。
          </p>
        </div>

        {/* Lesson cards */}
        <div className={`space-y-3 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {lessons.map((lesson, index) => (
            <LessonCard key={lesson.number} lesson={lesson} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
