import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const solarDashBoardSlice = createSlice({
  name: 'solarDashboard',
  initialState: {
    isLoading: false,
    listDevice: [],
    companyId: null,
    type: '',
    total: 0,
    current_page: 0,
  },
  reducers: {
    getListDeviceTestSolarDashboard: (state, action) => {
      state.isLoading = true;
      state.type = action.type;
    },
    getListDeviceTestSolarDashboardSuccess: (state, action) => {
      const { data } = action;
      const listDevice =
        data &&
        data?.data.map((item) => ({
          id: item.ds_id,
          name: item.com_name,
          amountElectricDay: item.prod_today,
          amountElectricMonth: item.prod_inmonth,
          electricRealtime: item.prod_realtime,
          ratePower: item.performance_ratio,
          cumulativeElectric: item.prod_sum,
          event: item.event,
        }));
      state.listDevice = listDevice || [];
      state.type = action.type;
      state.total = data?.total;
      state.current_page = data?.current_page;
      state.isLoading = false;
    },
    getListDeviceTestSolarDashboardFailed: (state, action) => {
      state.isLoading = false;
      state.type = action.type;
    },
    setCompanyId: (state, action) => {
      state.type = action.type;
      state.companyId = action.payload.id;
    },
  },
});

const { actions, reducer } = solarDashBoardSlice;

export const {
  getListDeviceTestSolarDashboard,
  getListDeviceTestSolarDashboardSuccess,
  getListDeviceTestSolarDashboardFailed,
  setCompanyId,
} = actions;

export default reducer;
