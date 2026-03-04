import { Wallet, Activity, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { toast } from 'sonner';

import { StatCard } from '../components/dashboard/StatCard';
import { WhitelistCard } from '../components/dashboard/WhitelistCard';
import { InviteCard } from '../components/dashboard/InviteCard';
import { PositionsCard } from '../components/dashboard/PositionsCard';
import { SubscriptionItem, Subscription } from '../components/dashboard/SubscriptionItem';

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

export default function Dashboard() {
  const [copied, setCopied] = useState(false);
  const [subs, setSubs] = useState<Subscription[]>([
    { id: 'cr', name: 'Cristiano Ronaldo', initials: 'CR', color: 'from-pink-400 to-pink-500', date: '2027年3月3日' },
    { id: 'errol', name: "Errol Musk's Longevity Voyage", image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhfD8t5JSyaiOFOdfTbvd4pLMFV8GYURGhM0vAe98sKh62VorXlY_iYIyaCOyc6jTOmJ2qGipbAKavM7skhTRA9d8S2gqzIw6DEkc2PTq7MftQz_VwQ2DlkKpozA7I_Z_XknK3TGlN0iTyvrN4hUxxec4CUxeCvbGZ1j69nslxrwXJWJnWjyRGPUGpawu6UZVeslp4o3SeA4eUy6xljqqtP3GHFPMGWNPLTMBCejJ3vZ43FrfiuSlCuproY_rHjk1cY6f_5EEe4RQW', date: '2029年3月3日', link: '/subscription/errol-musk' },
    { id: 'lm', name: 'Lionel Messi', initials: 'LM', color: 'from-blue-400 to-blue-500', date: '2027年2月24日' }
  ]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("https://test.razzhood.com/r/KP8FAY");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleCancelSubscription = (id: string, name: string) => {
    setSubs(subs.filter(s => s.id !== id));
    toast.success(`已取消订阅 ${name}`);
  };

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="max-w-6xl mx-auto px-6 py-12 w-full"
    >
      <motion.header variants={itemVariants} className="mb-10">
        <h1 className="text-3xl md:text-4xl font-sans font-semibold text-primary dark:text-white tracking-tight">仪表盘</h1>
      </motion.header>

      {/* Stats Cards */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatCard 
          title="账户余额" 
          icon={<Wallet className="w-4 h-4 text-gray-400" />} 
          value="$0.00" 
          subtitle="发布后可提取" 
        />
        <StatCard 
          title="活跃订阅" 
          icon={<Activity className="w-4 h-4 text-gray-400" />} 
          value={subs.length} 
          subtitle="当前有效订阅数" 
        />
        <StatCard 
          title="推荐人数" 
          icon={<Users className="w-4 h-4 text-gray-400" />} 
          value="1" 
          subtitle="成功邀请的好友" 
        />
      </motion.div>

      {/* Whitelisted Status */}
      <motion.div variants={itemVariants} className="mb-8">
        <WhitelistCard isWhitelisted={subs.length > 0} date="2026年2月24日" />
      </motion.div>

      {/* Invite Friends */}
      <motion.section variants={itemVariants} className="mb-12">
        <InviteCard 
          referralLink="https://test.razzhood.com/r/KP8FAY" 
          copied={copied} 
          onCopy={handleCopy} 
        />
      </motion.section>

      {/* My Positions */}
      <motion.section variants={itemVariants} className="mb-12">
        <PositionsCard />
      </motion.section>

      {/* Your Subscriptions */}
      <motion.section variants={itemVariants}>
        <h2 className="text-2xl font-sans font-semibold text-primary dark:text-white mb-6 tracking-tight">您的订阅</h2>
        <div className="bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm rounded-sm overflow-hidden">
          <div className="flex flex-col">
            <AnimatePresence>
              {subs.length === 0 && (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0, height: 0 }} 
                  animate={{ opacity: 1, height: 'auto' }} 
                  exit={{ opacity: 0, height: 0 }} 
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="p-8 text-center text-gray-500">
                    暂无活跃订阅
                  </div>
                </motion.div>
              )}
              {subs.map((sub) => (
                <SubscriptionItem 
                  key={sub.id} 
                  sub={sub} 
                  onCancel={handleCancelSubscription} 
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
