import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WhitelistCardProps {
  isWhitelisted: boolean;
  date?: string;
}

export function WhitelistCard({ isWhitelisted, date }: WhitelistCardProps) {
  if (isWhitelisted) {
    return (
      <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-sm p-6 flex items-center gap-4 shadow-sm">
        <div className="w-8 h-8 bg-[#16a34a] text-white flex items-center justify-center rounded-sm font-bold text-xl flex-shrink-0">
          <Check className="w-6 h-6" strokeWidth={3} />
        </div>
        <div>
          <h3 className="text-[#166534] font-bold text-lg">已获得 SpaceX 融资轮白名单</h3>
          <p className="text-[#15803d] text-sm">自 {date} 起</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm rounded-sm p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 text-red-500 flex items-center justify-center flex-shrink-0">
          <X className="w-8 h-8" strokeWidth={2.5} />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white text-lg">未获得白名单</h3>
          <p className="text-gray-500 text-sm">订阅任意创作者以获取白名单</p>
        </div>
      </div>
      <Link to="/creators" className="bg-black text-white px-6 py-2.5 rounded-sm font-medium text-sm hover:bg-gray-800 transition-colors whitespace-nowrap text-center">
        浏览创作者
      </Link>
    </div>
  );
}
