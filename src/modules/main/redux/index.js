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
    optionsPosition: [],
    optionsCompany: [],
    cardPositionMain: [],
    type: '',
    key: '',
    page: 0,
    total: 0,
    perPage: 0,
  },
  reducers: {
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
      state.isLoading = true;
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
        posX: item.pos_map_x,
        posY: item.pos_map_y,
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
      const { data } = action;
      state.type = action.type;
      const listCompany = data?.data.map(item => ({
        id: item.id,
        value: item.id,
        label: item.com_name,
        key: 'comId',
      }))
      state.listCompany = listCompany;
      state.isLoading = false;
    },
    getListCompanyFailed: (state, action) => {
      state.isLoading = false;
      state.type = action.type;
    },
    getPositionSearchMain: (state, action) => {
      state.isSpinner = true;
      state.type = action.type;
    },
    getPositionSearchMainSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      const listPosition = data?.data.map(item => ({
        id: item.id,
        value: item.id,
        label: item.pos_name,
        key: 'posId',
      }));
      state.optionsPosition = listPosition;
      state.isSpinner = false;
    },
    getPositionSearchMainFaled: (state, action) => {
      state.isSpinner = false;
      state.type = action.type;
    },
    getCompanySearchMain: (state, action) => {
      state.isSpinner = true;
      state.type = action.type;
    },
    getCompanySearchMainSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      const listCompany = data?.data.map(item => ({
        id: item.id,
        value: item.id,
        label: item.com_name,
        key: 'comId',
      }));
      state.optionsCompany = listCompany;
      state.isSpinner = false;
    },
    getCompanySearchMainFaled: (state, action) => {
      state.isSpinner = false;
      state.type = action.type;
    },
    getCardMeasureMain: (state, action) => {
      state.type = action.type;
    },
    getCardMeasureMainSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.cardPositionMain = [data?.data];
    },
    getCardMeasureMainFailed: (state, action) => {
      state.type = action.type;
    },
    getCardMeasureSearchPosition: (state, action) => {
      state.type = action.type;
      state.isLoading = true;
    },
    getCardMeasureSearchPositionSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.cardPositionMain = [data?.data];
      state.isLoading = false;
    },
    getCardMeasureSearchPositionFailed: (state, action) => {
      state.type = action.type;
      state.isLoading = false;
    },
    getCardMeasureSearchCompany: (state, action) => {
      state.type = action.type;
      state.isLoading = true;
    },
    getCardMeasureSearchCompanySuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.cardPositionMain = data?.data;
      state.isLoading = false;
    },
    getCardMeasureSearchCompanyFailed: (state, action) => {
      state.type = action.type;
      state.isLoading = false;
    },
  },
});

const { actions, reducer } = mainSlice;

export const {
  getListCompanyInverters,
  getListCompanyInvertersSuccess,
  getListCompanyInvertersFailed,
  getListPosition,
  getListPositionSuccess,
  getListPositionFailed,
  getListCompany,
  getListCompanySuccess,
  getListCompanyFailed,
  getPositionSearchMain,
  getPositionSearchMainSuccess,
  getPositionSearchMainFailed,
  getCompanySearchMain,
  getCompanySearchMainSuccess,
  getCompanySearchMainFailed,
  getCardMeasureMain,
  getCardMeasureMainSuccess,
  getCardMeasureMainFailed,
  getCardMeasureSearchPosition,
  getCardMeasureSearchPositionSuccess,
  getCardMeasureSearchPositionFailed,
  getCardMeasureSearchCompany,
  getCardMeasureSearchCompanySuccess,
  getCardMeasureSearchCompanyFailed,
} = actions;

export default reducer;
