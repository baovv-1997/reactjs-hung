import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const operationStatusSlide = createSlice({
  name: 'operationStatus',
  initialState: {
    isProcessing: false,
    isProcessingRaw: false,
    total: 0,
    eventList: [],
    deviceList: [],
    dataChart: [],
    rawData: [],
    cardInfo: {},
  },

  reducers: {
    getListDevice: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },

    getListDeviceSuccess: (state, action) => {
      const allOption = [{ ds_name: '전체', id: '' }];
      state.isProcessing = false;

      state.deviceList =
        action.data && action.data && action.data.length > 1
          ? [...allOption, ...action.data]
          : action.data;
      // state.perPage = action?.data?.per_page;
      // state.totalPage = action?.data?.total;
      state.type = action.type;
    },
    getListDeviceFailed: (state, action) => {
      state.isProcessing = false;
      state.type = action.type;
    },

    updateEvent: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    updateEventSuccess: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },
    updateEventFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },

    getDataChart: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getDataChartSuccess: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.dataChart = action.data;
    },
    getDataChartFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.dataChart = [];
    },

    getTrendChart: (state, action) => {
      state.type = action.type;
      state.isProcessingRaw = true;
      state.totalRawData = 0;
    },
    getTrendChartSuccess: (state, action) => {
      state.type = action.type;
      state.isProcessingRaw = false;
      state.rawData = action.data;
      state.totalRawData = action.total;
      state.currentPage = action.currentPage;
    },
    getTrendChartFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingRaw = false;
      state.rawData = [];
      state.totalRawData = 0;
    },

    getCardInfo: (state, action) => {
      state.type = action.type;
    },
    getCardInfoSuccess: (state, action) => {
      state.type = action.type;
      state.cardInfo = action.data;
    },
    getCardInfoFailed: (state, action) => {
      state.type = action.type;
    },
  },
});

const { actions, reducer } = operationStatusSlide;

export const {
  getListDevice,
  getListDeviceSuccess,
  getListDeviceFailed,

  getEventList,
  getEventListSuccess,
  getEventListFailed,

  deleteEvent,
  deleteEventSuccess,
  deleteEventFailed,

  addNewEvent,
  addNewEventSuccess,
  addNewEventFailed,

  updateEvent,
  updateEventSuccess,
  updateEventFailed,

  getDataChart,
  getDataChartSuccess,
  getDataChartFailed,

  getTrendChart,
  getTrendChartSuccess,
  getTrendChartFailed,

  getCardInfo,
  getCardInfoSuccess,
  getCardInfoFailed,
} = actions;

export default reducer;
