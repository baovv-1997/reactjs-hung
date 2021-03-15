import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const solarDashBoardSlice = createSlice({
  name: 'solarDashboard',
  initialState: {
    isLoading: false,
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
    getListDeviceTestSolarDashboardFailed: (state, action) => {
      state.isLoading = false;
      state.type = action.type;
    },
  },
});

const { actions, reducer } = solarDashBoardSlice;

export const {
  getListDeviceTestSolarDashboard,
  getListDeviceTestSolarDashboardSuccess,
  getListDeviceTestSolarDashboardFailed,
} = actions;

export default reducer;
