import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const operationStatusSlide = createSlice({
  name: 'operationStatus',
  initialState: {
    isLoading: false,
    total: 0,
    eventList: [],
    deviceList: [],
  },

  reducers: {
    getListOperationStatus: (state, action) => {
      state.type = action.type;
      // state.isProcessing = true;
    },
    getListDevice: (state) => {
      state.isProcessing = true;
    },

    getListDeviceSuccess: (state, action) => {
      const allOption = { ds_name: '전체', id: 0 };
      state.isProcessing = false;
      state.deviceList =
        action.data && action.data && action.data.length > 1
          ? [allOption, ...action.data]
          : action.data;
      // state.perPage = action?.data?.per_page;
      // state.totalPage = action?.data?.total;
      state.type = action.type;
    },
    getListDeviceFailed: (state, action) => {
      state.isProcessing = false;
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
} = actions;

export default reducer;
