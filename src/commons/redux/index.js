import { createSlice } from '@reduxjs/toolkit';
import ROUTERS from 'constants/routers';

const initialState = {
  menuActived: {
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
  subMenuActived: {
    id: 1,
    name: '통합 대시보드',
    to: ROUTERS.ROOT,
  },
  posList: [],
  comList: [],
  deviceList: [],
  eventList: [],
  optionFilters: [],
  isProcessing: false,
};

const commonSilice = createSlice({
  name: 'commons',
  initialState,
  reducers: {
    setMenuItemClicking: (state, action) => {
      state.type = action.type;
      state.menuActived = action.payload;
    },

    setSubMenuItemActived: (state, action) => {
      state.type = action.type;
      state.subMenuActived = action.payload;
    },
    getPosList: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
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
        id: pos.id,
        label: pos.pos_name,
      }));
      state.type = action.type;
      state.isProcessing = false;
      state.posList = [...allOption, ...posListFormat];
    },
    getPosListFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },
    getCompanyList: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
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
      state.comList = [...allOption, ...listCompany];
    },
    getCompanyListFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },

    getListDevice: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
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
      state.deviceList = [...allOption, ...deviceList];
    },
    getListDeviceFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
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
    addEventFilter: (state, action) => {
      state.type = action.type;
      state.optionFilters = action.payload;
    },
  },
});

const { actions, reducer } = commonSilice;

export const {
  setSubMenuItemActived,
  setMenuItemClicking,
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
} = actions;

export default reducer;
