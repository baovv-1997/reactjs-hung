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
import { addDevice, resetDeviceType } from '../redux';

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
  const type = useSelector((state) => state?.device?.type);
  const [startDate, setStartDate] = useState(new Date());
  const [currentType, setCurrentType] = useState('0');
  const [positionSelected, setPositionSelected] = useState(null);
  const [companySelected, setCompanySelected] = useState(null);
  const [isCancel, setIsCancel] = useState(false);
  const [isErrorAdd, setIsErrorAdd] = useState(false);
  const [inputValue, setInputValue] = useState({
    manager: '',
    maxPower: '',
    incidenceAngle: '',
    name: '',
    phoneManager: '',
    color: '',
    azimuthAngle: '',
  });

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
              currentType === '2' || currentType === '3' ? 'cell-disable' : ''
            }`}
          >
            <Select
              listItem={posOptionList}
              onChange={(option) => onChangeSelect(option, 'position')}
              option={positionSelected}
              placeholder="위치선택"
              disabled={currentType === '2' || currentType === '3'}
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
            <input
              placeholder="입력해주세요."
              onChange={(e) => handleInputChange(e)}
              name="phoneManager"
              value={inputValue.phoneManager}
              pattern="[0-9]*"
              onKeyPress={(e) => isNumberKey(e)}
              inputMode="numeric"
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
        <Button customClass="btn-modify" onClick={handleAddDevice}>
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
        취소 시 수정 내역은 전부 사라집니다. 그래도 취소하시겠습니까?.
      </ModalPopup>

      <ModalPopup
        isOpen={isErrorAdd}
        isShowHeader
        title="Error"
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
        textBtnLeft="OK"
        customClassButton="btn-custom"
      >
        {errorsMessage}
      </ModalPopup>
    </div>
  );
};

export default memo<Props>(FormRegister);
