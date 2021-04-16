import { createSlice } from '@reduxjs/toolkit';
import { renderLabelType, formatValue } from 'helpers/';
// import moment from 'moment';

const mainSlice = createSlice({
  name: 'device',
  initialState: {
    isLoading: false,
    companyOptions: [],
    deviceList: [],
    posOptionList: [],
    perPage: 0,
    totalPage: 0,
    deviceDetail: {},
    dataAddNew: [],
    errorsAddDevice: {},
    type: '',
  },
  reducers: {
    getListCompany: (state, action) => {
      state.isLoading = true;
      state.type = action.type;
    },
    getListCompanySuccess: (state, action) => {
      const companyOptionList = action?.data?.map((item) => ({
        value: item.id,
        label: item.com_name,
      }));
      state.isLoading = false;
      state.companyOptions = companyOptionList;
      state.type = action.type;
    },
    getListCompanyFailed: (state, action) => {
      state.isLoading = false;
      state.type = action.type;
    },

    getListPosition: (state, action) => {
      state.isLoading = false;
      state.type = action.type;
    },
    getListPositionSuccess: (state, action) => {
      const posOptionListFormat = action?.data?.map((item) => ({
        value: item.id,
        label: item.pos_name,
      }));
      state.isLoading = false;
      state.posOptionList = posOptionListFormat;
    },
    getListPositionFailed: (state) => {
      state.isLoading = false;
    },

    getListDevice: (state) => {
      state.isLoading = true;
      state.totalPage = 0;
    },

    getListDeviceSuccess: (state, action) => {
      const listDeviceFormat = action?.data?.data?.map((item, index) => ({
        rowId:
          `${
            action.data.total -
            (action?.data?.current_page - 1) * action?.data?.per_page -
            index
          }` || '',

        dateSetup: item.ds_install_date,
        companyName: item?.company?.com_name,
        dsType: renderLabelType(item?.ds_type),
        position: item?.position?.pos_name,
        moduleName: item?.ds_name,
        dsManager: `${item?.ds_manager} / ${formatValue(
          item?.ds_manager_phone
        )}`,
        id: item?.id,
      }));
      state.isLoading = false;
      state.deviceList = listDeviceFormat;
      state.perPage = action?.data?.per_page;
      state.totalPage = action?.data?.total;
      state.type = action.type;
    },
    getListDeviceFailed: (state, action) => {
      state.isLoading = false;
      state.type = action.type;
      state.totalPage = 0;
    },
    getDeivceDetail: (state, action) => {
      state.isLoading = true;
      state.type = action.type;
    },
    getDeivceDetailSuccess: (state, action) => {
      state.isLoading = false;
      state.deviceDetail = action.data;
      state.type = action.type;
    },
    getDeivceDetailFailed: (state, action) => {
      state.isLoading = false;
      state.type = action.type;
    },

    updateDevice: (state, action) => {
      state.isLoading = true;
      state.type = action.type;
    },

    updateDeviceSuccess: (state, action) => {
      state.isLoading = false;
      state.type = action.type;
    },
    updateDeviceFailed: (state, action) => {
      state.isLoading = false;
      state.type = action.type;
      state.errorsAddDevice = action?.errors;
    },

    addDevice: (state, action) => {
      state.isLoading = true;
      state.type = action.type;
    },
    addDeviceSuccess: (state, action) => {
      state.isLoading = false;
      state.dataAddNew = action?.data?.data;
      state.type = action.type;
    },
    addDeviceFailed: (state, action) => {
      state.isLoading = false;
      state.type = action.type;
      state.errorsAddDevice = action.errors;
    },
    resetDeviceType: (state) => {
      state.type = '';
      state.errorsAddDevice = {};
    },
  },
});

const { actions, reducer } = mainSlice;

export const {
  getListCompany,
  getListCompanySuccess,
  getListCompanyFailed,
  getListDevice,
  getListDeviceSuccess,
  getListDeviceFailed,
  getListPosition,
  getListPositionSuccess,
  getListPositionFailed,
  getDeivceDetail,
  getDeivceDetailSuccess,
  getDeivceDetailFailed,
  updateDevice,
  updateDeviceSuccess,
  updateDeviceFailed,
  addDevice,
  addDeviceSuccess,
  addDeviceFailed,
  resetDeviceType,
} = actions;

export default reducer;
