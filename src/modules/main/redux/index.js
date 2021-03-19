import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    isLoading: false,
    isSpinner: false,
    listCompanyInverters: [],
    listPositions: [],
    listCompany: [],
    type: '',
    key: '',
    page: 0,
    total: 0,
    perPage: 0,
  },
  reducers: {
    getMonitoringSystemDashboard: (state) => {
      state.isLoading = true;
    },
    getListCompanyInverters: (state, action) => {
      state.isLoading = true;
      state.type = action.type;
    },
    getListCompanyInvertersSuccess: (state, action) => {
      const { data } = action;
      const listCompanyInverters = data && data?.data.map(item => ({
        id: item.ds_id,
        name: item.ds_name,
        amountElectricDay: item.prod_today,
        amountElectricMonth: item.prod_inmonth,
        electricRealtime: item.prod_realtime,
        ratePower: item.performance_ratio,
        cumulativeElectric: item.prod_sum,
        comId: item.com_id,
        posId: item.pos_id,
        posName: item.pos_name,
        comName: item.com_name,
        event: item.event,
      }))

      state.listCompanyInverters = listCompanyInverters || [];
      state.total = data?.total;
      state.perPage = data?.per_page;
      state.type = action.type;
      state.isLoading = false;
    },
    getListCompanyInvertersFailed: (state, action) => {
      state.isLoading = false;
      state.type = action.type;
    },
    getListPosition: (state, action) => {
      state.isSpinner = true;
      state.type = action.type;
    },
    getListPositionSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      const listPositions = data?.data.map(item => ({
        id: item.id,
        value: item.id,
        label: item.pos_name,
        key: 'posId',
      }))
      state.listPositions = listPositions;
      state.isSpinner = false;
    },
    getListPositionFailed: (state, action) => {
      state.isSpinner = false;
      state.type = action.type;
    },
    getListCompany: (state, action) => {
      state.isSpinner = true;
      state.type = action.type;
    },
    getListCompanySuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      const listCompany = data?.data.map(item => ({
        id: item.id,
        value: item.id,
        label: item.com_name,
        key: 'comId',
      }))
      state.listCompany = listCompany;
      state.isSpinner = false;
    },
    getListCompanyFailed: (state, action) => {
      state.isSpinner = false;
      state.type = action.type;
    },
  },
});

const { actions, reducer } = mainSlice;

export const {
  getMonitoringSystemDashboard,
  getListCompanyInverters,
  getListCompanyInvertersSuccess,
  getListCompanyInvertersFailed,
  getListPosition,
  getListPositionSuccess,
  getListPositionFailed,
  getListCompany,
  getListCompanySuccess,
  getListCompanyFailed
} = actions;

export default reducer;
