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
          to: '#',
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
              to: '#',
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
              to: '#',
            },
            {
              id: 2,
              name: '구역별 현황',
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
          ],
        },
      ],
    },
  ],
};

export const SETUP = {
  id: 2,
  label: '기기 관리',
  icon: IMAGES.setup,
  items: [
    { id: 1, name: '계정 관리', to: '#' },
    { id: 1, name: '기기 관리', to: '/devices' },
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
