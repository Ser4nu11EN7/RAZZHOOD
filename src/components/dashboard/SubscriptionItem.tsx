import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export interface Subscription {
  id: string;
  name: string;
  initials?: string;
  color?: string;
  image?: string;
  date: string;
  link?: string;
}

interface SubscriptionItemProps {
  sub: Subscription;
  onCancel: (id: string, name: string) => void;
}

export function SubscriptionItem({ sub, onCancel }: SubscriptionItemProps) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.2 }}
      className="overflow-hidden border-b border-border-light dark:border-border-dark last:border-0"
    >
      <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-gray-50/50 dark:hover:bg-surface-dark/50 transition-colors gap-4">
        <div className="flex items-center gap-4">
          {sub.image ? (
            <img src={sub.image} alt="Profile" className="w-12 h-12 rounded-full object-cover shadow-sm flex-shrink-0" />
          ) : (
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${sub.color} flex items-center justify-center text-white font-bold text-lg shadow-sm flex-shrink-0`}>{sub.initials}</div>
          )}
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              {sub.link ? (
                <Link to={sub.link} className="font-bold text-gray-900 dark:text-white text-base hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{sub.name}</Link>
              ) : (
                <h3 className="font-bold text-gray-900 dark:text-white text-base">{sub.name}</h3>
              )}
              <span className="px-2 py-0.5 bg-[#dcfce7] text-[#166534] dark:bg-green-900/30 dark:text-green-400 text-[10px] font-bold rounded-full uppercase tracking-wider">活跃</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">$1.00 <span className="text-gray-400 dark:text-gray-500">/ 月</span></p>
          </div>
        </div>
        <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
          <div className="text-left sm:text-right">
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-0.5">下次续费</p>
            <p className="text-sm font-medium text-gray-900 dark:text-white">{sub.date}</p>
          </div>
          <button 
            onClick={() => onCancel(sub.id, sub.name)}
            className="px-4 py-1.5 border border-red-200 dark:border-red-900/50 text-red-500 dark:text-red-400 font-medium rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-sm bg-white dark:bg-transparent"
          >
            取消
          </button>
        </div>
      </div>
    </motion.div>
  );
}
