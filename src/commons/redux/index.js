import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuClicking: {},
  subMenuClicking: {},
};

const commonSilice = createSlice({
  name: 'commons',
  initialState,
  reducers: {
    setMenuClicking: (state, action) => {
      state.type = action.type;
      state.menuClicking = action.payload;
    },
    setNestSubClicking: (state, action) => {
      state.type = action.type;
      state.subMenuClicking = action.payload;
    },
  },
});

const { actions, reducer } = commonSilice;

export const { setMenuClicking, setNestSubClicking } = actions;

export default reducer;
