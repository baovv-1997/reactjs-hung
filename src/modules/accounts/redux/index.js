import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import { formatValue } from 'helpers';

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
  accountList: [],
  accountDetail: {},
  errorMsg: null,
  eventNotifications: [],
};

const accountSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    resetData: (state) => {
      state.listCompany = [];
      state.listArea = [];
      state.listInverter = [];
      state.accountList = [];
      state.type = '';
      state.isProcessing = false;
    },
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
      const { data } = action.data;
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
      // state.isProcessing = true;
      state.errorMsg = null;
    },
    signUpRequestSuccess: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.errorMsg = null;
    },
    signUpRequestFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.errorMsg = action.errorMsg;
    },
    getAccountList: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getAccountListSuccess: (state, action) => {
      if (!action.isDetail) {
        state.accountList = action?.data?.data.map((item, index) => ({
          rowId:
            `${
              action.data.total -
              (action?.data?.current_page - 1) * action?.data?.per_page -
              index
            }` || '',
          dateCreate: moment(item?.created_at).format('YYYY-MM-DD'),
          roleName: item?.roles[0]?.display_name,
          username: item?.username,
          email: item?.email,
          name: item?.name,
          phone: item?.phone && formatValue(item?.phone),
          id: item.id,
        }));
      } else {
        state.accountDetail = action?.data;
      }
      state.type = action.type;
      state.isProcessing = false;
      state.perPage = action?.data?.per_page;
      state.totalPage = action?.data?.total;
      state.type = action.type;
    },
    getAccountListFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },

    updateAccount: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    updateAccountSuccess: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },
    updateAccountFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.errors = action.errors;
    },
    deleteAccount: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    deleteAccountSuccess: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },
    deleteAccountFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.errors = action.errors;
    },
    resetAccountType: (state) => {
      state.type = '';
    },

    logOut: (state, action) => {
      state.type = action.type;
    },
    logOutSuccess: (state) => {
      state.type = '';
      state.token = '';
      state.userInfo = '';
      state.eventNotifications = [];
    },
    logOutFalied: (state, action) => {
      state.type = action.type;
      state.token = '';
      state.userInfo = '';
      state.eventNotifications = [];
    },

    getEventNotification: (state, action) => {
      state.type = action.type;
      // state.isProcessing = true;
    },
    getEventNotificationSuccess: (state, action) => {
      state.type = action.type?.type;
      state.eventNotifications = action.data;
      // state.isProcessing = false;
    },
    getEventNotificationFailed: (state, action) => {
      state.type = action.type;
      // state.isProcessing = false;
    },
  },
});

const { actions, reducer } = accountSlice;

export const {
  resetData,
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
  getAccountList,
  getAccountListFailed,
  getAccountListSuccess,
  updateAccount,
  updateAccountFailed,
  updateAccountSuccess,
  resetAccountType,
  deleteAccount,
  deleteAccountFailed,
  deleteAccountSuccess,
  logOut,
  logOutSuccess,
  logOutFalied,
  getEventNotification,
  getEventNotificationSuccess,
  getEventNotificationFailed,
} = actions;

export default reducer;
