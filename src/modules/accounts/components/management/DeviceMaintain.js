// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SelectDropdown from 'commons/components/Select';
import images from 'themes/images';
import Button from 'commons/components/Button';
import { getListDevice } from '../../../device/redux';

type Props = {
  listCompany: {
    value: number,
    label: string,
  },
  posOptionList: {
    value: number,
    label: string,
  },
  itemDevice: {
    id: number,
    company: {
      value: number,
      label: string,
    },
    position: {
      value: number,
      label: string,
    },
    inverter: {
      value: number,
      label: string,
    },
  },
  handleChange: Function,
  handleRemove: Function,
};
const DeviceMaintain = ({
  listCompany,
  posOptionList,
  itemDevice,
  handleChange,
  handleRemove,
}: Props) => {
  const dispatch = useDispatch();
  const deviceList = useSelector((state) => state?.device?.deviceList);

  const [companySelected, setCompanySelected] = useState(itemDevice?.company);
  const [positionSelected, setPositionSelected] = useState(
    itemDevice?.position
  );

  useEffect(() => {
    dispatch(
      getListDevice({
        com_id: companySelected?.value,
        pos_id: positionSelected?.value,
      })
    );
  }, [companySelected, positionSelected]);

  return (
    <div className="select-group d-flex">
      <div className="group-item d-flex">
        <SelectDropdown
          placeholder="업체 선택"
          listItem={listCompany}
          option={itemDevice?.company || null}
          noOptionsMessage={() => '옵션 없음'}
          className="cus-select"
          onChange={(option) => {
            handleChange(option, 'company', itemDevice.id);
            setCompanySelected(option);
          }}
        />
        <img src={images.icon_next} alt="" className="mx-2" />
      </div>
      <div className="group-item d-flex">
        <SelectDropdown
          placeholder="구역 선택"
          listItem={posOptionList}
          noOptionsMessage={() => '옵션 없음'}
          option={itemDevice?.position || null}
          className="cus-select"
          onChange={(option) => {
            setPositionSelected(option);
            handleChange(option, 'position', itemDevice.id);
          }}
        />
        <img src={images.icon_next} alt="" className="mx-2" />
      </div>
      <div className="group-item d-flex">
        <SelectDropdown
          placeholder="인버터 선택"
          listItem={
            deviceList &&
            deviceList.map((device) => ({
              value: device?.id,
              label: device?.moduleName,
            }))
          }
          option={itemDevice?.inverter || null}
          noOptionsMessage={() => '옵션 없음'}
          onChange={(option) => handleChange(option, 'inverter', itemDevice.id)}
          className="cus-select"
        />
      </div>
      <Button
        customClass="custom-btn"
        onClick={() => handleRemove(itemDevice.id)}
      >
        삭제
      </Button>
    </div>
  );
};

export default memo<Props>(DeviceMaintain);
