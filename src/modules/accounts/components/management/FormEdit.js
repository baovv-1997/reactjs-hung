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
import { ROLE_COMPANY, ROLE_ADMIN } from 'constants/index';

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
  const { type, errors, userInfo } = useSelector((state) => state?.account);
  const [currentOption, setCurrentOption] = useState('admin');
  const [isUpdateFailed, setIsUpdateFailed] = useState(false);
  const [isCancel, setIsCancel] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [devices, setDevices] = useState([]);
  const [comSelected, setComSelected] = useState({});
  // const comID = userInfo?.com_id;
  const roles = userInfo?.roles[0]?.name;

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

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  useEffect(() => {
    dispatch(getListCompany());
    // dispatch(getListPosition());
  }, []);

  useEffect(() => {
    dispatch(
      getListPosition({
        com_id:
          accountDetail &&
          accountDetail?.devices &&
          accountDetail?.devices[0] &&
          accountDetail?.devices[0].com_id
            ? accountDetail?.devices[0].com_id
            : '',
      })
    );
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
    if (name === ROLE_COMPANY) {
      dispatch(
        getListPosition({
          com_id: option.value,
        })
      );
    }
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
        disabled={roles !== ROLE_ADMIN}
      />
    ));

  const getCompanySelected = (com) => {
    setComSelected(com);
    const deviceUpdate = devices.map((item) => ({
      ...item,
      company: com,
    }));

    setDevices(deviceUpdate);
  };

  const handleAddNewDevice = () => {
    const initDevice = {
      company: comSelected,

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
    devices.map((item, index) => {
      return (
        <DeviceMaintain
          posOptionList={posOptionList}
          handleChange={handleSelectChange}
          listCompany={companyOptions}
          listInverter={devices}
          itemDevice={item}
          handleRemove={handleRemoveDevice}
          getCompanySelected={getCompanySelected}
          index={index}
          comSelected={comSelected}
          currentOption={currentOption}
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
      case 'accounts/updateAccountSuccess':
        setIsSuccess(true);
        break;
      default:
        break;
    }
  }, [type]);

  useEffect(() => {
    if (accountDetail.roles && accountDetail.roles[0]) {
      setCurrentOption(accountDetail?.roles[0]?.name);
    }
  }, []);

  return (
    <div>
      <div className="table">
        <div className="row">
          <div className="col-2">권한</div>
          <div className={`col-4 ${roles !== ROLE_ADMIN ? 'disable' : ''} `}>
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
          <div className="col-2 disable">이메일</div>
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
          <div className="col-2 disable">권한</div>
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
          <div className="col-4 d-block mt-2">
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
              <Button
                onClick={handleAddNewDevice}
                customClass="btn-add-device mb-2"
                isDisabled={currentOption !== ROLE_COMPANY}
              >
                추가
              </Button>
            </div>
          </div>
        </div>

        <div className="account__btn-group">
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
        취소 시 수정 내역은 전부 사라집니다.
        <br /> 그래도 취소하시겠습니까?
      </ModalPopup>
      <ModalPopup
        isOpen={isUpdateFailed}
        isShowHeader
        title="확인"
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
        textBtnRight="확인"
        customClassButton="btn-custom"
      >
        {errorsMessage}
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
          handleSubmit();
        }}
      >
        수정하시겠습니까?
      </ModalPopup>

      <ModalPopup
        isOpen={isSuccess}
        isShowHeader
        title="알림"
        isShowFooter
        handleClose={() => {
          history.push(ROUTERS.ACCOUNT_MANAGEMENT);
        }}
        textBtnRight="확인"
        isShowTwoBtn={false}
        customClassButton="btn-custom"
        handleSubmit={() => {
          history.push(ROUTERS.ACCOUNT_MANAGEMENT);
        }}
      >
        수정 완료되었습니다.
      </ModalPopup>
    </div>
  );
};

export default memo<Props>(FormDetail);
