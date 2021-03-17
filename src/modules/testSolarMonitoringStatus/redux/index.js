import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const statusCompanySlide = createSlice({
  name: 'statusCompany',
  initialState: {
    isLoading: false,
    listStatusCompany: [],
    listStatusCompanySelect: [],
    total: 0,
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
  },
});

const { actions, reducer } = statusCompanySlide;

export const {
  getListStatusCompany,
  getListStatusCompanySuccess,
  getListStatusCompanyFailed,
} = actions;

export default reducer;
