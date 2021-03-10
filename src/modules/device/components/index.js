// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Radio from 'commons/components/Radio';
import { useSelector, useDispatch } from 'react-redux';
import IMAGES from 'themes/images';
import { DeviceManagementOptionSeach } from 'constants/optionCheckbox';
import Select from 'commons/components/Select';
import Input from 'commons/components/Input';
import Button from 'commons/components/Button';
import Table from 'commons/components/Table';
import { DEVICE_HEAD_TABLE } from 'constants/tableHeadData';
import MainLayout from '../../../layout/MainLayout';
import { getListCompany, getListDevice, getListPosition } from '../redux';

const DeviceManagement = () => {
  const dispatch = useDispatch();
  const companyOptions = useSelector((state) => state?.device?.companyOptions);
  const deviceList = useSelector((state) => state?.device?.deviceList);
  const posOptionList = useSelector((state) => state?.device?.posOptionList);
  const [currentOption, setCurrentOption] = useState('all');

  const [selectOption, setSelectOption] = useState(null);

  useEffect(() => {
    dispatch(getListCompany());
    dispatch(getListPosition());
  }, []);

  useEffect(() => {
    dispatch(
      getListDevice({
        [currentOption]: selectOption?.value,
      })
    );
  }, [selectOption]);

  // handle when slect change
  const onChangeSelect = (option) => {
    setSelectOption(option);
  };

  // handle when radio change
  const onChangeOption = (e) => {
    const { name } = e.target;
    setCurrentOption(name);
    setSelectOption(null);
  };

  // render list radio
  const renderRadioList = DeviceManagementOptionSeach.map((item) => (
    <Radio
      name={item.key}
      label={item.label}
      onChange={onChangeOption}
      isChecked={currentOption === item.key}
      labelRadio={item.label}
    />
  ));

  return (
    <MainLayout>
      <div className="wrapper-device">
        <div className="wrapper-device__head-menu">
          <div className="wrapper-device__head-menu__title">
            <img src={IMAGES.iconTitle} alt="icon-title-device" />
            <span className="wrapper-device__head-menu__title__text">
              기기 관리
            </span>
            <span className="wrapper-device__head-menu__title__des">
              등록되어있는 기기정보들을 관리하실 수 있습니다.
            </span>
          </div>
          <div className="wrapper-device__head-menu__search">
            <div className="wrapper-device__head-menu__search__options">
              <p className="search-option-title">권한</p>{' '}
              <span className="search-option-character">|</span>{' '}
              {renderRadioList}
            </div>
            <div lassName="wrapper-device__head-menu__search__select">
              <Select
                listItem={
                  currentOption === 'com_id' ? companyOptions : posOptionList
                }
                onChange={(option) => onChangeSelect(option)}
                option={selectOption}
                placeholder="업체 선택"
              />
            </div>
            <Input
              placeholder="업체명, 구분, 설치위치로 검색해보세요."
              customClass="wrapper-input-search"
            />
            <Button customClass="custom-btn">검색</Button>
          </div>
        </div>
        <div className="wrapper-device__table">
          <Table tableHeads={DEVICE_HEAD_TABLE} tableBody={deviceList} />
        </div>
      </div>
    </MainLayout>
  );
};

export default DeviceManagement;
