// @flow
import React, { memo } from 'react';
import SelectDropdown from 'commons/components/Select';
import Button from 'commons/components/Button';
import images from 'themes/images';

type Props = {
  handleChangeOptionCompany: Function,
  optionDevice: Object,
  listCompany: Array<{
    id: number,
    value: any,
    label: string,
  }>,
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
  idx: any,
  isAccountPage?: boolean,
};

export const ItemDevice = ({
  handleChangeOptionCompany,
  optionDevice,
  listCompany,
  listArea,
  listInverter,
  handleRemove,
  idx,
  listType,
  isAccountPage = false,
}: Props) => {
  return (
    <div className="item-role mt-2">
      <div className="group-select">
        <div className="group-item">
          {!isAccountPage && (
            <>
              <SelectDropdown
                placeholder="구분"
                listItem={listType}
                onChange={(option) =>
                  handleChangeOptionCompany(option, 'type', optionDevice?.idx)
                }
                option={optionDevice?.type || null}
                disabled={idx !== 0}
                noOptionsMessage={() => '옵션 없음'}
              />
              <img src={images.icon_next} alt="" />
            </>
          )}
        </div>
        <div className="group-item">
          <SelectDropdown
            placeholder="업체 선택"
            listItem={listCompany}
            onChange={(option) =>
              handleChangeOptionCompany(option, 'company', optionDevice?.idx)
            }
            option={optionDevice?.company || null}
            noOptionsMessage={() => '옵션 없음'}
          />
          <img src={images.icon_next} alt="" />
        </div>
        <div className="group-item">
          <SelectDropdown
            placeholder="구역 선택"
            listItem={listArea}
            disabled={
              optionDevice?.type?.value
                ? optionDevice?.type?.value !== 0
                : false
            }
            onChange={(option) =>
              handleChangeOptionCompany(option, 'area', optionDevice?.idx)
            }
            noOptionsMessage={() => '옵션 없음'}
            option={
              optionDevice?.type?.value ? null : optionDevice?.area || null
            }
          />
          <img src={images.icon_next} alt="" />
        </div>
        <div className="group-item">
          <SelectDropdown
            placeholder="인버터 선택"
            listItem={listInverter}
            onChange={(option) =>
              handleChangeOptionCompany(option, 'inverter', optionDevice?.idx)
            }
            option={optionDevice?.inverter || null}
            noOptionsMessage={() => '옵션 없음'}
          />
        </div>
      </div>
      <Button onClick={() => handleRemove(optionDevice)} customClass="btn-red">
        삭제
      </Button>
    </div>
  );
};

ItemDevice.defaultProps = {
  isAccountPage: false,
};

export default memo<Props>(ItemDevice);
