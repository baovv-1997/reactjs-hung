/* eslint-disable camelcase */
// import libs
import { create } from 'apisauce';

const API_URI = process.env.REACT_APP_API_URL;

export const ROUTES = {
  // Auths
  SIGN_IN: `/auth/login`,
  SIGN_UP: `/auth/register`,

  API_GET_LIST_COMPANY: `/company`,
  API_GET_LIST_POSITION: `/position`,
  API_GET_LIST_DEVICE: `/device`,
  UPDATE_DEVICE: (id) => `device/${id}`,
  GET_POS: '/position',
  GET_LIST_CARD_MEASURE: `/data/cards`,
};

export const API = create({
  baseURL: API_URI,
});
