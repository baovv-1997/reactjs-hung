import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {},
  isProcessing: false,
  type: '',
  token: '',
  statusCode: null,
  dataLogin: {},
  errorMessage: '',
  listCompany: [],
  listArea: [],
  listInverter: [],
};

const accountSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    signInRequest: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    signInRequestSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.isProcessing = false;
      state.token = data?.access_token;
      state.userInfo = data?.user_data;
      state.errorMsg = '';
    },

    signInRequestFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.errorMsg = action?.errorMsg || '';
    },

    getListCompany: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getListCompanySuccess: (state, action) => {
      const { data } = action;
      const listCompany =
        data &&
        data.map((item) => ({
          id: item.id,
          value: item.id,
          label: item.com_name,
        }));
      state.listCompany = listCompany || [];
      state.type = action.type;
      state.isProcessing = false;
    },

    getListCompanyFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.listCompany = [];
    },

    getListArea: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getListAreaSuccess: (state, action) => {
      const { data } = action;
      const listArea =
        data &&
        data.map((item) => ({
          id: item.id,
          value: item.id,
          label: item.pos_name,
          isDisable: false,
        }));
      state.listArea = listArea || [];
      state.type = action.type;
      state.isProcessing = false;
    },

    getListAreaFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.listArea = [];
    },

    getListInverter: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getListInverterSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.isProcessing = false;
      const listInverter =
        data &&
        data.map((item) => ({
          id: item.id,
          value: item.id,
          label: item.ds_name,
        }));
      state.listInverter = listInverter || [];
      state.type = action.type;
      state.isProcessing = false;
    },

    getListInverterFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.listInverter = [];
    },

    signUpRequest: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    signUpRequestSuccess: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },
    signUpRequestFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },
  },
});

const { actions, reducer } = accountSlice;

export const {
  signInRequest,
  signInRequestSuccess,
  signInRequestFailed,
  signUpRequest,
  signUpRequestSuccess,
  signUpRequestFailed,
  getListCompany,
  getListCompanySuccess,
  getListCompanyFailed,
  getListArea,
  getListAreaSuccess,
  getListAreaFailed,
  getListInverter,
  getListInverterSuccess,
  getListInverterFailed,
} = actions;

export default reducer;
