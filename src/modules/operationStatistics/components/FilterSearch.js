// @flow
// libs
import React, { memo } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import moment from 'moment';
import IMAGES from 'themes/images';
import SelectDropdown from 'commons/components/Select';
import Button from 'commons/components/Button';
import ko from 'date-fns/locale/ko';

registerLocale('ko', ko);

type Props = {
  handleChangeSearch: Function,
  paramsSearch: Object,
  listInverter1: Array<{
    id: number,
    value: any,
    label: string,
  }>,
  listInverter: Array<{
    id: number,
    value: any,
    label: string,
  }>,
  handleSubmitSearch: Function,
  activeTab: boolean,
  isCompany: boolean,
};

export const FilterSearch = ({
  handleChangeSearch,
  paramsSearch,
  listInverter1,
  listInverter,
  handleSubmitSearch,
  activeTab,
  isCompany,
}: Props) => {
  const CONTRACT_FORMAT_DATE = {
    minute: 'yyyy-MM-dd',
    hour: 'yyyy-MM-dd',
    day: 'yyyy-MM-dd',
    month: 'yyyy-MM',
    year: 'yyyy',
  };

  return (
    <div className="group-search">
      <div className="table-form">
        <div className="item-row d-flex">
          <div className="colum-left">단위 선택</div>
          <div className="colum-right">
            <div className="group-button-unit-selection">
              <Button
                onClick={() => handleChangeSearch('minute', 'classification')}
                customClass={`${
                  paramsSearch?.classification === 'minute' ? 'active' : ''
                }`}
              >
                분별
              </Button>
              <Button
                onClick={() => handleChangeSearch('hour', 'classification')}
                customClass={`${
                  paramsSearch?.classification === 'hour' ? 'active' : ''
                }`}
              >
                시간별
              </Button>
              <Button
                onClick={() => handleChangeSearch('day', 'classification')}
                customClass={`${
                  paramsSearch?.classification === 'day' ? 'active' : ''
                }`}
              >
                일별
              </Button>
              <Button
                onClick={() => handleChangeSearch('month', 'classification')}
                customClass={`${
                  paramsSearch?.classification === 'month' ? 'active' : ''
                }`}
              >
                월별
              </Button>
            </div>
          </div>
        </div>
        <div className="item-row d-flex">
          <div className="colum-left">비교 분석</div>
          <div className="colum-right">
            <div className="d-flex justify-content-start date-group align-items-center">
              <div className="group-select-search d-flex justify-content-start align-items-center">
                <div className="title-label">{`${
                  isCompany ? '업체1 선택' : '인버터1 선택'
                }`}</div>
                <SelectDropdown
                  placeholder="업체 선택"
                  listItem={listInverter1.filter(
                    (inverter1) => inverter1.id !== paramsSearch?.inverter?.id
                  )}
                  onChange={(option) => handleChangeSearch(option, 'inverter1')}
                  option={paramsSearch?.inverter1 || null}
                  noOptionsMessage={() => '옵션 없음'}
                  disabled={
                    paramsSearch?.inverter1 !== null && activeTab !== ''
                  }
                />
              </div>
              <img src={IMAGES.arrow_right} alt="" className="mx-2" />
              <div className="group-select-search d-flex justify-content-start align-items-center mr-10">
                <div className="title-label">{`${
                  isCompany ? '업체2 선택' : '인버터2 선택'
                }`}</div>
                <SelectDropdown
                  placeholder="선택되지 않음"
                  listItem={listInverter.filter(
                    (inverter) => inverter.id !== paramsSearch?.inverter1?.id
                  )}
                  onChange={(option) => handleChangeSearch(option, 'inverter')}
                  option={paramsSearch?.inverter || null}
                  noOptionsMessage={() => '옵션 없음'}
                />
              </div>
              <div className="title-label">검색기간</div>
              <div className="input-date">
                <DatePicker
                  selected={paramsSearch?.startDate}
                  onChange={(date) => handleChangeSearch(date, 'startDate')}
                  dateFormat={
                    CONTRACT_FORMAT_DATE[paramsSearch?.classification]
                  }
                  minDate={
                    paramsSearch?.classification === 'minute' ||
                    paramsSearch?.classification === 'hour' ||
                    paramsSearch?.classification === 'day'
                      ? new Date(
                          moment(
                            moment(paramsSearch?.endDate).format(),
                            'YYYY-MM-DD'
                          ).subtract(30, 'days')
                        )
                      : new Date(
                          moment(
                            moment(paramsSearch?.endDate).format(),
                            'YYYY-MM-DD'
                          ).subtract(365, 'days')
                        )
                  }
                  maxDate={paramsSearch?.endDate}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  showMonthYearPicker={paramsSearch?.classification === 'month'}
                  showYearPicker={paramsSearch?.classification === 'year'}
                  placeholderText="시간 선택"
                />
                <img src={IMAGES.iconCalendar} alt="icon-calendar" />
              </div>
              {paramsSearch?.classification !== 'minute' &&
                paramsSearch?.classification !== 'hour' && (
                  <>
                    <span>~</span>
                    <div className="input-date">
                      <DatePicker
                        selected={paramsSearch?.endDate}
                        onChange={(date) => handleChangeSearch(date, 'endDate')}
                        dateFormat={
                          CONTRACT_FORMAT_DATE[paramsSearch?.classification]
                        }
                        locale="ko"
                        minDate={paramsSearch?.startDate}
                        maxDate={paramsSearch?.endDate}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        showMonthYearPicker={
                          paramsSearch?.classification === 'month'
                        }
                        showYearPicker={paramsSearch?.classification === 'year'}
                        dropdownMode="select"
                        placeholderText="시간 선택"
                      />
                      <img src={IMAGES.iconCalendar} alt="icon-calendar" />
                    </div>
                  </>
                )}
              <Button onClick={handleSubmitSearch} customClass="h-32">
                검색
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo<Props>(FilterSearch);
