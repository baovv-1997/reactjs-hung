import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const statisticsDevelopSlide = createSlice({
  name: 'statisticsDevelopStatus',
  initialState: {
    isProcessing: false,
    isProcessingRaw: false,
    total: 0,
    radiationList: [],
    rawData: [],
    totalRadiationRawData: null,
    totalRawData: null,
    chartData: [],
    isProcessingChart: false,
    isProcessingCart: false,
    isProcessingRaw2: false,
  },

  reducers: {
    getStatisticsDevelopRaw: (state, action) => {
      state.type = action.type;
      state.isProcessingRaw = true;
      state.totalRawData = 0;
    },
    getStatisticsDevelopRawSuccess: (state, action) => {
      const { data } = action.data;
      state.type = action.type;
      state.rawData = data;
      state.totalRawData = action.data.total;
      state.isProcessingRaw = false;
    },
    getStatisticsDevelopRawFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingRaw = false;
      state.totalRawData = 0;
    },

    getRadiationRaw: (state, action) => {
      state.type = action.type;
      state.isProcessingRaw2 = true;
      state.totalRadiationRawData = 0;
    },
    getRadiationRawSuccess: (state, action) => {
      const { data } = action.data;
      state.type = action.type;
      state.radiationList = data;
      state.totalRadiationRawData = action.data.total;
      state.isProcessingRaw2 = false;
    },
    getRadiationRawFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingRaw2 = false;
      state.totalRadiationRawData = 0;
    },

    getStatisticDevelopChartData: (state, action) => {
      state.type = action.type;
      state.isProcessingChart = true;
    },
    getStatisticDevelopChartDataSuccess: (state, action) => {
      state.type = action.type;
      state.dataChart = action.data;
      state.isProcessingChart = false;
    },
    getStatisticDevelopChartDataFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingChart = false;
      state.dataChart = [];
    },

    getStatisticDevelopCard: (state, action) => {
      state.type = action.type;
      state.isProcessingCart = true;
    },
    getStatisticDevelopCardSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.cardInfo = data;
      state.isProcessingCart = false;
    },
    getStatisticDevelopCardFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingCart = false;
      state.cardInfo = {};
    },
  },
});

const { actions, reducer } = statisticsDevelopSlide;

export const {
  getStatisticsDevelopRaw,
  getStatisticsDevelopRawSuccess,
  getStatisticsDevelopRawFailed,

  getRadiationRaw,
  getRadiationRawSuccess,
  getRadiationRawFailed,

  getStatisticDevelopChartData,
  getStatisticDevelopChartDataSuccess,
  getStatisticDevelopChartDataFailed,

  getStatisticDevelopCard,
  getStatisticDevelopCardSuccess,
  getStatisticDevelopCardFailed,
} = actions;

export default reducer;
