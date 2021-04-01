// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, memo } from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'commons/components/Button';
import ROUTERS from 'constants/routers';
import ModalPopup from 'commons/components/Modal';
import { formatValue } from 'helpers/';
import IMAGES from 'themes/images';
import { getListCompany, getListPosition } from '../../../device/redux';
import { resetAccountType, deleteAccount } from '../../redux';

type Props = {
  accountDetail: {
    name: string,
    phone: string,
    devices: [],
    email: string,
    username: string,
    id: number,
    roles: Array<{}>,
    created_at: string,
  },
  history: {
    push: Function,
  },
};

const FormDetail = ({ accountDetail, history }: Props) => {
  const dispatch = useDispatch();

  const errors = useSelector((state) => state?.account?.errors);
  const type = useSelector((state) => state?.account?.type);

  const [isUpdateFailed, setIsUpdateFailed] = useState(false);
  // const [isCancel, setIsCancel] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    dispatch(getListCompany());
    dispatch(getListPosition());
  }, []);

  const renderListDeviceMaintain =
    accountDetail &&
    accountDetail.devices &&
    accountDetail.devices.length > 0 &&
    accountDetail.devices.map((item) => {
      return (
        <p className="item-device-maintain">
          <span>{item?.company?.com_name}</span>
          <img
            src={IMAGES.arrow_right}
            alt=""
            className="mx-2 position-top-1"
          />
          <span>{item?.position?.pos_name}</span>
          <img
            src={IMAGES.arrow_right}
            alt=""
            className="mx-2 position-top-1"
          />
          <span>{item?.ds_name}</span>
        </p>
      );
    });

  const errorsMessage =
    errors &&
    Object.values(errors).map((item, index) => {
      return (
        <ul className="error-list" key={index}>
          <li>{item && item[0]}</li>
        </ul>
      );
    });

  useEffect(() => {
    switch (type) {
      case 'accounts/updateAccountFailed':
        setIsUpdateFailed(true);
        break;
      case 'accounts/deleteAccountSuccess':
        history.push(ROUTERS.ACCOUNT_MANAGEMENT);
        break;
      default:
        break;
    }
  }, [type]);

  return (
    <div>
      <div className="table">
        <div className="row">
          <div className="col-2">권한</div>
          <div className="col-4">
            <div className="wrapper-radio">
              {accountDetail &&
                accountDetail.roles &&
                accountDetail.roles[0] &&
                accountDetail?.roles[0]?.display_name}
            </div>
          </div>
          <div className="col-2">등록일</div>
          <div className="col-4">
            {moment(accountDetail?.created_at).format('YYYY-MM-DD')}
          </div>
        </div>
        <div className="row">
          <div className="col-2">이메일</div>
          <div className="col-4">
            <div className="d-flex align-items-center h-100">
              {accountDetail?.email}
            </div>
          </div>
          <div className="col-2">전화번호</div>
          <div className="col-4">
            {accountDetail?.phone && formatValue(accountDetail?.phone)}
          </div>
        </div>
        <div className="row">
          <div className="col-2">아이디</div>
          <div className="col-4">
            <div className="d-flex align-items-center h-100">
              {accountDetail?.username}
            </div>
          </div>
          <div className="col-2">비밀번호</div>
          <div className="col-4">********</div>
        </div>
        <div className="row">
          <div className="col-2">담당자</div>
          <div className="col-4 d-block mt-2">{accountDetail?.name}</div>
          <div className="col-2">관리 기기</div>
          <div className="col-4">
            <div>{renderListDeviceMaintain}</div>
          </div>
        </div>

        <div className="account__btn-group">
          <Button
            customClass="btn-delete"
            onClick={() => {
              setIsDelete(true);
            }}
          >
            삭제
          </Button>
          <Button
            customClass="btn-modify"
            onClick={() => {
              history.push(
                `${ROUTERS.ACCOUNT_MANAGEMENT}/edit/${accountDetail?.id}`
              );
            }}
          >
            수정
          </Button>
          <Button
            customClass="btn-cancel"
            onClick={() => {
              history.push(ROUTERS.ACCOUNT_MANAGEMENT);
            }}
          >
            목록
          </Button>
        </div>
      </div>
      {/* <ModalPopup
        isOpen={isCancel}
        isShowHeader
        title="알림"
        isShowIconClose
        isShowFooter
        handleCloseIcon={() => {
          setIsCancel(false);
        }}
        handleClose={() => {
          setIsCancel(false);
        }}
        textBtnLeft="확인"
        textBtnRight="취소"
        isShowTwoBtn
        customClassButton="btn-custom"
        handleSubmit={() => {
          history.push(ROUTERS.ACCOUNT_MANAGEMENT);
        }}
      >
        취소 시 수정 내역은 전부 사라집니다. 그래도 취소하시겠습니까?.
      </ModalPopup> */}
      <ModalPopup
        isOpen={isDelete}
        isShowHeader
        title="알림"
        isShowIconClose
        isShowFooter
        handleCloseIcon={() => {
          setIsDelete(false);
        }}
        handleClose={() => {
          setIsDelete(false);
        }}
        textBtnLeft="확인"
        textBtnRight="취소"
        isShowTwoBtn
        customClassButton="btn-custom"
        handleSubmit={() => {
          dispatch(deleteAccount(accountDetail?.id));
          setIsDelete(false);
        }}
      >
        정말 삭제 하시겠습니까?
      </ModalPopup>
      <ModalPopup
        isOpen={isUpdateFailed}
        isShowHeader
        title="Error"
        isShowIconClose
        isShowFooter
        handleCloseIcon={() => {
          setIsUpdateFailed(false);
          dispatch(resetAccountType());
        }}
        handleClose={() => {
          setIsUpdateFailed(false);
          dispatch(resetAccountType());
        }}
        textBtnLeft="OK"
        customClassButton="btn-custom"
      >
        {errorsMessage}
      </ModalPopup>
    </div>
  );
};

export default memo<Props>(FormDetail);
