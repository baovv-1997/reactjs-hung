/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IMAGES from 'themes/images';
import MainLayout from '../../../layout/MainLayout';
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
  const isLoading = useSelector((state) => state?.device?.isLoading);
  const { id } = match.params;

  useEffect(() => {
    dispatch(getDeivceDetail({ id }));
  }, [id]);

  return (
    <MainLayout isProcessing={isLoading}>
      <div className="wrapper-device">
        <div className="wrapper-device__head-menu">
          <div className="wrapper-device__head-menu__title">
            <img src={IMAGES.iconTitle} alt="icon-title-device" />
            <span className="wrapper-device__head-menu__title__text">
              기기 관리
            </span>
            <span className="wrapper-device__head-menu__title__des">
              등록되어있는 기기정보들을 관리하실 수 있습니다.
            </span>
          </div>
        </div>
        <div className="device-detail">
          <div className="device-detail__title">
            <img src={IMAGES.iconSubtitle} alt="sub-title" />
            <p>계정 정보</p>
          </div>
          <FormDetail data={deviceDetail} history={history} />
        </div>
      </div>
    </MainLayout>
  );
};

export default DeviceDetail;
