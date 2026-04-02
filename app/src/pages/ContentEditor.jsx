export default function ContentEditor() {
  return (
    <div className="p-10 max-w-6xl mx-auto">
      
{/*  TopAppBar (Shared Component Equivalent)  */}
<header className="bg-[#f5f7f9]/80 backdrop-blur-xl sticky top-0 z-50 flex justify-between items-center px-8 py-4 w-full">
<div className="flex items-center gap-4">
<h2 className="font-headline font-bold text-xl tracking-tight text-on-surface">Content Editor</h2>
<div className="h-4 w-px bg-outline-variant/30"></div>
<span className="text-on-surface-variant text-sm font-medium">Draft: Tech Symposium 2024</span>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 text-primary font-semibold text-sm hover:bg-surface-container-low rounded-lg transition-all">
                    Help
                </button>
<button className="bg-primary text-on-primary px-5 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all">
<span className="material-symbols-outlined text-lg">save</span>
                    Save changes
                </button>
</div>
</header>
{/*  Editor Canvas  */}
<div className="p-8 max-w-7xl mx-auto grid grid-cols-12 gap-8">
{/*  Workspace: Asymmetric Layout  */}
<div className="col-span-12 lg:col-span-8 space-y-6">
{/*  Format Selector (Context Tabs)  */}
<div className="flex gap-2 p-1 bg-surface-container-low rounded-xl w-fit">
<button className="px-4 py-2 bg-surface-container-lowest text-primary rounded-lg shadow-sm text-sm font-semibold flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">retweet</span> Instagram
                    </button>
<button className="px-4 py-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg text-sm font-medium flex items-center gap-2 transition-all">
<span className="material-symbols-outlined text-[18px]">chat</span> WhatsApp
                    </button>
<button className="px-4 py-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg text-sm font-medium flex items-center gap-2 transition-all">
<span className="material-symbols-outlined text-[18px]">mail</span> Email
                    </button>
</div>
{/*  Editor Card  */}
<div className="bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant/10 min-h-[500px] flex flex-col">
<div className="flex justify-between items-start mb-6">
<div className="space-y-1">
<label className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">AI Copywriter</label>
<h3 className="font-headline font-bold text-on-surface">Instagram Caption Draft</h3>
</div>
<div className="flex gap-2">
<button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-all" title="Copy to clipboard">
<span className="material-symbols-outlined">content_copy</span>
</button>
<button className="flex items-center gap-2 bg-primary/5 hover:bg-primary/10 text-primary px-4 py-2 rounded-lg font-semibold text-sm transition-all group">
<span className="material-symbols-outlined text-[18px] group-hover:rotate-12 transition-transform">auto_awesome</span>
                                Regenerate
                            </button>
</div>
</div>
{/*  Main Text Area  */}
<div className="flex-1 relative">
<textarea className="w-full h-full min-h-[350px] bg-transparent border-none focus:ring-0 text-on-surface-variant font-body leading-relaxed text-lg resize-none p-0 selection:bg-primary-container selection:text-on-primary-container" spellcheck="false">🚀 The future belongs to those who build it. 

Join us for the Annual Tech Symposium 2024 at the Great Hall. From AI workshops to networking with top-tier developers, this is where the industry meets academia.

📍 Location: Great Hall, East Campus
view link in bio for registrations.

#TechSymposium #FutureOfAI #StudentLife #PulseEvent</textarea>
{/*  AI Floating Suggestion (Tactile Interaction)  */}
<div className="absolute bottom-4 left-0 right-0 flex justify-center">
<div className="bg-white/80 backdrop-blur-md border border-primary/20 px-4 py-2 rounded-full shadow-lg flex items-center gap-3 animate-pulse">
<span className="material-symbols-outlined text-primary text-sm">lightbulb</span>
<span className="text-xs font-medium text-on-surface-variant">AI suggests: "Add a question to increase engagement"</span>
<button className="text-[10px] font-bold text-primary uppercase tracking-tighter hover:underline">Apply</button>
</div>
</div>
</div>
</div>
{/*  Preview Area: Intentional Asymmetry  */}
<div className="grid grid-cols-2 gap-6">
<div className="bg-surface-container-low rounded-2xl p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-6xl">chat</span>
</div>
<h4 className="font-headline font-bold mb-4 text-on-surface text-sm">WhatsApp Message Preview</h4>
<div className="bg-white p-4 rounded-xl shadow-sm max-w-[280px]">
<p className="text-xs text-on-surface-variant leading-snug">
                                *Tech Symposium 2024* 🚀<br/><br/>
                                Hey everyone! Don't forget to register for our biggest event of the semester. <br/><br/>
                                Link: eventpulse.edu/tech-24
                            </p>
</div>
</div>
<div className="bg-surface-container-low rounded-2xl p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-6xl">mail</span>
</div>
<h4 className="font-headline font-bold mb-4 text-on-surface text-sm">Email Subject Preview</h4>
<div className="space-y-2">
<div className="bg-white px-4 py-3 rounded-lg shadow-sm border-l-4 border-primary">
<p className="text-[10px] font-bold text-primary uppercase">Subject Line A</p>
<p className="text-xs font-medium truncate">You're Invited: Tech Symposium 2024...</p>
</div>
<div className="bg-white/50 px-4 py-3 rounded-lg border-l-4 border-outline-variant">
<p className="text-[10px] font-bold text-on-surface-variant uppercase">Subject Line B</p>
<p className="text-xs font-medium truncate">The Future of AI is here – Don't Miss Out</p>
</div>
</div>
</div>
</div>
</div>
{/*  Side Panel: Content Health (No Borders, Tonal Shift)  */}
<aside className="col-span-12 lg:col-span-4 space-y-6">
<div className="bg-surface-container-high rounded-3xl p-8 space-y-8 sticky top-24">
<div>
<h3 className="font-headline font-extrabold text-on-surface text-lg mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>analytics</span>
                            Content Health
                        </h3>
{/*  Pulse Chip (Bespoke Component)  */}
<div className="inline-flex items-center gap-2 bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 shadow-[0_4px_12px_rgba(152,55,114,0.3)]">
<span className="material-symbols-outlined text-sm">bolt</span> High Engagement Potential
                        </div>
{/*  Scores Grid  */}
<div className="space-y-6">
<div className="space-y-2">
<div className="flex justify-between text-xs font-bold uppercase tracking-wide">
<span className="text-on-surface-variant">Clarity Score</span>
<span className="text-primary">90/100</span>
</div>
<div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full w-[90%]"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs font-bold uppercase tracking-wide">
<span className="text-on-surface-variant">CTA Strength</span>
<span className="text-secondary">Medium</span>
</div>
<div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden">
<div className="h-full bg-secondary rounded-full w-[65%]"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs font-bold uppercase tracking-wide">
<span className="text-on-surface-variant">Spam Risk</span>
<span className="text-on-surface">Very Low</span>
</div>
<div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden">
<div className="h-full bg-on-surface-variant/20 rounded-full w-[12%]"></div>
</div>
</div>
</div>
</div>
{/*  Improvement Suggestions  */}
<div className="pt-6 border-t border-on-surface-variant/10">
<h4 className="font-headline font-bold text-on-surface text-sm mb-4">Improvement Suggestions</h4>
<div className="space-y-4">
<div className="flex gap-4 group">
<div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex-shrink-0 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-200">
<span className="material-symbols-outlined text-[20px]">add_circle</span>
</div>
<p className="text-xs text-on-surface-variant leading-relaxed">
<span className="font-bold text-on-surface">Call to Action:</span> Try using "Secure Your Spot" instead of "View Link" for better conversion.
                                </p>
</div>
<div className="flex gap-4 group">
<div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex-shrink-0 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-200">
<span className="material-symbols-outlined text-[20px]">sentiment_satisfied</span>
</div>
<p className="text-xs text-on-surface-variant leading-relaxed">
<span className="font-bold text-on-surface">Tone Check:</span> The current tone is "Inspirational". Try "Urgent" to drive ticket sales.
                                </p>
</div>
</div>
</div>
{/*  AI Context Card  */}
<div className="bg-primary p-6 rounded-2xl text-on-primary relative overflow-hidden group">
<div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
<span className="material-symbols-outlined text-9xl">auto_awesome</span>
</div>
<p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Campaign Context</p>
<p className="text-sm font-medium leading-relaxed mb-4">AI is optimized for "STEM Students" based on your campaign settings.</p>
<button className="bg-on-primary text-primary px-4 py-2 rounded-lg text-xs font-bold hover:scale-[1.05] transition-transform">
                            Update Context
                        </button>
</div>
</div>
</aside>
</div>
    </div>
  );
}
