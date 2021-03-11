import { createSlice } from '@reduxjs/toolkit';
import { renderLabelType } from 'helpers/';
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
  },
  reducers: {
    getListCompany: (state) => {
      state.isLoading = true;
    },
    getListCompanySuccess: (state, action) => {
      const companyOptionList = action?.data?.map((item) => ({
        value: item.id,
        label: item.com_name,
      }));
      state.isLoading = false;
      state.companyOptions = companyOptionList;
    },
    getListCompanyFailed: (state) => {
      state.isLoading = false;
    },

    getListPosition: (state) => {
      state.isLoading = true;
    },
    getListPositionSuccess: (state, action) => {
      const posOptionList = action?.data?.map((item) => ({
        value: item.id,
        label: item.pos_name,
      }));
      state.isLoading = false;
      state.posOptionList = posOptionList;
    },
    getListPositionFailed: (state) => {
      state.isLoading = false;
    },

    getListDevice: (state) => {
      state.isLoading = true;
    },

    getListDeviceSuccess: (state, action) => {
      const listDeviceFormat = action?.data?.data?.map((item, index) => ({
        rowId:
          `${
            action.data.total -
            (action?.data?.current_page - 1) * action?.data?.total -
            index
          }` || '',
        dateSetup: item.ds_install_date,
        companyName: item?.company?.com_name,
        dsType: renderLabelType(item?.ds_type),
        position: item?.position?.pos_name,
        moduleName: item?.ds_name,
        dsManager: item?.ds_manager,
        id: item?.id,
      }));
      state.isLoading = false;
      state.deviceList = listDeviceFormat;
      state.perPage = action?.data?.per_page;
      state.totalPage = action?.data?.total;
    },
    getListDeviceFailed: (state) => {
      state.isLoading = false;
    },
    getDeivceDetail: (state) => {
      state.isLoading = true;
    },
    getDeivceDetailSuccess: (state, action) => {
      state.isLoading = false;
      state.deviceDetail = action.data;
    },
    getDeivceDetailFailed: (state) => {
      state.isLoading = false;
    },

    updateDevice: (state) => {
      state.isLoading = true;
    },

    updateDeviceSuccess: (state) => {
      state.isLoading = false;
    },
    updateDeviceFailed: (state) => {
      state.isLoading = false;
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
} = actions;

export default reducer;
