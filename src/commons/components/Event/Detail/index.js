// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, memo } from 'react';
import Loading from 'commons/components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import TitleHeader from 'commons/components/TitleHeader';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import images from 'themes/images';
import ModalPopup from 'commons/components/Modal';
import Button from 'commons/components/Button';
import { useHistory } from 'react-router-dom';
import ROUTERS from 'constants/routers';
import { getEventList, deleteEvent } from 'commons/redux';
import { getEventNotification } from 'modules/accounts/redux';
import { ROLE_COMPANY, ROLE_ADMIN } from 'constants/index';

type Props = {
  match: {
    params: {
      id: any,
    },
  },
  location: {
    pathname: string,
    state: {
      prevRoute: string,
    },
  },
};

const EventDetail = ({ match, location }: Props) => {
  const dispatch = useDispatch();

  const { eventList, isProcessingDetail, type } = useSelector(
    (state) => state.commons
  );

  const userInfo = useSelector((state) => state?.account?.userInfo);

  const history = useHistory();
  const [modalConform, setModalConfirm] = useState({
    isShow: false,
    content: '이벤트 현황을 삭제하시겠습니까?',
  });

  const roleName =
    userInfo &&
    userInfo.roles &&
    userInfo.roles[0] &&
    userInfo.roles[0] &&
    userInfo.roles[0].name;

  const userId = userInfo && userInfo?.id;
  const { id } = match.params;

  useEffect(() => {
    dispatch(
      getEventList({
        id,
      })
    );
  }, [id]);

  const handleDelete = () => {
    dispatch(deleteEvent(id));
    setModalConfirm({
      ...modalConform,
      isShow: false,
    });
  };

  useEffect(() => {
    switch (type) {
      case 'commons/deleteEventSuccess':
        history.push(location?.state?.prevRoute);
        dispatch(getEventNotification());
        break;
      default:
        break;
    }
  }, [type]);

  return (
    <>
      <div className="content-wrap">
        <TitleHeader
          title="실증단지 운영 현황"
          descSub="설비 이력, 보수 이력을 등록하실 수 있습니다."
        />
        <TitleSubHeader title="이벤트 상세 내용" />
        {isProcessingDetail ? (
          <Loading />
        ) : (
          <>
            <div className="table-form">
              <div className="item-row d-flex">
                <div className="colum-left">분류</div>
                <div className="colum-right">{eventList?.evt_type_label}</div>
              </div>
              <div className="item-row d-flex">
                <div className="colum-left">모듈정보</div>
                <div className="colum-right">
                  {eventList?.ds_type !== '3' && (
                    <span>{eventList?.com_name}</span>
                  )}
                  {eventList?.com_name &&
                    eventList?.pos_name &&
                    eventList?.ds_type !== '3' && (
                      <img
                        src={images.arrow_right}
                        alt=""
                        className="mx-2 position-top-1"
                      />
                    )}
                  {eventList?.ds_type !== '3' && (
                    <span>{eventList?.pos_name}</span>
                  )}
                  {eventList?.com_name &&
                    eventList?.pos_name &&
                    eventList?.ds_type !== '3' && (
                      <img
                        src={images.arrow_right}
                        alt=""
                        className="mx-2 position-top-1"
                      />
                    )}
                  <span>{eventList?.ds_name}</span>
                </div>
              </div>
              <div className="item-row d-flex mh-300">
                <div className="colum-left">내용</div>
                <div className="colum-right">{eventList?.evt_content}</div>
              </div>
            </div>
            <div className="group-btn-delete text-right mb-4">
              {((roleName === ROLE_ADMIN && eventList?.evt_type !== '0') ||
                (roleName === ROLE_COMPANY &&
                  userId === eventList?.user_id &&
                  eventList?.evt_type !== '0')) && (
                <Button
                  onClick={() =>
                    setModalConfirm({
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
              {((roleName === ROLE_ADMIN && eventList?.evt_type !== '0') ||
                (roleName === ROLE_COMPANY &&
                  userId === eventList?.user_id &&
                  eventList?.evt_type !== '0')) && (
                <Button
                  onClick={() =>
                    history.push({
                      pathname: `${ROUTERS.EVENT}/edit/${id}`,
                      state: { prevRoute: location.state.prevRoute },
                    })
                  }
                >
                  수정
                </Button>
              )}
              <Button
                onClick={() =>
                  history.push(location?.state?.prevRoute) ||
                  history.push(ROUTERS.OPERATION_STATUS_BY_COMPANY)
                }
              >
                목록
              </Button>
            </div>
          </>
        )}
      </div>
      <ModalPopup
        isOpen={modalConform.isShow}
        isShowHeader
        title="알림"
        isShowIconClose
        isShowFooter
        handleCloseIcon={() =>
          setModalConfirm({
            ...modalConform,
            isShow: false,
          })
        }
        handleClose={() => {
          setModalConfirm({
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
    </>
  );
};

export default memo<Props>(EventDetail);
