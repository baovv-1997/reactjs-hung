// @flow
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ModalPopup from 'commons/components/Modal';
import Input from 'commons/components/Input';
import Button from 'commons/components/Button';
import Loading from 'commons/components/Loading';
import { API } from 'apis';
import ROUTERS from 'constants/routers';
import { listType } from 'constants/listKey';
import { Validator } from '../../../helpers/validator';
import SignIn from './signIn';
import * as SignInAction from '../redux';

const SignUp = () => {
  const history = useHistory();
  const {
    type,
    isProcessing,
    errorMsg,
    token,
    listCompany,
    listArea,
    listInverter,
  } = useSelector((state) => state?.account);

  const dispatch = useDispatch();
  const [dataLogin, setDataLogin] = useState({
    username: '',
    password: '',
  });
  const [dataRegister, setDataRegister] = useState({
    username: '',
    passwords: '',
    email: '',
    phone: '',
    person: '',
    role: 'admin',
  });
  const [error, setError] = useState({
    username: '',
    passwords: '',
    email: '',
    phone: '',
    person: '',
    role: '',
  });

  const [isModalRegisterSuccess, setIsModalRegisterSuccess] = useState(false);
  const [isShowModalRegister, setIsShowModalRegister] = useState(false);

  const [modalLogin, setModalLogin] = useState({
    isShow: false,
    content: '',
  });

  const [listItemDevice, setListItemDevice] = useState([
    {
      idx: Math.random(),
      area: null,
      company: null,
      inverter: null,
      type: null,
    },
  ]);

  /** Show popup sign in success */
  useEffect(() => {
    switch (type) {
      case SignInAction.signInRequestSuccess:
        API.setHeader('Authorization', `Bearer ${token}`);
        history.push(ROUTERS.ROOT);
        break;
      case SignInAction.signInRequestFailed:
        setModalLogin({
          ...modalLogin,
          isShow: true,
          content: errorMsg,
        });
        break;
      case SignInAction.signUpRequestSuccess:
        setIsModalRegisterSuccess(true);
        break;
      case SignInAction.signUpRequestFailed:
        setModalLogin({
          ...modalLogin,
          isShow: true,
          content: '등록 요청이 완료되지 않았습니다.',
        });
        break;
      default:
        break;
    }
    // eslint-disable-next-line
  }, [type, token]);

  // get list getListCompany

  useEffect(() => {
    if (isShowModalRegister) {
      dispatch(SignInAction.getListCompany());
      dispatch(SignInAction.getListArea());
    }
    // eslint-disable-next-line
  }, [isShowModalRegister]);

  const handleChange = (value, name) => {
    switch (name) {
      case 'username':
        setDataLogin({
          ...dataLogin,
          username: value,
        });
        break;
      case 'password':
        setDataLogin({
          ...dataLogin,
          password: value,
        });
        break;
      default:
        break;
    }
  };

  const { username, password } = dataLogin;
  const { email, phone, person } = dataRegister;

  const handleSubmit = () => {
    if (!username && !password) {
      setModalLogin({
        ...modalLogin,
        isShow: true,
        content: '아이디와 비밀번호를 입력해주세요.',
      });
      return;
    }
    if (!username) {
      setModalLogin({
        ...modalLogin,
        isShow: true,
        content: '아이디를 입력 해주세요.',
      });
      return;
    }
    if (!password) {
      setModalLogin({
        ...modalLogin,
        isShow: true,
        content: '아이디를 입력 해주세요.',
      });
    }
    dispatch(SignInAction.signInRequest(dataLogin));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleChangeRegister = (value, name) => {
    switch (name) {
      case 'username':
        setDataRegister({
          ...dataRegister,
          username: value,
        });
        setError({
          ...error,
          username: '',
        });
        break;
      case 'email':
        setDataRegister({
          ...dataRegister,
          email: value,
        });
        setError({
          ...error,
          email: '',
        });
        break;
      case 'phone':
        setDataRegister({
          ...dataRegister,
          phone: value,
        });
        setError({
          ...error,
          phone: '',
        });
        break;
      case 'person':
        setDataRegister({
          ...dataRegister,
          person: value,
        });
        setError({
          ...error,
          person: '',
        });
        break;
      case 'admin':
        setDataRegister({
          ...dataRegister,
          role: 'admin',
        });

        break;
      case 'company':
        setDataRegister({
          ...dataRegister,
          role: 'company',
        });

        break;
      case 'monitoring':
        setDataRegister({
          ...dataRegister,
          role: 'monitoring',
        });

        break;
      default:
        break;
    }
  };

  const handleChangeOptionCompany = (option, name, idx) => {
    const itemChange = listItemDevice.find((item) => item.idx === idx);
    const listItemChange = listItemDevice.map((item) => {
      return {
        ...item,
        area: null,
        company: null,
        inverter: null,
        type: (name === 'type' ? option : item.type) || null,
      };
    });
    const listItemCompany = listItemDevice.map((item) => {
      return item.idx === itemChange?.idx
        ? {
            ...item,
            area: null,
            company: (name === 'company' ? option : item.company) || null,
            inverter: null,
          }
        : item;
    });

    const listItemArea = listItemDevice.map((item) => {
      return item.idx === itemChange?.idx
        ? {
            ...item,
            area: (name === 'area' ? option : item.area) || null,
            inverter: null,
          }
        : item;
    });

    const listItemChange2 = listItemDevice.map((item) => {
      return item.idx === itemChange?.idx
        ? {
            ...item,
            area: (name === 'area' ? option : item.area) || null,
            company: (name === 'company' ? option : item.company) || null,
            inverter: (name === 'inverter' ? option : item.inverter) || null,
            type: (name === 'type' ? option : item.type) || null,
          }
        : item;
    });
    switch (name) {
      case 'type':
        setListItemDevice(listItemChange);
        dispatch(
          SignInAction.getListInverter({
            per_page: 0,
            type: option?.value,
          })
        );
        break;
      case 'company':
        setListItemDevice(listItemCompany);
        dispatch(
          SignInAction.getListInverter({
            per_page: 0,
            type: itemChange?.type?.value,
            com_id: option?.value,
          })
        );
        break;
      case 'area':
        setListItemDevice(listItemArea);
        dispatch(
          SignInAction.getListInverter({
            per_page: 0,
            type: itemChange?.type?.value,
            com_id: itemChange?.company?.value,
            pos_id: option?.value,
          })
        );
        break;
      default:
        setListItemDevice(listItemChange2);
        break;
    }
  };

  const handleRegisterSubmit = () => {
    let validation = {};
    const rules = {
      username: ['required'],
      email: ['required', 'email'],
      phone: ['required', 'phoneNumber'],
      person: ['required'],
    };

    const dataValidate = {
      username: dataRegister.username,
      email,
      phone,
      person,
    };
    validation = Validator(dataValidate, rules);
    if (Object.keys(validation).length > 0) {
      setError(validation);
      return;
    }

    const checkValidator = listItemDevice.filter(
      (item) =>
        item.type === null || item.company === null || item.inverter === null
    );

    if (checkValidator && checkValidator.length > 0) {
      setModalLogin({
        ...modalLogin,
        isShow: true,
        content: `관리기기 정보 입력을 완료해주세요.`,
      });
      return;
    }
    const listItemDevices = listItemDevice.map((item) => item.area?.value);
    const dataSubmit = {
      role: dataRegister.role,
      username: dataRegister.username || '',
      email,
      name: person || '',
      phone,
      inverter_ids: listItemDevices,
    };
    // submit data
    dispatch(SignInAction.signUpRequest(dataSubmit));
  };

  const handleKeyDownRegister = (e) => {
    if (e.key === 'Enter') {
      handleRegisterSubmit();
    }
  };

  const handleAddListDevice = () => {
    setListItemDevice([
      ...listItemDevice,
      {
        idx: Math.random(),
        company: null,
        area: null,
        type:
          (listItemDevice && listItemDevice[0] && listItemDevice[0].type) ||
          null,
        inverter: null,
      },
    ]);
  };

  //  Remove list device
  const handleRemove = (itemRemove) => {
    const removedItems = listItemDevice.filter(
      (item) => itemRemove.idx !== item.idx
    );
    setListItemDevice(removedItems);
  };

  return (
    <div className="page-login">
      {isProcessing && <Loading />}

      <div className="sign-up">
        <div className="login-name">LOGIN</div>
        <div className="from-login">
          <div className="login-title">실증단지</div>
          <div className="input-wrapper">
            <Input
              placeholder="아이디를 입력하세요."
              type="text"
              name="username"
              value={username}
              onChange={(e) => handleChange(e.target.value, 'username')}
              onKeyPress={handleKeyDown}
            />

            <Input
              placeholder="비밀번호를 입력하세요."
              type="password"
              name="password"
              value={password}
              onChange={(e) => handleChange(e.target.value, 'password')}
              onKeyPress={handleKeyDown}
            />
          </div>
          <div className="btn-wrapper">
            <Button onClick={() => handleSubmit()} customClass="bg-primary">
              로그인
            </Button>
          </div>

          <div
            className="register-wrapper"
            onClick={() => setIsShowModalRegister(true)}
            onKeyPress={() => {}}
            role="button"
            tabIndex={0}
          >
            <div className="name">계정 등록 요청</div>
          </div>
        </div>
      </div>

      <ModalPopup
        isOpen={modalLogin.isShow}
        isShowHeader
        title="알림"
        isShowIconClose
        isShowFooter
        handleCloseIcon={() =>
          setModalLogin({
            ...modalLogin,
            isShow: false,
            content: '',
          })
        }
        handleClose={() =>
          setModalLogin({
            ...modalLogin,
            isShow: false,
            content: '',
          })
        }
        textBtnRight="확인"
      >
        {modalLogin.content}
      </ModalPopup>
      <ModalPopup
        isOpen={isShowModalRegister}
        isShowHeader
        size="lg"
        title="실증단지 계정 등록 양식"
        isShowIconClose
        handleCloseIcon={() => setIsShowModalRegister(false)}
        isShowFooter
        handleClose={() => handleRegisterSubmit()}
        textBtnRight="등록요청"
      >
        <SignIn
          dataRegister={dataRegister}
          handleKeyDown={handleKeyDownRegister}
          handleChangeRegister={handleChangeRegister}
          handleChangeOptionCompany={handleChangeOptionCompany}
          listCompany={listCompany}
          texTerror={error}
          listItemDevice={listItemDevice}
          handleAddListDevice={handleAddListDevice}
          handleRemove={handleRemove}
          listInverter={listInverter}
          listArea={listArea}
          listType={listType}
        />
      </ModalPopup>
      {/* Modal register success */}
      <ModalPopup
        isOpen={isModalRegisterSuccess}
        isShowHeader
        title="알림"
        isShowIconClose
        isShowFooter
        handleCloseIcon={() => {
          setIsModalRegisterSuccess(false);
          setIsShowModalRegister(false);
        }}
        handleClose={() => {
          setIsModalRegisterSuccess(false);
          setIsShowModalRegister(false);
        }}
        textBtnRight="확인"
      >
        등록 요청이 완료되었습니다.
      </ModalPopup>
    </div>
  );
};

export default SignUp;
