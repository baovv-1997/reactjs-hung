// @flow
import React, { memo, useState, useEffect } from 'react';
// import { DeivceDetailHead } from 'constants/headerTable';
import { renderLabelType } from 'helpers/';
// import { useDispatch } from 'react-redux';
import Button from 'commons/components/Button';
import ModalPopup from 'commons/components/Modal';
import ROUTERS from 'constants/routers';
// import InputPhone from 'commons/components/Input/InputPhone';
// import { updateDevice } from '../redux';

type Props = {
  data: {
    id: any,
    no: any,
    ds_type: string,
    ds_manager: string,
    ds_max_power: string,
    ds_install_date: string,
    company: {
      com_name: string,
    },
    ds_name: string,
    ds_manager_phone: string,
    ds_color: string,
    ds_azimuth_angle: string,
    ds_incidence_angle: string,
    com_id: string,
    pos_id: string,
    position: {
      pos_name: string,
    },
  },
  history: {
    push: Function,
  },
};

const FormDetail = ({ data, history }: Props) => {
  // const dispatch = useDispatch();
  const [nameManager, setNameManager] = useState(data?.ds_manager);
  const [incidenceAngle, setIncidenceAngle] = useState(
    data?.ds_incidence_angle
  );

  const [phoneManager, setPhoneManager] = useState(data?.ds_manager_phone);
  const [azimuthAngle, setAzimuthAngle] = useState(data?.ds_azimuth_angle);
  const [isCancel, setIsCancel] = useState(false);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;

  //   switch (name) {
  //     case 'managerName':
  //       setNameManager(value);
  //       break;
  //     case 'incidenceAngle':
  //       setIncidenceAngle(value);
  //       break;
  //     case 'phoneManager':
  //       setPhoneManager(value);
  //       break;
  //     case 'azimuthAngle':
  //       setAzimuthAngle(value);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  useEffect(() => {
    setNameManager(data?.ds_manager);
    setIncidenceAngle(data?.ds_incidence_angle);
    setPhoneManager(data?.ds_manager_phone);
    setAzimuthAngle(data?.ds_azimuth_angle);
  }, [data]);

  // const handleUpdateDevice = () => {
  //   dispatch(
  //     updateDevice({
  //       id: data.id,
  //       manager: nameManager,
  //       incidence_angle: incidenceAngle,
  //       manager_phone: phoneManager && phoneManager.replace(/-/g, ''),
  //       azimuth_angle: azimuthAngle,
  //       install_date: data?.ds_install_date,
  //       color: data?.ds_color,
  //       com_id: data?.com_id,
  //       max_power: data?.ds_max_power,
  //       name: data?.ds_name,
  //       pos_id: data?.pos_id,
  //       type: data?.ds_type,
  //     })
  //   );
  // };

  return (
    <div>
      <div className="device-detail__form">
        <div className="col-item col-2 left">
          <div className="cell">NO</div>
          <div className="cell">구분</div>
          {parseInt(data?.ds_type, 10) === 0 && (
            <div className="cell">설치위치</div>
          )}
          <div className="cell">담당자 이름</div>
          <div className="cell">모듈 출력</div>
          <div className="cell">입사각</div>
        </div>
        <div className="col-item col-4">
          <div className="cell">{data?.no}</div>
          <div className="cell">{renderLabelType(data?.ds_type)}</div>
          {parseInt(data?.ds_type, 10) === 0 && (
            <div className="cell">{data?.position?.pos_name}</div>
          )}
          <div className="cell">{nameManager}</div>
          <div className="cell">{`${data?.ds_max_power}v`}</div>
          <div className="cell">{`${incidenceAngle}°도`}</div>
        </div>
        <div className="col-item col-2 right">
          <div className="cell">설치일</div>
          <div className="cell">업체명</div>
          {parseInt(data?.ds_type, 10) === 0 && (
            <div className="cell">모듈명</div>
          )}
          <div className="cell">담당자 전화번호</div>
          <div className="cell">모듈 색상</div>
          <div className="cell">방위각</div>
        </div>
        <div className="col-item col-4">
          <div className="cell">{data?.ds_install_date}</div>
          <div className="cell">{data?.company?.com_name}</div>
          {parseInt(data?.ds_type, 10) === 0 && (
            <div className="cell">{data?.ds_name}</div>
          )}
          <div className="cell">{phoneManager}</div>
          <div className="cell">{data?.ds_color}</div>
          <div className="cell">{`${azimuthAngle}°도`}</div>
        </div>
      </div>
      <div className="device-detail__btn-group">
        <Button
          customClass="btn-modify"
          onClick={() => {
            history.push({
              pathname: `${ROUTERS.DEVICE}/edit/${data?.id}`,
              state: {
                id: data?.id,
              },
            });
          }}
        >
          수정
        </Button>
        <Button
          customClass="btn-cancel"
          onClick={() => {
            setIsCancel(true);
          }}
        >
          목록
        </Button>
      </div>

      <ModalPopup
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
          history.push(ROUTERS.DEVICE);
        }}
      >
        취소 시 수정 내역은 전부 사라집니다. 정말 취소하시겠습니까?
      </ModalPopup>
    </div>
  );
};

export default memo<Props>(FormDetail);
