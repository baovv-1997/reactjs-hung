import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const testMockupStatusSlide = createSlice({
  name: 'testMockupStatus',
  initialState: {
    isLoading: false,
    total: 0,
    dataCardOperation: {
      azimuth_angle: 0,
      color: '',
      incidence_angle: 0,
      power: 0,
    },
    dataBox: {},
    listDataTableRaw: [],
    dataChartOperation: {},
    listDataTableRawOperation: [],
    listDataTableRawEventOperation: [],
    totalEvent: 0,
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

    getCardTestMKStatusOperation: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getCardTestMKStatusOperationSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.isProcessing = false;
      state.dataCardOperation = data;
    },
    getCardTestMKStatusOperationFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },

    getDataTestMKChartStatusOperation: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getDataTestMKChartStatusOperationSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.isProcessing = false;
      state.dataChartOperation = data;
    },
    getDataTestMKChartStatusOperationFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.dataChartOperation = {};
    },

    getDataTestMKRawTableOperation: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getDataTestMKRawTableOperationSuccess: (state, action) => {
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
          ds_azimuth_angle:
            item?.ds_azimuth_angle &&
            `${item?.ds_azimuth_angle.toLocaleString('en')}°`,
          ds_incidence_angle:
            item.ds_incidence_angle &&
            `${item.ds_incidence_angle.toLocaleString('en') || 0}°`,
          dm_ac_voltage:
            item.dm_ac_voltage &&
            `${item.dm_ac_voltage.toLocaleString('en') || 0}KW`,
          dm_ac_power:
            item.dm_ac_power &&
            `${item.dm_ac_power.toLocaleString('en') || 0}A`,
          dm_ac_current:
            (item.dm_ac_current &&
              `${item.dm_ac_current.toLocaleString('en') || 0}A`) ||
            '0Hz',
        }));
      state.total = (data && data.total) || 0;
      state.listDataTableRawOperation = listDataTableRaw;
      state.type = action.type;
      state.isProcessing = false;
    },
    getDataTestMKRawTableOperationFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.total = 0;
      state.listDataTableRawOperation = [];
    },

    getDataTestMKRawEventTableOperation: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getDataTestMKRawEventTableOperationSuccess: (state, action) => {
      const { data } = action;
      const listDataTableRawEvent =
        data &&
        data?.data.map((item) => ({
          id: item.id,
          rowId: item.no,
          dm_datetime: item.created_at || '',
          com_name: item.com_name || '',
          eventId: item?.id,
          eventName: item.evt_type || '',
          evtContent: item.evt_content,
        }));
      state.totalEvent = (data && data.total) || 0;
      state.listDataTableRawEventOperation = listDataTableRawEvent;
      state.type = action.type;
      state.isProcessing = false;
    },
    getDataTestMKRawEventTableOperationFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.totalEvent = 0;
      state.listDataTableRawEventOperation = [];
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

  getDataTestMKChartStatusOperation,
  getDataTestMKChartStatusOperationSuccess,
  getDataTestMKChartStatusOperationFailed,

  getDataTestMKRawTableOperation,
  getDataTestMKRawTableOperationSuccess,
  getDataTestMKRawTableOperationFailed,

  getCardTestMKStatusOperation,
  getCardTestMKStatusOperationSuccess,
  getCardTestMKStatusOperationFailed,

  getDataTestMKRawEventTableOperation,
  getDataTestMKRawEventTableOperationSuccess,
  getDataTestMKRawEventTableOperationFailed,
} = actions;

export default reducer;
