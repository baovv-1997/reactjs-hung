import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    isLoading: false,
    listCompanyInverters: [],
    listPositions: [],
    listCompany: [],
    type: '',
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
      const listCompanyInverters =
        data &&
        data?.data.map((item) => {
          const { data_measure } = item;
          const listInverter = {
            InverterId: data_measure.ds_id,
            name: data_measure.ds_name,
            amountElectricDay: data_measure.dm_prod_day,
            amountElectricMonth: data_measure.dm_prod_month,
            electricRealtime: data_measure.dm_prod,
            ratePower: data_measure.dm_prod_ratio,
            cumulativeElectric: data_measure.dm_prod_sum,
            event: data_measure.event,
          };
          return {
            id: item.id,
            companyName: item.com_name,
            listInverter: [listInverter],
          };
        });
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
      state.isLoading = true;
      state.type = action.type;
    },
    getListPositionSuccess: (state, action) => {
      const {data} = action;
      state.type = action.type;
      const listPositions = data?.data.map(item => ({
        id: item.id,
        value: item.id,
        label: item.pos_name,
      }))
      state.listPositions = listPositions;
      state.isLoading = false;
    },
    getListPositionFailed: (state, action) => {
      state.isLoading = false;
      state.type = action.type;
    },
    getListCompany: (state, action) => {
      state.isLoading = true;
      state.type = action.type;
    },
    getListCompanySuccess: (state, action) => {
      const {data} = action;
      state.type = action.type;
      const listCompany = data?.data.map(item => ({
        id: item.id,
        value: item.id,
        label: item.com_name,
      }))
      state.listCompany = listCompany;
      state.isLoading = false;
    },
    getListCompanyFailed: (state, action) => {
      state.isLoading = false;
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
