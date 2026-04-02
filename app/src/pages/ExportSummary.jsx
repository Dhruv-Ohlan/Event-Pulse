import { useSelector } from 'react-redux';

export default function ExportSummary() {
    const currentCampaign = useSelector((state) => state.campaign.currentCampaign);
    return (
        <div className="p-10 max-w-6xl mx-auto">

            {/*  Hero Summary Header  */}
            <section className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <span className="inline-block px-3 py-1 bg-tertiary-container/30 text-tertiary font-semibold text-xs rounded-full mb-4 tracking-wider uppercase">Campaign Summary</span>
                    <h1 className="text-5xl font-headline font-extrabold text-on-surface tracking-tight leading-none mb-2">{currentCampaign.eventName || 'Winter Gala 2024'}</h1>
                    <p className="text-on-surface-variant text-lg max-w-xl">Final review of the comprehensive marketing strategy and content assets for the upcoming event.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-container-lowest text-primary font-semibold hover:bg-white transition-all duration-200 border border-outline-variant/20 shadow-sm">
                        <span className="material-symbols-outlined">share</span>
                        Share
                    </button>
                    <button className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-semibold hover:scale-[1.02] transition-all duration-200 shadow-[0_8px_24px_rgba(74,64,224,0.25)]">
                        <span className="material-symbols-outlined">download</span>
                        Export Campaign
                    </button>
                </div>
            </section>
            {/*  Bento Grid Overview  */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/*  Progress Card  */}
                <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-between h-64 border border-outline-variant/10">
                    <div className="flex justify-between items-start">
                        <span className="material-symbols-outlined text-primary text-3xl">task_alt</span>
                        <span className="text-xs font-bold text-outline uppercase tracking-widest">Progress</span>
                    </div>
                    <div>
                        <div className="text-4xl font-headline font-bold text-on-surface mb-2">92%</div>
                        <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-full w-[92%]"></div>
                        </div>
                    </div>
                    <p className="text-sm text-on-surface-variant">22 of 24 assets approved and ready for distribution.</p>
                </div>
                {/*  Assets Card  */}
                <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-between h-64 border border-outline-variant/10">
                    <div className="flex justify-between items-start">
                        <span className="material-symbols-outlined text-tertiary text-3xl">perm_media</span>
                        <span className="text-xs font-bold text-outline uppercase tracking-widest">Total Assets</span>
                    </div>
                    <div className="text-6xl font-headline font-extrabold text-on-surface">24</div>
                    <div className="flex gap-2">
                        <span className="px-2 py-1 bg-surface-container-low rounded text-[10px] font-bold text-on-surface-variant">12 POSTS</span>
                        <span className="px-2 py-1 bg-surface-container-low rounded text-[10px] font-bold text-on-surface-variant">8 STORIES</span>
                        <span className="px-2 py-1 bg-surface-container-low rounded text-[10px] font-bold text-on-surface-variant">4 EMAILS</span>
                    </div>
                </div>
                {/*  AI Insight Card  */}
                <div className="bg-gradient-to-br from-tertiary to-tertiary-dim p-8 rounded-xl text-on-tertiary flex flex-col justify-between h-64 shadow-[0_20px_40px_rgba(152,55,114,0.15)]">
                    <div className="flex justify-between items-start">
                        <span className="material-symbols-outlined text-3xl">auto_awesome</span>
                        <span className="text-xs font-bold opacity-70 uppercase tracking-widest">AI Pulse</span>
                    </div>
                    <div className="space-y-3">
                        <p className="font-headline font-semibold text-lg leading-tight">"Consider adding a story countdown for higher engagement 24h before ticket release."</p>
                        <div className="flex items-center gap-2 text-xs font-medium bg-white/10 w-fit px-3 py-1.5 rounded-full">
                            <span className="material-symbols-outlined text-sm">trending_up</span>
                            Predicted +18% CTR
                        </div>
                    </div>
                </div>
            </div>
            {/*  Content List  */}
            <section className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/10 mb-12">
                <h2 className="text-2xl font-headline font-bold mb-8 flex items-center gap-3">
                    Content Manifest
                    <span className="text-sm font-normal text-on-surface-variant bg-surface-container-low px-3 py-1 rounded-full">24 Items</span>
                </h2>
                <div className="space-y-4">
                    {/*  Item 1  */}
                    <div className="flex items-center justify-between p-4 rounded-xl hover:bg-surface-container-low transition-colors group">
                        <div className="flex items-center gap-6">
                            <div className="h-16 w-16 rounded-lg bg-surface-container-high overflow-hidden flex-shrink-0">
                                <img alt="Preview" data-alt="vibrant blue and gold promotional poster for a winter formal gala with elegant typography and snowflake motifs" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi4V_ON0DQoC7II8Yi_daq7Zt0a8sXmDyhd-o8JjzaJzXDyXt447rfRlHypho7TVcgoQdThABLh6qwyjPGic2aB65TJG31rBwEmqe4peHJhja0HwPSeSnWGQIVa8FzBnEQvYXCX50Es1muTtR9Ce0VjsnUIT-YW3zlqziHHcUMNtBsJibqsIgkpBssuSVJxMnHNM-mf2SVjpTMmhNkNecN9Wg4IddbbhFZ_M7usUKoTLL8A-QzIEiIfes1TqRQsPtbmnN4YqFMovk" />
                            </div>
                            <div>
                                <h3 className="font-bold text-on-surface">Main Event Announcement</h3>
                                <div className="flex items-center gap-4 mt-1">
                                    <span className="text-xs flex items-center gap-1 text-on-surface-variant">
                                        <span className="material-symbols-outlined text-sm">retweet</span>
                                        Instagram Post
                                    </span>
                                    <span className="text-xs flex items-center gap-1 text-on-surface-variant">
                                        <span className="material-symbols-outlined text-sm">calendar_today</span>
                                        Dec 12, 10:00 AM
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-8">
                            <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-secondary/10 text-secondary border border-secondary/20">READY TO PUBLISH</span>
                            <button className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">visibility</button>
                        </div>
                    </div>
                    {/*  Item 2  */}
                    <div className="flex items-center justify-between p-4 rounded-xl hover:bg-surface-container-low transition-colors group">
                        <div className="flex items-center gap-6">
                            <div className="h-16 w-16 rounded-lg bg-surface-container-high overflow-hidden flex-shrink-0">
                                <img alt="Preview" data-alt="cinematic vertical video frame showing golden sparks on a dark background with blurred festive lights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeyMTciK_Fgstnsn86lBOuqjkyQOrIeoE6qHFMb4kIn2NzPZVD8SvfnHUPLblaaiw7LFOMgpV66DmIIBnaeCgbBXpZGoui3l6Bl-2m0h98XF6tMfaDEqOeHU5YFVIFsvOJFUl8Ne66Nn7dbYbncEXQQBkjbZKkHVeFKkOWSMuvKttRU0VG0JtV-Qhpi7JGspjhnbLdcmGIJ__VDrJWELX4d69WXrTSl8ieKSMQnvkRj6scoIlvWkXqoHo3pny1UtLBWlYP0Xkx9kQ" />
                            </div>
                            <div>
                                <h3 className="font-bold text-on-surface">Behind the Scenes: Decor</h3>
                                <div className="flex items-center gap-4 mt-1">
                                    <span className="text-xs flex items-center gap-1 text-on-surface-variant">
                                        <span className="material-symbols-outlined text-sm">history</span>
                                        Instagram Story
                                    </span>
                                    <span className="text-xs flex items-center gap-1 text-on-surface-variant">
                                        <span className="material-symbols-outlined text-sm">calendar_today</span>
                                        Dec 14, 02:00 PM
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-8">
                            <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-secondary/10 text-secondary border border-secondary/20">READY TO PUBLISH</span>
                            <button className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">visibility</button>
                        </div>
                    </div>
                    {/*  Item 3  */}
                    <div className="flex items-center justify-between p-4 rounded-xl hover:bg-surface-container-low transition-colors group">
                        <div className="flex items-center gap-6">
                            <div className="h-16 w-16 rounded-lg bg-surface-container-high overflow-hidden flex-shrink-0 flex items-center justify-center">
                                <span className="material-symbols-outlined text-3xl text-outline-variant">mail</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-on-surface">VIP Early Access Invite</h3>
                                <div className="flex items-center gap-4 mt-1">
                                    <span className="text-xs flex items-center gap-1 text-on-surface-variant">
                                        <span className="material-symbols-outlined text-sm">alternate_email</span>
                                        Email Campaign
                                    </span>
                                    <span className="text-xs flex items-center gap-1 text-on-surface-variant">
                                        <span className="material-symbols-outlined text-sm">calendar_today</span>
                                        Dec 10, 09:00 AM
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-8">
                            <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-primary/10 text-primary border border-primary/20">DRAFT - AI SUGGESTION</span>
                            <button className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">visibility</button>
                        </div>
                    </div>
                </div>
            </section>
            {/*  Export Footer / CTA  */}
            <section className="bg-surface-container-high/40 p-12 rounded-3xl text-center border-2 border-dashed border-outline-variant/30">
                <div className="max-w-xl mx-auto">
                    <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="material-symbols-outlined text-4xl">cloud_done</span>
                    </div>
                    <h2 className="text-3xl font-headline font-extrabold text-on-surface mb-4">Everything looks good!</h2>
                    <p className="text-on-surface-variant mb-10">All campaign assets have been compiled and optimized. You can export the full bundle as a .ZIP for manual upload or schedule directly via the API.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-10 py-4 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                            Download Final Bundle (.zip)
                        </button>
                        <button className="px-10 py-4 rounded-xl bg-on-surface text-surface font-bold text-lg hover:bg-black transition-all duration-300">
                            Schedule All Posts
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
