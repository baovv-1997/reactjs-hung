// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import MainLayout from 'layout/MainLayout';
import TitleHeader from 'commons/components/TitleHeader';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import images from 'themes/images';
import Button from 'commons/components/Button';
import { useHistory } from 'react-router-dom';
import ROUTERS from 'constants/routers';

const StatusByAreaCompany = () => {
  const history = useHistory();
  return (
    <MainLayout>
      <div className="content-wrap">
        <TitleHeader
          title="실증단지 발전 현황"
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
            <div className="colum-right">
              <span>아반시스코리아</span>
              <img
                src={images.arrow_right}
                alt=""
                className="mx-2 position-top-1"
              />
              <span>본관남측</span>
              <img
                src={images.arrow_right}
                alt=""
                className="mx-2 position-top-1"
              />
              <span>DSP-3320K-OR</span>
            </div>
          </div>
          <div className="item-row d-flex h-300">
            <div className="colum-left">내용</div>
            <div className="colum-right">월 정기 설비 진행</div>
          </div>
        </div>
        <div className="group-btn-delete text-right mb-4">
          <Button onClick={() => {}} customClass="btn-red">
            삭제
          </Button>
        </div>
        <div className="group-btn-bottom">
          <Button onClick={() => {}}>수정</Button>
          <Button
            onClick={() => history.push(ROUTERS.OPERATION_STATUS_BY_COMPANY)}
          >
            목록
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default StatusByAreaCompany;
