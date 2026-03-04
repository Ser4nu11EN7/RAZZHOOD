export function PositionsCard() {
  return (
    <div className="bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm rounded-sm p-6">
      <div className="flex items-center justify-between mb-12">
        <h3 className="font-bold text-gray-900 dark:text-white text-lg">我的仓位</h3>
        <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">查看融资轮 →</a>
      </div>
      <div className="flex flex-col items-center justify-center pb-8">
        <p className="text-gray-500 mb-6">您目前没有任何投资仓位。</p>
        <button className="bg-black text-white px-6 py-3 rounded-sm font-medium hover:bg-gray-800 transition-colors">
          浏览融资轮
        </button>
      </div>
    </div>
  );
}
