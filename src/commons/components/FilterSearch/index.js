// @flow
// libs
import React, { memo } from 'react';
import moment from 'moment';
import DatePicker, { registerLocale } from 'react-datepicker';
import IMAGES from 'themes/images';
import Button from 'commons/components/Button';
import ko from 'date-fns/locale/ko';

registerLocale('ko', ko);

type Props = {
  handleChangeSearch: Function,
  paramsSearch: Object,
};

export const FilterSearch = ({ handleChangeSearch, paramsSearch }: Props) => {
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
              <div className="title-label">검색기간</div>
              <div className="title-label">검색기간</div>
              <div className="input-date">
                <DatePicker
                  selected={paramsSearch?.from}
                  onChange={(date) => handleChangeSearch(date, 'from')}
                  dateFormat={
                    CONTRACT_FORMAT_DATE[paramsSearch?.classification]
                  }
                  minDate={
                    paramsSearch?.classification === 'minute' ||
                    paramsSearch?.classification === 'hour' ||
                    paramsSearch?.classification === 'day'
                      ? new Date(
                          moment(
                            moment(paramsSearch?.to).format(),
                            'YYYY-MM-DD'
                          ).subtract(30, 'days')
                        )
                      : new Date(
                          moment(
                            moment(paramsSearch?.to).format(),
                            'YYYY-MM-DD'
                          ).subtract(365, 'days')
                        )
                  }
                  maxDate={paramsSearch?.to}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  locale="ko"
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
                        selected={paramsSearch?.to}
                        onChange={(date) => handleChangeSearch(date, 'to')}
                        dateFormat={
                          CONTRACT_FORMAT_DATE[paramsSearch?.classification]
                        }
                        locale="ko"
                        minDate={paramsSearch?.from}
                        maxDate={paramsSearch?.to}
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
              <Button
                onClick={() =>
                  handleChangeSearch(
                    !paramsSearch?.isSubmitSearch,
                    'isSubmitSearch'
                  )
                }
                customClass="h-32"
              >
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
