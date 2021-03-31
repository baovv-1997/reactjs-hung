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
  GET_TOTAL_METRIC: `/data/solar-monitoring/dashboard-metric`,
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

  // generator statistics
  GENERATOR_STATISTICS_RAW:
    '/data/solar-monitoring/statistic/generator/raw-measure',
  OPERATOR_STATISTICS_CARD: `/data/solar-monitoring/statistic/operation/cards`,
  OPERATOR_STATISTICS_RAW: `data/solar-monitoring/statistic/generator/raw-measure`,
  OPERATOR_STATISTICS_CHART: `/data/solar-monitoring/statistic/operation/chart`,
  API_TEST_SOLAR_MONITORING_STATUS_OPERATION_CARD: `/data/test-solar-monitoring/status-operation/status-cards`,
  API_TEST_SOLAR_MONITORING_STATUS_OPERATION_RAW: `/data/test-solar-monitoring/status-operation/raw-data`,
  API_TEST_SOLAR_MONITORING_STATUS_OPERATION_TREND_CHART: `/data/test-solar-monitoring/status-operation/chart-data`,

  API_TEST_SOLAR_MONITORING_STATISTICS_CARD: `/data/test-solar-monitoring/statistic/generator/cards`,
  API_TEST_SOLAR_MONITORING_STATISTICS_CHART: `/data/test-solar-monitoring/statistic/generator/chart`,
  API_TEST_SOLAR_MONITORING_STATISTICS_RAW: `/data/test-solar-monitoring/statistic/generator/raw-measure`,

  API_TEST_SOLAR_MONITORING_STATISTICS_OPERATION_CARD: `/data/test-solar-monitoring/statistic/operation/cards`,
  API_TEST_SOLAR_MONITORING_STATISTICS_OPERATION_CHART: `/data/test-solar-monitoring/statistic/operation/chart`,
  API_TEST_SOLAR_MONITORING_STATISTICS_OPERATION_RAW: `/data/test-solar-monitoring/statistic/generator/raw-measure`,

  API_TEST_MOCKUP_STATUS_CARD: `/data/test-solar-monitoring/status-generator/status-cards`,
  API_TEST_MOCKUP_STATUS_RAW: `/data/test-mockup/status-generator/raw-data`,
  API_TEST_MOCKUP_STATUS_CHART: `/data/test-mockup/status-generator/chart-data`,

  API_TEST_MOCKUP_STATUS_OPERATION_CARD: `/data/test-mockup/status-operation/status-cards`,
  API_TEST_MOCKUP_STATUS_OPERATION_RAM: `/data/test-mockup/status-operation/raw-data`,
  API_TEST_MOCKUP_STATUS_OPERATION_CHART: `/data/test-mockup/status-operation/chart-data`,
  API_TEST_MOCKUP_STATUS_OPERATION_RAM_EVENT:
    '/data/test-mockup/status-operation/event/raw-data',

  API_TEST_MOCKUP_STATISTIC_GENERATOR_CARD: `/data/test-mockup/statistic/generator/cards`,
  API_TEST_MOCKUP_STATISTIC_GENERATOR_CHART: `/data/test-mockup/statistic/generator/chart`,
  API_TEST_MOCKUP_STATISTIC_GENERATOR_RAM: `/data/test-mockup/statistic/generator/raw-measure`,

  API_TEST_MOCKUP_STATISTIC_OPERATION_CARD: `/data/test-solar-monitoring/statistic/operation/cards`,
  API_TEST_MOCKUP_STATISTIC_OPERATION_CHART: `/data/test-mockup/statistic/operation/chart`,
  API_TEST_MOCKUP_STATISTIC_OPERATION_RAM: `/data/test-mockup/statistic/generator/raw-measure`,

  // statistics develop
  STATISTICS_DEVELOP_RAW: `/data/test-mockup/statistic/generator/raw-measure`,
  STATISTICS_DEVELOP_CHART: `/data/solar-monitoring/statistic/generator/chart`,
  STATISTICS_DEVELOP_CARD: `/data/solar-monitoring/statistic/generator/cards`,

  //  Download CSV solar-monitoring
  API_DOWN_EXCEL_SOLAR_MONITORING: (name) =>
    `${API_URI}/data/export/solar-monitoring/${name}`,
  //  Download CSV Mockup
  API_DOWN_EXCEL_MOCKUP: (name) => `${API_URI}/data/export/test-mockup/${name}`,
  API_DOWN_EXCEL_TEST_SOLAR_MONITORING: (name) =>
    `${API_URI}/data/export/test-solar-monitoring/${name}`,

  LOG_OUT: '/auth/logout',
};

export const API = create({
  baseURL: API_URI,
});
