import React from 'react';
import { storiesOf } from '@storybook/react';
import { LabelStatus } from 'commons/components/Label/LabelStatus';

const powerData = {
  type: 'power',
  data: [
    { title: '일일 평균 1시간 발전량', value: '60' },
    { title: '일일발전량 달성율', value: '85.2' },
  ],
};

const temperatureData = {
  type: 'temperature',
  data: [
    { title: '현재 모듈 온도', value: '30.8' },
    { title: '최고 모듈 온도', value: '35.2' },
  ],
};

const insolationData = {
  type: 'insolation',
  data: [
    { title: '수평 일사량', value: '22' },
    { title: '경사 일사량', value: '46' },
  ],
};

storiesOf('LabelStatus', module).add('Power', () => {
  const { type, data } = powerData;
  return <LabelStatus type={type} data={data} isPower />;
});

storiesOf('LabelStatus', module).add('Temperature', () => {
  const { type, data } = temperatureData;
  return <LabelStatus type={type} data={data} isTemperature />;
});

storiesOf('LabelStatus', module).add('Insolation', () => {
  const { type, data } = insolationData;
  return <LabelStatus type={type} data={data} isInsolation />;
});
