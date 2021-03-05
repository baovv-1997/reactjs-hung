// @flow
import React, { memo } from 'react';
import SelectDropdown from 'commons/components/Select';
import Button from 'commons/components/Button';
import images from 'themes/images';

type Props = {
  handleChangeOptionCompany: Function,
  optionDevice: Object,
  listCompany: Array<{}>,
  listArea: Array<{}>,
  listInverter: Array<{}>,
  handleRemove: Function,
};

export const ItemDevice = ({
  handleChangeOptionCompany,
  optionDevice,
  listCompany,
  listArea,
  listInverter,
  handleRemove,
}: Props) => {
  return (
    <div className="item-role mt-2">
      <div className="group-select">
        <div className="group-item">
          <SelectDropdown
            placeholder="업체 선택"
            listItem={listCompany}
            onChange={(option) => handleChangeOptionCompany(option)}
            option={optionDevice?.company || null}
          />
          <img src={images.icon_next} alt="" />
        </div>
        <div className="group-item">
          <SelectDropdown
            placeholder="구역 선택"
            listItem={listArea}
            onChange={(option) => handleChangeOptionCompany(option)}
            option={optionDevice?.area || null}
          />
          <img src={images.icon_next} alt="" />
        </div>
        <div className="group-item">
          <SelectDropdown
            placeholder="인버터 선택"
            listItem={listInverter}
            onChange={(option) => handleChangeOptionCompany(option)}
            option={optionDevice?.inverter || null}
          />
        </div>
      </div>
      <Button onClick={() => handleRemove()}>삭제</Button>
    </div>
  );
};

export default memo<Props>(ItemDevice);
