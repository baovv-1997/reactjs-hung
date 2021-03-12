// @flow
import React, { memo } from 'react';
import IMAGES from 'themes/images';
import MainLayout from '../../../layout/MainLayout';
import FormRegister from './FormRegister';

type Props = {
  history: {
    push: Function,
  },
};
const RegisterDevice = ({ history }: Props) => {
  return (
    <MainLayout>
      <div className="wrapper-device">
        <div className="wrapper-device__head-menu">
          <div className="wrapper-device__head-menu__title">
            <img src={IMAGES.iconTitle} alt="icon-title-device" />
            <span className="wrapper-device__head-menu__title__text">
              기기 관리
            </span>
            <span className="wrapper-device__head-menu__title__des">
              기기 정보를 등록하실 수 있습니다.
            </span>
          </div>
          <div className="device-detail">
            <div className="device-detail__title">
              <img src={IMAGES.iconSubtitle} alt="sub-title" />
              <p>기기 정보</p>
            </div>
            <FormRegister history={history} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default memo<Props>(RegisterDevice);
