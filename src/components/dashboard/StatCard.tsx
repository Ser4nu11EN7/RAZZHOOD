import { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  icon: ReactNode;
  value: string | number;
  subtitle: string;
}

export function StatCard({ title, icon, value, subtitle }: StatCardProps) {
  return (
    <div className="bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark p-6 shadow-sm hover:shadow-md transition-all duration-300 rounded-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark font-sans tracking-wide">{title}</h3>
        {icon}
      </div>
      <div className="text-3xl font-sans font-bold text-primary dark:text-white tracking-tight mb-1">{value}</div>
      <p className="text-xs text-text-muted-light dark:text-text-muted-dark font-sans">{subtitle}</p>
    </div>
  );
}
