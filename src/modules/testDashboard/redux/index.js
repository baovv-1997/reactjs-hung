import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const testDashBoardSlice = createSlice({
  name: 'testDashboard',
  initialState: {
    isLoading: false,
    type: '',
    listDevice: [],
    total: 0,
    current_page: 0,
  },
  reducers: {
    getListDeviceTestDashboard: (state, action) => {
      state.isLoading = true;
      state.type = action.type;
    },
    getListDeviceTestDashboardSuccess: (state, action) => {
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
    getListDeviceTestDashboardFailed: (state, action) => {
      state.isLoading = false;
      state.type = action.type;
    },
  },
});

const { actions, reducer } = testDashBoardSlice;

export const {
  getListDeviceTestDashboard,
  getListDeviceTestDashboardSuccess,
  getListDeviceTestDashboardFailed,
} = actions;

export default reducer;
