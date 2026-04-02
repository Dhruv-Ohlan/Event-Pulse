import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  campaigns: [],
  currentCampaign: {
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
      classes: false,
    },
    tone: 'Formal',
    goal: 'Max registrations',
    extraNotes: '',
  }
};

export const campaignSlice = createSlice({
  name: 'campaign',
  initialState,
  reducers: {
    updateCurrentCampaign: (state, action) => {
      state.currentCampaign = { ...state.currentCampaign, ...action.payload };
    },
    saveCampaign: (state) => {
      state.campaigns.push(state.currentCampaign);
    },
    resetCurrentCampaign: (state) => {
      state.currentCampaign = initialState.currentCampaign;
    }
  },
});

export const { updateCurrentCampaign, saveCampaign, resetCurrentCampaign } = campaignSlice.actions;

export default campaignSlice.reducer;
