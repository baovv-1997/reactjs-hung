import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const operationStatusSlide = createSlice({
  name: 'operationStatus',
  initialState: {
    isLoading: false,
    total: 0,
    eventList: [],
    deviceList: [],
    dataChart: [],
    rawData: [],
    optionFilters: [],
    cardInfo: {},
  },

  reducers: {
    getListOperationStatus: (state, action) => {
      state.type = action.type;
      // state.isProcessing = true;
    },
    getListDevice: (state, action) => {
      state.type = action.type;
      // state.isProcessing = true;
    },

    getListDeviceSuccess: (state, action) => {
      const allOption = [{ ds_name: '전체', id: '' }];
      // state.isProcessing = false;

      state.deviceList =
        action.data && action.data && action.data.length > 1
          ? [...allOption, ...action.data]
          : action.data;
      // state.perPage = action?.data?.per_page;
      // state.totalPage = action?.data?.total;
      state.type = action.type;
    },
    getListDeviceFailed: (state, action) => {
      // state.isProcessing = false;
      state.type = action.type;
    },
    getEventList: (state, action) => {
      // state.isProcessing = true;
      state.type = action.type;
    },

    getEventListSuccess: (state, action) => {
      // state.isProcessing = false;
      state.type = action.type;
      state.eventList = action.data;
      state.totalEventPage = action?.total;
      state.perpageEvent = action?.perPage;
    },

    getEventListFailed: (state, action) => {
      // state.isProcessing = false;
      state.type = action.type;
    },
    deleteEvent: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    deleteEventSuccess: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    deleteEventFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },

    addNewEvent: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    addNewEventSuccess: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    addNewEventFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
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
      // state.isProcessing = true;
    },
    getDataChartSuccess: (state, action) => {
      state.type = action.type;
      // state.isProcessing = false;
      state.dataChart = action.data;
    },
    getDataChartFailed: (state, action) => {
      state.type = action.type;
      // state.isProcessing = false;
      state.dataChart = [];
    },

    getTrendChart: (state, action) => {
      state.type = action.type;
      // state.isProcessing = true;
    },
    getTrendChartSuccess: (state, action) => {
      state.type = action.type;
      // state.isProcessing = false;
      state.rawData = action.data;
      state.totalRawData = action.total;
      state.currentPage = action.currentPage;
    },
    getTrendChartFailed: (state, action) => {
      state.type = action.type;
      // state.isProcessing = false;
      state.rawData = [];
    },

    addEventFilter: (state, action) => {
      state.type = action.type;
      state.optionFilters = action.payload;
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
  getListOperationStatus,
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
  addEventFilter,
  getCardInfo,
  getCardInfoSuccess,
  getCardInfoFailed,
} = actions;

export default reducer;
