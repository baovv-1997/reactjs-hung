// @flow
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { TitleSubHeader } from 'commons/components/TitleHeader/titleSub';
import { TitleHeader } from 'commons/components/TitleHeader';
import Loading from 'commons/components/Loading';
import FormRegister from './FormRegister';

type Props = {
  history: {
    push: Function,
  },
};
const RegisterDevice = ({ history }: Props) => {
  const isLoading = useSelector((state) => state?.device?.isLoading);
  return (
    <>
      {isLoading && <Loading />}
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
    </>
  );
};

export default memo<Props>(RegisterDevice);
