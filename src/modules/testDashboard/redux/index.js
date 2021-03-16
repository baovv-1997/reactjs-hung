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
          amountElectricDay: item.dm_prod_day,
          amountElectricMonth: item.dm_prod_month,
          electricRealtime: item.dm_prod,
          ratePower: item.dm_prod_ratio,
          cumulativeElectric: item.dm_prod_sum,
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
