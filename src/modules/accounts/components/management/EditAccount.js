/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import IMAGES from 'themes/images';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import TitleHeader from 'commons/components/TitleHeader';
import FormEdit from './FormEdit';
import { getAccountList } from '../../redux';
import Loading from 'commons/components/Loading';

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
const EditAccount = ({ match, history }: Props) => {
  const dispatch = useDispatch();
  const accountDetail = useSelector((state) => state?.account?.accountDetail);
  const isProcessing = useSelector((state) => state?.account?.isProcessing);

  const { id } = match.params;

  useEffect(() => {
    dispatch(getAccountList({ id, isDetail: true }));
  }, [id]);

  return (
    <>
      {isProcessing && <Loading />}
      <div className="account">
        <TitleHeader
          title="관리자 계정 수정"
          descSub="관리자 계정 정보를 수정하실 수 있습니다."
        />
        <TitleSubHeader title="계정 정보" />

        <FormEdit
          history={history}
          accountDetail={accountDetail}
          // deviceList={accountDetail && accountDetail.devices}
        />
      </div>
    </>
  );
};

export default EditAccount;
