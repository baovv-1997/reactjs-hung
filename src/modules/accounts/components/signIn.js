// @flow
import React, { memo } from 'react';
import Input from 'commons/components/Input';
import Button from 'commons/components/Button';
import Radio from 'commons/components/Radio';
import SelectDropdown from 'commons/components/Select';
import ItemDevice from './ItemDevice';
import images from 'themes/images';
import { isNumberKey, isOnPasteNumber } from 'helpers/index';

type Props = {
  dataRegister: Object,
  handleKeyDown: Function,
  handleChangeRegister: Function,
  handleChangeOptionCompany: Function,
  optionCompany: Object,
  listCompany: Array<{}>,
  texTerror: Object,
  optionDevice: Object,
  listArea: Array<{}>,
  listInverter: Array<{}>,
  handleRemove: Function,
};

const SignIn = ({
  dataRegister,
  handleKeyDown,
  handleChangeRegister,
  handleChangeOptionCompany,
  optionCompany,
  listCompany,
  texTerror,
  optionDevice,
  listArea,
  listInverter,
  handleRemove,
}: Props) => {
  const { username, email, phone, person, role } = dataRegister;

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
                    handleChangeRegister('superAdmin', 'superAdmin')
                  }
                  isChecked={role === 'superAdmin'}
                  name="superAdmin"
                  labelRadio="최고 관리자"
                />
                <Radio
                  onChange={() => handleChangeRegister('company', 'company')}
                  isChecked={role === 'company'}
                  labelRadio="업체"
                  name="company"
                />
                <Radio
                  onChange={() =>
                    handleChangeRegister('monitoring', 'monitoring')
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
                onChange={(e) => handleChangeRegister(e.target.value, 'email')}
                onKeyPress={(e) => handleKeyDown(e)}
                errorMsg={texTerror && texTerror?.email}
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
                name="username"
                value={username}
                onChange={(e) =>
                  handleChangeRegister(e.target.value, 'username')
                }
                onKeyPress={(e) => handleKeyDown(e)}
                errorMsg={texTerror && texTerror?.username}
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
                onKeyPress={(e) => {
                  isNumberKey(e);
                  handleKeyDown(e);
                }}
                maxLength="11"
                onPaste={(e) => isOnPasteNumber(e)}
                value={phone}
                onChange={(e) => handleChangeRegister(e.target.value, 'phone')}
                errorMsg={texTerror && texTerror?.phone}
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
                onChange={(e) => handleChangeRegister(e.target.value, 'person')}
                onKeyPress={(e) => handleKeyDown(e)}
                errorMsg={texTerror && texTerror?.person}
              />
            </div>
          </div>

          <div className="item">
            <div className="item-label">
              관리기기<span>*</span>
            </div>
            <div className="item-content">
              <div className="item-role">
                <div className="group-select">
                  <div className="group-item">
                    <SelectDropdown
                      placeholder="업체 선택"
                      listItem={listCompany}
                      onChange={(option) => handleChangeOptionCompany(option)}
                      option={optionCompany}
                    />
                    <img src={images.icon_next} alt="" />
                  </div>
                  <div className="group-item">
                    <SelectDropdown
                      placeholder="구역 선택"
                      listItem={listCompany}
                      onChange={(option) => handleChangeOptionCompany(option)}
                      option={optionCompany}
                    />
                    <img src={images.icon_next} alt="" />
                  </div>
                  <div className="group-item">
                    <SelectDropdown
                      placeholder="인버터 선택"
                      listItem={listCompany}
                      onChange={(option) => handleChangeOptionCompany(option)}
                      option={optionCompany}
                    />
                  </div>
                </div>
                <Button onClick={() => {}}>추가</Button>
              </div>
              <ItemDevice
                handleChangeOptionCompany={handleChangeOptionCompany}
                optionDevice={optionDevice}
                listCompany={listCompany}
                listArea={listArea}
                listInverter={listInverter}
                handleRemove={handleRemove}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo<Props>(SignIn);
