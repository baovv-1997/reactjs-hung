// @flow
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import MainLayout from '../../../layout/MainLayout';
import FormRegister from './FormRegister';
import { TitleSubHeader } from 'commons/components/TitleHeader/titleSub';
import { TitleHeader } from 'commons/components/TitleHeader';

type Props = {
  history: {
    push: Function,
  },
};
const RegisterDevice = ({ history }: Props) => {
  const isLoading = useSelector((state) => state?.device?.isLoading);
  return (
    <MainLayout isProcessing={isLoading}>
      <div className="wrapper-device">
        <div className="wrapper-device__head-menu">
          <TitleHeader
            title="기기 관리"
            descSub="기기 정보를 등록하실 수 있습니다."
          />
          <div className="device-detail">
            <TitleSubHeader title="기기 정보" />
            <FormRegister history={history} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default memo<Props>(RegisterDevice);
