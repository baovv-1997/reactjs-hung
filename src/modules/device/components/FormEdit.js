/* eslint-disable react-hooks/exhaustive-deps */
// @flow
import React, { memo, useState, useEffect } from 'react';
// import { DeivceDetailHead } from 'constants/headerTable';
import { renderLabelType } from 'helpers/';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'commons/components/Button';
import ModalPopup from 'commons/components/Modal';
import ROUTERS from 'constants/routers';
import InputPhone from 'commons/components/Input/InputPhone';
import { updateDevice, resetDeviceType } from '../redux';

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

const FormEdit = ({ data, history }: Props) => {
  const dispatch = useDispatch();
  const { type, errorsAddDevice } = useSelector((state) => state?.device);
  const [nameManager, setNameManager] = useState(data?.ds_manager);
  const [incidenceAngle, setIncidenceAngle] = useState(
    data?.ds_incidence_angle
  );
  const [isUpdateFailed, setIsUpdateFailed] = useState(false);
  const [phoneManager, setPhoneManager] = useState(data?.ds_manager_phone);
  const [azimuthAngle, setAzimuthAngle] = useState(data?.ds_azimuth_angle);
  const [isCancel, setIsCancel] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'managerName':
        setNameManager(value);
        break;
      case 'incidenceAngle':
        setIncidenceAngle(value);
        break;
      case 'phoneManager':
        setPhoneManager(value);
        break;
      case 'azimuthAngle':
        setAzimuthAngle(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setNameManager(data?.ds_manager);
    setIncidenceAngle(data?.ds_incidence_angle);
    setPhoneManager(data?.ds_manager_phone);
    setAzimuthAngle(data?.ds_azimuth_angle);
  }, [data]);

  useEffect(() => {
    switch (type) {
      case 'device/updateDeviceSuccess':
        setIsSuccess(true);
        break;
      case 'device/updateDeviceFailed':
        setIsUpdateFailed(true);
        break;
      default:
        break;
    }
  }, [type]);

  const handleUpdateDevice = () => {
    dispatch(
      updateDevice({
        id: data.id,
        manager: nameManager,
        incidence_angle: incidenceAngle,
        manager_phone: phoneManager && phoneManager.replace(/-/g, ''),
        azimuth_angle: azimuthAngle,
        install_date: data?.ds_install_date,
        color: data?.ds_color,
        com_id: data?.com_id,
        max_power: data?.ds_max_power,
        name: data?.ds_name,
        pos_id: data?.pos_id,
        type: data?.ds_type,
      })
    );
  };

  const errorsMessage =
    errorsAddDevice &&
    Object.values(errorsAddDevice).map((item, index) => {
      return (
        <ul className="error-list" key={index}>
          <li>{item && item[0]}</li>
        </ul>
      );
    });

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
          <div className="cell">
            <input disabled value={data?.no} />
          </div>
          <div className="cell">
            <input disabled value={renderLabelType(data?.ds_type)} />
          </div>
          {parseInt(data?.ds_type, 10) === 0 && (
            <div className="cell">
              <input disabled value={data?.position?.pos_name} />
            </div>
          )}
          <div className="cell">
            <input
              name="managerName"
              value={nameManager || ''}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="cell">
            <input disabled value={`${data?.ds_max_power}v`} />
          </div>
          <div className="cell">
            <input
              name="incidenceAngle"
              value={incidenceAngle || ''}
              onChange={(e) => handleInputChange(e)}
              maxLength="11"
            />
          </div>
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
          <div className="cell">
            <input value={data?.ds_install_date || ''} disabled />
          </div>
          <div className="cell">
            <input value={data?.company?.com_name || ''} disabled />
          </div>
          {parseInt(data?.ds_type, 10) === 0 && (
            <div className="cell">
              <input value={data?.ds_name || ''} disabled />
            </div>
          )}
          <div className="cell justify-content-start">
            <InputPhone
              className="input-field"
              value={phoneManager || ''}
              name="phoneManager"
              options={{
                numericOnly: true,
                delimiters: ['-', '-'],
                blocks: [3, 4, 4],
              }}
              onChange={(e) => handleInputChange(e)}
              pattern="[0-9]*"
              inputMode="numeric"
              customClass="custom-input"
            />
          </div>
          <div className="cell">
            <input value={data?.ds_color || ''} disabled />
          </div>
          <div className="cell">
            <input
              value={azimuthAngle || ''}
              name="azimuthAngle"
              onChange={(e) => handleInputChange(e)}
              maxLength="11"
            />
          </div>
        </div>
      </div>
      <div className="device-detail__btn-group">
        <Button customClass="btn-modify" onClick={() => setIsUpdate(true)}>
          수정 완료
        </Button>
        <Button
          customClass="btn-cancel"
          onClick={() => {
            setIsCancel(true);
          }}
        >
          취소
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
        취소 시 수정 내역은 전부 사라집니다.
        <br /> 그래도 취소하시겠습니까?
      </ModalPopup>

      <ModalPopup
        isOpen={isUpdate}
        isShowHeader
        title="알림"
        isShowIconClose
        isShowFooter
        handleCloseIcon={() => {
          setIsUpdate(false);
        }}
        handleClose={() => {
          setIsUpdate(false);
        }}
        textBtnLeft="확인"
        textBtnRight="취소"
        isShowTwoBtn
        customClassButton="btn-custom"
        handleSubmit={() => {
          setIsUpdate(false);
          handleUpdateDevice();
        }}
      >
        수정 하시겠습니까?
      </ModalPopup>

      <ModalPopup
        isOpen={isSuccess}
        isShowHeader
        title="알림"
        isShowFooter
        handleClose={() => {
          history.push({
            pathname: `${ROUTERS.DEVICE}/${data?.id}`,
            state: {
              id: data?.id,
            },
          });
        }}
        textBtnRight="확인"
        isShowTwoBtn={false}
        customClassButton="btn-custom"
        handleSubmit={() => {
          history.push({
            pathname: `${ROUTERS.DEVICE}/${data?.id}`,
            state: {
              id: data?.id,
            },
          });
        }}
      >
        수정 완료되었습니다.
      </ModalPopup>

      <ModalPopup
        isOpen={isUpdateFailed}
        isShowHeader
        title="확인"
        isShowIconClose
        isShowFooter
        handleCloseIcon={() => {
          setIsUpdateFailed(false);
          dispatch(resetDeviceType());
        }}
        handleClose={() => {
          setIsUpdateFailed(false);
          dispatch(resetDeviceType());
        }}
        textBtnRight="확인"
        customClassButton="btn-custom"
      >
        {errorsMessage}
      </ModalPopup>
    </div>
  );
};

export default memo<Props>(FormEdit);
