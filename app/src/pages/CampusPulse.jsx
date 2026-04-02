import React from 'react';

export default function CampusPulse() {
  return (
    <div className="p-10 max-w-7xl mx-auto space-y-12 animate-fade-in">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-8 justify-between items-end mb-12">
        <div className="max-w-2xl">
          <span className="bg-tertiary/10 text-tertiary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-[0_4px_12px_rgba(152,55,114,0.1)] mb-4 inline-block">
            The Intelligent Canvas
          </span>
          <h1 className="text-5xl font-extrabold tracking-tight text-on-surface mb-4 font-headline">Campus Pulse</h1>
          <p className="text-on-surface-variant text-lg">
            Real-time intel on university engagement, trending events, and student attention dynamics.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-xl font-bold bg-surface-container-lowest text-primary border border-outline-variant/10 hover:bg-surface-container-low transition-all">Filter</button>
          <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-3 rounded-xl font-extrabold tracking-tight hover:shadow-[0_12px_40px_rgba(74,64,224,0.2)] hover:scale-[1.02] transition-all flex items-center gap-2">
            <span className="material-symbols-outlined">refresh</span>
            Refresh Pulse
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column - Trending */}
        <div className="lg:col-span-8 space-y-8">
          <section className="bg-surface-container-lowest rounded-2xl p-8 relative overflow-hidden border border-outline-variant/5">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">local_fire_department</span>
              Trending Across Campus
            </h3>
            <div className="space-y-4">
              {[
                { title: 'Tech Symposium 2024', category: 'Technical', engagement: '+45%', color: 'primary', icon: 'memory' },
                { title: 'Spring Music Fest', category: 'Cultural', engagement: '+32%', color: 'tertiary', icon: 'music_note' },
                { title: 'Alumni Dinner Network', category: 'Professional', engagement: '+12%', color: 'secondary', icon: 'work' },
                { title: 'Cybersecurity Workshop', category: 'Technical', engagement: '+8%', color: 'primary', icon: 'security' },
                { title: 'Inter-Department Hackathon', category: 'Technical', engagement: '+3%', color: 'primary', icon: 'terminal' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl group hover:bg-surface-container-high transition-colors cursor-pointer border border-transparent hover:border-outline-variant/20">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-${item.color}/10 flex items-center justify-center text-${item.color}`}>
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">{item.title}</h4>
                      <span className="text-xs uppercase font-bold tracking-widest text-outline-variant mt-1 block">{item.category}</span>
                    </div>
                  </div>
                  <div className={`text-${item.color} font-extrabold flex items-center gap-1`}>
                    <span className="material-symbols-outlined text-sm">trending_up</span>
                    {item.engagement}
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 py-4 bg-surface-container-low rounded-xl font-bold text-primary hover:bg-surface-container-high transition-all flex items-center justify-center gap-2">
              View All Trends
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </section>
        </div>

        {/* Right Column - Insights */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-gradient-to-br from-tertiary to-tertiary-dim p-8 rounded-2xl text-on-tertiary shadow-[0_12px_40px_rgba(152,55,114,0.15)] relative overflow-hidden group hover:scale-[1.01] transition-transform">
            <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
            <div className="flex items-center gap-2 mb-6 relative z-10">
              <div className="bg-white/20 p-2 rounded-lg">
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest">AI Pulse Insight</span>
            </div>
            <p className="font-semibold text-lg leading-tight relative z-10 italic">
              "Cultural events are seeing a 20% spike in early-bird registrations. Consider pushing promotional content for Music Fest on Wednesday evenings."
            </p>
            <button className="mt-8 px-5 py-3 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-bold transition-all relative z-10 flex items-center gap-2 border border-white/10 group-hover:border-white/30">
              Read Deep Dive
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </button>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant/10">
            <h3 className="font-bold mb-6 text-xl text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">donut_large</span>
              Engagement by Channel
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold text-on-surface">
                  <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary inline-block"></span>Instagram</span>
                  <span className="text-primary">68%</span>
                </div>
                <div className="h-2 w-full bg-surface-container-low rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[68%] rounded-full"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold text-on-surface">
                  <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-secondary inline-block"></span>Email</span>
                  <span className="text-secondary">42%</span>
                </div>
                <div className="h-2 w-full bg-surface-container-low rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[42%] rounded-full"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold text-on-surface">
                  <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-tertiary inline-block"></span>WhatsApp</span>
                  <span className="text-tertiary">85%</span>
                </div>
                <div className="h-2 w-full bg-surface-container-low rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary w-[85%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/10 flex flex-col justify-between h-32">
              <span className="material-symbols-outlined text-outline-variant">groups</span>
              <div>
                <div className="text-3xl font-extrabold text-on-surface">4.2k</div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-outline-variant">Total Reach</div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/10 flex flex-col justify-between h-32">
              <span className="material-symbols-outlined text-outline-variant">campaign</span>
              <div>
                <div className="text-3xl font-extrabold text-on-surface">12</div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-outline-variant">Active Camps</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
