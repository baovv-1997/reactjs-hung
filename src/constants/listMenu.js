import {
  faTachometerAlt,
  faUserCircle,
  faStoreAlt,
  faTabletAlt,
  faChartPie,
  faCookieBite,
  faWarehouse,
  faAd,
  // faEdit,
  faTasks,
} from '@fortawesome/free-solid-svg-icons';
import ROUTERS from './routers';

const LIST_MENU = [
  {
    id: 1,
    label: '메인화면',
    to: '/',
    icon: faTachometerAlt,
    active: false,
    sub: false,
    name: '',
  },
  {
    id: 2,
    label: '매장조회',
    to: ROUTERS.STORES,
    icon: faStoreAlt,
    active: false,
    sub: false,
    name: '',
  },
  {
    id: 3,
    label: '기기 조회',
    to: ROUTERS.DEVICE,
    icon: faTabletAlt,
    active: false,
    sub: false,
    name: '',
  },
  {
    id: 4,
    label: '상품관리',
    to: '#',
    icon: faCookieBite,
    active: false,
    sub: true,
    name: 'product',
    listSub: [
      {
        id: 7,
        subLabel: '입고상품관리',
        subTo: ROUTERS.MERCHANDISE,
        subIcon: '',
        subActive: false,
      },
      {
        id: 8,
        subLabel: '자체상품관리',
        subTo: ROUTERS.SEFT_PRODUCT,
        subIcon: '',
        subActive: false,
      },
    ],
  },
  {
    id: 5,
    label: '재고관리',
    to: ROUTERS.INVENTORY,
    icon: faWarehouse,
    active: false,
    sub: false,
    name: '',
  },
  {
    id: 6,
    label: '구매고객관리',
    to: ROUTERS.MEMBER,
    icon: faUserCircle,
    active: false,
    sub: false,
    name: '',
  },
  {
    id: 7,
    label: '키오스크 광고관리',
    to: ROUTERS.ADVERTING,
    icon: faAd,
    active: false,
    sub: false,
    name: '',
  },
  {
    id: 8,
    label: '매출관리',
    to: '#',
    icon: faChartPie,
    active: false,
    sub: true,
    name: 'revenue',
    listSub: [
      // {
      //   id: 1,
      //   subLabel: '일자별 매출현황',
      //   subTo: ROUTERS.REVENUE_TIME,
      //   subIcon: '',
      //   subActive: false
      // },
      {
        id: 2,
        subLabel: '일자별 매출현황',
        subTo: ROUTERS.REVENUEDAY_DAY,
        subIcon: '',
        subActive: false,
      },
      {
        id: 3,
        subLabel: '상품별 매출현황',
        subTo: ROUTERS.REVENUE_PRODUCT,
        subIcon: '',
        subActive: false,
      },
      {
        id: 4,
        subLabel: '결제내역',
        subTo: ROUTERS.PAYMENT,
        subIcon: '',
        subActive: false,
      },
    ],
  },

  {
    id: 9,
    label: '앱 관리',
    to: '#',
    icon: faTasks,
    active: false,
    sub: true,
    name: 'management',
    listSub: [
      {
        id: 10,
        subLabel: '픽업 주문 관리',
        subTo: ROUTERS.PICKUP_ORDER,
        subIcon: '',
        subActive: false,
      },
      {
        id: 11,
        subLabel: '이벤트 관리',
        // subTo: '#',
        subTo: ROUTERS.EVENT_APP,
        subIcon: '',
        subActive: false,
      },
      {
        id: 12,
        subLabel: 'Q&A 관리',
        subTo: ROUTERS.QA,
        subIcon: '',
        subActive: false,
      },
      {
        id: 13,
        subLabel: '공지사항 관리',
        subTo: ROUTERS.NOTICE,
        subIcon: '',
        subActive: false,
      },
    ],
  },
];
export default LIST_MENU;
