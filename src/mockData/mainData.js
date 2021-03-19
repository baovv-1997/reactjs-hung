const mockLocationArea = [
  {
    id: '0',
    area: '별관 난간, 별관 지붕',
    location: {
      top: '489',
      left: '561',
    },
  },
  {
    id: '1',
    area: '발전동 서측',
    location: {
      top: '371',
      left: '831',
    },
  },
  {
    id: '2',
    area: '목업',
    location: {
      top: '371',
      left: '987',
    },
  },
  {
    id: '3',
    area: '본관 남측',
    location: {
      top: '575',
      left: '646',
    },
  },
  {
    id: '4',
    area: '자전거 캐노피',
    location: {
      top: '757',
      left: '733',
    },
  },
  {
    id: '5',
    area: '벤치 벽면',
    location: {
      top: '607',
      left: '911',
    },
  },
  {
    id: '6',
    area: '경비실 입면',
    location: {
      top: '808',
      left: '865',
    },
  },
  {
    id: '7',
    area: '정문 입구',
    location: {
      top: '795',
      left: '928',
    },
  },
  {
    id: '8',
    area: '방음벽',
    location: {
      top: '617',
      left: '1156',
    },
  },
  {
    id: '9',
    area: '외부울타리',
    location: {
      top: '484',
      left: '1316',
    },
  },
];

const mockDataMain = {
  totalPower: [
    {
      id: 0,
      type: 'day',
      name: '금일 발전량',
      value: 1000,
    },
    {
      id: 1,
      type: 'month',
      name: '금월 발전량',
      value: 25000,
    },
    {
      id: 2,
      type: 'year',
      name: '금년 발전량',
      value: 621000,
    },
    {
      id: 3,
      type: 'plus',
      name: '누적 발전량',
      value: 1621000,
    },
  ],
  infoReality: [
    {
      id: 0,
      name: 'PV전압',
      subName: 'V1',
      value: 404,
      unit: 'V',
    },
    {
      id: 1,
      name: 'PV전류',
      subName: 'l1',
      value: 1,
      unit: 'A',
    },
    {
      id: 2,
      name: '출력전압',
      subName: 'v2',
      value: 378,
      unit: 'V',
    },

    {
      id: 3,
      name: '출력전류',
      subName: 'l2',
      value: 3,
      unit: 'A',
    },
    {
      id: 4,
      name: '출력',
      subName: 'p',
      value: 378,
      unit: 'V',
    },
    {
      id: 5,
      name: '역률',
      subName: '',
      value: 91,
      unit: '%',
    },
  ],
  vitualData: [
    {
      id: 0,
      name: '수평 일사량',
      unit: 'kWh/㎡·10초',
      value: 22,
    },
    {
      id: 1,
      name: '온도',
      unit: '℃',
      value: -18,
    },
  ],
};

const mockDataArea = [
  {
    id: 15,
    label: 'All',
    value: 'All',
  },
  {
    id: 0,
    label: '별관 난간, 별관 지붕',
    value: '별관 난간, 별관 지붕',
  },
  {
    id: 1,
    label: '발전동 서측',
    value: '발전동 서측',
  },
  {
    id: 2,
    label: '목업',
    value: '목업',
  },
  {
    id: 3,
    label: '본관 남측',
    value: '본관 남측',
  },
  {
    id: 4,
    label: '본관 동측',
    value: '본관 동측',
  },
  {
    id: 5,
    label: '본관 옥탑',
    value: '본관 옥탑',
  },
  {
    id: 6,
    label: '주차장',
    value: '주차장',
  },
  {
    id: 7,
    label: '자전거 캐노피',
    value: '자전거 캐노피',
  },
  {
    id: 8,
    label: '벤치 벽면',
    value: '벤치 벽면',
  },
  {
    id: 9,
    label: '경비실 입면',
    value: '경비실 입면',
  },
  {
    id: 10,
    label: '정문 입구',
    value: '정문 입구',
  },
  {
    id: 11,
    label: '정문 입구 보도',
    value: '정문 입구 보도',
  },
  {
    id: 12,
    label: '정문 입구 도로',
    value: '정문 입구 도로',
  },
  {
    id: 13,
    label: '방음벽',
    value: '방음벽',
  },
  {
    id: 14,
    label: '외부울타리',
    value: '외부울타리',
  },
];

export { mockDataMain, mockLocationArea, mockDataArea };
