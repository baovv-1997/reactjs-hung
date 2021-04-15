import { createSlice } from '@reduxjs/toolkit';
import { any } from 'prop-types';
// import moment from 'moment';

const testSMStatisticsGeneratorSlide = createSlice({
  name: 'testSMStatisticsGenerator',
  initialState: {
    isProcessing: false,
    isProcessingRaw: false,
    isProcessingChart: false,
    isProcessingCart: false,
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
    dataChart: any,
    dataChartOperation: [],
    listDataTableRaw: [],
    listDataTableRawOperation: [],
  },

  reducers: {
    getCardInformationStatisticsGenerator: (state, action) => {
      state.type = action.type;
      state.isProcessingCart = true;
    },
    getCardInformationStatisticsGeneratorSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.isProcessingCart = false;
      state.dataBoxCard = data;
    },
    getCardInformationStatisticsGeneratorFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingCart = false;
    },

    getDataTrendChartStatisticsGenerator: (state, action) => {
      state.type = action.type;
      state.isProcessingChart = true;
    },
    getDataTrendChartStatisticsGeneratorSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.isProcessingChart = false;
      state.dataChart = data;
    },
    getDataTrendChartStatisticsGeneratorFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingChart = false;
      state.dataChart = {};
    },

    getDataRawTableGenerator: (state, action) => {
      state.type = action.type;
      state.isProcessingRaw = true;
      state.total = 0;
    },

    getDataRawTableGeneratorSuccess: (state, action) => {
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
          dm_prod_ratio:
            item?.dm_prod_ratio &&
            `${item?.dm_prod_ratio.toLocaleString('en')}MWh`,
          dm_performance_ratio:
            item.dm_performance_ratio &&
            `${item.dm_performance_ratio.toLocaleString('en') || 0}%`,
        }));
      state.isProcessingRaw = false;
      state.total = (data && data.total) || 0;
      state.listDataTableRaw = listDataTableRaw;
      state.type = action.type;
    },
    getDataRawTableGeneratorFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingRaw = false;
      state.total = 0;
      state.listDataTableRaw = [];
    },

    getCardInformationStatisticsOperation: (state, action) => {
      state.type = action.type;
      state.isProcessingCart = true;
    },
    getCardInformationStatisticsOperationSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.isProcessingCart = false;
      state.dataCardOperation = data;
    },
    getCardInformationStatisticsOperationFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingCart = false;
    },

    getDataTrendChartStatisticsOperation: (state, action) => {
      state.type = action.type;
      state.isProcessingChart = true;
    },
    getDataTrendChartStatisticsOperationSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.isProcessingChart = false;
      state.dataChartOperation = data;
    },
    getDataTrendChartStatisticsOperationFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingChart = false;
      state.dataChartOperation = [];
    },

    getDataRawTableOperation: (state, action) => {
      state.type = action.type;
      state.isProcessingRaw = true;
      state.total = 0;
    },
    getDataRawTableOperationSuccess: (state, action) => {
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
          dm_pv_voltage:
            item.dm_pv_voltage &&
            `${item.dm_pv_voltage.toLocaleString('en') || 0}V`,
          dm_pv_current:
            item.dm_pv_current &&
            `${item.dm_pv_current.toLocaleString('en') || 0}A`,
          dm_o_voltage:
            item?.dm_o_voltage && `${item?.dm_o_voltage.toLocaleString('en')}V`,
          dm_o_current:
            item.dm_o_current &&
            `${item.dm_o_current.toLocaleString('en') || 0}A`,
          dm_power:
            item.dm_power && `${item.dm_power.toLocaleString('en') || 0}KW`,
          dm_performance_ratio:
            item.dm_performance_ratio &&
            `${item.dm_performance_ratio.toLocaleString('en') || 0}%`,
          dm_power_eff:
            (item.dm_power_eff &&
              `${item.dm_power_eff.toLocaleString('en') || 0}Hz`) ||
            '0Hz',
        }));
      state.total = (data && data.total) || 0;
      state.listDataTableRawOperation = listDataTableRaw;
      state.type = action.type;
      state.isProcessingRaw = false;
    },
    getDataRawTableOperationFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingRaw = false;
      state.total = 0;
      state.listDataTableRawOperation = [];
    },
  },
});

const { actions, reducer } = testSMStatisticsGeneratorSlide;

export const {
  getCardInformationStatisticsGenerator,
  getCardInformationStatisticsGeneratorSuccess,
  getCardInformationStatisticsGeneratorFailed,

  getDataTrendChartStatisticsGenerator,
  getDataTrendChartStatisticsGeneratorSuccess,
  getDataTrendChartStatisticsGeneratorFailed,

  getDataRawTableGenerator,
  getDataRawTableGeneratorSuccess,
  getDataRawTableGeneratorFailed,

  getCardInformationStatisticsOperation,
  getCardInformationStatisticsOperationSuccess,
  getCardInformationStatisticsOperationFailed,

  getDataTrendChartStatisticsOperation,
  getDataTrendChartStatisticsOperationSuccess,
  getDataTrendChartStatisticsOperationFailed,

  getDataRawTableOperation,
  getDataRawTableOperationSuccess,
  getDataRawTableOperationFailed,
} = actions;

export default reducer;
