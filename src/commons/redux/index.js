import { createSlice } from '@reduxjs/toolkit';
import ROUTERS from 'routers';

const initialState = {
  menuClicking: {
    id: 1,
    name: '대시보드',
    sub: [
      {
        id: 1,
        name: '통합 대시보드',
        to: ROUTERS.ROOT,
      },
      {
        id: 2,
        name: '구역 대시보드',
        to: ROUTERS.DASHBOARD_AREA,
      },
      {
        id: 3,
        name: '업체 대시보드',
        to: ROUTERS.DASHBOARD_COMPANY,
      },
    ],
  },
  subMenuClicking: {
    id: 1,
    name: '통합 대시보드',
    to: ROUTERS.ROOT,
  },
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
