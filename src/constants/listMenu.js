import IMAGES from 'themes/images';
import ROUTERS from './routers';

export const DASHBOARD = {
  id: 1,
  label: '실증단지',
  icon: IMAGES.iconGraph,
  to: ROUTERS.ROOT,
  items: [
    {
      id: 1,
      name: '대시보드',
      key: 'dashboard',
      childRoute: [
        ROUTERS.ROOT,
        ROUTERS.DASHBOARD_AREA,
        ROUTERS.DASHBOARD_COMPANY,
      ],
      sub: [
        {
          id: 1,
          name: '통합 대시보드',
          key: 'root',
          to: ROUTERS.ROOT,
          childRoute: [ROUTERS.ROOT],
        },
        {
          id: 2,
          name: '구역 대시보드',
          key: 'dashboard_area',
          to: ROUTERS.DASHBOARD_AREA,
          childRoute: [ROUTERS.DASHBOARD_AREA],
        },
        {
          id: 3,
          name: '업체 대시보드',
          to: ROUTERS.DASHBOARD_COMPANY,
          key: 'dashboard_company',
          childRoute: [ROUTERS.DASHBOARD_COMPANY],
        },
      ],
    },
    {
      id: 2,
      name: '현황',
      key: 'develop',
      childRoute: [
        ROUTERS.STATUS_COMPANY,
        ROUTERS.STATUS_COMPANY_BY_AREA,
        ROUTERS.OPERATION_STATUS_BY_COMPANY,
        ROUTERS.OPERATION_STATUS_BY_AREA,
      ],
      sub: [
        {
          id: 1,
          childRoute: [ROUTERS.STATUS_COMPANY, ROUTERS.STATUS_COMPANY_BY_AREA],
          name: '발전 현황',
          key: 'develop-status',
          sub: [
            {
              id: 1,
              name: '업체별 현황',
              to: ROUTERS.STATUS_COMPANY,
              key: 'status-company',
            },
            {
              id: 2,
              name: '구역별 현황',
              to: ROUTERS.STATUS_COMPANY_BY_AREA,
              key: 'status-position',
            },
          ],
        },
        {
          id: 2,
          name: '운영 현황',
          key: 'develop-operator',
          childRoute: [
            ROUTERS.OPERATION_STATUS_BY_COMPANY,
            ROUTERS.OPERATION_STATUS_BY_AREA,
          ],
          sub: [
            {
              id: 1,
              name: '업체별 현황',
              to: ROUTERS.OPERATION_STATUS_BY_COMPANY,
              key: 'operator-company',
            },
            {
              id: 2,
              name: '구역별 현황',
              to: ROUTERS.OPERATION_STATUS_BY_AREA,
              key: 'operator-position',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: '통계',
      key: 'statistics',
      childRoute: [
        ROUTERS.STATISTICS_DEVELOP,
        ROUTERS.STATISTICS_DEVELOP_AREA,
        ROUTERS.OPERATION_STATISTICS_COMPANY,
        ROUTERS.OPERATION_STATISTICS_AREA,
      ],
      sub: [
        {
          id: 1,
          name: '발전 통계',
          key: 'statistics-develop',
          childRoute: [
            ROUTERS.STATISTICS_DEVELOP,
            ROUTERS.STATISTICS_DEVELOP_AREA,
          ],
          sub: [
            {
              id: 1,
              name: '업체별 통계',
              to: ROUTERS.STATISTICS_DEVELOP,
              key: 'statistics-develop-company',
            },
            {
              id: 2,
              name: '구역별 통계',
              key: 'statistics-develop-position',
              to: ROUTERS.STATISTICS_DEVELOP_AREA,
            },
          ],
        },
        {
          id: 2,
          name: '운영 통계',
          key: 'statistics-operator',
          childRoute: [
            ROUTERS.OPERATION_STATISTICS_COMPANY,
            ROUTERS.OPERATION_STATISTICS_AREA,
          ],
          sub: [
            {
              id: 1,
              name: '업체별 통계',
              key: 'statistics-operator-company',
              to: ROUTERS.OPERATION_STATISTICS_COMPANY,
            },
            {
              id: 2,
              key: 'statistics-operator-position',
              name: '구역별 통계',
              to: ROUTERS.OPERATION_STATISTICS_AREA,
            },
          ],
        },
      ],
    },
  ],
};

export const SETUP = {
  id: 2,
  label: '관리',
  icon: IMAGES.setup,
  key: 'setup',
  childRoute: [ROUTERS.ACCOUNT_MANAGEMENT, ROUTERS.DEVICE],
  items: [
    {
      id: 1,
      name: '계정 관리',
      to: ROUTERS.ACCOUNT_MANAGEMENT,
      key: 'setup-account',
      childRoute: [
        ROUTERS.ACCOUNT_MANAGEMENT,
        '/accounts/detail',
        '/accounts/edit',
      ],
    },
    {
      id: 2,
      name: '기기 관리',
      to: ROUTERS.DEVICE,
      key: 'setup-device',
      childRoute: [
        ROUTERS.DEVICE,
        ROUTERS.REGISTER_DEVICE,
        ROUTERS.DEVICE_DETAIL,
      ],
    },
  ],
};

export const MOCKUP = {
  id: 1,
  label: '실증테스트',
  icon: IMAGES.mockUp,

  items: [
    {
      id: 1,
      name: '테스트(목업)',
      key: 'mockup',
      childRoute: [
        ROUTERS.TEST_DASHBOARD,
        ROUTERS.TEST_MOCKUP_STATUS,
        ROUTERS.TEST_MOCKUP_OPERATION,
        ROUTERS.TEST_MOCKUP_STATISTICS_DEVELOP,
        ROUTERS.TEST_MOCKUP_STATISTICS_OPERATION,
      ],
      sub: [
        {
          id: 1,
          name: '대시보드',
          to: ROUTERS.TEST_DASHBOARD,
          childRoute: [ROUTERS.TEST_DASHBOARD],
          key: 'test-solar',
        },
        {
          id: 2,
          name: '현황',
          key: 'test-mockup',
          childRoute: [
            ROUTERS.TEST_MOCKUP_STATUS,
            ROUTERS.TEST_MOCKUP_OPERATION,
          ],
          sub: [
            {
              id: 1,
              name: '발전 현황',
              key: 'test-mockup-status',
              to: ROUTERS.TEST_MOCKUP_STATUS,
            },
            {
              id: 2,
              name: '운영 현황',
              key: 'test-mockup-operator',
              to: ROUTERS.TEST_MOCKUP_OPERATION,
            },
          ],
        },
        {
          id: 3,
          name: '통계',
          key: 'test-mockup-statistics',
          childRoute: [
            ROUTERS.TEST_MOCKUP_STATISTICS_DEVELOP,
            ROUTERS.TEST_MOCKUP_STATISTICS_OPERATION,
          ],
          sub: [
            {
              id: 1,
              name: '발전 통계',
              key: 'test-mockup-statistics-develop',
              to: ROUTERS.TEST_MOCKUP_STATISTICS_DEVELOP,
            },
            {
              id: 2,
              name: '운영 통계',
              to: ROUTERS.TEST_MOCKUP_STATISTICS_OPERATION,
              key: 'test-mockup-statistics-operator',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: '테스트(실증단지)',
      key: 'solar-dashboard-child',
      childRoute: [
        ROUTERS.SOLAR_DASHBOARD,
        ROUTERS.TEST_SOLAR_STATUS_DEVELOP,
        ROUTERS.TEST_SOLAR_STATUS_OPERATION,
        ROUTERS.TEST_SOLAR_STATISTICS_DEVELOP,
        ROUTERS.TEST_SOLAR_STATISTICS_OPERATION,
      ],
      sub: [
        {
          id: 1,
          name: '대시보드',
          key: 'solar-dashboard',
          to: ROUTERS.SOLAR_DASHBOARD,
          childRoute: [ROUTERS.SOLAR_DASHBOARD],
        },
        {
          id: 2,
          name: '현황',
          key: 'solar-dashboard-develop',
          childRoute: [
            ROUTERS.TEST_SOLAR_STATUS_DEVELOP,
            ROUTERS.TEST_SOLAR_STATUS_OPERATION,
          ],
          sub: [
            {
              id: 1,
              name: '발전 현황',
              to: ROUTERS.TEST_SOLAR_STATUS_DEVELOP,
              key: 'test-solar-staus-develop',
            },
            {
              id: 2,
              name: '운영 현황',
              to: ROUTERS.TEST_SOLAR_STATUS_OPERATION,
              key: 'test-solar-staus-operator',
            },
          ],
        },
        {
          id: 3,
          name: '통계',
          key: 'test-solar-statistics',
          childRoute: [
            ROUTERS.TEST_SOLAR_STATISTICS_DEVELOP,
            ROUTERS.TEST_SOLAR_STATISTICS_OPERATION,
          ],
          sub: [
            {
              id: 1,
              name: '발전 통계',
              key: 'test-solar-statistics-develop',
              to: ROUTERS.TEST_SOLAR_STATISTICS_DEVELOP,
            },
            {
              id: 2,
              name: '운영 통계',
              key: 'test-solar-statistics-operator',
              to: ROUTERS.TEST_SOLAR_STATISTICS_OPERATION,
            },
          ],
        },
      ],
    },
  ],
};
