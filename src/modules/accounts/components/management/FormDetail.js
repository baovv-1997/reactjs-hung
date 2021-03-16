// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { accountOptions } from 'constants/optionCheckbox';
import Radio from 'commons/components/Radio';
import Button from 'commons/components/Button';
import { isNumberKey } from 'helpers/';
import InputPhone from 'commons/components/Input/InputPhone';
import ROUTERS from 'constants/routers';
import ModalPopup from 'commons/components/Modal';
import { getListCompany, getListPosition } from '../../../device/redux';
import { updateAccount, resetAccountType } from '../../redux';
import DeviceMaintain from './DeviceMaintain';

type Props = {
  accountDetail: {
    name: string,
    phone: string,
    devices: [],
    email: string,
    username: string,
    id: number,
  },
  history: {
    push: Function,
  },
};

const FormDetail = ({ accountDetail, history }: Props) => {
  const dispatch = useDispatch();
  const posOptionList = useSelector((state) => state?.device?.posOptionList);
  const companyOptions = useSelector((state) => state?.device?.companyOptions);
  const errors = useSelector((state) => state?.account?.errors);
  const type = useSelector((state) => state?.account?.type);

  const [currentOption, setCurrentOption] = useState('admin');
  const [isUpdateFailed, setIsUpdateFailed] = useState(false);
  const [isCancel, setIsCancel] = useState(false);

  const [devices, setDevices] = useState([]);

  const [inputValue, setInputValue] = useState({
    name: accountDetail?.name,
    phone: accountDetail?.phone,
    password: '',
    passConfirm: '',
  });
  // handle when radio change
  const onChangeOption = (e) => {
    const { name } = e.target;
    setCurrentOption(name);
  };
  console.log('devices', devices);
  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  useEffect(() => {
    dispatch(getListCompany());
    dispatch(getListPosition());
  }, []);

  // handle select change
  const handleSelectChange = (option, name, id) => {
    const listDeviceUpdate =
      devices &&
      devices.map((item) =>
        item.id === id
          ? { ...item, [name]: { value: option.value, label: option.label } }
          : item
      );

    setDevices(listDeviceUpdate);
  };

  // render list radio
  const renderRadioList = accountOptions
    .slice(1, 4)
    .map((item) => (
      <Radio
        id={item.key}
        name={item.key}
        label={item.label}
        onChange={onChangeOption}
        isChecked={currentOption === item.key}
        labelRadio={item.label}
      />
    ));

  const handleAddNewDevice = () => {
    const initDevice = {
      company: null,

      inverter: null,
      position: null,
      id: Math.random(),
    };

    setDevices([...devices, initDevice]);
  };

  const handleRemoveDevice = (id) => {
    const devicesUpdate = devices.filter((item) => item.id !== id);
    setDevices(devicesUpdate);
  };

  const renderListDeviceMaintain =
    devices &&
    devices.map((item) => {
      return (
        <DeviceMaintain
          posOptionList={posOptionList}
          handleChange={handleSelectChange}
          listCompany={companyOptions}
          listInverter={devices}
          itemDevice={item}
          handleRemove={handleRemoveDevice}
        />
      );
    });

  const handleSubmit = () => {
    const idInverterList =
      devices && devices.map((item) => item?.inverter?.value);
    dispatch(
      updateAccount({
        ...inputValue,
        currentOption,
        idInverterList,
        id: accountDetail?.id,
      })
    );
  };

  useEffect(() => {
    setInputValue({ ...inputValue, name: accountDetail?.name });
    const deviceFormat =
      accountDetail &&
      accountDetail.devices &&
      accountDetail.devices.map((item) => ({
        company: {
          value: item?.company?.id,
          label: item?.company?.com_name,
        },

        inverter: {
          value: item?.id,
          label: item?.ds_name,
        },
        position: {
          value: item?.position?.id,
          label: item?.position?.pos_name,
        },
        id: item.id,
      }));
    setDevices(deviceFormat);
  }, [accountDetail]);

  const errorsMessage = Object.values(errors).map((item) => {
    return (
      <ul className="error-list">
        <li>{item[0]}</li>
      </ul>
    );
  });

  useEffect(() => {
    switch (type) {
      case 'accounts/updateAccountFailed':
        setIsUpdateFailed(true);
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
            <div className="wrapper-radio">{renderRadioList}</div>
          </div>
          <div className="col-2">전화번호</div>
          <div className="col-4">
            <InputPhone
              className="input-field"
              value={inputValue?.phone}
              name="phone"
              options={{
                numericOnly: true,
                delimiters: ['-', '-'],
                blocks: [3, 4, 4],
              }}
              onChange={(e) => handleInputChange(e)}
              pattern="[0-9]*"
              onKeyPress={(e) => isNumberKey(e)}
              inputMode="numeric"
              customClass="custom-input"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-2">이메일</div>
          <div className="col-4 disable">
            <div className="d-flex align-items-center h-100">
              {accountDetail?.email}
            </div>
          </div>
          <div className="col-2">비밀번호</div>
          <div className="col-4">
            <input
              className="input-field"
              value={inputValue?.password}
              name="password"
              type="password"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-2">권한</div>
          <div className="col-4 disable">
            <div className="d-flex align-items-center h-100">
              {accountDetail?.username}
            </div>
          </div>
          <div className="col-2">비밀번호 확인</div>
          <div className="col-4">
            <input
              className="input-field"
              value={inputValue?.passConfirm}
              name="passConfirm"
              type="password"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-2">담당자</div>
          <div className="col-4">
            <input
              className="input-field"
              value={inputValue?.name}
              name="name"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="col-2">관리 기기</div>
          <div className="col-4">
            <div>
              {renderListDeviceMaintain}
              <Button onClick={handleAddNewDevice} customClass="btn-add-device">
                추가
              </Button>
            </div>
          </div>
        </div>

        <div className="account__btn-group">
          <Button customClass="btn-modify" onClick={handleSubmit}>
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
          history.push(ROUTERS.ACCOUNT_MANAGEMENT);
        }}
      >
        취소 시 수정 내역은 전부 사라집니다. 그래도 취소하시겠습니까?.
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
