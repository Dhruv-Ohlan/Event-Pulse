import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createNewCampaign, clearError } from '../store/campaignSlice';
import { useEffect } from 'react';

export default function CreateCampaignForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.campaign);

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    defaultValues: {
      eventName: '',
      eventType: 'Technical',
      eventDate: '',
      targetAudience: '',
      channels: {
        instagram: false,
        whatsapp: false,
        email: false,
        posters: false,
        linkedin: false,
        classes: false
      },
      tone: 'Formal',
      goal: 'Max registrations',
      extraNotes: ''
    }
  });

  const currentTone = watch('tone');

  const onSubmit = async (data) => {
    // Transform channels object to array of active strings
    const selectedChannels = Object.keys(data.channels).filter(key => data.channels[key]);

    // Map extraNotes to brief for the backend
    const campaignData = {
      ...data,
      channels: selectedChannels,
      brief: data.extraNotes
    };
    const resultAction = await dispatch(createNewCampaign(campaignData));
    if (createNewCampaign.fulfilled.match(resultAction)) {
      navigate(`/export-summary/${resultAction.payload._id}`);
    }
  };

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  return (
    <div className="p-10 max-w-6xl mx-auto">

      <div className="flex flex-col gap-2 mb-12">
        <span className="bg-tertiary/10 text-tertiary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase w-fit">AI Campaign Architect</span>
        <h2 className="text-4xl font-extrabold tracking-tight text-on-surface">Design Your Impact</h2>
        <p className="text-on-surface-variant text-lg max-w-2xl">Tell our Academic Co-Pilot about your event, and we'll engineer a multi-channel strategy that resonates with your campus audience.</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-error/10 text-error rounded-xl flex items-center gap-3">
          <span className="material-symbols-outlined">error</span>
          <p className="text-sm font-semibold">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/*  Main Form Area  */}
        <div className="lg:col-span-8 space-y-8">
          {/*  Section 1: Essentials  */}
          <section className="bg-surface-container-lowest rounded-2xl p-8 transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">description</span>
              </div>
              <h3 className="text-xl font-bold">Event Essentials</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-outline-variant">Event Name</label>
                <input {...register('eventName', { required: true })} className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-0 focus:bg-white focus:border-b focus:border-primary transition-all placeholder:text-outline-variant" placeholder="e.g. Winter Gala 2024" type="text" />
                {errors.eventName && <span className="text-error text-xs">Event name is required</span>}
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-outline-variant">Event Type</label>
                <select {...register('eventType')} className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-0 focus:bg-white focus:border-b focus:border-primary transition-all">
                  <option>Technical</option>
                  <option>Cultural</option>
                  <option>Sports</option>
                  <option>Workshop</option>
                  <option>Seminar</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-outline-variant">Event Date</label>
                <div className="relative">
                  <input {...register('eventDate', { required: true })} className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-0 focus:bg-white focus:border-b focus:border-primary transition-all" type="date" />
                  {errors.eventDate && <span className="text-error text-xs">Event date is required</span>}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-outline-variant">Target Audience</label>
                <input {...register('targetAudience')} className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-0 focus:bg-white focus:border-b focus:border-primary transition-all placeholder:text-outline-variant" placeholder="e.g. Computer Science Seniors" type="text" />
              </div>
            </div>
          </section>
          {/*  Section 2: Channels  */}
          <section className="bg-surface-container-lowest rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">hub</span>
              </div>
              <h3 className="text-xl font-bold">Deployment Channels</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <label className="group flex items-center gap-4 p-4 rounded-xl border border-transparent hover:bg-surface-container-low transition-all cursor-pointer">
                <input {...register('channels.instagram')} className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                <div className="flex flex-col">
                  <span className="font-semibold text-sm">Instagram</span>
                  <span className="text-[10px] text-outline-variant uppercase font-bold">Social</span>
                </div>
              </label>
              <label className="group flex items-center gap-4 p-4 rounded-xl border border-transparent hover:bg-surface-container-low transition-all cursor-pointer">
                <input {...register('channels.whatsapp')} className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                <div className="flex flex-col">
                  <span className="font-semibold text-sm">WhatsApp</span>
                  <span className="text-[10px] text-outline-variant uppercase font-bold">Direct</span>
                </div>
              </label>
              <label className="group flex items-center gap-4 p-4 rounded-xl border border-transparent hover:bg-surface-container-low transition-all cursor-pointer">
                <input {...register('channels.email')} className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                <div className="flex flex-col">
                  <span className="font-semibold text-sm">Email</span>
                  <span className="text-[10px] text-outline-variant uppercase font-bold">Official</span>
                </div>
              </label>
              <label className="group flex items-center gap-4 p-4 rounded-xl border border-transparent hover:bg-surface-container-low transition-all cursor-pointer">
                <input {...register('channels.posters')} className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                <div className="flex flex-col">
                  <span className="font-semibold text-sm">Posters</span>
                  <span className="text-[10px] text-outline-variant uppercase font-bold">Physical</span>
                </div>
              </label>
              <label className="group flex items-center gap-4 p-4 rounded-xl border border-transparent hover:bg-surface-container-low transition-all cursor-pointer">
                <input {...register('channels.linkedin')} className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                <div className="flex flex-col">
                  <span className="font-semibold text-sm">LinkedIn</span>
                  <span className="text-[10px] text-outline-variant uppercase font-bold">Professional</span>
                </div>
              </label>
              <label className="group flex items-center gap-4 p-4 rounded-xl border border-transparent hover:bg-surface-container-low transition-all cursor-pointer">
                <input {...register('channels.classes')} className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                <div className="flex flex-col">
                  <span className="font-semibold text-sm">Classes</span>
                  <span className="text-[10px] text-outline-variant uppercase font-bold">Verbal</span>
                </div>
              </label>
            </div>
          </section>
          {/*  Section 3: AI Intelligence  */}
          <section className="bg-surface-container-lowest rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <h3 className="text-xl font-bold">Strategic Nuance</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-wider text-outline-variant">Tone Selection</label>
                <div className="grid grid-cols-2 gap-2">
                  <button type="button" onClick={() => setValue('tone', 'Formal')} className={`px-4 py-3 rounded-xl text-sm font-semibold border-2 transition-all ${currentTone === 'Formal' ? 'border-primary text-primary bg-primary/5' : 'border-transparent bg-surface-container-low hover:bg-surface-container-high'}`}>Formal</button>
                  <button type="button" onClick={() => setValue('tone', 'Casual')} className={`px-4 py-3 rounded-xl text-sm font-semibold border-2 transition-all ${currentTone === 'Casual' ? 'border-primary text-primary bg-primary/5' : 'border-transparent bg-surface-container-low hover:bg-surface-container-high'}`}>Casual</button>
                  <button type="button" onClick={() => setValue('tone', 'Hype')} className={`px-4 py-3 rounded-xl text-sm font-semibold border-2 transition-all ${currentTone === 'Hype' ? 'border-primary text-primary bg-primary/5' : 'border-transparent bg-surface-container-low hover:bg-surface-container-high'}`}>Hype</button>
                  <button type="button" onClick={() => setValue('tone', 'Professional')} className={`px-4 py-3 rounded-xl text-sm font-semibold border-2 transition-all ${currentTone === 'Professional' ? 'border-primary text-primary bg-primary/5' : 'border-transparent bg-surface-container-low hover:bg-surface-container-high'}`}>Professional</button>
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-wider text-outline-variant">Goal of Campaign</label>
                <select {...register('goal')} className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-0 focus:bg-white focus:border-b focus:border-primary transition-all">
                  <option>Max registrations</option>
                  <option>Brand awareness</option>
                  <option>Engagement &amp; Talk</option>
                  <option>Feedback Collection</option>
                </select>
              </div>
            </div>
            <div className="mt-8 space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-outline-variant">Extra Notes or Instructions</label>
              <textarea {...register('extraNotes')} className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-0 focus:bg-white focus:border-b focus:border-primary transition-all placeholder:text-outline-variant" placeholder="Mention the specific guest speakers or the free pizza..." rows="4"></textarea>
            </div>
          </section>
        </div>
        {/*  Sticky Summary / Action Sidebar  */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            <div className="bg-gradient-to-br from-primary to-primary-container rounded-3xl p-8 text-on-primary shadow-2xl shadow-primary/30 relative overflow-hidden">
              {/*  Background Decoration  */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4 leading-tight">Ready to launch?</h4>
                <p className="text-on-primary/80 text-sm mb-8">Our AI will generate a tailored schedule, copy variants for every channel, and visual recommendations.</p>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-white text-primary py-4 rounded-2xl font-extrabold tracking-tight hover:shadow-xl active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? 'Consulting AI...' : 'Generate Campaign Plan'}
                  <span className={`material-symbols-outlined ${loading ? 'animate-spin' : ''}`}>
                    {loading ? 'sync' : 'rocket_launch'}
                  </span>
                </button>
                <div className="mt-8 pt-8 border-t border-white/20 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">check_circle</span>
                    </div>
                    <span className="text-xs font-medium">Estimated Reach: 2.4k Students</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                    </div>
                    <span className="text-xs font-medium">Drafting Time: ~45 seconds</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  Pulse Insight Component  */}
            <div className="bg-surface-container-high rounded-2xl p-6 border border-white/40">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-tertiary">bolt</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-tertiary">Pulse Insights</span>
              </div>
              <p className="text-sm font-medium text-on-surface-variant">
                <b>Trending:</b> Technical events scheduled for Wednesdays see 15% higher registration rates this semester.
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

