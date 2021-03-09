// @flow
import React, { memo } from 'react';
import Input from 'commons/components/Input';
import Radio from 'commons/components/Radio';
import { isNumberKey, isOnPasteNumber } from 'helpers/index';
import ItemDevice from './ItemDevice';

type Props = {
  dataRegister: Object,
  handleKeyDown: Function,
  handleChangeRegister: Function,
  handleChangeOptionCompany: Function,
  listCompany: Array<{
    id: number,
    value: any,
    label: string,
  }>,
  texTerror: Object,
  listArea: Array<{
    id: number,
    value: any,
    label: string,
  }>,
  listInverter: Array<{
    id: number,
    value: any,
    label: string,
  }>,
  listType: Array<{ id: number, value: any, label: string }>,
  handleRemove: Function,
  listItemDevice: Array<{
    idx: any,
    company: Object,
    area: Object,
    inverter: Object,
    type: Object,
  }>,
  handleAddListDevice: Function,
};

const SignIn = ({
  dataRegister,
  handleKeyDown,
  handleChangeRegister,
  handleChangeOptionCompany,
  listCompany,
  texTerror,
  listArea,
  listInverter,
  handleRemove,
  listItemDevice,
  handleAddListDevice,
  listType,
}: Props) => {
  const { username, email, phone, person, role } = dataRegister;

  const renderListItemDevice =
    listItemDevice &&
    listItemDevice.map((item, index) => (
      <ItemDevice
        key={item.idx}
        {...item}
        optionDevice={item}
        idx={index}
        handleChangeOptionCompany={handleChangeOptionCompany}
        listCompany={listCompany}
        listArea={listArea}
        listInverter={listInverter}
        listType={listType}
        handleRemove={handleRemove}
        handleAddListDevice={handleAddListDevice}
      />
    ));

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
                  onChange={() => handleChangeRegister('admin', 'admin')}
                  isChecked={role === 'admin'}
                  name="role"
                  labelRadio="최고 관리자"
                  id="admin"
                />
                <Radio
                  onChange={() => handleChangeRegister('company', 'company')}
                  isChecked={role === 'company'}
                  labelRadio="업체"
                  name="role"
                  id="company"
                />
                <Radio
                  onChange={() =>
                    handleChangeRegister('monitoring', 'monitoring')
                  }
                  isChecked={role === 'monitoring'}
                  name="role"
                  labelRadio="모니터링"
                  id="monitoring"
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
                maxLength="13"
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
            <div className="item-content">{renderListItemDevice}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo<Props>(SignIn);
