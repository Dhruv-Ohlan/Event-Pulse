import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from './layoutSlice';
import campaignReducer from './campaignSlice';

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    campaign: campaignReducer,
  },
});
