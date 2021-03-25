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
  ACCOUNTS: '/account',
  UPDATE_ACCOUNT: (id) => `account/${id}`,
  GET_DASHBOARD_TEST_MOCKUP: `/data/test-mockup/cards`,
  GET_DASHBOARD_TEST_SOLAR: `/data/test-solar-monitoring/cards`,
  GET_DASHBOARD: `/data/solar-monitoring/cards`,
  GET_EVENT_LIST: '/event',
  DELETE_EVENT: (id) => `/event/${id}`,
  UPDATE_EVENT: (id) => `/event/${id}`,
  STATUS_OPERATOR_CHART: `/data/solar-monitoring/status-operation/chart-data`,
  STATUS_OPERATOR_TREND_CHART: `/data/solar-monitoring/status-operation/raw-data`,
  STATUS_OPERATOR_CARD_INFOR: `/data/solar-monitoring/status-operation/status-cards`,
  STATUS_GENERATOR_CHART: `/data/solar-monitoring/status-generator/chart-data`,
  STATUS_GENERATOR_TREND_CHART: `/data/solar-monitoring/status-generator/raw-data`,
  STATUS_GENERATOR_CARD_INFO: `/data/solar-monitoring/status-generator/status-cards`,

  //  Test solar monitoring
  API_TEST_SOLAR_MONITORING_STATUS_CARD: `/data/test-solar-monitoring/status-generator/status-cards`,
  API_TEST_SOLAR_MONITORING_STATUS_RAW: `/data/test-solar-monitoring/status-generator/raw-data`,
  API_TEST_SOLAR_MONITORING_STATUS_TREND_CHART: `/data/test-solar-monitoring/status-generator/chart-data`,
};

export const API = create({
  baseURL: API_URI,
});
