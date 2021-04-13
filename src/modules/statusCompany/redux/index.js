import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const statusCompanySlide = createSlice({
  name: 'statusCompany',
  initialState: {
    isProcessing: false,
    isProcessingRaw: false,
    listStatusCompany: [],
    listStatusCompanySelect: [],
    total: 0,
    deviceList: [],
    rawData: [],
    cardInfo: {},
    chartData: [],
  },

  reducers: {
    getListStatusCompany: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getListStatusCompanySuccess: (state, action) => {
      const { data } = action;
      const listStatusCompanySelect =
        data &&
        data?.data.map((item) => ({
          id: item.id,
          value: item.id,
          label: item.com_name,
        }));
      state.listStatusCompanySelect = listStatusCompanySelect || [];
      state.type = action.type;
      state.isProcessing = false;
      // state.total = data?.total;
    },

    getListStatusCompanyFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.listCompany = [];
    },

    getStatusGeneratorRaw: (state, action) => {
      state.type = action.type;
      state.isProcessingRaw = true;
    },
    getStatusGeneratorRawSuccess: (state, action) => {
      const { data } = action.data;

      state.type = action.type;
      state.isProcessingRaw = false;
      state.rawData = data;
      state.totalRawData = action.data.total;
    },
    getStatusGeneratorRawFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingRaw = false;
    },

    getStatusGeneratorCard: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getStatusGeneratorCardSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.cardInfo = data;
      state.isProcessing = false;
    },
    getStatusGeneratorCardFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },

    getStatusGeneratorChartData: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getStatusGeneratorChartDataSuccess: (state, action) => {
      state.type = action.type;
      state.chartData = action.data;
      state.isProcessing = false;
    },
    getStatusGeneratorChartDataFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },
  },
});

const { actions, reducer } = statusCompanySlide;

export const {
  getListStatusCompany,
  getListStatusCompanySuccess,
  getListStatusCompanyFailed,
  getStatusGeneratorRaw,
  getStatusGeneratorRawSuccess,
  getStatusGeneratorRawFailed,
  getStatusGeneratorCard,
  getStatusGeneratorCardSuccess,
  getStatusGeneratorCardFailed,
  getStatusGeneratorChartData,
  getStatusGeneratorChartDataSuccess,
  getStatusGeneratorChartDataFailed,
} = actions;

export default reducer;
