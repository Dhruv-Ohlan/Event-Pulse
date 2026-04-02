import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCampaignById } from '../store/campaignSlice';

export default function CampaignTimeline() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentCampaign, loading } = useSelector((state) => state.campaign);

  useEffect(() => {
    if (id && (!currentCampaign || currentCampaign._id !== id)) {
        dispatch(fetchCampaignById(id));
    }
  }, [id, dispatch, currentCampaign]);

  if (loading && !currentCampaign) {
    return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
    );
  }

  if (!currentCampaign || !currentCampaign.blueprint || (id && currentCampaign._id !== id)) {
    return (
      <div className="p-10 text-center flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-16 h-16 rounded-3xl bg-error/10 flex items-center justify-center text-error mb-6">
            <span className="material-symbols-outlined text-3xl">error_outline</span>
        </div>
        <h2 className="text-2xl font-bold text-on-surface mb-2">No Blueprint Generated</h2>
        <p className="text-on-surface-variant max-w-sm mb-6">Please generate a campaign plan in the Export Summary page first to visualize the strategic timeline.</p>
        <button 
            onClick={() => navigate(id ? `/export-summary/${id}` : '/export-summary')}
            className="px-6 py-3 rounded-xl bg-primary text-on-primary font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all"
        >
            Go to Export Summary
        </button>
      </div>
    );
  }

  const { phasedTimeline } = currentCampaign.blueprint;

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
<h2 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface mb-3">{currentCampaign.eventName} Timeline</h2>
<p className="text-on-surface-variant leading-relaxed text-lg">{currentCampaign.blueprint.overview}</p>
</div>
<div className="flex gap-3">
<button className="px-5 py-2.5 rounded-xl text-primary font-semibold text-sm hover:bg-primary/5 transition-colors border border-outline-variant/30">Edit Strategy</button>
<button className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-semibold text-sm flex items-center gap-2 shadow-lg shadow-primary/20 hover:translate-y-[-2px] transition-all">
<span className="material-symbols-outlined text-sm">publish</span>
                        Deploy All
                    </button>
</div>
</div>
{/*  Timeline Workflow  */}
<div className="relative">
{/*  Vertical Track  */}
<div className="absolute left-[39px] md:left-[50%] top-8 bottom-8 w-1 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent"></div>
<div className="space-y-16">
{phasedTimeline && phasedTimeline.map((phase, index) => (
  <div key={index} className={`flex flex-col md:flex-row items-start gap-12 relative ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
  
  {/*  Timeline Node  */}
  <div className="absolute left-[24px] md:left-[50%] -translate-x-[50%] top-6 md:top-8 w-8 h-8 rounded-full bg-white border-4 border-primary shadow-xl shadow-primary/10 z-20 flex items-center justify-center">
  <span className="text-[10px] font-black text-primary font-headline">0{index + 1}</span>
  </div>
  {/*  Phase Content Card  */}
  <div className={`w-full md:w-[42%] md:pt-4 ml-12 md:ml-0 ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
  <div className="bg-surface-container-low rounded-3xl p-8 border border-outline-variant/20 hover:border-primary/30 transition-all duration-300 shadow-sm relative group overflow-hidden">
  
  {/*  Subtle Accent Glow  */}
  <div className={`absolute top-0 w-2 h-full bg-primary ${index % 2 !== 0 ? 'right-0' : 'left-0'}`}></div>
  <div className={`flex flex-col h-full ${index % 2 !== 0 ? 'md:items-end' : 'md:items-start'}`}>
  <span className="px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Active Component</span>
  <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">{phase.phase}</h3>
  <div className={`flex flex-col gap-3 w-full ${index % 2 !== 0 ? 'md:items-end' : ''}`}>
  {phase.activities && phase.activities.map((activity, aIdx) => (
    <div key={aIdx} className={`p-4 bg-white rounded-2xl border border-outline-variant/10 shadow-sm flex items-center gap-3 transition-transform hover:scale-[1.02] ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} w-full`}>
    <div className="w-8 h-8 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
    <span className="material-symbols-outlined text-sm">check_circle</span>
    </div>
    <span className="text-sm font-semibold text-on-surface-variant font-body">{activity}</span>
    </div>
  ))}
  </div>
  </div>
  </div>
  </div>
  </div>
))}
</div>
</div>
</div>
    </>
  );
}
