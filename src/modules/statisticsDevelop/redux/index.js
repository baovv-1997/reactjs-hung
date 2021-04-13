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
  },

  reducers: {
    getListStatisticsDevelop: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getStatisticsDevelopRaw: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getStatisticsDevelopRawSuccess: (state, action) => {
      const { data } = action.data;
      state.type = action.type;
      state.rawData = data;
      state.totalRawData = action.data.total;
      state.isProcessing = false;
    },
    getStatisticsDevelopRawFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },

    getRadiationRaw: (state, action) => {
      state.type = action.type;
      state.isProcessingRaw = true;
    },
    getRadiationRawSuccess: (state, action) => {
      const { data } = action.data;
      state.type = action.type;
      state.radiationList = data;
      state.totalRadiationRawData = action.data.total;
      state.isProcessingRaw = false;
    },
    getRadiationRawFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingRaw = false;
    },

    getStatisticDevelopChartData: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getStatisticDevelopChartDataSuccess: (state, action) => {
      state.type = action.type;
      state.dataChart = action.data;
      state.isProcessing = false;
    },
    getStatisticDevelopChartDataFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.dataChart = [];
    },

    getStatisticDevelopCard: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getStatisticDevelopCardSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.cardInfo = data;
      state.isProcessing = false;
    },
    getStatisticDevelopCardFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.cardInfo = {};
    },
  },
});

const { actions, reducer } = statisticsDevelopSlide;

export const {
  getListStatisticsDevelop,
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
