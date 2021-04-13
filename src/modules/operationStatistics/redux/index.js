import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const statisticsDevelopSlide = createSlice({
  name: 'statisticsDevelopStatus',
  initialState: {
    isProcessing: false,
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
      state.isProcessing = true;
    },
    getStatisticOperatorRawDataSuccess: (state, action) => {
      const { data } = action.data;
      state.type = action.type;
      state.rawData = data;
      state.totalRawData = action.data.total;
      state.isProcessing = false;
    },
    getStatisticOperatorRawDataFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },
    getStatisticOperatorChartData: (state, action) => {
      state.type = action.type;
      state.isProcessingRaw = true;
    },
    getStatisticOperatorChartDataSuccess: (state, action) => {
      state.type = action.type;
      state.chartData = action.data;
      state.isProcessingRaw = false;
    },
    getStatisticOperatorChartDataFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingRaw = false;
    },
    getStatisticOperatorCard: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getStatisticOperatorCardSuccess: (state, action) => {
      state.type = action.type;
      state.cardInfo = action.data;
      state.isProcessing = false;
    },
    getStatisticOperatorCardFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
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
