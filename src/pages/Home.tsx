import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck, Users } from 'lucide-react';
import { useState, MouseEvent } from 'react';
import { toast } from 'sonner';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section 
        className="bg-black text-white py-24 md:py-32 px-6 text-center relative overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: -1000, y: -1000 })}
      >
        {/* Subtle Interactive Dot Matrix Background */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)',
            backgroundSize: '24px 24px',
            maskImage: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          }}
        ></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight leading-tight"
          >
            订阅您信任的<br />创作者。
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            以实惠的订阅价格支持您最喜欢的创作者。获取独家内容，并在他们成长之前锁定早期价格。
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/creators" className="w-full sm:w-auto bg-white text-black font-sans font-semibold px-8 py-4 rounded-sm hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
              探索创作者 <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/dashboard" className="w-full sm:w-auto bg-transparent border border-white/30 text-white font-sans font-semibold px-8 py-4 rounded-sm hover:bg-white/10 transition-all backdrop-blur-sm">
              前往仪表盘
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-b border-border-light dark:border-border-dark py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-400 text-xs font-bold uppercase tracking-widest rounded-sm mb-4">限时优惠</span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary dark:text-white mb-4 tracking-tight">
            尽早订阅 — 锁定低价
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark font-sans leading-relaxed text-lg">
            在顶级创作者成长之前订阅他们。早期支持者将保留他们锁定的价格——即使创作者以后提高价格。
          </p>
        </div>
      </section>

      <section id="how-it-works" className="py-24 px-6 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary dark:text-white mb-4 tracking-tight">如何运作</h2>
            <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto text-lg">一种简单、透明的方式来支持您喜欢的创作者。</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            <div className="bg-white dark:bg-background-dark p-8 rounded-sm shadow-sm border border-border-light dark:border-border-dark hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 mx-auto mb-6 flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary dark:text-white mb-4">1. 尽早订阅</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                选择您最喜欢的创作者，并在他们扩大受众之前以今天的低价订阅。
              </p>
            </div>
            <div className="bg-white dark:bg-background-dark p-8 rounded-sm shadow-sm border border-border-light dark:border-border-dark hover:shadow-md transition-shadow relative">
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-sm shadow-sm transform rotate-12">
                最超值
              </div>
              <div className="w-16 h-16 rounded-sm bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 mx-auto mb-6 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary dark:text-white mb-4">2. 锁定价格</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                随着创作者的成长，价格可能会上涨。您的早期订阅价格将永久锁定。
              </p>
            </div>
            <div className="bg-white dark:bg-background-dark p-8 rounded-sm shadow-sm border border-border-light dark:border-border-dark hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-sm bg-purple-50 dark:bg-purple-900/20 text-brand-purple dark:text-purple-400 mx-auto mb-6 flex items-center justify-center">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary dark:text-white mb-4">3. 获取独家内容</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                订阅者可以解锁独家帖子、更新，并在创作者发布内容时直接访问。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-background-light dark:bg-background-dark border-t border-border-light dark:border-border-dark">
        <div className="max-w-4xl mx-auto text-center bg-white dark:bg-surface-dark p-12 rounded-sm shadow-sm border border-border-light dark:border-border-dark relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary dark:text-white mb-6 tracking-tight">您是创作者吗？</h2>
            <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-10 max-w-2xl mx-auto leading-relaxed">
              建立您的社区，赚取经常性收入，并扩大您的受众。立即申请成为我们平台上的创作者。
            </p>
            <button className="bg-primary text-white font-sans font-semibold px-10 py-4 rounded-sm hover:bg-primary/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95">
              申请成为创作者
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
