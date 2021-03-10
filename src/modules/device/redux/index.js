import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const mainSlice = createSlice({
  name: 'device',
  initialState: {
    isLoading: false,
    companyOptions: [],
    deviceList: [],
    posOptionList: [],
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
      const listDeviceFormat = action.data.map((item) => ({
        id: item.id,
        dateSetup: item.ds_install_date,
        companyName: item?.company?.com_name,
        dsType: item?.ds_type_label,
        position: item?.position?.pos_name,
        moduleName: item?.ds_name,
        dsManager: item?.ds_manager,
      }));
      state.isLoading = true;
      state.deviceList = listDeviceFormat;
    },
    getListDeviceFailed: (state) => {
      state.isLoading = true;
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
} = actions;

export default reducer;
