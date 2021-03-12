import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const solarDashBoardSlice = createSlice({
  name: 'solarDashboard',
  initialState: {
    isLoading: false,
  },
  reducers: {
    getCompanyDashboard: (state) => {
      state.isLoading = true;
    },
  },
});

const { actions, reducer } = solarDashBoardSlice;

export const { getCompanyDashboard } = actions;

export default reducer;
