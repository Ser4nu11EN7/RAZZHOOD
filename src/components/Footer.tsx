import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-border-light dark:border-border-dark py-12 text-center text-text-muted-light dark:text-text-muted-dark bg-surface-light dark:bg-surface-dark mt-auto">
      <div className="flex justify-center space-x-6 mb-6">
        <Link to="#" className="hover:text-primary dark:hover:text-white transition-colors">隐私政策</Link>
        <Link to="#" className="hover:text-primary dark:hover:text-white transition-colors">服务条款</Link>
        <Link to="#" className="hover:text-primary dark:hover:text-white transition-colors">联系我们</Link>
      </div>
      <p className="font-sans text-sm">© 2026 RAZZHOOD. 保留所有权利。</p>
    </footer>
  );
}
