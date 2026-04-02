import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "bg-white text-primary rounded-xl shadow-sm px-4 py-3 mx-2 flex items-center gap-3 translate-x-1 duration-200"
      : "text-[#64748b] px-4 py-3 mx-2 flex items-center gap-3 hover:bg-white/50 transition-colors";

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 z-40 bg-[#eef1f3]/90 glass-nav flex flex-col py-6 shadow-[0_12px_40px_rgba(74,64,224,0.06)]">
      <div className="px-6 mb-10">
        <h1 className="font-headline font-extrabold text-primary uppercase tracking-widest text-lg">Event Pulse</h1>
        <p className="text-[10px] text-outline tracking-[0.2em] uppercase mt-1">Academic Co-Pilot</p>
      </div>
      
      <nav className="flex-1 space-y-1">
        <NavLink to="/dashboard" className={navLinkClass}>
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-['Inter'] font-medium text-sm">Dashboard</span>
        </NavLink>
        <NavLink to="/pulse" className={navLinkClass}>
          <span className="material-symbols-outlined">campaign</span>
          <span className="font-['Inter'] font-medium text-sm">Campus Pulse</span>
        </NavLink>
        <NavLink to="/create-campaign" className={navLinkClass}>
          <span className="material-symbols-outlined">add_circle</span>
          <span className="font-['Inter'] font-medium text-sm">Create Campaign</span>
        </NavLink>
        <NavLink to="/editor" className={navLinkClass}>
          <span className="material-symbols-outlined">edit_note</span>
          <span className="font-['Inter'] font-medium text-sm">Content Editor</span>
        </NavLink>
        <NavLink to="/timeline" className={navLinkClass}>
          <span className="material-symbols-outlined">auto_graph</span>
          <span className="font-['Inter'] font-medium text-sm">Timeline</span>
        </NavLink>
        <NavLink to="/export-summary" className={navLinkClass}>
          <span className="material-symbols-outlined">pie_chart</span>
          <span className="font-['Inter'] font-medium text-sm">Export/Summary</span>
        </NavLink>
      </nav>

      <div className="mt-auto px-4 py-4">
        <button className="w-full bg-primary text-on-primary rounded-xl py-3 font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
          <span className="material-symbols-outlined text-sm">add</span>
          New Event
        </button>
      </div>
      
      <div className="mt-4 pt-4 border-t border-outline-variant/10 space-y-1">
        <a href="#" className="text-[#64748b] px-4 py-3 mx-2 flex items-center gap-3 hover:bg-white/50 transition-colors text-sm">
          <span className="material-symbols-outlined">settings</span>
          Settings
        </a>
        <a href="#" className="text-[#64748b] px-4 py-3 mx-2 flex items-center gap-3 hover:bg-white/50 transition-colors text-sm">
          <span className="material-symbols-outlined">contact_support</span>
          Support
        </a>
      </div>
    </aside>
  );
}
