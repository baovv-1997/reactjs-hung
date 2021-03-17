const ROUTERS = {
  ROOT: '/',
  DASHBOARD_AREA: '/dashboard-area',
  DASHBOARD_COMPANY: '/dashboard-company',
  LOGIN: '/login',
  DEVICE: '/devices',
  STORES: '/stores',
  STORES_DETAIL: '/stores/:id',
  REGISTER_DEVICE: '/devices/register',
  DEVICE_DETAIL: '/devices/:id',
  STATUS_COMPANY: `/status/company-development`,
  STATUS_COMPANY_BY_AREA: `/status/company-by-area`,
  OPERATION_STATUS_BY_COMPANY: `/operation/status-by-company`,
  OPERATION_STATUS_BY_AREA: `/operation/status-by-area`,
  OPERATION_STATUS_BY_COMPANY_DETAIL: `/operation/status-by-company/:id`,
  OPERATION_STATUS_BY_COMPANY_REGISTER: `/operation/status-by-company/register`,
  OPERATION_STATUS_BY_COMPANY_UPDATE: `/operation/status-by-company/update/:id`,
  TEST_DASHBOARD: `/test/dashboard`,
  SOLAR_DASHBOARD: `/solar/dashboard`,
  OPERATION_STATUS_BY_COMPANY_EDIT: `/operation/status-by-company/edit/:id`,

  ACCOUNT_MANAGEMENT: '/accounts',
  ACCOUNT_MANAGEMENT_DETAIL: '/accounts/:id',
  STATISTICS_DEVELOP: `/statistics/develop/develop-by-company`,
  STATISTICS_DEVELOP_AREA: `/statistics/develop/develop-by-area`,
  OPERATION_STATISTICS_COMPANY: `/statistics/operation/operation-by-company`,
  OPERATION_STATISTICS_AREA: `/statistics/operation/operation-by-area`,
  // Test mockup solar
  TEST_MOCKUP_STATUS: `/test/mockup/status-of-development`,
  TEST_MOCKUP_OPERATION: `/test/mockup/operation-status`,

  TEST_MOCKUP_OPERATION_STATUS_DETAIL: `/test/mockup/operation-status/:id`,
  TEST_MOCKUP_OPERATION_STATUS_REGISTER: `/test/mockup/operation-status/register`,
  TEST_MOCKUP_OPERATION_STATUS_EDIT: `/test/mockup/operation-status/edit/:id`,

  TEST_MOCKUP_STATISTICS_DEVELOP: `/test/mockup/statistics/development-statistics`,
  TEST_MOCKUP_STATISTICS_OPERATION: `/test/mockup/statistics/operation-statistics`,

  // Test solar monitoring
  TEST_SOLAR_STATUS_DEVELOP: `/test/solar-monitoring/status-development`,
  TEST_SOLAR_STATUS_OPERATION: `/test/solar-monitoring/status-operation`,

  TEST_SOLAR_STATISTICS_DEVELOP: `/test/solar-monitoring/statistics/development-statistics`,
  TEST_SOLAR_STATISTICS_OPERATION: `/test/solar-monitoring/statistics/operation-statistics`,
};

export default ROUTERS;
