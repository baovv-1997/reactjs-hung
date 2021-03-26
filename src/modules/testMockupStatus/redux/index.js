import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const testMockupStatusSlide = createSlice({
  name: 'testMockupStatus',
  initialState: {
    isLoading: false,
    total: 0,
  },

  reducers: {
    getCardInformationTestMk: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getCardInformationTestMkSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.isProcessing = false;
      state.dataBox = data;
    },

    getCardInformationTestMkFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },

    getDataRawTableTestMk: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },

    getDataRawTableTestMkSuccess: (state, action) => {
      const { data, params } = action;
      const listDataTableRaw =
        data &&
        data?.data.map((item, index) => ({
          id: item.id,
          rowId: `${
            data?.total - (params?.page - 1) * params.per_page - index || ''
          }`,
          dm_datetime: item.dm_datetime || '',
          com_name: item.com_name || '',
          inverterId: item.ds_id || '',
          inverterName: item.ds_name || '',
          dm_module_temp: `${item.dm_module_temp || 0}℃`,
          outsideTemperature: `${item.dm_env_temp || 0}℃`,
          insolation:
            item?.dm_rad &&
            `${item?.dm_rad.toLocaleString('en') || 0}kWh/㎡·10초`,
          powerGeneration:
            item?.dm_prod && `${item?.dm_prod.toLocaleString('en') || 0}kWh`,
          dm_performance_ratio:
            item?.dm_prod_sum &&
            `${item?.dm_prod_sum.toLocaleString('en') || 0}kW`,
          performanceRatio: `${item.dm_performance_ratio || 0}%`,
        }));
      state.type = action.type;
      state.isProcessing = false;
      state.total = (data && data.total) || 0;
      state.listDataTableRaw = listDataTableRaw;
    },

    getDataRawTableTestMkFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.total = 0;
      state.listDataTableRaw = [];
    },

    getDataTrendChartTestMk: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getDataTrendChartTestMkSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.isProcessing = false;
      state.dataChart = (data && data) || [];
    },

    getDataTrendChartTestMkFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },
  },
});

const { actions, reducer } = testMockupStatusSlide;

export const {
  getCardInformationTestMk,
  getCardInformationTestMkSuccess,
  getCardInformationTestMkFailed,

  getDataRawTableTestMk,
  getDataRawTableTestMkSuccess,
  getDataRawTableTestMkFailed,

  getDataTrendChartTestMk,
  getDataTrendChartTestMkSuccess,
  getDataTrendChartTestMkFailed,
} = actions;

export default reducer;
