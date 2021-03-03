import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {},
  isProcessing: false,
  type: '',
  token: '',
  statusCode: null,
  dateLogin: null,
  errorSignUp: '',
  dataLogin: {},
  errorMessage: '',
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
      state.type = action.type;
      state.isProcessing = false;
    },

    signInRequestFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
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
} = actions;

export default reducer;
