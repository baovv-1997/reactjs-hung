import { createSlice } from '@reduxjs/toolkit';
import ROUTERS from 'constants/routers';

const initialState = {
  menuClicking: {
    id: 1,
    name: '대시보드',
    sub: [
      {
        id: 1,
        name: '통합 대시보드',
        to: ROUTERS.ROOT,
      },
      {
        id: 2,
        name: '구역 대시보드',
        to: ROUTERS.DASHBOARD_AREA,
      },
      {
        id: 3,
        name: '업체 대시보드',
        to: ROUTERS.DASHBOARD_COMPANY,
      },
    ],
  },
  subMenuClicking: {
    id: 1,
    name: '통합 대시보드',
    to: ROUTERS.ROOT,
  },
  posList: [],
  comList: [],
  deviceList: [],
  eventList: [],
  eventNotifications: [],
  optionFilters: [],
  isProcessing: false,
  isProcessingDetail: false,
  isProcessingCompany: false,
  isProcessingDevice: false,
  isProcessingPos: false,
};

const commonSilice = createSlice({
  name: 'commons',
  initialState,
  reducers: {
    setMenuClicking: (state, action) => {
      state.type = action.type;
      state.menuClicking = action.payload;
    },

    setNestSubClicking: (state, action) => {
      state.type = action.type;
      state.subMenuClicking = action.payload;
    },
    getPosList: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
      state.isProcessingPos = true;
    },
    getPosListSuccess: (state, action) => {
      const allOption = [
        {
          id: '',
          value: '',
          label: '전체',
        },
      ];

      const posListFormat = action.data.map((pos) => ({
        ...pos,
        id: pos.id,
        label: pos.pos_name,
        value: pos.id,
      }));
      state.type = action.type;
      state.isProcessing = false;
      state.posList = [...allOption, ...posListFormat];
      state.isProcessingPos = false;
    },
    getPosListFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.isProcessingPos = true;
    },
    getCompanyList: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
      state.isProcessingCompany = true;
    },
    getCompanyListSuccess: (state, action) => {
      const allOption = [
        {
          id: '',
          value: '',
          label: '전체',
        },
      ];
      const listCompany =
        action.data &&
        action.data.map((item) => ({
          ...item,
          value: item.id,
          label: item.com_name,
        }));
      state.type = action.type;
      state.isProcessing = false;
      state.comList =
        listCompany.length > 1 ? [...allOption, ...listCompany] : listCompany;
      state.isProcessingCompany = false;
    },
    getCompanyListFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.isProcessingCompany = false;
    },

    getListDevice: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
      state.isProcessingDevice = true;
    },

    getListDeviceSuccess: (state, action) => {
      const allOption = [
        {
          id: '',
          value: '',
          label: '전체',
        },
      ];

      const deviceList =
        action.data &&
        action.data.map((item) => ({
          ...item,
          value: item.id,
          label: item.ds_name,
        }));
      state.type = action.type;
      state.isProcessing = false;
      state.deviceList =
        deviceList.length > 1 ? [...allOption, ...deviceList] : deviceList;
      state.isProcessingDevice = false;
    },
    getListDeviceFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.isProcessingDevice = false;
    },

    getEventList: (state, action) => {
      state.isProcessingDetail = true;
      state.totalEventPage = 0;
      state.type = action.type;
    },

    getEventListSuccess: (state, action) => {
      state.isProcessingDetail = false;
      state.type = action.type;
      state.eventList = action.data;
      state.totalEventPage = action?.total;
      state.perpageEvent = action?.perPage;
    },

    getEventListFailed: (state, action) => {
      state.isProcessingDetail = false;
      state.type = action.type;
      state.totalEventPage = 0;
    },
    deleteEvent: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    deleteEventSuccess: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },
    deleteEventFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },

    addNewEvent: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    addNewEventSuccess: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },
    addNewEventFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
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
    addEventFilter: (state, action) => {
      state.type = action.type;
      state.optionFilters = action.payload;
    },
    getEventNotification: (state, action) => {
      state.type = action.type;
      // state.isProcessing = true;
    },
    getEventNotificationSuccess: (state, action) => {
      state.type = action.type;
      state.eventNotifications = action.data;
      // state.isProcessing = false;
    },
    getEventNotificationFailed: (state, action) => {
      state.type = action.type;
      // state.isProcessing = false;
    },
    updateCheckEvent: (state, action) => {
      state.type = action.type;
      // state.isProcessing = true;
    },
    updateCheckEventSuccess: (state, action) => {
      state.type = action.type;
      // state.isProcessing = false;
    },
    updateCheckEventFailed: (state, action) => {
      state.type = action.type;
      // state.isProcessing = false;
    },
  },
});

const { actions, reducer } = commonSilice;

export const {
  setNestSubClicking,
  setMenuClicking,
  getPosList,
  getPosListSuccess,
  getPosListFailed,
  getCompanyList,
  getCompanyListSuccess,
  getCompanyListFailed,
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
  addEventFilter,
  getEventNotification,
  getEventNotificationSuccess,
  getEventNotificationFailed,
  updateCheckEvent,
  updateCheckEventSuccess,
  updateCheckEventFailed,
} = actions;

export default reducer;
