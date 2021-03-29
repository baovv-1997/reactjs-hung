/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TitleHeader } from 'commons/components/TitleHeader';
import { TitleSubHeader } from 'commons/components/TitleHeader/titleSub';
// import MainLayout from '../../../layout/MainLayout';
import FormDetail from './FormDetail';
import { getDeivceDetail } from '../redux';

type Props = {
  match: {
    params: {
      id: any,
    },
  },
  history: {
    push: Function,
  },
};
const DeviceDetail = ({ match, history }: Props) => {
  const dispatch = useDispatch();
  const deviceDetail = useSelector((state) => state?.device?.deviceDetail);
  // const isLoading = useSelector((state) => state?.device?.isLoading);
  const { id } = match.params;

  useEffect(() => {
    dispatch(getDeivceDetail({ id }));
  }, [id]);

  return (
    // <MainLayout isProcessing={isLoading}>
    <div className="wrapper-device">
      <div className="wrapper-device__head-menu">
        <TitleHeader
          title="기기 관리"
          descSub="등록되어있는 기기정보들을 관리하실 수 있습니다."
        />
      </div>
      <div className="device-detail">
        <TitleSubHeader title="계정 정보" />
        <FormDetail data={deviceDetail} history={history} />
      </div>
    </div>
    // </MainLayout>
  );
};

export default DeviceDetail;
