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
    getStatisticOperatorRawData: (state, action) => {
      state.type = action.type;
      // state.isProcessing = true;
    },
    getStatisticOperatorRawDataSuccess: (state, action) => {
      const { data } = action.data;
      state.type = action.type;
      state.rawData = data;
      state.totalRawData = action.data.total;
    },
    getStatisticOperatorRawDataFailed: (state, action) => {
      state.type = action.type;
      // state.isProcessing = true;
    },
    getStatisticOperatorChartData: (state, action) => {
      state.type = action.type;
      // state.isProcessing = true;
    },
    getStatisticOperatorChartDataSuccess: (state, action) => {
      state.type = action.type;
      state.chartData = action.data;
    },
    getStatisticOperatorChartDataFailed: (state, action) => {
      state.type = action.type;
      // state.isProcessing = true;
    },
    getStatisticOperatorCard: (state, action) => {
      state.type = action.type;
    },
    getStatisticOperatorCardSuccess: (state, action) => {
      state.type = action.type;
      state.cardInfo = action.data;
    },
    getStatisticOperatorCardFailed: (state, action) => {
      state.type = action.type;
    },
  },
});

const { actions, reducer } = statisticsDevelopSlide;

export const {
  getListStatisticsDevelop,
  getStatisticOperatorRawData,
  getStatisticOperatorRawDataSuccess,
  getStatisticOperatorRawDataFailed,
  getStatisticOperatorCard,
  getStatisticOperatorCardSuccess,
  getStatisticOperatorCardFailed,
  getStatisticOperatorChartData,
  getStatisticOperatorChartDataSuccess,
  getStatisticOperatorChartDataFailed,
} = actions;

export default reducer;
