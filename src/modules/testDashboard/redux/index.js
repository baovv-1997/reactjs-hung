import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const testDashBoardSlice = createSlice({
  name: 'testDashboard',
  initialState: {
    isLoading: false,
  },
  reducers: {
    getCompanyDashboard: (state) => {
      state.isLoading = true;
    },
  },
});

const { actions, reducer } = testDashBoardSlice;

export const { getCompanyDashboard } = actions;

export default reducer;
