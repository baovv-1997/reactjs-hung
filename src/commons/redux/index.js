import { createSlice } from '@reduxjs/toolkit';
import ROUTERS from 'routers';

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
    },
    getPosListSuccess: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.posList = action.data;
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
          id: null,
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
          id: null,
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
  },
});

const { actions, reducer } = commonSilice;

export const {
  setMenuClicking,
  setNestSubClicking,
  getPosList,
  getPosListSuccess,
  getPosListFailed,
  getCompanyList,
  getCompanyListSuccess,
  getCompanyListFailed,
  getListDevice,
  getListDeviceSuccess,
  getListDeviceFailed,
} = actions;

export default reducer;
