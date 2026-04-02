import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCampaigns } from '../store/campaignSlice';
import { useNavigate } from 'react-router-dom';

export default function MainDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { campaigns, loading, error } = useSelector((state) => state.campaign);

  useEffect(() => {
    dispatch(fetchAllCampaigns());
  }, [dispatch]);

  const activeCampaigns = (campaigns || []).filter(c => c.status?.toLowerCase() === 'active');
  const draftCampaigns = (campaigns || []).filter(c => c.status?.toLowerCase() === 'draft');
  const completedCampaigns = (campaigns || []).filter(c => c.status?.toLowerCase() === 'completed');

  return (
    <div className="p-10 max-w-6xl mx-auto">
      
{/*  TopAppBar  */}
<header className="docked full-width top-0 sticky z-50 bg-[#f5f7f9]/80 backdrop-blur-xl flex justify-between items-center px-8 py-3 w-full no-line-rule font-['Manrope'] antialiased tracking-tight">
<div className="flex items-center flex-1 max-w-xl">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full bg-surface-container-low border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="Search campaigns, tasks or events..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-4 text-on-surface-variant">
<button className="hover:bg-surface-container-high p-2 rounded-full transition-all active:scale-[0.98]">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="hover:bg-surface-container-high p-2 rounded-full transition-all active:scale-[0.98]">
<span className="material-symbols-outlined" data-icon="auto_awesome">auto_awesome</span>
</button>
</div>
<div className="h-8 w-[1px] bg-outline-variant/30"></div>
<div className="flex items-center gap-3 group cursor-pointer">
<div className="text-right hidden sm:block">
<p className="text-sm font-bold text-on-surface leading-none">Alex Rivera</p>
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Dean of Events</p>
</div>
<img alt="User profile avatar" className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/10 group-hover:ring-primary/30 transition-all" data-alt="portrait of a professional man in a business casual blazer smiling slightly against a neutral studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK4UvhWcPOLL2Hucxt73RwbqMTgHG6UPi0MPptH1gDVsFDCZqcIJBHjQmGIdo1WTO8K9extUK_g_s8K59A9JOpamDYdHrZ-tWi4Ezfb7izcUwD95UybndTt2oHmkPtVxoZUs4kKSxS9UZYWIf_eVgknaBdH7-WY_xgECYOSh5p4GEa0TfjHRzkAffrL0nUU_pYmz4HEo5WPN2ba3xF0MNVR64-8WMKevOm_FpV_YqicEWAFkBLpO1Kv5Tsn4j4AHxAP3yYjwPrkms"/>
</div>
</div>
</header>
<div className="p-8 max-w-7xl mx-auto space-y-10">
{/*  Welcome Banner (Asymmetric Layout)  */}
<section className="relative overflow-hidden rounded-3xl bg-primary p-12 text-on-primary">
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
<div>
<span className="inline-block px-3 py-1 rounded-full bg-white/20 text-[10px] uppercase tracking-widest font-bold mb-4">Dashboard Overview</span>
<h2 className="text-4xl md:text-5xl font-['Manrope'] font-extrabold tracking-tight mb-4">
                            Welcome back, Event Pulse!
                        </h2>
<p className="text-primary-fixed leading-relaxed text-lg max-w-md">
                            Ready to plan your next campus event? Your AI Co-Pilot has synthesized new trending insights for your upcoming campaigns.
                        </p>
<div className="mt-8 flex gap-4">
<button onClick={() => navigate('/create-campaign')} className="bg-surface-container-lowest text-primary px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:translate-y-[-2px] transition-transform">
<span className="material-symbols-outlined">rocket_launch</span>
                                Start Campaign
                            </button>
<button onClick={() => navigate('/timeline')} className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl font-bold transition-all">
                                View Timeline
                            </button>
</div>
</div>
<div className="hidden lg:block relative h-64">
{/*  Abstract AI Visual  */}
<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl flex items-center justify-center border border-white/10">
<img className="w-full h-full object-cover opacity-60 mix-blend-overlay rounded-2xl" alt="AI Visual" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNzViB_P2y2JgO0gcKjBUqjAxeqywjaHPlCDp4TIZ-Kmm6iSixsacDbQrbYh3aZQQQy6S9Y1UWNDKZT7DSs8bmircj3wIcqzs5uQd-dLTVo1jqmjzu-Am_iGmdNc-griWmnik_tl7inXpp9e3450ouYexgP5n3dQuU3T1d6SfJRzzrJrBI7p--xkzYSrQKOn8zemcMYX60GZGqafLRzfGfXoewTO3i4Zbeg1rVrxNhE2NevLpz9TU93eoe9ysPJAc3uzcKTIZhN48"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center animate-pulse">
<span className="material-symbols-outlined text-5xl" style={{"fontVariationSettings":"'FILL' 1"}}>auto_awesome</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Stats Bento Grid  */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_12px_40px_rgba(74,64,224,0.04)] flex items-center justify-between group hover:bg-primary transition-all duration-300">
<div>
<p className="text-on-surface-variant group-hover:text-primary-fixed text-xs font-bold uppercase tracking-widest">Active Campaigns</p>
<h3 className="text-3xl font-extrabold text-on-surface group-hover:text-white mt-1">{activeCampaigns.length}</h3>
</div>
<div className="w-12 h-12 bg-primary/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center">
<span className="material-symbols-outlined text-primary group-hover:text-white" style={{"fontVariationSettings":"'FILL' 1"}}>play_circle</span>
</div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_12px_40px_rgba(74,64,224,0.04)] flex items-center justify-between group hover:bg-tertiary transition-all duration-300">
<div>
<p className="text-on-surface-variant group-hover:text-tertiary-fixed text-xs font-bold uppercase tracking-widest">Drafts</p>
<h3 className="text-3xl font-extrabold text-on-surface group-hover:text-white mt-1">{draftCampaigns.length}</h3>
</div>
<div className="w-12 h-12 bg-tertiary/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary group-hover:text-white">edit_square</span>
</div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_12px_40px_rgba(74,64,224,0.04)] flex items-center justify-between group hover:bg-secondary transition-all duration-300">
<div>
<p className="text-on-surface-variant group-hover:text-secondary-fixed text-xs font-bold uppercase tracking-widest">Completed</p>
<h3 className="text-3xl font-extrabold text-on-surface group-hover:text-white mt-1">{completedCampaigns.length}</h3>
</div>
<div className="w-12 h-12 bg-secondary/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center">
<span className="material-symbols-outlined text-secondary group-hover:text-white" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
</div>
</div>
</section>
{/*  Campaign Cards (Horizontal Scroll / Grid)  */}
<section className="space-y-6">
<div className="flex justify-between items-end">
<div>
<h3 className="text-2xl font-bold font-['Manrope'] text-on-surface">Recent Campaigns</h3>
<p className="text-on-surface-variant">Live updates from your ongoing event pipelines.</p>
</div>
<button className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                        View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>

{loading ? (
    <div className="flex justify-center p-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
) : (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
    {campaigns.length > 0 ? campaigns.map((campaign) => (
        <div key={campaign._id} onClick={() => navigate(`/timeline/${campaign._id}`)} className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_12px_40px_rgba(74,64,224,0.04)] group hover:shadow-[0_20px_50px_rgba(74,64,224,0.1)] transition-all flex flex-col justify-between min-h-[220px] cursor-pointer">
        <div>
        <div className="flex justify-between items-start mb-4">
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${campaign.status === 'Active' ? 'bg-primary/10 text-primary' : 'bg-surface-container-high text-on-surface-variant'}`}>{campaign.status}</span>
        <span className="text-on-surface-variant text-xs">{new Date(campaign.eventDate).toLocaleDateString()}</span>
        </div>
        <h4 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">{campaign.eventName}</h4>
        <p className="text-sm text-on-surface-variant mt-2 line-clamp-2">{campaign.goal}</p>
        </div>
        <div className="mt-6 space-y-2">
        <div className="flex justify-between text-xs font-bold">
        <span className="text-on-surface-variant">Progress</span>
        <span className="text-primary">0%</span>
        </div>
        <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
        <div className="bg-primary h-full rounded-full" style={{"width":"0%"}}></div>
        </div>
        </div>
        </div>
    )) : (
        <div className="col-span-full text-center p-12 bg-surface-container-low rounded-2xl">
            <p className="text-on-surface-variant">No campaigns found. Start your first campaign!</p>
        </div>
    )}
    </div>
)}
</section>
{/*  Secondary Insight / Quick Actions Area  */}
<section className="grid grid-cols-1 xl:grid-cols-3 gap-8">
<div className="xl:col-span-2 space-y-6">
<h3 className="text-2xl font-bold font-['Manrope'] text-on-surface">Upcoming Deadlines</h3>
<div className="bg-surface-container-low rounded-3xl p-2 space-y-1">
<div className="bg-surface-container-lowest p-4 rounded-2xl flex items-center gap-4 hover:translate-x-1 transition-transform cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-error/10 text-error flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined">priority_high</span>
</div>
<div className="flex-1">
<h5 className="font-bold text-on-surface">Sample Task</h5>
<p className="text-xs text-on-surface-variant">Setup event logistics</p>
</div>
<span className="text-error text-[10px] font-black uppercase tracking-widest bg-error/5 px-2 py-1 rounded">Urgent</span>
</div>
</div>
</div>
<div className="space-y-6">
<h3 className="text-2xl font-bold font-['Manrope'] text-on-surface">Quick Insights</h3>
<div className="bg-surface-container-high rounded-3xl p-6 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4">
<span className="material-symbols-outlined text-primary/20 text-6xl rotate-12 group-hover:rotate-0 transition-transform">insights</span>
</div>
<div className="relative z-10">
<p className="text-sm font-bold text-primary mb-2">Student Engagement Up</p>
<h4 className="text-3xl font-extrabold text-on-surface">24.5%</h4>
<p className="text-xs text-on-surface-variant mt-4 leading-relaxed">
                                AI has detected a surge in interest for sustainability-themed workshops on campus social channels.
                            </p>
<button className="mt-6 text-primary font-bold text-xs flex items-center gap-2 group/btn">
                                Generate Campaign Report 
                                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">auto_fix</span>
</button>
</div>
</div>
</div>
</section>
</div>
    </div>
  );
}

