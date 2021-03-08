/* eslint-disable camelcase */
// import libs
import { create } from 'apisauce';

const API_URI = process.env.REACT_APP_API_URL;

export const ROUTES = {
  // Auths
  SIGN_IN: `/api/v1/auth/login`,
  SIGN_UP: `/api/v1/auth/register`,

  API_GET_LIST_COMPANY: `/api/v1/company`,
  API_GET_LIST_POSITION: `/api/v1/position`,
  API_GET_LIST_DEVICE: `/api/v1/device`,
};

export const API = create({
  baseURL: API_URI,
});
