import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const testMockupStatisticsSlide = createSlice({
  name: 'testMockupStatistics',
  initialState: {
    isProcessing: false,
    isProcessingRaw: false,
    total: 0,
    dataBoxCard: {
      prod_day: 0,
      prod_month: 0,
      prod_sum: 0,
    },
    dataCardOperation: {
      azimuth_angle: 0,
      color: '',
      incidence_angle: 0,
      power: 0,
    },
    dataChart: [],
    dataChartOperation: [],
    listDataTableRaw: [],
    listDataTableRawOperation: [],
    listDataTableRawMockup: [],
    totalMockup: 0,
  },

  reducers: {
    getCardTestMKStatisticsGenerator: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getCardTestMKStatisticsGeneratorSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.isProcessing = false;
      state.dataBoxCard = data;
    },
    getCardTestMKStatisticsGeneratorFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },

    getTrendChartTestMKStatisticsGenerator: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getTrendChartTestMKStatisticsGeneratorSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.isProcessing = false;
      state.dataChart = data;
    },
    getTrendChartTestMKStatisticsGeneratorFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.dataChart = [];
    },

    getDataTestMKRawTableGenerator: (state, action) => {
      state.type = action.type;
      state.isProcessingRaw = true;
    },

    getDataTestMKRawTableGeneratorSuccess: (state, action) => {
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
          dm_prod_day:
            item.dm_prod_day &&
            `${item.dm_prod_day.toLocaleString('en') || 0}kWh`,
          dm_prod_month:
            item.dm_prod_month &&
            `${item.dm_prod_month.toLocaleString('en') || 0}KWh`,

          dm_prod_sum:
            item?.dm_prod_sum && `${item?.dm_prod_sum.toLocaleString('en')}KWh`,
          dm_performance_ratio:
            item.dm_performance_ratio &&
            `${item.dm_performance_ratio.toLocaleString('en') || 0}%`,
        }));
      state.isProcessingRaw = false;
      state.total = (data && data.total) || 0;
      state.listDataTableRaw = listDataTableRaw;
      state.type = action.type;
    },
    getDataTestMKRawTableGeneratorFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingRaw = false;
      state.total = 0;
      state.listDataTableRaw = [];
    },

    getCardTestMKStatisticsOperation: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getCardTestMKStatisticsOperationSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.isProcessing = false;
      state.dataCardOperation = data;
    },
    getCardTestMKStatisticsOperationFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },

    getDataChartTestMKStatisticsOperation: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getDataChartTestMKStatisticsOperationSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.isProcessing = false;
      state.dataChartOperation = data;
    },
    getDataChartTestMKStatisticsOperationFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.dataChartOperation = [];
    },

    getDataRawTestMKStatisticOperation: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getDataRawTestMKStatisticOperationSuccess: (state, action) => {
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
    getDataRawTestMKStatisticOperationFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.total = 0;
      state.listDataTableRawOperation = [];
    },

    // table bottom
    getDataRawTableMockupStatisticGenerator: (state, action) => {
      state.type = action.type;
      state.isProcessingRaw = true;
    },

    getDataRawTableMockupStatisticGeneratorSuccess: (state, action) => {
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
            item?.dm_rad &&
            `${item?.dm_rad.toLocaleString('en') || 0}kWh/㎡·10초`,
        }));
      state.type = action.type;
      state.isProcessingRaw = false;
      state.totalMockup = (data && data.total) || 0;
      state.listDataTableRawMockup = listDataTableRaw;
    },

    getDataRawTableMockupStatisticGeneratorFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingRaw = false;
      state.totalMockup = 0;
      state.listDataTableRawMockup = [];
    },
  },
});

const { actions, reducer } = testMockupStatisticsSlide;

export const {
  getCardTestMKStatisticsGenerator,
  getCardTestMKStatisticsGeneratorSuccess,
  getCardTestMKStatisticsGeneratorFailed,

  getTrendChartTestMKStatisticsGenerator,
  getTrendChartTestMKStatisticsGeneratorSuccess,
  getTrendChartTestMKStatisticsGeneratorFailed,

  getDataTestMKRawTableGenerator,
  getDataTestMKRawTableGeneratorSuccess,
  getDataTestMKRawTableGeneratorFailed,

  getCardTestMKStatisticsOperation,
  getCardTestMKStatisticsOperationSuccess,
  getCardTestMKStatisticsOperationFailed,

  getDataChartTestMKStatisticsOperation,
  getDataChartTestMKStatisticsOperationSuccess,
  getDataChartTestMKStatisticsOperationFailed,

  getDataRawTestMKStatisticOperation,
  getDataRawTestMKStatisticOperationSuccess,
  getDataRawTestMKStatisticOperationFailed,

  getDataRawTableMockupStatisticGenerator,
  getDataRawTableMockupStatisticGeneratorSuccess,
  getDataRawTableMockupStatisticGeneratorFailed,
} = actions;

export default reducer;
