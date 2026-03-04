import { Link, useLocation } from 'react-router-dom';
import { Globe, ChevronDown, Circle } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  const isActive = (path: string) => {
    return location.pathname.startsWith(path) ? 'text-primary dark:text-white font-semibold' : 'hover:text-primary dark:hover:text-white';
  };

  return (
    <nav className="border-b border-border-light/50 dark:border-border-dark/50 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md px-6 py-4 flex justify-between items-center shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="flex items-center">
        <Link to="/" className="bg-primary text-white w-10 h-10 flex items-center justify-center rounded-sm shadow-sm hover:scale-105 transition-transform duration-200">
          <Circle className="w-6 h-6 fill-current" />
        </Link>
        <span className="ml-3 font-bold text-lg tracking-tight text-primary dark:text-white">RAZZHOOD</span>
      </div>
      <div className="hidden md:flex items-center space-x-8 font-sans text-sm font-medium text-text-muted-light dark:text-text-muted-dark">
        <Link to="/creators" className={`transition-colors duration-200 ${isActive('/creators')}`}>创作者</Link>
        
        {!isDashboard ? (
          <>
            <a href="/#how-it-works" className="hover:text-primary dark:hover:text-white transition-colors duration-200">如何运作</a>
            <Link to="/login" className="hover:text-primary dark:hover:text-white transition-colors duration-200">登录</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className={`transition-colors duration-200 ${isActive('/dashboard')}`}>仪表盘</Link>
            <Link to="/" className="hover:text-primary dark:hover:text-white transition-colors duration-200">退出</Link>
          </>
        )}

        <div className="flex items-center cursor-pointer hover:text-primary dark:hover:text-white transition-colors duration-200 group">
          <Globe className="w-4 h-4 mr-1.5 text-text-muted-light group-hover:text-primary transition-colors" />
          <span>CN 简体中文</span>
          <ChevronDown className="w-4 h-4 ml-1 opacity-50 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </nav>
  );
}
