import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const testSMStatisticsGeneratorSlide = createSlice({
  name: 'testSMStatisticsGenerator',
  initialState: {
    isLoading: false,
    total: 0,
    dataBoxCard: {
      prod_day: 0,
      prod_month: 0,
      prod_sum: 0,
    },
    dataChart: {
      dmRad: [],
      dmProd: [],
      dmPerformanceRatio: [],
      dmPerformanceRatioCompare: [],
      dmProdCompare: [],
      dmRadCompare: [],
    },
  },

  reducers: {
    getCardInformationStatisticsGenerator: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getCardInformationStatisticsGeneratorSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.isProcessing = false;
      state.dataBoxCard = data;
    },
    getCardInformationStatisticsGeneratorFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },

    getDataTrendChartStatisticsGenerator: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getDataTrendChartStatisticsGeneratorSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.isProcessing = false;
      state.dataChart = {
        dmRad: data?.dm_rad || [],
        dmProd: data?.dm_prod || [],
        dmPerformanceRatio: data?.dm_performance_ratio || [],
        dmPerformanceRatioCompare: data?.dm_performance_ratio_compare || [],
        dmProdCompare: data?.dm_prod_compare || [],
        dmRadCompare: data?.dm_rad_compare || [],
      };
    },
    getDataTrendChartStatisticsGeneratorFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.dataChart = {
        line1: [],
        line2: [],
        line3: [],
      };
    },

    getDataRawTableGenerator: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
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
      state.type = action.type;
      state.isProcessing = false;
      state.total = (data && data.total) || 0;
      state.listDataTableRaw = listDataTableRaw;

      state.type = action.type;
      state.isProcessing = false;
    },
    getDataRawTableGeneratorFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
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
} = actions;

export default reducer;
