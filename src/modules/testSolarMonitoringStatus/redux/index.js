import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const testSolarMonitoringStatusSlide = createSlice({
  name: 'testSolarMonitoringStatus',
  initialState: {
    isProcessing: false,
    listDataTableRaw: [],
    total: 0,
    dataChart: [],

    dataBox: {
      avg_prod: 0,
      current_rad: 0,
      max_module_temp: 0,
      max_rad: 0,
      module_temp: 0,
      prod_ratio: 0,
    },
  },

  reducers: {
    getCardInformation: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getCardInformationSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.isProcessing = false;
      state.dataBox = data;
    },

    getCardInformationFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },

    getDataRawTable: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
      state.total = 0;
    },

    getDataRawTableSuccess: (state, action) => {
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
          insolation: `${item?.dm_rad}kWh/㎡·10초`,
          powerGeneration: `${item?.dm_prod}kWh`,
          dm_performance_ratio: `${item?.dm_prod_sum || 0}kWh`,
          performanceRatio: `${item.dm_performance_ratio || 0}%`,
        }));
      state.type = action.type;
      state.isProcessing = false;
      state.total = (data && data.total) || 0;
      state.listDataTableRaw = listDataTableRaw;
    },

    getDataRawTableFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },

    getDataTrendChart: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getDataTrendChartSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.isProcessing = false;
      state.dataChart = (data && data) || [];
    },

    getDataTrendChartFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },
  },
});

const { actions, reducer } = testSolarMonitoringStatusSlide;

export const {
  getCardInformation,
  getCardInformationSuccess,
  getCardInformationFailed,
  getDataRawTable,
  getDataRawTableSuccess,
  getDataRawTableFailed,
  getDataTrendChart,
  getDataTrendChartSuccess,
  getDataTrendChartFailed,
} = actions;

export default reducer;
