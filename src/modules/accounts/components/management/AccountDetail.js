/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import IMAGES from 'themes/images';
import MainLayout from 'layout/MainLayout';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import TitleHeader from 'commons/components/TitleHeader';
import FormDetail from './FormDetail';
import { getAccountList } from '../../redux';

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
const AccountDetail = ({ match, history }: Props) => {
  const dispatch = useDispatch();
  const accountDetail = useSelector((state) => state?.account?.accountDetail);
  const isProcessing = useSelector((state) => state?.account?.isProcessing);

  const { id } = match.params;

  useEffect(() => {
    dispatch(getAccountList({ id, isDetail: true }));
  }, [id]);

  return (
    <MainLayout isProcessing={isProcessing}>
      <div className="account content-wrap">
        <TitleHeader
          title="관리자 계정 확인"
          descSub="관리자 계정 정보를 확인하실 수 있습니다."
        />
        <TitleSubHeader title="계정 정보" />

        <FormDetail
          history={history}
          accountDetail={accountDetail}
          // deviceList={accountDetail && accountDetail.devices}
        />
      </div>
    </MainLayout>
  );
};

export default AccountDetail;
