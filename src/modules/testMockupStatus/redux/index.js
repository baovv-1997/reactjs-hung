import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const testMockupStatusSlide = createSlice({
  name: 'testMockupStatus',
  initialState: {
    isLoading: false,
    total: 0,
  },

  reducers: {
    getDataTestMockupStatus: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getDataTestMockupStatusSuccess: (state, action) => {
      // const { data } = action;
      state.type = action.type;
      state.isProcessing = false;
      // state.total = data?.total;
    },

    getDataTestMockupStatusFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.listCompany = [];
    },
  },
});

const { actions, reducer } = testMockupStatusSlide;

export const {
  getDataTestMockupStatus,
  getDataTestMockupStatusSuccess,
  getDataTestMockupStatusFailed,
} = actions;

export default reducer;
