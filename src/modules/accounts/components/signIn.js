// @flow
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import ModalPopup from 'commons/components/Modal';
import Input from 'commons/components/Input';
import Button from 'commons/components/Button';
import Radio from 'commons/components/Radio';
import SelectDropdown from 'commons/components/Select';
import images from 'themes/images';

const SignIn = () => {
  // const history = useHistory();
  // data demo
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
  const [dataRegister, setDataRegister] = useState({
    userName: '',
    password: '',
    email: '',
    phone: '',
    person: '',
    role: 'superAdmin',
  });

  const [modalRegister, setModalRegister] = useState({
    isShow: false,
    content: '',
  });

  const handleChange = (value, name) => {
    switch (name) {
      case 'userName':
        setDataRegister({
          ...dataRegister,
          userName: value,
        });
        break;
      case 'password':
        setDataRegister({
          ...dataRegister,
          password: value,
        });
        break;
      default:
        break;
    }
  };
  const { userName, password, email, phone, person, role } = dataRegister;

  const handleSubmit = () => {
    if (!userName && !password) {
      setModalRegister({
        ...modalRegister,
        isShow: true,
        content: '아이디와 비밀번호를 입력해주세요.',
      });
      return;
    }
    if (!userName) {
      setModalRegister({
        ...modalRegister,
        isShow: true,
        content: '아이디를 입력 해주세요.',
      });
      return;
    }
    if (!password) {
      setModalRegister({
        ...modalRegister,
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

  return (
    <div className="page-register">
      <div className="sign-in">
        <div className="sign-desc mb-3">
          등록 요청시 담당자가 관련 내용을 확인 후 서버에 계정 등록을 도와드릴
          예정입니다.
          <br />
          비밀번호의 경우 임시발급 비밀번호가 발급됩니다.
        </div>
        <div className="form-register">
          <div className="item">
            <div className="item-label">
              권한<span>*</span>
            </div>
            <div className="item-content">
              <div className="group-radio">
                <Radio
                  onChange={() =>
                    setDataRegister({
                      ...dataRegister,
                      role: 'superAdmin',
                    })
                  }
                  isChecked={role === 'superAdmin'}
                  name="superAdmin"
                  labelRadio="최고 관리자"
                />
                <Radio
                  onChange={() =>
                    setDataRegister({
                      ...dataRegister,
                      role: 'company',
                    })
                  }
                  isChecked={role === 'company'}
                  labelRadio="업체"
                  name="company"
                />
                <Radio
                  onChange={() =>
                    setDataRegister({
                      ...dataRegister,
                      role: 'monitoring',
                    })
                  }
                  isChecked={role === 'monitoring'}
                  name="monitoring"
                  labelRadio="모니터링"
                />
              </div>
            </div>
          </div>

          <div className="item">
            <div className="item-label">
              이메일<span>*</span>
            </div>
            <div className="item-content">
              <Input
                placeholder="이메일을 입력해주세요."
                type="text"
                name="email"
                value={email}
                onChange={(e) => handleChange(e.target.value, 'email')}
                onKeyPress={handleKeyDown}
              />
            </div>
          </div>

          <div className="item">
            <div className="item-label">
              아이디<span>*</span>
            </div>
            <div className="item-content">
              <Input
                placeholder="영문 + 숫자 4~13자리를 입력해주세요."
                type="text"
                name="userName"
                value={userName}
                onChange={(e) => handleChange(e.target.value, 'userName')}
                onKeyPress={handleKeyDown}
              />
            </div>
          </div>

          <div className="item">
            <div className="item-label">
              전화번호<span>*</span>
            </div>
            <div className="item-content">
              <Input
                placeholder="숫자 11자리를 입력해주세요. "
                type="text"
                name="phone"
                value={phone}
                onChange={(e) => handleChange(e.target.value, 'phone')}
                onKeyPress={handleKeyDown}
              />
            </div>
          </div>

          <div className="item">
            <div className="item-label">
              담당자<span>*</span>
            </div>
            <div className="item-content">
              <Input
                placeholder="담당자를 입력해주세요."
                type="text"
                name="person"
                value={person}
                onChange={(e) => handleChange(e.target.value, 'person')}
                onKeyPress={handleKeyDown}
              />
            </div>
          </div>

          <div className="item">
            <div className="item-label">
              담당자<span>*</span>
            </div>
            <div className="item-content">
              <div className="item-role">
                <div className="group-select">
                  <div className="group-item">
                    <SelectDropdown
                      placeholder="업체 선택"
                      listItem={listCompany}
                      onChange={(option) => seOptionCompany(option)}
                      option={optionCompany}
                    />
                    <img src={images.icon_next} alt="" />
                  </div>
                  <div className="group-item">
                    <SelectDropdown
                      placeholder="구역 선택"
                      listItem={listCompany}
                      onChange={(option) => seOptionCompany(option)}
                      option={optionCompany}
                    />
                    <img src={images.icon_next} alt="" />
                  </div>
                  <div className="group-item">
                    <SelectDropdown
                      placeholder="인버터 선택"
                      listItem={listCompany}
                      onChange={(option) => seOptionCompany(option)}
                      option={optionCompany}
                    />
                  </div>
                </div>
                <Button onClick={() => {}}>추가</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalPopup
        isOpen={modalRegister.isShow}
        isShowHeader
        title="알림"
        isShowIconClose
        isShowFooter
        handleClose={() =>
          setModalRegister({
            ...modalRegister,
            isShow: false,
            content: '',
          })
        }
        textBtnRight="확인"
      >
        {modalRegister.content}
      </ModalPopup>
    </div>
  );
};

export default SignIn;
