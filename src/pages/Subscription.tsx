import { useParams } from 'react-router-dom';
import { BadgeCheck, Rocket, Brain, Dumbbell, AlertTriangle, Book, Headphones, Check, X, Globe, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { toast } from 'sonner';

const creators = [
  {
    name: "Brian Armstrong",
    handle: "@Coinbase",
    subscribers: "12.5k",
    description: "Co-founder & CEO at @Coinbase. Creating more economic freedom in the world. Sharing thoughts on crypto regulation and future tech.",
    price: "$1.00",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBP1lr8V0MgKFY_2_BOWQ1cuPlht54TkZuBoBSbW4gaA5Plwt41d56IktZDT8H-iJrg1QjB6m6yM4VQhb2cra7Qjf5FCd1jXigXsJ_dGfroA9MnEJKD-mkpm58ovYNwhXk5PYwDa8GM8Nko5u4mZ5MYK53yNvBE6VRyNXfKqAdIr-mIlZq4oD09jzYkP8w5oHOagvKjaAvYErHhPW2tNV3bs45scWaXzh5keTAJm2cvnYk0mFG6pF1qRDK6Y5xulIA_arWyyMCHE73S",
    isImage: true,
    verified: true
  },
  {
    name: "Yi He",
    handle: "@Binance",
    subscribers: "8.2k",
    description: "Co-Founder & Chief Customer Service Officer @Binance. Holder of #BNB. Building the future of exchange infrastructure.",
    price: "$1.00",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtbvcZt6M5EMg4lM_7CrNbZ0AsaPegbdcCyx7-pquGQ9lkNN65Imqwb5yJeGL2bpBsECa6lYjSQ-qYwFlbnEcuz-0wfI2V2fTM_DDhEe9tXl39Xi437Ppd1Udn2p1xubmvDQ3SRc2dlR68JHeUctNfsS1BUYPjmrcCspbqwL1Y-5dnE7uQYn6W0ux41PXPaIoZMH-A4ZBW2oX5bLQzxBRrRkmd2-nsWRoJIJNiBcSZqOl2-ItMEFHDpZLOt1OFIPPgBpRmQbZvu6E8",
    isImage: true,
    verified: true
  },
  {
    name: "H.E. Justin Sun",
    handle: "@TRON",
    subscribers: "15.1k",
    description: "🎓 Entrepreneur | 👨‍💼 Diplomat | 👨‍🚀 Astronaut #712 | 🎨 Art Collector | Founder of TRON DAO.",
    price: "$1.00",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjz1_meRfafbRhVJKF1Oe7z1hwHMpoRaOlPxdAVkKvSFFWLMeCJIyWq7dSOXSJBbof2yeeX6V4rIXfAMOZYOjueDbkiq8teHwVqhV5s39H561EhX7ODale85m0GzNxA64gHium8R-N-_kn9dzF2U_CujEkby8RwCDHywtaTy9pwgGZw-iX433HvzZwD37vxplhm_M44ptLvlkhuiWTMl34w_tcV5XRv_cd2aeSzFBNIVP4Y0CGWzUhk9IUc8G0OtmM85V8CZT6ZemF",
    isImage: true,
    verified: true
  },
  {
    name: "Arthur Hayes",
    handle: "@Maelstromfund",
    subscribers: "9.4k",
    description: "Co-Founder of BitMEX & CIO @Maelstromfund. Writing essays on the financial markets and crypto ecosystem.",
    price: "$1.00",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0T09vKLPzGRyumIUho44aOgzo-tgKEjUA5_TbSnJIN9pEIqnNmtjyWdZGxw0wg6DJvpQFNrZS_xRCNglC5_K4Z5VwN9Fr_DV9q3UVirRwUZ9Rf5PiHebT_zWjkLY6AuRUcyvtoSLAktnHEvzjHyPR-YpHU-aNV0QVTUgwwV9T6dg-bavLUcaxrThLY_QSJnlobOGfkf_d-R0InG2w4VNGAa8SFjS2BZqoCCdelThdcEHh-qdN73xVASyySBf8mhBfoL1CbD0Vs0Fn",
    isImage: true,
    verified: false
  },
  {
    name: "Balaji",
    handle: "@Balaji",
    subscribers: "22.8k",
    description: "Author of the Network State. Founder of the Network School. Investor in crypto, bio, and aerospace.",
    price: "$1.00",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHUp0MjoYGpqM5Wb65uKHRKrAfJEBrfi7Yogm5MlrHQt00yDi75YkDHqhn-Hf6vzpvf2Ldl7N6nf26BS4o3xw8qAcTn5Gj-ggGy-npDIisXy9F5mCUUq1Fkh-hPVUfZGUKrHc5Qwnf9r19h5SlpmtG8gsFkVxPlchbCOsOKg9Za3wx0tB9KT2H7mm_5jfLJUw5E0t72jQhSiQACKM8bsEVG-tSV0I6Zya-nE_rEE3ZRXlQvr7haAnvO-ttoGuNTSfix3cySdPTPis_",
    isImage: true,
    verified: true
  },
  {
    name: "Raoul Pal",
    handle: "@RealVision",
    subscribers: "18.2k",
    description: "Founder/CEO Global Macro Investor, @RealVision. Figuring things out at the nexus of macro, crypto & tech.",
    price: "$1.00",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2kIW_GPg95OVEymgEHrkpvU1MCaKPuRXhcf7g0WMTzZvrCQc5dFoDU35b8-JQ4IhTA4TW-kYNc0I5gDCKvrwOap_nLdFRFZYKFe15LUU5hegV2keIsuHnjj-mCeDFNDiwFa5_k4m3WyaTUUAIa8yk7xe5PsmbruEmBXGa82N1SiITf3j_dVTZbCUYT2p3Ha5lhKXy0uvOsDCMlUzs4rti4j3zAnNsGZbVfpvbqhECZpCiduFhElRvloUG_2wu28iXLID5ZEC1gZrA",
    isImage: true,
    verified: true
  },
  {
    name: "Hayden Adams",
    handle: "@Uniswap",
    subscribers: "11.0k",
    description: "Invented the Uniswap protocol, Founder @Uniswap. Decentralizing the world one swap at a time.",
    price: "$1.00",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCM50X8FU0xzNDeS6lYk02ewOQ8k0U0rw3qivlJOFYzhH7zO1FOPyBjf1TMqm7-Y67ZQf5zwztPt6M48mgpMAGBCwceVRu5jxpL-LJ58lu9s4wU6wi7BjCbosfpWL36auy4juceR9oxXjPbDNJdqSCuhO9EmDOxxoArss4NQ2SupwLL669WIYVCvrvfHNQ6Ob_S08d1dIZb1nKY07vUvSKsXe6BrQMmm-E0sCnJkBo2vvxJWCEoDp6B27_UydBPiNuNYBGLTNpEh3ct",
    isImage: true,
    verified: false
  },
  {
    name: "Stani.eth",
    handle: "@Aave",
    subscribers: "6.7k",
    description: "Founder & CEO @Aave. Building the open source liquidity protocol. Ghost lover. 👻",
    price: "$1.00",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9Xgx-aUdGCNlMO0j91jc-3ukKmckFxvP7RlHmA2VGVQL0AXMIQfU-OLcLmNAdzpV9qnaYBz5YfjY7HJPBCVc6PgF2pNXVL0KvqsYkQRRx8nXihsGi6Oxg5gCimFv9sQajMH8Xl9Dh8cfiNC9gTzL3GjZ81dN88Sg3jOwUJefALo5jTT3-kW4cuhD4gxr-OM_sU2H45FIyBgsteAYqwSWjzVcxOjBr1xWX2ZNBRpj04fHZ78naSMwowKpg56t_c2mzS7s4t3I7BChh",
    isImage: true,
    verified: true
  },
  {
    name: "Gavin Wood",
    handle: "@Polkadot",
    subscribers: "5.3k",
    description: "Founded Polkadot, Kusama, Ethereum, Parity, Web3 Foundation. Building Polkadot. All things decentralized.",
    price: "$1.00",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOEbrMBsecenJ0Y-1uolBKqUxAYIRQMhvKInuZt8jLIOf051q3k5Hecfr78_EYw89VQZHAxMHppOttqekoYZm9isPFPTuLa35DAcyIVaHy5AGig3D2CxaezaHKCWdAVfxBkpowgphQCBrjm9FHM8L3fTyPsBW1DY_KkDgb_Whqw3dd7FEMNhoVPBa574cDnVh83D63PmO9QaxM3FvQP4vo45zroYc2SHkQnY2rSYk5nQY2Znu0ZD_Hzq_GnxnCRKfj_4AMp1O87QUY",
    isImage: true,
    verified: false
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function Subscription() {
  const { id } = useParams();
  const [isSubscribed, setIsSubscribed] = useState(id === 'errol-musk');

  const handleSubscribe = () => {
    setIsSubscribed(true);
    toast.success('订阅成功！');
  };

  const handleCancel = () => {
    setIsSubscribed(false);
    toast.success('已取消订阅');
  };

  // Specific layout for Errol Musk
  if (id === 'errol-musk') {
    return (
      <motion.div 
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="max-w-4xl mx-auto px-6 py-12 w-full flex-grow"
      >
        {/* Profile Header */}
        <motion.section variants={itemVariants} className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-sm mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="w-32 h-32 flex-shrink-0 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-lg ring-4 ring-gray-50 dark:ring-gray-900/50">
              <img alt="Profile" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhfD8t5JSyaiOFOdfTbvd4pLMFV8GYURGhM0vAe98sKh62VorXlY_iYIyaCOyc6jTOmJ2qGipbAKavM7skhTRA9d8S2gqzIw6DEkc2PTq7MftQz_VwQ2DlkKpozA7I_Z_XknK3TGlN0iTyvrN4hUxxec4CUxeCvbGZ1j69nslxrwXJWJnWjyRGPUGpawu6UZVeslp4o3SeA4eUy6xljqqtP3GHFPMGWNPLTMBCejJ3vZ43FrfiuSlCuproY_rHjk1cY6f_5EEe4RQW"/>
            </div>
            <div className="flex-grow w-full">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-3xl font-sans font-bold text-primary dark:text-white tracking-tight">Errol Musk's Longevity Voyage</h1>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-50/80 dark:bg-green-900/30 text-accent-green dark:text-green-400 text-xs font-semibold border border-green-200 dark:border-green-800/50 shadow-sm">
                  <Check className="w-3 h-3" /> 已验证
                </span>
              </div>
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-4 font-medium">4 订阅者</p>
              <p className="text-primary dark:text-white mb-6 font-sans text-lg">Errol Musk的长寿之道 - 干细胞播客</p>
              <div className="flex flex-wrap items-center gap-6">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-primary dark:text-white tracking-tight">$36</span>
                    <span className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium">3年</span>
                  </div>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-xs mt-1 font-mono">$1/月 × 36个月</p>
                </div>
                <div className="flex items-center gap-3 ml-auto md:ml-0">
                  {isSubscribed ? (
                    <>
                      <button onClick={handleCancel} className="flex items-center gap-2 bg-green-50 text-accent-green px-6 py-3 rounded-sm border border-green-200 font-medium hover:bg-green-100 transition-all shadow-sm hover:shadow-md active:scale-95">
                        <Check className="w-4 h-4" /> 已订阅
                      </button>
                      <button onClick={handleCancel} className="px-6 py-3 rounded-sm border border-red-200 text-red-500 font-medium hover:bg-red-50 hover:border-red-300 transition-all active:scale-95">
                        取消
                      </button>
                    </>
                  ) : (
                    <button onClick={handleSubscribe} className="bg-primary text-white px-8 py-3 rounded-sm font-medium hover:bg-primary/90 transition-all shadow-sm hover:shadow-md active:scale-95 text-sm">
                      订阅 Errol Musk
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Exclusive Content */}
        <motion.section variants={itemVariants} className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-sm mb-6">
          <h2 className="text-xl font-sans font-bold text-primary dark:text-white mb-4 tracking-tight flex items-center gap-2">
            <Globe className="w-5 h-5 text-brand-purple" /> 独家内容
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark mb-8 font-sans text-lg">作为VIP订阅者，您可以获取来自Errol Musk的独家故事和个人见解：</p>
          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-5 group">
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Rocket className="w-6 h-6 text-primary dark:text-white group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary dark:text-white mb-1 font-sans group-hover:text-brand-purple transition-colors">SpaceX的创立</h3>
                <p className="text-text-muted-light dark:text-text-muted-dark font-sans leading-relaxed">Errol Musk关于SpaceX早期岁月的第一手故事。</p>
              </div>
            </div>
            <div className="flex items-start gap-5 group">
              <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-sm group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
                <Brain className="w-6 h-6 text-yellow-600 dark:text-yellow-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary dark:text-white mb-1 font-sans group-hover:text-yellow-600 transition-colors">培养世界首位万亿美元级头脑</h3>
                <p className="text-text-muted-light dark:text-text-muted-dark font-sans leading-relaxed">关于培养Elon Musk的个人见解——愿景背后的成长经历。</p>
              </div>
            </div>
            <div className="flex items-start gap-5 group">
              <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-sm group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                <Dumbbell className="w-6 h-6 text-orange-500 dark:text-orange-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary dark:text-white mb-1 font-sans group-hover:text-orange-500 transition-colors">长寿之道</h3>
                <p className="text-text-muted-light dark:text-text-muted-dark font-sans leading-relaxed">Errol与Elon Musk的饮食、训练和健康长寿习惯。</p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50/80 dark:bg-yellow-900/20 border border-yellow-200/50 dark:border-yellow-800/50 rounded-sm p-5 flex items-start gap-3 shadow-sm">
            <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-yellow-800 dark:text-yellow-300 font-sans leading-relaxed">免责声明：本频道不提供任何与SpaceX IPO相关的内幕或非公开信息。</p>
          </div>
        </motion.section>

        {/* Pricing & Locked Rates */}
        <motion.section variants={itemVariants} className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-sm mb-6">
          <h2 className="text-xl font-sans font-bold text-primary dark:text-white mb-8 tracking-tight">价格与锁定费率</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-sm text-center flex flex-col justify-center border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
              <div className="text-3xl font-bold text-primary dark:text-white mb-2 font-sans tracking-tight">$36</div>
              <div className="text-sm text-text-muted-light dark:text-text-muted-dark font-sans font-medium">一次性付款</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-sm text-center flex flex-col justify-center border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
              <div className="text-3xl font-bold text-primary dark:text-white mb-2 font-sans tracking-tight">$1<span className="text-xl font-medium text-text-muted-light">/mo</span></div>
              <div className="text-sm text-text-muted-light dark:text-text-muted-dark font-sans font-medium">锁定3年</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-sm text-center flex flex-col justify-center border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-colors opacity-70">
              <div className="text-3xl font-bold text-text-muted-light dark:text-text-muted-dark mb-2 font-sans tracking-tight relative inline-block mx-auto">
                <span className="relative z-10">$6<span className="text-xl font-medium">/mo</span></span>
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-red-500/70 -translate-y-1/2 transform -rotate-6 z-20"></div>
              </div>
              <div className="text-sm text-text-muted-light dark:text-text-muted-dark font-sans font-medium">未来价格</div>
            </div>
            <div className="bg-green-50/80 dark:bg-green-900/20 p-6 rounded-sm text-center flex flex-col justify-center border border-green-100 dark:border-green-800/30 shadow-sm">
              <div className="text-3xl font-bold text-accent-green dark:text-green-400 mb-2 font-sans tracking-tight">83%</div>
              <div className="text-sm text-accent-green dark:text-green-400 font-sans font-medium uppercase tracking-wider">节省</div>
            </div>
          </div>
        </motion.section>

        {/* Platform Points */}
        <motion.section variants={itemVariants} className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-sm mb-6">
          <h2 className="text-xl font-sans font-bold text-primary dark:text-white mb-6 tracking-tight">Platform Points (PP)</h2>
          <div className="space-y-2">
            <div className="flex justify-between items-center py-4 border-b border-border-light dark:border-border-dark group">
              <span className="text-text-muted-light dark:text-text-muted-dark font-sans group-hover:text-primary dark:group-hover:text-white transition-colors">赚取速率</span>
              <span className="font-medium text-primary dark:text-white font-sans">每消费$1赚取1 PP</span>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-border-light dark:border-border-dark group">
              <span className="text-text-muted-light dark:text-text-muted-dark font-sans group-hover:text-primary dark:group-hover:text-white transition-colors">VIP倍率</span>
              <span className="font-bold text-brand-purple font-sans text-lg">3×</span>
            </div>
            <div className="flex justify-between items-center py-4 group">
              <span className="text-text-muted-light dark:text-text-muted-dark font-sans group-hover:text-primary dark:group-hover:text-white transition-colors">3年计划总计</span>
              <span className="font-bold text-brand-purple font-sans text-xl">108 PP</span>
            </div>
          </div>
        </motion.section>

        {/* Free Book */}
        <motion.section variants={itemVariants} className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-sm relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <h2 className="text-xl font-sans font-bold text-primary dark:text-white mb-4 tracking-tight relative z-10">免费书籍: The Noah Papers</h2>
          <p className="text-base text-text-muted-light dark:text-text-muted-dark mb-8 leading-relaxed font-sans relative z-10 max-w-3xl">
            每位VIP订阅者都将免费获得一本The Noah Papers——一部探索外星人是否存在于地球的纪录片式叙事作品，由Errol Musk亲自撰写（非代笔）。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 relative z-10">
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 flex flex-col items-center justify-center text-center border border-gray-100 dark:border-gray-800">
              <Book className="w-8 h-8 text-gray-800 dark:text-gray-200 mb-3" strokeWidth={1.5} />
              <div className="font-medium text-lg text-gray-900 dark:text-white mb-1">电子书</div>
              <div className="text-sm flex items-center gap-1">
                <span className="text-gray-400 line-through decoration-gray-400">$9</span>
                <span className="text-[#16a34a] font-medium">免费</span>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 flex flex-col items-center justify-center text-center border border-gray-100 dark:border-gray-800">
              <Headphones className="w-8 h-8 text-gray-800 dark:text-gray-200 mb-3" strokeWidth={1.5} />
              <div className="font-medium text-lg text-gray-900 dark:text-white mb-1">有声书</div>
              <div className="text-sm flex items-center gap-1">
                <span className="text-gray-400 line-through decoration-gray-400">$9</span>
                <span className="text-[#16a34a] font-medium">免费</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-text-muted-light dark:text-text-muted-dark italic font-sans relative z-10 text-center">订阅后，您的免费副本将在您的账户中提供。</p>
        </motion.section>
      </motion.div>
    );
  }

  // Generic view for other creators
  const creator = creators.find(c => c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') === id) || {
    name: "Unknown Creator",
    handle: "@unknown",
    subscribers: "0",
    description: "Creator not found.",
    price: "$1.00",
    avatar: "",
    isImage: false,
    verified: false
  };

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="max-w-4xl mx-auto px-6 py-12 w-full flex-grow"
    >
      {/* Disclaimer Banner */}
      {!creator.verified && (
        <motion.div variants={itemVariants} className="bg-yellow-50/80 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800/50 rounded-sm p-4 mb-6 flex items-start gap-3 shadow-sm">
          <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-yellow-800 dark:text-yellow-300 font-sans leading-relaxed">
            免责声明：此创作者账户尚未被个人认领或验证。一旦被认领，订阅价格可能会上涨。
          </p>
        </motion.div>
      )}

      {/* Generic Header */}
      <motion.section variants={itemVariants} className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-sm mb-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="w-32 h-32 flex-shrink-0 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-lg ring-4 ring-gray-50 dark:ring-gray-900/50 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
             {creator.isImage ? (
               <img src={creator.avatar} alt={creator.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
             ) : (
               <span className="text-4xl text-gray-400 font-bold">?</span>
             )}
          </div>
          <div className="flex-grow w-full">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h1 className="text-3xl font-sans font-bold text-primary dark:text-white tracking-tight">{creator.name}</h1>
              {creator.verified ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50/80 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold border border-blue-200 dark:border-blue-800/50 shadow-sm">
                  <BadgeCheck className="w-3 h-3" /> 已验证
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-yellow-100/80 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-semibold border border-yellow-200 dark:border-yellow-800/50 shadow-sm">
                  未认领
                </span>
              )}
            </div>
            <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-4 font-medium">{creator.subscribers} 订阅者</p>
            <p className="text-primary dark:text-white mb-6 font-sans text-lg">{creator.description}</p>
            
            <div className="flex flex-wrap items-center gap-6">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-primary dark:text-white tracking-tight">$36</span>
                  <span className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium">3年</span>
                </div>
                <p className="text-text-muted-light dark:text-text-muted-dark text-xs mt-1 font-mono">{creator.price}/月 × 36个月</p>
              </div>
              <div className="flex items-center gap-3 ml-auto md:ml-0">
                {isSubscribed ? (
                  <>
                    <button onClick={handleCancel} className="flex items-center gap-2 bg-green-50 text-accent-green px-6 py-3 rounded-sm border border-green-200 font-medium hover:bg-green-100 transition-all shadow-sm hover:shadow-md active:scale-95">
                      <Check className="w-4 h-4" /> 已订阅
                    </button>
                    <button onClick={handleCancel} className="px-6 py-3 rounded-sm border border-red-200 text-red-500 font-medium hover:bg-red-50 hover:border-red-300 transition-all active:scale-95">
                      取消
                    </button>
                  </>
                ) : (
                  <button onClick={handleSubscribe} className="bg-primary text-white px-8 py-3 rounded-sm font-medium hover:bg-primary/90 transition-all shadow-sm hover:shadow-md active:scale-95 text-sm">
                    订阅 {creator.name}
                  </button>
                )}
              </div>
            </div>
            
            {/* Perk Banner */}
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-sm px-4 py-3 flex items-center gap-2 border border-purple-100 dark:border-purple-800/30">
              <Rocket className="w-4 h-4 text-brand-purple dark:text-purple-400 flex-shrink-0" />
              <span className="text-sm text-brand-purple dark:text-purple-300 font-medium">订阅可获得SpaceX融资轮的白名单访问权限</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Generic What You Get */}
      <motion.section variants={itemVariants} className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-sm mb-6">
        <h2 className="text-xl font-sans font-bold text-primary dark:text-white mb-6 tracking-tight">您将获得</h2>
        <ul className="space-y-4 text-text-muted-light dark:text-text-muted-dark font-sans text-base">
          <li className="flex items-start gap-3 group">
            <Check className="w-5 h-5 text-accent-green dark:text-green-400 flex-shrink-0 mt-0.5" />
            <span className="group-hover:text-primary dark:group-hover:text-white transition-colors">来自创作者的独家帖子和更新</span>
          </li>
          <li className="flex items-start gap-3 group">
            <Check className="w-5 h-5 text-accent-green dark:text-green-400 flex-shrink-0 mt-0.5" />
            <span className="group-hover:text-primary dark:group-hover:text-white transition-colors">在创作者认领前锁定当前价格</span>
          </li>
          <li className="flex items-start gap-3 group">
            <Check className="w-5 h-5 text-accent-green dark:text-green-400 flex-shrink-0 mt-0.5" />
            <span className="group-hover:text-primary dark:group-hover:text-white transition-colors">早期支持者特权和未来功能访问权限</span>
          </li>
          <li className="flex items-start gap-3 group">
            <Check className="w-5 h-5 text-accent-green dark:text-green-400 flex-shrink-0 mt-0.5" />
            <span className="group-hover:text-primary dark:group-hover:text-white transition-colors">与您信任的创作者直接联系</span>
          </li>
        </ul>
      </motion.section>
    </motion.div>
  );
}
