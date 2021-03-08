import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    isLoading: false,
  },
  reducers: {
    getMonitoringSystemDashboard: (state) => {
      state.isLoading = true;
    },
  },
});

const { actions, reducer } = mainSlice;

export const { getMonitoringSystemDashboard } = actions;

export default reducer;
