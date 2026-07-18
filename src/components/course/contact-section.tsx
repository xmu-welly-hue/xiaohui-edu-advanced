'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export function ContactSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="contact" ref={ref} className="relative py-20 sm:py-28 bg-navy-950">
      <div className="max-w-4xl mx-auto px-6">
        {/* Contact card */}
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {/* Brand */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
              <span className="text-navy-950 font-bold text-sm">灰</span>
            </div>
            <span className="text-white font-semibold text-lg">小灰教育</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">开启超纲之旅</h2>
          <p className="text-gold-300/60 max-w-md mx-auto mb-10">
            添加微信或致电咨询，获取详细课程安排与试听机会
          </p>

          {/* Contact methods */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            {/* Phone */}
            <a
              href="tel:18559689449"
              className="group flex items-center gap-4 px-6 py-4 rounded-xl bg-navy-800/40 border border-navy-600/30 hover:border-gold-500/20 transition-all duration-300 card-glow"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-gold-300/50 text-xs">电话咨询</p>
                <p className="text-white font-semibold text-lg">185-5968-9449</p>
              </div>
            </a>

            {/* WeChat */}
            <div className="group flex items-center gap-4 px-6 py-4 rounded-xl bg-navy-800/40 border border-navy-600/30 hover:border-gold-500/20 transition-all duration-300 card-glow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm3.2 4.127c-3.987 0-7.224 2.694-7.224 6.017 0 3.321 3.237 6.017 7.224 6.017.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.045c.133 0 .241-.108.241-.243 0-.06-.023-.12-.038-.177l-.327-1.233a.49.49 0 01.178-.554C21.034 18.923 22 17.262 22 15.435c0-3.323-3.237-6.017-7.224-6.017h.022zm-2.418 3.408c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.969-.982z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-gold-300/50 text-xs">微信同号</p>
                <p className="text-white font-semibold text-lg">18559689449</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-navy-700/50 pt-10">
            <p className="text-gold-300/30 text-sm mb-2">
              沪教版（五四制） · 上海中考 · 一模二模 · 四校八大自招
            </p>
            <p className="text-gold-300/20 text-xs">
              &copy; {new Date().getFullYear()} 小灰教育 · 谢立威老师
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
