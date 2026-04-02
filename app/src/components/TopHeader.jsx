export default function TopHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[#f5f7f9]/80 glass-nav flex justify-between items-center px-8 py-4 w-full">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-64">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
          <input className="w-full bg-surface-container-low border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary" placeholder="Search..." type="text"/>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 border-r border-outline-variant/30 pr-6">
          <button className="text-outline hover:text-primary transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-outline hover:text-primary transition-colors">
            <span className="material-symbols-outlined">auto_awesome</span>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-on-surface">Alex Rivera</p>
            <p className="text-[10px] text-outline uppercase tracking-wider">Marketing Lead</p>
          </div>
          <img alt="User profile avatar" className="w-8 h-8 rounded-full bg-primary-container/20" src="https://ui-avatars.com/api/?name=Alex+Rivera&background=9795ff&color=fff"/>
        </div>
      </div>
    </header>
  );
}
