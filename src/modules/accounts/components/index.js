// @flow
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ModalPopup from 'commons/components/Modal';
import Input from 'commons/components/Input';
import Button from 'commons/components/Button';
import { Validator } from '../../../helpers/validator';
import SignIn from './signIn';
import * as SignInAction from '../redux';

const SignUp = () => {
  // const history = useHistory();
  const listCompany = [
    {
      id: 1,
      value: 'Company 1',
      label: 'Company 1',
    },
    {
      id: 2,
      value: 'Company 2',
      label: 'Company 2',
    },
    {
      id: 3,
      value: 'Company 3',
      label: 'Company 3',
    },
  ];
  const listArea = [
    {
      id: 1,
      value: 'Area 1',
      label: 'Area 1',
    },
    {
      id: 2,
      value: 'Area 2',
      label: 'Area 2',
    },
    {
      id: 3,
      value: 'Area 3',
      label: 'Area 3',
    },
  ];

  const listInverter = [
    {
      id: 1,
      value: 'Inverter 1',
      label: 'Inverter 1',
    },
    {
      id: 2,
      value: 'Inverter 2',
      label: 'Inverter 2',
    },
    {
      id: 3,
      value: 'Inverter 3',
      label: 'Inverter 3',
    },
  ];
  // const optionDefault = {
  //   id: 0,
  //   value: null,
  //   label: null,
  // };

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
    role: 'superAdmin',
  });
  const [error, setError] = useState({
    username: '',
    passwords: '',
    email: '',
    phone: '',
    person: '',
    role: '',
  });

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
    },
  ]);
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
      case 'superAdmin':
        setDataRegister({
          ...dataRegister,
          role: 'superAdmin',
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
      return item.idx === itemChange?.idx
        ? {
            ...item,
            area: (name === 'area' ? option : item.area) || null,
            company: (name === 'company' ? option : item.company) || null,
            inverter: (name === 'inverter' ? option : item.inverter) || null,
          }
        : item;
    });

    setListItemDevice(listItemChange);
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
        item.area === null || item.company === null || item.inverter === null
    );

    if (checkValidator && checkValidator.length > 0) {
      setModalLogin({
        ...modalLogin,
        isShow: true,
        content: `관리기기 정보 입력을 완료해주세요.`,
      });
    }
    // submit data
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
        />
      </ModalPopup>
    </div>
  );
};

export default SignUp;
