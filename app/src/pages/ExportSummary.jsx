import { useSelector, useDispatch } from 'react-redux';
import { campaignService } from '../services/api';
import { fetchCampaignById } from '../store/campaignSlice';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ExportSummary() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { currentCampaign, loading } = useSelector((state) => state.campaign);
    const [generating, setGenerating] = useState(false);

    useEffect(() => {
        if (id && (!currentCampaign || currentCampaign._id !== id)) {
            dispatch(fetchCampaignById(id));
        }
    }, [id, dispatch, currentCampaign]);

    const handleGenerate = async () => {
        const campaignId = id || currentCampaign?._id;
        if (!campaignId) return;
        
        setGenerating(true);
        try {
            await campaignService.generateBlueprint(campaignId);
            dispatch(fetchCampaignById(campaignId));
        } catch (err) {
            console.error('Generation failed', err);
        } finally {
            setGenerating(false);
        }
    };

    if (loading && !currentCampaign) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!currentCampaign || (id && currentCampaign._id !== id)) {
        return <div className="p-10 text-center">No campaign selected. Please go to the dashboard.</div>;
    }

    return (
        <div className="p-10 max-w-6xl mx-auto">

            {/*  Hero Summary Header  */}
            <section className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <span className="inline-block px-3 py-1 bg-tertiary-container/30 text-tertiary font-semibold text-xs rounded-full mb-4 tracking-wider uppercase">Campaign Summary</span>
                    <h1 className="text-5xl font-headline font-extrabold text-on-surface tracking-tight leading-none mb-2">{currentCampaign.eventName || 'Unnamed Campaign'}</h1>
                    <p className="text-on-surface-variant text-lg max-w-xl">Final review of the comprehensive marketing strategy and content assets for the upcoming event.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-container-lowest text-primary font-semibold hover:bg-white transition-all duration-200 border border-outline-variant/20 shadow-sm">
                        <span className="material-symbols-outlined">share</span>
                        Share
                    </button>
                    {!currentCampaign.blueprint ? (
                         <button 
                            onClick={handleGenerate}
                            disabled={generating}
                            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-semibold hover:scale-[1.02] transition-all duration-200 shadow-[0_8px_24px_rgba(74,64,224,0.25)]"
                         >
                             <span className={`material-symbols-outlined ${generating ? 'animate-spin' : ''}`}>{generating ? 'sync' : 'auto_awesome'}</span>
                             {generating ? 'AI Generating...' : 'Generate AI Plan'}
                         </button>
                    ) : (
                        <div className="px-6 py-3 rounded-xl bg-primary/10 text-primary font-bold flex items-center gap-2">
                             <span className="material-symbols-outlined">check_circle</span>
                             Blueprint Active
                        </div>
                    )}
                </div>
            </section>

            {/*  The Strategy Matrix  */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/*  Left: Key Parameters  */}
                <div className="space-y-6">
                    <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/10">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-outline-variant mb-6">Core Focus</h3>
                        <div className="space-y-4">
                           <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-sm">target</span>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-outline-variant">Primary Goal</p>
                                    <p className="font-semibold text-on-surface">{currentCampaign.goal}</p>
                                </div>
                           </div>
                           <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                                    <span className="material-symbols-outlined text-sm">groups</span>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-outline-variant">Audience</p>
                                    <p className="font-semibold text-on-surface">{currentCampaign.targetAudience}</p>
                                </div>
                           </div>
                           <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary">
                                    <span className="material-symbols-outlined text-sm">palette</span>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-outline-variant">Brand Tone</p>
                                    <p className="font-semibold text-on-surface">{currentCampaign.tone}</p>
                                </div>
                           </div>
                        </div>
                    </div>

                    <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/10">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-outline-variant mb-6">Channels Active</h3>
                        <div className="flex flex-wrap gap-2">
                            {currentCampaign.channels && Array.isArray(currentCampaign.channels) && currentCampaign.channels.map(channel => (
                                <span key={channel} className="px-3 py-1.5 rounded-lg bg-white border border-outline-variant/30 text-xs font-bold text-on-surface/70 capitalize">{channel}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/*  Middle/Right: AI Insights and Timeline  */}
                <div className="lg:col-span-2 space-y-8">
                    {currentCampaign.blueprint ? (
                        <>
                            <div className="bg-gradient-to-br from-tertiary-container/20 to-secondary-container/20 p-8 rounded-3xl border border-white/40 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <span className="material-symbols-outlined text-6xl">psychology</span>
                                </div>
                                <h3 className="text-2xl font-headline font-bold text-on-surface mb-4">Strategic Overview: {currentCampaign.blueprint.strategyName}</h3>
                                <p className="text-on-surface-variant leading-relaxed text-lg italic">
                                    "{currentCampaign.blueprint.overview}"
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold font-headline text-on-surface">Key Campaign Messages</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {currentCampaign.blueprint.keyMessages?.map((msg, i) => (
                                        <div key={i} className="p-4 bg-white rounded-xl border border-outline-variant/20 shadow-sm flex gap-3">
                                            <span className="text-primary font-black text-xl opacity-20">0{i+1}</span>
                                            <p className="text-sm font-medium leading-snug">{msg}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        
                            <div className="pt-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-bold font-headline text-on-surface">Phased Timeline</h3>
                                    <button className="text-primary font-bold text-sm flex items-center gap-1">Full View <span className="material-symbols-outlined text-sm">open_in_new</span></button>
                                </div>
                                <div className="space-y-4">
                                    {currentCampaign.blueprint.phasedTimeline?.map((phase, i) => (
                                        <div key={i} className="flex gap-6 group">
                                            <div className="flex flex-col items-center">
                                                <div className="w-4 h-4 rounded-full bg-primary border-4 border-primary-container z-10 transition-transform group-hover:scale-125"></div>
                                                <div className="w-0.5 h-full bg-outline-variant/30 -mt-1 group-last:hidden"></div>
                                            </div>
                                            <div className="pb-8">
                                                <h4 className="font-bold text-on-surface mb-1">{phase.phase}</h4>
                                                <p className="text-xs text-on-surface-variant font-medium">{phase.activities?.join(' • ')}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="h-full min-h-[400px] flex flex-col items-center justify-center bg-surface-container-low rounded-3xl border-2 border-dashed border-outline-variant/40 p-12 text-center">
                             <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-outline-variant mb-6">
                                <span className="material-symbols-outlined text-3xl">precision_manufacturing</span>
                             </div>
                             <h4 className="text-xl font-bold text-on-surface mb-2">Engine Ready for Generation</h4>
                             <p className="text-on-surface-variant max-w-sm mb-8">Once you click the button above, our AI will engineer a custom strategy including messages, timelines, and channel purpose.</p>
                             <div className="p-4 bg-primary/5 rounded-2xl flex items-start gap-3 text-left">
                                <span className="material-symbols-outlined text-primary text-sm mt-0.5">info</span>
                                <p className="text-xs text-primary/70 font-medium leading-relaxed">Processing takes ~15 seconds. Ensure your event date is realistic for best AI accuracy.</p>
                             </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
