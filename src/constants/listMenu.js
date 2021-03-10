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
      sub: [
        {
          id: 1,
          name: '통합 대시보드',
          to: ROUTERS.ROOT,
        },
        {
          id: 2,
          name: '구역 대시보드',
          to: '#',
        },
        {
          id: 3,
          name: '업체 대시보드',
          to: '#',
        },
      ],
    },
    {
      id: 2,
      name: '현황',
      sub: [
        {
          id: 1,
          name: '발전 현황',
          sub: [
            {
              id: 1,
              name: '업체별 현황',
              to: ROUTERS.STATUS_COMPANY,
            },
            {
              id: 2,
              name: '구역별 현황',
              to: ROUTERS.STATUS_COMPANY_BY_AREA,
            },
          ],
        },
        {
          id: 2,
          name: '운영 현황',
          sub: [
            {
              id: 1,
              name: '업체별 현황',
              to: ROUTERS.OPERATION_STATUS_BY_COMPANY,
            },
            {
              id: 2,
              name: '구역별 현황',
              to: '#',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: '통계',
      sub: [
        {
          id: 1,
          name: '발전 통계',
          sub: [
            {
              id: 1,
              name: '업체별 통계',
              to: '#',
            },
            {
              id: 2,
              name: '구역별 통계',
              to: '#',
            },
          ],
        },
        {
          id: 2,
          name: '운영 통계',
          sub: [
            {
              id: 1,
              name: '업체별 통계',
              to: '#',
            },
            {
              id: 2,
              name: '구역별 통계',
              to: '#',
            },
          ],
        },
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
      sub: [
        {
          id: 1,
          name: '대시보드',
          to: '#',
        },
      ],
    },
    {
      id: 2,
      name: '현황',
      sub: [
        {
          id: 1,
          name: '발전 현황',
          to: '#',
        },
        {
          id: 2,
          name: '운영 현황',
          to: '#',
        },
      ],
    },
    {
      id: 3,
      name: '통계',
      sub: [
        {
          id: 1,
          name: '테스트(실증단지)',
          sub: [
            {
              id: 1,
              name: '대시보드',
              to: '#',
            },
          ],
        },
      ],
    },
  ],
};
