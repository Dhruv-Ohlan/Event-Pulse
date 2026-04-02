export default function CampaignTimeline() {
  return (
    <>
    <div className="p-10 max-w-6xl mx-auto">
      
{/*  Page Header  */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary/10 text-tertiary rounded-full mb-4">
<span className="material-symbols-outlined text-sm">bolt</span>
<span className="text-[10px] font-bold uppercase tracking-widest">AI Strategy Active</span>
</div>
<h2 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface mb-3">Spring Gala 2024 Timeline</h2>
<p className="text-on-surface-variant leading-relaxed">We've architected a 5-step communication strategy to maximize ticket conversions and social buzz. Each phase is optimized for specific academic channels.</p>
</div>
<div className="flex gap-3">
<button className="px-5 py-2.5 rounded-xl text-primary font-semibold text-sm hover:bg-primary/5 transition-colors">Edit Strategy</button>
<button className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-semibold text-sm flex items-center gap-2 shadow-lg shadow-primary/10 hover:translate-y-[-2px] transition-all">
<span className="material-symbols-outlined text-sm">publish</span>
                        Deploy All
                    </button>
</div>
</div>
{/*  Timeline Workflow  */}
<div className="relative">
{/*  Vertical Line  */}
<div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-container to-surface-container-high hidden md:block"></div>
<div className="space-y-10">
{/*  Item 1: Pre-event Teaser  */}
<div className="relative md:pl-20 group">
{/*  Timeline Node  */}
<div className="absolute left-[26px] top-6 w-3 h-3 rounded-full bg-primary border-4 border-surface z-10 hidden md:block group-hover:scale-150 transition-transform"></div>
<div className="bg-surface-container-lowest rounded-2xl p-6 flex flex-col md:flex-row gap-8 items-start md:items-center shadow-sm hover:shadow-md transition-shadow">
<div className="flex-shrink-0">
<div className="w-16 h-16 rounded-2xl bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl">campaign</span>
</div>
</div>
<div className="flex-grow space-y-1">
<div className="flex items-center gap-3 mb-1">
<span className="text-[10px] font-bold text-outline uppercase tracking-wider">Phase 01 — Mar 10</span>
<span className="px-2 py-0.5 bg-secondary/10 text-secondary text-[10px] font-bold rounded-full uppercase">Generated</span>
</div>
<h3 className="font-headline text-xl font-bold text-on-surface">Pre-event Teaser</h3>
<p className="text-sm text-on-surface-variant max-w-md">Spark curiosity with a mysterious silhouette of the venue and a "Save the Date" countdown.</p>
</div>
<div className="flex-shrink-0 w-full md:w-auto flex flex-col gap-3">
<div className="flex items-center gap-2 text-xs text-outline mb-1">
<span className="material-symbols-outlined text-sm">share</span>
<span>Instagram, Discord</span>
</div>
<button className="w-full md:w-auto px-6 py-2 bg-surface-container-high text-on-surface rounded-xl font-semibold text-xs hover:bg-surface-container-highest transition-colors">
                                    Preview Copy
                                </button>
</div>
</div>
</div>
{/*  Item 2: Main Announcement  */}
<div className="relative md:pl-20 group">
<div className="absolute left-[26px] top-6 w-3 h-3 rounded-full bg-primary border-4 border-surface z-10 hidden md:block group-hover:scale-150 transition-transform"></div>
<div className="bg-surface-container-lowest rounded-2xl p-6 flex flex-col md:flex-row gap-8 items-start md:items-center shadow-sm border border-primary/5">
<div className="flex-shrink-0">
<div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl">celebration</span>
</div>
</div>
<div className="flex-grow space-y-1">
<div className="flex items-center gap-3 mb-1">
<span className="text-[10px] font-bold text-outline uppercase tracking-wider">Phase 02 — Mar 15</span>
<span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase italic">Ready to generate</span>
</div>
<h3 className="font-headline text-xl font-bold text-on-surface">Main Announcement</h3>
<p className="text-sm text-on-surface-variant max-w-md">Official reveal of theme, ticket prices, and early-bird registration links.</p>
</div>
<div className="flex-shrink-0 w-full md:w-auto flex flex-col gap-3">
<div className="flex items-center gap-2 text-xs text-outline mb-1">
<span className="material-symbols-outlined text-sm">mail</span>
<span>Newsletter, LinkedIn</span>
</div>
<button className="w-full md:w-auto px-6 py-2 bg-primary text-on-primary rounded-xl font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-primary/10 hover:scale-[1.02] transition-all">
<span className="material-symbols-outlined text-xs">auto_awesome</span>
                                    Generate Copy
                                </button>
</div>
</div>
</div>
{/*  Item 3: Reminder Post  */}
<div className="relative md:pl-20 group">
<div className="absolute left-[26px] top-6 w-3 h-3 rounded-full bg-primary-container border-4 border-surface z-10 hidden md:block group-hover:scale-150 transition-transform"></div>
<div className="bg-surface-container-lowest rounded-2xl p-6 flex flex-col md:flex-row gap-8 items-start md:items-center shadow-sm">
<div className="flex-shrink-0">
<div className="w-16 h-16 rounded-2xl bg-surface-container-low flex items-center justify-center text-outline">
<span className="material-symbols-outlined text-3xl">notifications_active</span>
</div>
</div>
<div className="flex-grow space-y-1">
<div className="flex items-center gap-3 mb-1">
<span className="text-[10px] font-bold text-outline uppercase tracking-wider">Phase 03 — Mar 22</span>
<span className="px-2 py-0.5 bg-surface-container-high text-outline text-[10px] font-bold rounded-full uppercase">Pending</span>
</div>
<h3 className="font-headline text-xl font-bold text-on-surface">Reminder Post</h3>
<p className="text-sm text-on-surface-variant max-w-md">Highlight specific event features (catering, music, speakers) to drive sustained interest.</p>
</div>
<div className="flex-shrink-0 w-full md:w-auto flex flex-col gap-3">
<div className="flex items-center gap-2 text-xs text-outline mb-1">
<span className="material-symbols-outlined text-sm">tag</span>
<span>Twitter, TikTok</span>
</div>
<button className="w-full md:w-auto px-6 py-2 bg-surface-container-high text-on-surface rounded-xl font-semibold text-xs hover:bg-surface-container-highest transition-colors opacity-60">
                                    Locked
                                </button>
</div>
</div>
</div>
{/*  Item 4: Last-day Push  */}
<div className="relative md:pl-20 group">
<div className="absolute left-[26px] top-6 w-3 h-3 rounded-full bg-primary-container border-4 border-surface z-10 hidden md:block group-hover:scale-150 transition-transform"></div>
<div className="bg-surface-container-lowest rounded-2xl p-6 flex flex-col md:flex-row gap-8 items-start md:items-center shadow-sm">
<div className="flex-shrink-0">
<div className="w-16 h-16 rounded-2xl bg-surface-container-low flex items-center justify-center text-outline">
<span className="material-symbols-outlined text-3xl">timer</span>
</div>
</div>
<div className="flex-grow space-y-1">
<div className="flex items-center gap-3 mb-1">
<span className="text-[10px] font-bold text-outline uppercase tracking-wider">Phase 04 — Mar 29</span>
<span className="px-2 py-0.5 bg-surface-container-high text-outline text-[10px] font-bold rounded-full uppercase">Pending</span>
</div>
<h3 className="font-headline text-xl font-bold text-on-surface">Last-day Push</h3>
<p className="text-sm text-on-surface-variant max-w-md">FOMO-driven messaging focused on limited remaining tickets and "don't be the one left out."</p>
</div>
<div className="flex-shrink-0 w-full md:w-auto flex flex-col gap-3">
<div className="flex items-center gap-2 text-xs text-outline mb-1">
<span className="material-symbols-outlined text-sm">chat</span>
<span>WhatsApp, SMS</span>
</div>
<button className="w-full md:w-auto px-6 py-2 bg-surface-container-high text-on-surface rounded-xl font-semibold text-xs hover:bg-surface-container-highest transition-colors opacity-60">
                                    Locked
                                </button>
</div>
</div>
</div>
{/*  Item 5: Final Call  */}
<div className="relative md:pl-20 group">
<div className="absolute left-[26px] top-6 w-3 h-3 rounded-full bg-outline-variant border-4 border-surface z-10 hidden md:block group-hover:scale-150 transition-transform"></div>
<div className="bg-surface-container-lowest rounded-2xl p-6 flex flex-col md:flex-row gap-8 items-start md:items-center shadow-sm">
<div className="flex-shrink-0">
<div className="w-16 h-16 rounded-2xl bg-tertiary/5 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-3xl">priority_high</span>
</div>
</div>
<div className="flex-grow space-y-1">
<div className="flex items-center gap-3 mb-1">
<span className="text-[10px] font-bold text-outline uppercase tracking-wider">Phase 05 — Mar 30</span>
<span className="px-2 py-0.5 bg-error/10 text-error text-[10px] font-bold rounded-full uppercase">Critical</span>
</div>
<h3 className="font-headline text-xl font-bold text-on-surface">Final Call</h3>
<p className="text-sm text-on-surface-variant max-w-md">Direct urgent prompt: "Registration closes in 2 hours." Highest conversion intent.</p>
</div>
<div className="flex-shrink-0 w-full md:w-auto flex flex-col gap-3">
<div className="flex items-center gap-2 text-xs text-outline mb-1">
<span className="material-symbols-outlined text-sm">dynamic_feed</span>
<span>All Channels</span>
</div>
<button className="w-full md:w-auto px-6 py-2 bg-surface-container-high text-on-surface rounded-xl font-semibold text-xs hover:bg-surface-container-highest transition-colors opacity-60">
                                    Locked
                                </button>
</div>
</div>
</div>
</div>
</div>
{/*  Footer Stats / Asymmetric Insight  */}
<div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="col-span-2 bg-primary p-10 rounded-[2rem] text-on-primary flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-primary/30">
<div className="relative z-10">
<h4 className="font-headline text-2xl font-bold mb-4">Engagement Forecast</h4>
<p className="text-primary-container max-w-md mb-8">Based on historic data from similar society events, this timeline is projected to reach 4,200+ students with a 12% click-through rate.</p>
<div className="flex gap-10">
<div>
<p className="text-4xl font-extrabold tracking-tight">84%</p>
<p className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-70">Conviction Score</p>
</div>
<div>
<p className="text-4xl font-extrabold tracking-tight">+18%</p>
<p className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-70">Vs Last Campaign</p>
</div>
</div>
</div>
{/*  Subtle Abstract Shape  */}
<div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
</div>
<div className="bg-white p-8 rounded-[2rem] flex flex-col items-center justify-center text-center shadow-lg">
<div className="w-16 h-16 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary mb-6 shadow-sm shadow-tertiary/20">
<span className="material-symbols-outlined text-2xl" style={{"fontVariationSettings":"'FILL' 1"}}>bolt</span>
</div>
<p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-2">Pulse Insight</p>
<h5 className="font-headline font-bold text-lg text-on-surface leading-tight mb-4">Best Posting Time: <span className="text-primary">8:00 PM</span></h5>
<p className="text-xs text-on-surface-variant leading-relaxed px-4">Students show peak engagement on social platforms during this window for non-academic content.</p>
</div>
</div>
</div>
    </>
  );
}

