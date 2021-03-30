import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const testSolarMonitoringStatusSlide = createSlice({
  name: 'testSolarMonitoringStatus',
  initialState: {
    isProcessing: false,
    listDataTableRaw: [],
    total: 0,
    totalMockup: 0,
    dataChart: [],

    dataBox: {
      avg_prod: 0,
      current_rad: 0,
      max_module_temp: 0,
      max_rad: 0,
      module_temp: 0,
      prod_ratio: 0,
    },
    dataBoxOperation: {
      dm_power: 0,
      ds_azimuth_angle: 0,
      ds_color: '',
      ds_incidence_angle: 0,
    },
    dataChartOperation: [],
    listDataTableRawMockup: [],
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
          insolation:
            item?.dm_rad &&
            `${item?.dm_rad.toLocaleString('en') || 0}kWh/㎡·10초`,
          powerGeneration:
            item?.dm_prod && `${item?.dm_prod.toLocaleString('en') || 0}kWh`,
          dm_performance_ratio:
            item?.dm_prod_sum &&
            `${item?.dm_prod_sum.toLocaleString('en') || 0}kWh`,
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
      state.total = 0;
      state.listDataTableRaw = [];
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

    getCardInformationOperation: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getCardInformationOperationSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.isProcessing = false;
      state.dataBoxOperation = data;
    },

    getCardInformationOperationFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },

    getDataRawTableOperation: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },

    getDataRawTableOperationSuccess: (state, action) => {
      const { data, params } = action;
      const listDataTableRaw =
        data &&
        data?.data.map((item, index) => ({
          id: index + 1,
          rowId: `${
            data?.total - (params?.page - 1) * params.per_page - index || ''
          }`,
          dm_datetime: item.dm_datetime || '',
          com_name: item.com_name || '',
          inverterId: item.ds_id || '',
          inverterName: item.ds_name || '',
          dm_module_temp: `${item.dm_pv_voltage || 0}V`,
          outsideTemperature: `${item.dm_pv_current || 0}A`,
          dmOVoltage:
            item?.dm_o_voltage &&
            `${item?.dm_o_voltage.toLocaleString('en') || 0}V`,
          dmOCurrent:
            item?.dm_o_current &&
            `${item?.dm_o_current.toLocaleString('en') || 0}A`,
          dm_power:
            item?.dm_power && `${item?.dm_power.toLocaleString('en') || 0}KW`,
          performanceRatio: `${item.dm_performance_ratio || 0}%`,
          dm_rad:
            (item.dm_freq && `${item?.dm_freq.toLocaleString('en') || 0}Hz`) ||
            '0Hz',
        }));
      state.type = action.type;
      state.isProcessing = false;
      state.total = (data && data.total) || 0;
      state.listDataTableRaw = listDataTableRaw;
    },

    getDataRawTableOperationFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.total = 0;
      state.listDataTableRaw = [];
    },

    getDataTrendChartOperation: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getDataTrendChartOperationSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.isProcessing = false;
      state.dataChartOperation = (data && data) || [];
    },
    getDataTrendChartOperationFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.dataChartOperation = [];
    },

    getDataRawTableMockupOperation: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },

    getDataRawTableMockupOperationSuccess: (state, action) => {
      const { data, params } = action;
      const listDataTableRaw =
        data &&
        data?.data.map((item, index) => ({
          id: index + 1,
          rowId: `${
            data?.total - (params?.page - 1) * params.per_page - index || ''
          }`,
          dm_datetime: item.dm_datetime || '',
          com_name: item.com_name || '',
          inverterId: item.ds_id || '',
          inverterName: item.ds_name || '',
          dm_module_temp: `${item.dm_module_temp || 0}℃`,
          outsideTemperature: `${item.dm_env_temp || 0}℃`,
          dm_rad:
            item?.dm_rad && `${item?.dm_rad.toLocaleString('en') || 0}W/㎡`,
          dm_rad_Max:
            item?.ds_max_power &&
            `${item?.ds_max_power.toLocaleString('en') || 0}W/㎡`, // TODO
        }));
      state.type = action.type;
      state.isProcessing = false;
      state.totalMockup = (data && data.total) || 0;
      state.listDataTableRawMockup = listDataTableRaw;
    },

    getDataRawTableMockupOperationFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.totalMockup = 0;
      state.listDataTableRawMockup = [];
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

  getCardInformationOperation,
  getCardInformationOperationSuccess,
  getCardInformationOperationFailed,

  getDataRawTableOperation,
  getDataRawTableOperationSuccess,
  getDataRawTableOperationFailed,

  getDataRawTableMockupOperation,
  getDataRawTableMockupOperationSuccess,
  getDataRawTableMockupOperationFailed,

  getDataTrendChartOperation,
  getDataTrendChartOperationSuccess,
  getDataTrendChartOperationFailed,
} = actions;

export default reducer;
