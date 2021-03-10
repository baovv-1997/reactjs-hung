import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const operationStatusSlide = createSlice({
  name: 'operationStatusStatus',
  initialState: {
    isLoading: false,
    total: 0,
  },

  reducers: {
    getListOperationStatus: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
  },
});

const { actions, reducer } = operationStatusSlide;

export const { getListOperationStatus } = actions;

export default reducer;
