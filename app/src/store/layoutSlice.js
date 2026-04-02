import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebarOpen: false,
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSidebarOpen: (state, action) => {
      state.sidebarOpen = action.payload;
    },
  },
});

export const { toggleSidebar, setSidebarOpen } = layoutSlice.actions;

export default layoutSlice.reducer;
