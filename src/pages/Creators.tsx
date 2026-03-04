import { Search, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState } from 'react';
import { toast } from 'sonner';

const creators = [
  {
    name: "Errol Musk",
    handle: "@errolmusk",
    subscribers: "4",
    description: "Errol Musk的长寿之道 - 干细胞播客。探讨健康、长寿以及培养世界级头脑的秘诀。",
    price: "$1.00",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhfD8t5JSyaiOFOdfTbvd4pLMFV8GYURGhM0vAe98sKh62VorXlY_iYIyaCOyc6jTOmJ2qGipbAKavM7skhTRA9d8S2gqzIw6DEkc2PTq7MftQz_VwQ2DlkKpozA7I_Z_XknK3TGlN0iTyvrN4hUxxec4CUxeCvbGZ1j69nslxrwXJWJnWjyRGPUGpawu6UZVeslp4o3SeA4eUy6xljqqtP3GHFPMGWNPLTMBCejJ3vZ43FrfiuSlCuproY_rHjk1cY6f_5EEe4RQW",
    isImage: true,
    verified: true
  },
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
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function Creators() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    toast.info(`正在加载第 ${page} 页...`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-6 py-12 flex-grow w-full"
    >
      <header className="mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-primary dark:text-white tracking-tight mb-2">发现创作者</h1>
            <p className="text-text-muted-light dark:text-text-muted-dark text-lg font-sans">订阅顶尖思想家并解锁独家见解。</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-auto flex flex-col sm:flex-row gap-3"
          >
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted-dark w-5 h-5 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="搜索创作者..." 
                className="w-full sm:w-64 bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark text-primary dark:text-white pl-10 pr-4 py-2.5 rounded-sm focus:border-primary placeholder-text-muted-dark text-sm focus:outline-none transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </header>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
      >
        {creators.map((creator, index) => (
          <motion.div variants={itemVariants} key={index}>
            <Link 
              to={`/subscription/${creator.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`} 
              className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark p-6 shadow-sm hover:shadow-editorial-hover hover:-translate-y-1 hover:border-border-dark/30 dark:hover:border-border-light/30 transition-all duration-300 rounded-sm flex flex-col h-full group block"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm flex-shrink-0 bg-gray-50 group-hover:ring-2 group-hover:ring-primary/10 transition-all duration-300">
                    <img src={creator.avatar} alt={creator.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary dark:text-white flex items-center gap-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {creator.name}
                      {creator.verified && <BadgeCheck className="w-4 h-4 text-blue-500 fill-blue-500 text-white" />}
                    </h3>
                    <p className="text-xs text-text-muted-light dark:text-text-muted-dark">{creator.subscribers} 订阅者</p>
                  </div>
                </div>
              </div>
              
              <div className="flex-grow">
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-4 line-clamp-3 group-hover:text-text-main-light dark:group-hover:text-text-main-dark transition-colors">
                  {creator.description}
                </p>
              </div>

              <div className="mt-auto flex items-center justify-between pt-4 border-t border-border-light dark:border-border-dark group-hover:border-border-dark/20 dark:group-hover:border-border-light/20 transition-colors">
                <div className="font-semibold text-primary dark:text-white text-lg">
                  {creator.price}<span className="text-xs font-normal text-text-muted-light dark:text-text-muted-dark ml-0.5">/月</span>
                </div>
                {creator.verified ? (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                    已验证
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-yellow text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200 border border-yellow-200 dark:border-yellow-800/50 group-hover:bg-yellow-100 dark:group-hover:bg-yellow-900/50 transition-colors">
                    未认领
                  </span>
                )}
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex justify-center items-center gap-2 mb-12"
      >
        <button 
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark rounded-sm text-sm hover:border-primary hover:text-primary dark:hover:text-white transition-all duration-200 disabled:opacity-50 shadow-sm hover:shadow-md"
        >
          上一页
        </button>
        {[1, 2, 3].map(page => (
          <button 
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-9 h-9 flex items-center justify-center border rounded-sm text-sm transition-all duration-200 shadow-sm hover:shadow-md ${
              currentPage === page 
                ? 'bg-primary text-white border-primary font-medium hover:scale-105 transition-transform' 
                : 'bg-surface-light dark:bg-surface-dark border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark hover:border-primary hover:text-primary dark:hover:text-white'
            }`}
          >
            {page}
          </button>
        ))}
        <span className="text-text-muted-light dark:text-text-muted-dark px-2">...</span>
        <button 
          onClick={() => handlePageChange(12)}
          className={`w-9 h-9 flex items-center justify-center border rounded-sm text-sm transition-all duration-200 shadow-sm hover:shadow-md ${
            currentPage === 12 
              ? 'bg-primary text-white border-primary font-medium hover:scale-105 transition-transform' 
              : 'bg-surface-light dark:bg-surface-dark border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark hover:border-primary hover:text-primary dark:hover:text-white'
          }`}
        >
          12
        </button>
        <button 
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === 12}
          className="px-4 py-2 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark rounded-sm text-sm hover:border-primary hover:text-primary dark:hover:text-white transition-all duration-200 disabled:opacity-50 shadow-sm hover:shadow-md"
        >
          下一页
        </button>
      </motion.div>
    </motion.div>
  );
}
