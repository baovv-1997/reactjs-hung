// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import MainLayout from 'layout/MainLayout';
import TitleHeader from 'commons/components/TitleHeader';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import ModalPopup from 'commons/components/Modal';
import Button from 'commons/components/Button';
import { useHistory, useParams } from 'react-router-dom';
import ROUTERS from 'constants/routers';

const StatusByAreaCompanyDetail = () => {
  const history = useHistory();
  const { id } = useParams();
  const [modalConform, setModalConform] = useState({
    isShow: false,
    content: '이벤트 현황을 삭제하시겠습니까?',
  });

  const handleDelete = () => {
    console.log('DELETE');
    history.push(ROUTERS.TEST_MOCKUP_OPERATION);
  };

  return (
    <MainLayout>
      <div className="content-wrap">
        <TitleHeader
          title="테스트(목업) 운영 현황"
          descSub="설비 이력, 보수 이력을 등록하실 수 있습니다."
        />
        <TitleSubHeader title="이벤트 상세 내용" />

        <div className="table-form">
          <div className="item-row d-flex">
            <div className="colum-left">분류</div>
            <div className="colum-right">설비이력</div>
          </div>
          <div className="item-row d-flex">
            <div className="colum-left">모듈정보</div>
            <div className="colum-right">아반시스코리아</div>
          </div>
          <div className="item-row d-flex mh-300">
            <div className="colum-left">내용</div>
            <div className="colum-right">월 정기 설비 진행</div>
          </div>
        </div>
        <div className="group-btn-delete text-right mb-4">
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
        </div>
        <div className="group-btn-bottom">
          <Button
            onClick={() =>
              history.push(`${ROUTERS.TEST_MOCKUP_OPERATION}/edit/${id}`)
            }
          >
            수정
          </Button>
          <Button onClick={() => history.push(ROUTERS.TEST_MOCKUP_OPERATION)}>
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
        handleClose={() =>
          setModalConform({
            ...modalConform,
            isShow: false,
          })
        }
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

export default StatusByAreaCompanyDetail;
