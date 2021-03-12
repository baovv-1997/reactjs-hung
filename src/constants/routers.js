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
};

export default ROUTERS;
