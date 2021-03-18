// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, memo } from 'react';
import MainLayout from 'layout/MainLayout';
import { useDispatch, useSelector } from 'react-redux';

import TitleHeader from 'commons/components/TitleHeader';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import images from 'themes/images';
import ModalPopup from 'commons/components/Modal';
import Button from 'commons/components/Button';
import { useHistory } from 'react-router-dom';
import ROUTERS from 'constants/routers';
import { getEventList, deleteEvent } from '../redux';

type Props = {
  match: {
    params: {
      id: any,
    },
  },
};

const StatusByAreaCompanyDetail = ({ match }: Props) => {
  const dispatch = useDispatch();

  const { eventList, isProcessing, type } = useSelector(
    (state) => state.operationStatus
  );

  const userInfo = useSelector((state) => state.account.userInfo);

  const history = useHistory();

  const [modalConform, setModalConform] = useState({
    isShow: false,
    content: '이벤트 현황을 삭제하시겠습니까?',
  });

  const handleDelete = () => {
    dispatch(deleteEvent(id));
  };
  const roleName =
    userInfo &&
    userInfo.roles &&
    userInfo.roles[0] &&
    userInfo.roles[0] &&
    userInfo.roles[0].name;
  const { id } = match.params;

  useEffect(() => {
    dispatch(
      getEventList({
        id,
      })
    );
  }, []);

  useEffect(() => {
    switch (type) {
      case 'operationStatus/deleteEventSuccess':
        history.push(ROUTERS.OPERATION_STATUS_BY_COMPANY);
        break;
      default:
        break;
    }
  }, [type]);

  return (
    <MainLayout isProcessing={isProcessing}>
      <div className="content-wrap">
        <TitleHeader
          title="실증단지 발전 현황"
          descSub="설비 이력, 보수 이력을 등록하실 수 있습니다."
        />
        <TitleSubHeader title="이벤트 상세 내용" />

        <div className="table-form">
          <div className="item-row d-flex">
            <div className="colum-left">분류</div>
            <div className="colum-right">{eventList?.evt_type_label}</div>
          </div>
          <div className="item-row d-flex">
            <div className="colum-left">모듈정보</div>
            <div className="colum-right">
              <span>{eventList?.com_name}</span>
              {eventList?.com_name && eventList?.pos_name && (
                <img
                  src={images.arrow_right}
                  alt=""
                  className="mx-2 position-top-1"
                />
              )}
              <span>{eventList?.pos_name}</span>
              {eventList?.com_name && eventList?.pos_name && (
                <img
                  src={images.arrow_right}
                  alt=""
                  className="mx-2 position-top-1"
                />
              )}
              <span>{eventList?.pos_name}</span>
            </div>
          </div>
          <div className="item-row d-flex mh-300">
            <div className="colum-left">내용</div>
            <div className="colum-right">{eventList?.evt_content}</div>
          </div>
        </div>
        <div className="group-btn-delete text-right mb-4">
          {(roleName === 'admin' || roleName === 'company') && (
            <Button
              onClick={() =>
                setModalConform({
                  ...modalConform,
                  isShow: true,
                })
              }
              customClass="btn-red"
            >
              삭제
            </Button>
          )}
        </div>
        <div className="group-btn-bottom">
          {(roleName === 'admin' || roleName === 'company') && (
            <Button
              onClick={() =>
                history.push(
                  `${ROUTERS.OPERATION_STATUS_BY_COMPANY}/edit/${id}`
                )
              }
            >
              수정
            </Button>
          )}
          <Button
            onClick={() => history.push(ROUTERS.OPERATION_STATUS_BY_COMPANY)}
          >
            목록
          </Button>
        </div>
      </div>

      <ModalPopup
        isOpen={modalConform.isShow}
        isShowHeader
        title="알림"
        isShowIconClose
        isShowFooter
        handleCloseIcon={() =>
          setModalConform({
            ...modalConform,
            isShow: false,
          })
        }
        handleClose={() => {
          setModalConform({
            ...modalConform,
            isShow: false,
          });
        }}
        textBtnLeft="확인"
        textBtnRight="취소"
        isShowTwoBtn
        customClassButton="btn-custom"
        handleSubmit={() => handleDelete()}
      >
        {modalConform?.content}
      </ModalPopup>
    </MainLayout>
  );
};

export default memo<Props>(StatusByAreaCompanyDetail);
