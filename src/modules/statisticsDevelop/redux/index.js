import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const statisticsDevelopSlide = createSlice({
  name: 'statisticsDevelopStatus',
  initialState: {
    isLoading: false,
    total: 0,
  },

  reducers: {
    getListStatisticsDevelop: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
  },
});

const { actions, reducer } = statisticsDevelopSlide;

export const { getListStatisticsDevelop } = actions;

export default reducer;
