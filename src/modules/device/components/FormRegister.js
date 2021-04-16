/* eslint-disable react-hooks/exhaustive-deps */
// @flow
import React, { useState, useEffect, memo } from 'react';
import { DeivceRegisterHead } from 'constants/headerTable';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import Radio from 'commons/components/Radio';
import IMAGES from 'themes/images';
import { registerDeviceOptions } from 'constants/optionCheckbox';
import Select from 'commons/components/Select';
import Button from 'commons/components/Button';
import ModalPopup from 'commons/components/Modal';
import { isNumberKey } from 'helpers';
import ROUTERS from 'constants/routers';
import InputPhone from 'commons/components/Input/InputPhone';
import {
  addDevice,
  resetDeviceType,
  getListCompany,
  getListPosition,
} from '../redux';
import { ROLE_COMPANY } from 'constants/index';

type Props = {
  history: {
    push: Function,
  },
};
const FormRegister = ({ history }: Props) => {
  const dispatch = useDispatch();
  const posOptionList = useSelector((state) => state?.device?.posOptionList);
  const companyOptions = useSelector((state) => state?.device?.companyOptions);
  const errorsAddDevice = useSelector(
    (state) => state?.device?.errorsAddDevice
  );
  const dataAddNew = useSelector((state) => state?.device?.dataAddNew);
  const { userInfo } = useSelector((state) => state.account);
  const type = useSelector((state) => state?.device?.type);
  const [startDate, setStartDate] = useState(new Date());
  const [currentType, setCurrentType] = useState('0');
  const [isDisablePosition, setIsDisablePosition] = useState(false);
  const [positionSelected, setPositionSelected] = useState(null);
  const [companySelected, setCompanySelected] = useState(null);
  const [isCancel, setIsCancel] = useState(false);
  const [isErrorAdd, setIsErrorAdd] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [inputValue, setInputValue] = useState({
    manager: '',
    maxPower: '',
    incidenceAngle: '',
    name: '',
    phoneManager: '',
    color: '',
    azimuthAngle: '',
  });

  const roleName =
    userInfo && userInfo.roles && userInfo.roles[0] && userInfo.roles[0].name;

  useEffect(() => {
    dispatch(
      getListCompany({
        per_page: 9999,
      })
    );
    dispatch(
      getListPosition({
        per_page: 9999,
        com_id: roleName === ROLE_COMPANY ? userInfo?.com_id : '',
      })
    );
  }, []);
  // change radio option
  const onChangeOption = (e) => {
    const { name } = e.target;
    setCurrentType(name);
  };

  // render list radio
  const renderRadioList = registerDeviceOptions.map((item) => {
    return (
      <Radio
        id={item.key}
        name={item.key}
        label={item.label}
        onChange={onChangeOption}
        isChecked={currentType === item.key}
        labelRadio={item.label}
      />
    );
  });

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  // handle when slect change
  const onChangeSelect = (option, name) => {
    switch (name) {
      case 'position':
        setPositionSelected(option);
        break;
      case 'company':
        setCompanySelected(option);
        dispatch(
          getListPosition({
            per_page: 9999,
            com_id: option.value,
          })
        );
        setPositionSelected(null);
        if (
          option.label === '주차장1' ||
          option.label === '주차장2' ||
          option.label === '목업'
        ) {
          setIsDisablePosition(true);
        } else {
          setIsDisablePosition(false);
        }
        break;
      default:
        break;
    }
  };

  const handleAddDevice = () => {
    dispatch(
      addDevice({
        ...inputValue,
        companySelected: companySelected || { value: '', label: '' },
        positionSelected: positionSelected || {
          value: '',
          label: '',
        },
        startDate,
        currentType,
        phoneManager:
          inputValue?.phoneManager && inputValue.phoneManager.replace(/-/g, ''),
      })
    );
  };

  useEffect(() => {
    switch (type) {
      case 'device/addDeviceSuccess':
        history.push(`${ROUTERS.DEVICE}/${dataAddNew.id}`);
        break;
      case 'device/addDeviceFailed':
        setIsErrorAdd(true);
        break;
      default:
        break;
    }
  }, [type]);

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
      <div className="register__form col-span">
        <div className="col-item col-2">
          <div className="cell">설치일</div>
        </div>
        <div className="col-item col-10">
          <div className="cell d-flex justify-content-start">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy-MM-dd"
            />
            <img src={IMAGES.iconCalendar} alt="icon-calendar" />
          </div>
        </div>
      </div>
      <div className="register__form">
        <div className="col-item col-2">
          {DeivceRegisterHead.slice(0, 5).map((item) => (
            <div className="cell" key={item.id}>
              {item.name}
            </div>
          ))}
        </div>
        <div className="col-item col-4">
          <div className="cell">{renderRadioList}</div>
          <div
            className={`cell ${
              currentType === '2' || currentType === '3' || isDisablePosition
                ? 'cell-disable'
                : ''
            }`}
          >
            <Select
              listItem={posOptionList}
              onChange={(option) => onChangeSelect(option, 'position')}
              option={positionSelected}
              placeholder="위치선택"
              disabled={
                currentType === '2' || currentType === '3' || isDisablePosition
              }
            />
          </div>
          <div className="cell">
            <input
              placeholder="입력해주세요."
              onChange={(e) => handleInputChange(e)}
              name="manager"
              value={inputValue.manager}
            />
          </div>

          <div className="cell">
            <input
              placeholder="입력해주세요."
              onChange={(e) => handleInputChange(e)}
              name="maxPower"
              value={inputValue.maxPower}
              pattern="[0-9]*"
              onKeyPress={(e) => isNumberKey(e)}
              inputMode="numeric"
            />
            <span className="unit">kW</span>
          </div>
          <div className="cell">
            <input
              placeholder="입력해주세요."
              onChange={(e) => handleInputChange(e)}
              name="incidenceAngle"
              value={inputValue.incidenceAngle}
              pattern="[0-9]*"
              onKeyPress={(e) => isNumberKey(e)}
              inputMode="numeric"
            />
            <span className="unit">°도</span>
          </div>
        </div>
        <div className="col-item col-2">
          {DeivceRegisterHead.slice(5, 10).map((item) => (
            <div className="cell" key={item.id}>
              {item.name}
            </div>
          ))}
        </div>
        <div className="col-item col-4">
          <div className="cell">
            <Select
              listItem={companyOptions}
              onChange={(option) => onChangeSelect(option, 'company')}
              option={companySelected}
              placeholder="업체선택"
            />
          </div>
          <div
            className={`cell ${
              currentType === '2' || currentType === '3' ? 'cell-disable' : ''
            }`}
          >
            <input
              placeholder="입력해주세요."
              onChange={(e) => handleInputChange(e)}
              name="name"
              value={inputValue.name}
              disabled={currentType === '2' || currentType === '3'}
            />
          </div>
          <div className="cell">
            <InputPhone
              className="input-field"
              value={inputValue.phoneManager || ''}
              placeholder="입력해주세요."
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
            <input
              placeholder="입력해주세요."
              onChange={(e) => handleInputChange(e)}
              name="color"
              value={inputValue.color}
            />
          </div>
          <div className="cell">
            <input
              placeholder="입력해주세요."
              onChange={(e) => handleInputChange(e)}
              name="azimuthAngle"
              value={inputValue.azimuthAngle}
              pattern="[0-9]*"
              onKeyPress={(e) => isNumberKey(e)}
              inputMode="numeric"
            />
            <span className="unit">°도</span>
          </div>
        </div>
      </div>
      <div className="device-detail__btn-group">
        <Button customClass="btn-modify" onClick={() => setIsRegister(true)}>
          등록
        </Button>
        <Button customClass="btn-cancel" onClick={() => setIsCancel(true)}>
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
        취소 시 수정 내역은 전부 사라집니다. <br /> 그래도 취소하시겠습니까?.
      </ModalPopup>

      <ModalPopup
        isOpen={isErrorAdd}
        isShowHeader
        title="확인"
        isShowIconClose
        isShowFooter
        handleCloseIcon={() => {
          setIsErrorAdd(false);
          dispatch(resetDeviceType());
        }}
        handleClose={() => {
          setIsErrorAdd(false);
          dispatch(resetDeviceType());
        }}
        textBtnRight="확인"
        customClassButton="btn-custom"
      >
        {errorsMessage}
      </ModalPopup>

      <ModalPopup
        isOpen={isRegister}
        isShowHeader
        title="알림"
        isShowIconClose
        isShowFooter
        handleCloseIcon={() => {
          setIsRegister(false);
        }}
        handleClose={() => {
          setIsRegister(false);
        }}
        textBtnLeft="확인"
        textBtnRight="취소"
        isShowTwoBtn
        customClassButton="btn-custom"
        handleSubmit={() => {
          setIsRegister(false);
          handleAddDevice();
        }}
      >
        구독 하시겠습니까?
      </ModalPopup>
    </div>
  );
};

export default memo<Props>(FormRegister);
