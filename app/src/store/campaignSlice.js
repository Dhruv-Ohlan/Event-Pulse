import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { campaignService } from '../services/api';

// Async Thunks
export const fetchAllCampaigns = createAsyncThunk(
  'campaign/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await campaignService.getAllCampaigns();
      return response.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to fetch campaigns');
    }
  }
);

export const createNewCampaign = createAsyncThunk(
  'campaign/create',
  async (campaignData, { rejectWithValue }) => {
    try {
      const response = await campaignService.createCampaign(campaignData);
      return response.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to create campaign');
    }
  }
);

export const fetchCampaignById = createAsyncThunk(
  'campaign/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await campaignService.getCampaignById(id);
      return response.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to fetch campaign details');
    }
  }
);

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
  },
  loading: false,
  error: null,
};

export const campaignSlice = createSlice({
  name: 'campaign',
  initialState,
  reducers: {
    updateCurrentCampaign: (state, action) => {
      state.currentCampaign = { ...state.currentCampaign, ...action.payload };
    },
    resetCurrentCampaign: (state) => {
      state.currentCampaign = initialState.currentCampaign;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // fetchAllCampaigns
      .addCase(fetchAllCampaigns.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCampaigns.fulfilled, (state, action) => {
        state.loading = false;
        state.campaigns = action.payload;
      })
      .addCase(fetchAllCampaigns.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // createNewCampaign
      .addCase(createNewCampaign.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewCampaign.fulfilled, (state, action) => {
        state.loading = false;
        state.campaigns.push(action.payload);
        state.currentCampaign = action.payload; // Set created campaign as current
      })
      .addCase(createNewCampaign.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // fetchCampaignById
      .addCase(fetchCampaignById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampaignById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentCampaign = action.payload;
      })
      .addCase(fetchCampaignById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { updateCurrentCampaign, resetCurrentCampaign, clearError } = campaignSlice.actions;

export default campaignSlice.reducer;

