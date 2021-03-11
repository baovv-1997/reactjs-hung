const ROUTERS = {
  ROOT: '/',
  DASHBOARD_AREA: '/dashboard-area',
  DASHBOARD_COMPANY: '/dashboard-company',
  LOGIN: '/login',
  DEVICE: '/devices',
  STORES: '/stores',
  STORES_DETAIL: '/stores/:id',
  DEVICE_DETAIL: '/devices/:id',
  STATUS_COMPANY: `/status/company-development`,
  STATUS_COMPANY_BY_AREA: `/status/company-by-area`,
  OPERATION_STATUS_BY_COMPANY: `/operation/status-by-company`,
  OPERATION_STATUS_BY_AREA: `/operation/status-by-area`,
  OPERATION_STATUS_BY_COMPANY_DETAIL: `/operation/status-by-company/:id`,
  OPERATION_STATUS_BY_COMPANY_REGISTER: `/operation/status-by-company/register`,
  OPERATION_STATUS_BY_COMPANY_UPDATE: `/operation/status-by-company/update/:id`,
};

export default ROUTERS;
