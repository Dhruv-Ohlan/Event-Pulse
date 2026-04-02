import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="bg-surface font-body text-on-surface antialiased overflow-x-hidden min-h-screen">
      {/* Top Navigation Bar */}
      <header className="bg-[#f5f7f9]/80 dark:bg-[#0f172a]/80 backdrop-blur-xl docked full-width top-0 sticky z-50 flex justify-between items-center px-6 py-3 w-full font-['Manrope'] antialiased tracking-tight">
        <div className="flex items-center gap-8">
          <div className="text-xl font-bold tracking-tight text-[#2c2f31] dark:text-[#f1f5f9]">Event Pulse</div>
          <nav className="hidden md:flex gap-6 items-center">
            <a className="text-[#4F46E5] dark:text-[#9795ff] font-semibold text-sm" href="#">Product</a>
            <a className="text-[#64748b] dark:text-[#94a3b8] hover:bg-[#eef1f3] dark:hover:bg-[#1e293b] transition-all duration-200 px-3 py-1.5 rounded-lg text-sm" href="#">Solutions</a>
            <a className="text-[#64748b] dark:text-[#94a3b8] hover:bg-[#eef1f3] dark:hover:bg-[#1e293b] transition-all duration-200 px-3 py-1.5 rounded-lg text-sm" href="#">Resources</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[#64748b] dark:text-[#94a3b8] font-medium text-sm px-4 py-2 hover:bg-[#eef1f3] transition-all duration-200 rounded-lg">Login</button>
          <Link to="/dashboard" className="bg-primary text-on-primary font-semibold text-sm px-5 py-2.5 rounded-xl shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
            Sign Up
          </Link>
        </div>
      </header>
      
      <main className="relative">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 bg-surface-container-low px-4 py-1.5 rounded-full border border-outline-variant/15">
              <span className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_#983772]"></span>
              <span className="text-[0.7rem] font-bold uppercase tracking-widest font-label text-on-surface-variant">Now in Beta for College Societies</span>
            </div>
            <h1 className="font-headline text-5xl md:text-6xl font-extrabold text-on-surface leading-[1.1] tracking-tight">
              Go from event idea to campaign plan in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">seconds.</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
              AI-powered PR and campaign planning built for college societies, councils, and fest teams. Let your Academic Co-Pilot handle the logistics while you focus on the vision.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/create-campaign" className="bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold text-lg px-8 py-4 rounded-xl shadow-[0_12px_40px_rgba(74,64,224,0.06)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 inline-block">
                Create Campaign
              </Link>
              <button className="text-primary font-bold text-lg px-8 py-4 rounded-xl border border-outline-variant/15 hover:bg-surface-container-low transition-all duration-200 flex items-center gap-2">
                <span className="material-symbols-outlined">play_circle</span>
                See Demo
              </button>
            </div>
            <div className="pt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-surface object-cover" alt="Student" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=60" />
                <img className="w-10 h-10 rounded-full border-2 border-surface object-cover" alt="Student" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=60" />
                <img className="w-10 h-10 rounded-full border-2 border-surface object-cover" alt="Student" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=60" />
              </div>
              <p className="text-sm text-on-surface-variant font-medium">Trusted by <span className="text-primary font-bold">500+</span> society leads</p>
            </div>
          </div>
          
          <div className="flex-1 relative w-full">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[80px]"></div>
            <div className="grid grid-cols-12 gap-4 relative">
              <div className="col-span-12 bg-surface-container-lowest rounded-xl shadow-[0_24px_48px_rgba(74,64,224,0.08)] overflow-hidden border border-outline-variant/10">
                <div className="p-4 bg-surface-container-low flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-error/20"></div>
                    <div className="w-3 h-3 rounded-full bg-tertiary-container/20"></div>
                    <div className="w-3 h-3 rounded-full bg-secondary-container/20"></div>
                  </div>
                  <div className="text-[0.7rem] font-bold text-on-surface-variant tracking-widest font-label uppercase">Campaign Preview</div>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">auto_awesome</span>
                    </div>
                    <div className="flex-1">
                      <div className="h-4 bg-surface-container-low rounded-full w-3/4 mb-2"></div>
                      <div className="h-3 bg-surface-container-low rounded-full w-full mb-2"></div>
                      <div className="h-3 bg-surface-container-low rounded-full w-5/6"></div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-tertiary/10 px-3 py-1 rounded-full">
                    <span className="material-symbols-outlined text-[1rem] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                    <span className="text-[0.7rem] font-bold text-tertiary uppercase tracking-wider font-label">Trending Insight: High Engagement Found</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-surface-container-low rounded-lg p-3">
                      <div className="h-2 bg-outline-variant/30 rounded-full w-1/2 mb-3"></div>
                      <div className="h-4 bg-primary/20 rounded-full w-3/4"></div>
                    </div>
                    <div className="h-20 bg-surface-container-low rounded-lg p-3">
                      <div className="h-2 bg-outline-variant/30 rounded-full w-1/2 mb-3"></div>
                      <div className="h-4 bg-secondary/20 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-6 bg-surface/40 glass-panel absolute -bottom-10 -left-6 p-5 rounded-xl border border-white/20 shadow-xl flex items-center gap-4 z-10">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-primary">campaign</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">PR Draft Ready</p>
                  <p className="text-sm font-semibold">"TechFest 2024 Launch"</p>
                </div>
              </div>
              <div className="col-span-6 bg-surface/40 glass-panel absolute -top-8 -right-4 p-5 rounded-xl border border-white/20 shadow-xl flex items-center gap-4 z-10">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary">query_stats</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Engagement</p>
                  <p className="text-sm font-semibold">+24% projected</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline text-4xl font-bold tracking-tight">Built for Student Leaders</h2>
            <p className="text-on-surface-variant text-lg">Tools that understand the chaos of society life.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between group overflow-hidden relative min-h-[400px]">
              <div className="relative z-10 max-w-sm">
                <div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined">edit_note</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-3">Instant Content Editor</h3>
                <p className="text-on-surface-variant leading-relaxed">Draft social posts, emails, and press releases specifically tailored for campus audiences. One prompt, ten platforms.</p>
              </div>
              <div className="absolute -right-10 -bottom-10 w-2/3 h-2/3 bg-surface-container-lowest rounded-xl shadow-2xl rotate-3 translate-y-10 group-hover:translate-y-4 transition-transform duration-500 p-6">
                <div className="space-y-4">
                  <div className="h-3 bg-surface-container-low rounded-full w-full"></div>
                  <div className="h-3 bg-surface-container-low rounded-full w-5/6"></div>
                  <div className="h-3 bg-surface-container-low rounded-full w-4/6"></div>
                  <div className="h-3 bg-primary/10 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary to-primary-container rounded-xl p-8 text-on-primary flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white mb-6">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_graph</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-3">Timeline Sync</h3>
                <p className="text-on-primary/80 leading-relaxed">Smart scheduling that knows when students are most active online—and when they're in lectures.</p>
              </div>
              <div className="pt-8 flex items-end justify-between">
                <span className="text-5xl font-extrabold opacity-20">98%</span>
                <span className="text-sm font-medium px-3 py-1 bg-white/20 rounded-full">Automated</span>
              </div>
            </div>
            
            <div className="bg-surface-container-low rounded-xl p-8 flex flex-col justify-between group h-full">
              <div>
                <div className="w-12 h-12 rounded-xl bg-secondary-container/30 flex items-center justify-center text-secondary mb-6">
                  <span className="material-symbols-outlined">diversity_3</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-3">Society Collab</h3>
                <p className="text-on-surface-variant leading-relaxed">Shared workspaces for your entire core team. No more messy WhatsApp threads.</p>
              </div>
              <div className="mt-8 flex justify-center">
                <div className="relative w-full h-12 bg-surface-container-lowest rounded-full border border-outline-variant/10 flex items-center px-4 gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/20"></div>
                  <div className="flex-1 h-2 bg-surface-container-low rounded-full"></div>
                  <span className="material-symbols-outlined text-xs text-outline">done_all</span>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 bg-surface-container-high rounded-xl p-8 flex items-center gap-12 group overflow-hidden">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-xl bg-tertiary-container/30 flex items-center justify-center text-tertiary mb-6">
                  <span className="material-symbols-outlined">analytics</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-3">Real-time Analytics</h3>
                <p className="text-on-surface-variant leading-relaxed">See how your campaign performs across student groups. Pivot with data, not guesses.</p>
              </div>
              <div className="hidden md:block flex-1">
                <div className="w-full h-48 bg-primary/20 rounded-lg shadow-lg rotate-2 group-hover:rotate-0 transition-transform duration-500 overflow-hidden flex items-center justify-center relative">
                    <span className="material-symbols-outlined text-6xl text-primary/50">bar_chart</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-5xl mx-auto px-6 py-32">
          <div className="bg-inverse-surface rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6.png')]"></div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[60px]"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-tertiary/20 rounded-full blur-[60px]"></div>
            <div className="relative z-10 space-y-8">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tight">Ready to launch your best event?</h2>
              <p className="text-on-surface-variant text-lg max-w-2xl mx-auto opacity-80">Join hundreds of societies using Event Pulse to streamline their PR workflow.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="bg-white text-on-surface font-bold text-lg px-10 py-5 rounded-2xl hover:bg-surface-bright transition-all duration-200">
                  Create Campaign Free
                </button>
                <button className="text-white font-bold text-lg px-10 py-5 rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-200">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-outline-variant/10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tight text-on-surface">Event Pulse</div>
            <p className="text-on-surface-variant text-sm max-w-xs">Empowering the next generation of campus organizers with intelligent planning tools.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Product</p>
              <ul className="space-y-2 text-sm text-on-surface-variant">
                <li><a className="hover:text-primary transition-colors" href="#">Campaign Editor</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Analytics</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Team Spaces</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Society</p>
              <ul className="space-y-2 text-sm text-on-surface-variant">
                <li><a className="hover:text-primary transition-colors" href="#">Pricing</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Beta Access</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Support</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Legal</p>
              <ul className="space-y-2 text-sm text-on-surface-variant">
                <li><a className="hover:text-primary transition-colors" href="#">Privacy</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-outline">
          <p>© 2024 Event Pulse. Built for the academic ecosystem.</p>
          <div className="flex gap-6">
            <a className="hover:text-on-surface" href="#">Twitter</a>
            <a className="hover:text-on-surface" href="#">Instagram</a>
            <a className="hover:text-on-surface" href="#">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
