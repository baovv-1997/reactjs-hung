import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const statisticsDevelopSlide = createSlice({
  name: 'statisticsDevelopStatus',
  initialState: {
    isProcessing: false,
    isProcessingRaw: false,
    isProcessingCard: false,
    isProcessingChart: false,
    total: 0,
    rawData: [],
    totalRawData: null,
  },

  reducers: {
    getStatisticOperatorRawData: (state, action) => {
      state.type = action.type;
      state.isProcessingRaw = true;
    },
    getStatisticOperatorRawDataSuccess: (state, action) => {
      const { data } = action.data;
      state.type = action.type;
      state.rawData = data;
      state.totalRawData = action.data.total;
      state.isProcessingRaw = false;
    },
    getStatisticOperatorRawDataFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingRaw = false;
    },
    getStatisticOperatorChartData: (state, action) => {
      state.type = action.type;
      state.isProcessingChart = true;
    },
    getStatisticOperatorChartDataSuccess: (state, action) => {
      state.type = action.type;
      state.chartData = action.data;
      state.isProcessingChart = false;
    },
    getStatisticOperatorChartDataFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingChart = false;
    },
    getStatisticOperatorCard: (state, action) => {
      state.type = action.type;
      state.isProcessingCard = true;
    },
    getStatisticOperatorCardSuccess: (state, action) => {
      state.type = action.type;
      state.cardInfo = action.data;
      state.isProcessingCard = false;
    },
    getStatisticOperatorCardFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingCard = false;
    },
  },
});

const { actions, reducer } = statisticsDevelopSlide;

export const {
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
