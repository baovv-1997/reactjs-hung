import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const statusCompanySlide = createSlice({
  name: 'statusCompany',
  initialState: {
    isProcessing: false,
    isProcessingRaw: false,
    listStatusCompany: [],
    listStatusCompanySelect: [],
    total: 0,
    deviceList: [],
    rawData: [],
    cardInfo: {},
    chartData: [],
  },

  reducers: {
    getListStatusCompany: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getListStatusCompanySuccess: (state, action) => {
      const { data } = action;
      const listStatusCompanySelect =
        data &&
        data?.data.map((item) => ({
          id: item.id,
          value: item.id,
          label: item.com_name,
        }));
      state.listStatusCompanySelect = listStatusCompanySelect || [];
      state.type = action.type;
      state.isProcessing = false;
      // state.total = data?.total;
    },

    getListStatusCompanyFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.listCompany = [];
    },

    getStatusGeneratorRaw: (state, action) => {
      state.type = action.type;
      state.isProcessingRaw = true;
    },
    getStatusGeneratorRawSuccess: (state, action) => {
      const { params } = action;
      const { data } = action?.data;
      const dataTable =
        data &&
        data.map((item, index) => ({
          rowId:
            `${
              action?.data?.total -
              (parseInt(params?.page, 10) - 1) * parseInt(params.per_page, 10) -
              index
            }` || '',
          dateTime:
            (item.dm_datetime &&
              moment(item.dm_datetime).format('YYYY-MM-DD HH:mm:ss')) ||
            '',
          comName: item?.com_name,
          inverterID: item?.ds_id,
          installationLocation: item?.pos_name,
          inverterName: item?.ds_name,
          moduleTemperature: `${item?.dm_module_temp}℃`,
          outsideTemperature: `${item?.dm_env_temp}℃`,
          gradientInsolation: `${item?.dm_rad}W/㎡`,
          powerGeneration: `${item?.dm_prod}kWh`,
          cumulativePowerGeneration: `${item?.dm_prod_sum}kW`,
          rateOfPowerGeneration: `${item?.dm_performance_ratio}%`,
        }));

      state.type = action.type;
      state.isProcessingRaw = false;
      state.rawData = dataTable;
      state.totalRawData = action?.data?.total;
    },
    getStatusGeneratorRawFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingRaw = false;
    },

    getStatusGeneratorCard: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getStatusGeneratorCardSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.cardInfo = data;
      state.isProcessing = false;
    },
    getStatusGeneratorCardFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },

    getStatusGeneratorChartData: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getStatusGeneratorChartDataSuccess: (state, action) => {
      state.type = action.type;
      state.chartData = action.data;
      state.isProcessing = false;
    },
    getStatusGeneratorChartDataFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },
  },
});

const { actions, reducer } = statusCompanySlide;

export const {
  getListStatusCompany,
  getListStatusCompanySuccess,
  getListStatusCompanyFailed,
  getStatusGeneratorRaw,
  getStatusGeneratorRawSuccess,
  getStatusGeneratorRawFailed,
  getStatusGeneratorCard,
  getStatusGeneratorCardSuccess,
  getStatusGeneratorCardFailed,
  getStatusGeneratorChartData,
  getStatusGeneratorChartDataSuccess,
  getStatusGeneratorChartDataFailed,
} = actions;

export default reducer;
