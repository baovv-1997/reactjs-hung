// @flow
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ModalPopup from 'commons/components/Modal';
import Input from 'commons/components/Input';
import Button from 'commons/components/Button';
import SignIn from './signIn';
import * as SignInAction from '../redux';

const SignUp = () => {
  // const history = useHistory();
  const dispatch = useDispatch();
  const [dataLogin, setDataLogin] = useState({
    username: '',
    password: '',
  });

  const [isShowModalRegister, setIsShowModalRegister] = useState(true);

  const [modalLogin, setModalLogin] = useState({
    isShow: false,
    content: '',
  });

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
      return;
    }
    dispatch(SignInAction.signInRequest(dataLogin));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
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
          <div className="register-wrapper">
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
        handleClose={() => {}}
        textBtnRight="등록요청"
      >
        <SignIn />
      </ModalPopup>
    </div>
  );
};

export default SignUp;
