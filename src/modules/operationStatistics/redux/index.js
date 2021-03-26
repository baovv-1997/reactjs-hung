import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const statisticsDevelopSlide = createSlice({
  name: 'statisticsDevelopStatus',
  initialState: {
    isLoading: false,
    total: 0,
    rawData: [],
    totalRawData: null,
  },

  reducers: {
    getListStatisticsDevelop: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getStatisticGeneratorRawData: (state, action) => {
      state.type = action.type;
      // state.isProcessing = true;
    },
    getStatisticGeneratorRawDataSuccess: (state, action) => {
      const { data } = action.data;
      state.type = action.type;
      state.rawData = data;
      state.totalRawData = action.data.total;
    },
    getStatisticGeneratorRawDataFailed: (state, action) => {
      state.type = action.type;
      // state.isProcessing = true;
    },
    getStatisticGeneratorChartData: (state, action) => {
      state.type = action.type;
      // state.isProcessing = true;
    },
    getStatisticGeneratorChartDataSuccess: (state, action) => {
      state.type = action.type;
      state.chartData = action.data;
    },
    getStatisticGeneratorChartDataFailed: (state, action) => {
      state.type = action.type;
      // state.isProcessing = true;
    },
  },
});

const { actions, reducer } = statisticsDevelopSlide;

export const {
  getListStatisticsDevelop,
  getStatisticGeneratorRawData,
  getStatisticGeneratorRawDataSuccess,
  getStatisticGeneratorRawDataFailed,
} = actions;

export default reducer;
