import { Check, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InviteCardProps {
  referralLink: string;
  copied: boolean;
  onCopy: () => void;
}

export function InviteCard({ referralLink, copied, onCopy }: InviteCardProps) {
  return (
    <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark p-8 shadow-sm rounded-sm">
      <h2 className="text-2xl font-sans font-semibold text-primary dark:text-white mb-3 tracking-tight">邀请好友</h2>
      <p className="text-text-muted-light dark:text-text-muted-dark font-sans mb-6 max-w-2xl leading-relaxed">
        分享您的推荐链接！您将获得20%的奖励，您的朋友在首次订阅时将获得10%的余额奖励。
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-grow relative group">
          <input 
            className="w-full bg-gray-50 dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark font-mono text-sm py-3 px-4 rounded-sm focus:border-primary focus:outline-none transition-colors" 
            readOnly 
            type="text" 
            value={referralLink}
          />
        </div>
        <button 
          onClick={onCopy}
          className={`relative font-sans font-medium px-6 py-3 rounded-sm transition-all text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap flex items-center justify-center gap-2 active:scale-95 w-32 overflow-hidden ${
            copied 
              ? 'bg-[#f0fdf4] text-green-700 border border-green-200 hover:bg-[#dcfce7]' 
              : 'bg-primary text-white hover:bg-primary/90'
          }`}
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="copied"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2"
              >
                <Check className="w-4 h-4" /> 已复制
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2"
              >
                <Copy className="w-4 h-4" /> 复制链接
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}
