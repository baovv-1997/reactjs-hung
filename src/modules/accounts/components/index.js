// @flow
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { Validator } from '../../../helpers/validator';
import ModalPopup from 'commons/components/Modal';
import Input from 'commons/components/Input';
import Button from 'commons/components/Button';
import SignIn from './signIn';

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
  const optionDefault = {
    id: 0,
    value: '',
    label: '업체 선택',
  };
  const [optionCompany, seOptionCompany] = useState(optionDefault);
  const [dataLogin, setDataLogin] = useState({
    userName: '',
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

  const handleChange = (value, name) => {
    switch (name) {
      case 'userName':
        setDataLogin({
          ...dataLogin,
          userName: value,
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
  const { userName, password } = dataLogin;
  const { username, email, phone, person } = dataRegister;

  const handleSubmit = () => {
    if (!userName && !password) {
      setModalLogin({
        ...modalLogin,
        isShow: true,
        content: '아이디와 비밀번호를 입력해주세요.',
      });
      return;
    }
    if (!userName) {
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
      return;
    }
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

  const handleChangeOptionCompany = (option) => {
    seOptionCompany(option);
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
      username,
      email,
      phone,
      person,
    };
    validation = Validator(dataValidate, rules);
    if (Object.keys(validation).length > 0) {
      setError(validation);
      return;
    }

    // submit data
  };

  const handleKeyDownRegister = (e) => {
    if (e.key === 'Enter') {
      handleRegisterSubmit();
    }
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
              name="userName"
              value={userName}
              onChange={(e) => handleChange(e.target.value, 'userName')}
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
          optionCompany={optionCompany}
          listCompany={listCompany}
          texTerror={error}
        />
      </ModalPopup>
    </div>
  );
};

export default SignUp;
