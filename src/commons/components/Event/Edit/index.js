// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import MainLayout from 'layout/MainLayout';
import { useDispatch, useSelector } from 'react-redux';
import TitleHeader from 'commons/components/TitleHeader';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import SelectDropdown from 'commons/components/Select';
import images from 'themes/images';
import ModalPopup from 'commons/components/Modal';
import Radio from 'commons/components/Radio';
import Button from 'commons/components/Button';
import { Validator } from 'helpers/validator';
import * as SignInAction from 'modules/accounts/redux';
import { useHistory } from 'react-router-dom';
import ROUTERS from 'constants/routers';
import { getEventList, updateEvent } from 'commons/redux';

type Props = {
  match: {
    params: {
      id: any,
    },
  },
};

const EditEvent = ({ match }: Props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { listCompany, listArea, listInverter } = useSelector(
    (state) => state?.account
  );

  const { eventList, isProcessing, type } = useSelector(
    (state) => state.commons
  );

  const [modalConform, setModalConform] = useState({
    isShow: false,
    content: '현황을 등록하시겠습니까?',
  });

  const [dataSubmit, setDataSubmit] = useState({
    typeEvent: eventList,
    content: '월 정기 설비 진행',
    company: null,
    area: null,
    inverter: null,
  });

  const [error, setError] = useState({
    content: '',
    company: '',
    area: '',
    inverter: '',
  });

  useEffect(() => {
    dispatch(SignInAction.getListCompany());
    dispatch(SignInAction.getListArea());
    // eslint-disable-next-line
  }, []);

  const { typeEvent, content, company, area, inverter } = dataSubmit;
  const { id } = match.params;

  const handleSubmit = () => {
    let validation = {};
    const rules = {
      content: ['required'],
      company: ['required'],
      area: ['required'],
      inverter: ['required'],
    };

    const dataValidate = {
      content,
      // company: company && company.label,
      // area: area && area.label,
      inverter: inverter && inverter.label,
    };
    validation = Validator(dataValidate, rules);
    if (Object.keys(validation).length > 0) {
      setError(validation);
      return;
    }

    setModalConform({
      ...modalConform,
      isShow: false,
    });

    dispatch(
      updateEvent({
        id,
        type: dataSubmit?.typeEvent,
        content: dataSubmit?.content,
        inverter_id: dataSubmit?.inverter?.value,
      })
    );
  };

  useEffect(() => {
    dispatch(
      getEventList({
        id,
      })
    );
  }, []);

  useEffect(() => {
    switch (type) {
      case 'commons/updateEventSuccess':
        history.push(ROUTERS.OPERATION_STATUS_BY_COMPANY);
        break;
      default:
        break;
    }
  }, [type]);

  const handleChange = (value, name) => {
    switch (name) {
      case 'company':
        setError({
          ...error,
          company: '',
        });
        setDataSubmit({
          ...dataSubmit,
          company: value,
          inverter: '',
        });
        dispatch(
          SignInAction.getListInverter({
            per_page: 0,
            com_id: value && value.value,
          })
        );
        break;
      case 'area':
        setDataSubmit({
          ...dataSubmit,
          area: value,
          inverter: '',
        });
        setError({
          ...error,
          area: '',
        });
        dispatch(
          SignInAction.getListInverter({
            per_page: 0,
            com_id: company && company.value,
            pos_id: value && value.value,
          })
        );
        break;
      case 'inverter':
        setDataSubmit({
          ...dataSubmit,
          inverter: value,
        });
        setError({
          ...error,
          inverter: '',
        });
        break;
      default:
        setDataSubmit({
          ...dataSubmit,
          [name]: value,
        });
        setError({
          ...error,
          [name]: '',
        });
        break;
    }
  };

  useEffect(() => {
    setDataSubmit({
      ...dataSubmit,
      typeEvent: eventList?.evt_type,
      content: eventList?.evt_content,
      company: {
        label: eventList?.com_name,
        value: eventList?.com_id,
      },
      area: {
        label: eventList?.pos_name,
        value: eventList?.pos_id,
      },
      inverter: {
        label: eventList?.ds_name,
        value: eventList?.ds_id,
      },
    });
  }, [eventList]);

  return (
    <MainLayout isProcessing={isProcessing}>
      <div className="content-wrap">
        <TitleHeader
          title="실증단지 운영 현황"
          descSub="설비 이력, 보수 이력을 등록하실 수 있습니다."
        />
        <TitleSubHeader title="이벤트 상세 내용" />
        <div className="table-form">
          <div className="item-row d-flex">
            <div className="colum-left">분류</div>
            <div className="colum-right">
              <div className="group-radio">
                <Radio
                  onChange={() =>
                    setDataSubmit({
                      ...dataSubmit,
                      typeEvent: '0',
                    })
                  }
                  isChecked={typeEvent === '0'}
                  name="typeEvent"
                  labelRadio="설비 이력"
                  id="event"
                />
                <Radio
                  onChange={() =>
                    setDataSubmit({
                      ...dataSubmit,
                      typeEvent: '1',
                    })
                  }
                  isChecked={typeEvent === '1'}
                  labelRadio="보수 이력"
                  name="typeEvent"
                  id="history"
                />
              </div>
            </div>
          </div>
          <div className="item-row d-flex">
            <div className="colum-left">모듈정보</div>
            <div className="colum-right">
              <div className="item-role">
                <div className="group-select">
                  <div className="group-item">
                    <SelectDropdown
                      placeholder="모듈 선택"
                      listItem={listCompany}
                      onChange={(option) => handleChange(option, 'company')}
                      option={company || null}
                      noOptionsMessage={() => '옵션 없음'}
                      errorMsg={error?.company}
                    />
                    <img src={images.icon_next} alt="" />
                  </div>
                  <div className="group-item">
                    <SelectDropdown
                      placeholder="모듈 선택"
                      listItem={listArea}
                      onChange={(option) => handleChange(option, 'area')}
                      option={area || null}
                      noOptionsMessage={() => '옵션 없음'}
                      errorMsg={error?.area}
                    />
                    <img src={images.icon_next} alt="" />
                  </div>
                  <div className="group-item">
                    <SelectDropdown
                      placeholder="모듈 선택"
                      listItem={listInverter}
                      onChange={(option) => handleChange(option, 'inverter')}
                      option={inverter || null}
                      noOptionsMessage={() => '옵션 없음'}
                      errorMsg={error?.inverter}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item-row d-flex mh-300">
            <div className="colum-left">내용</div>
            <div className="colum-right">
              <textarea
                placeholder=""
                name="content"
                rows="12"
                maxLength="5000"
                className="form-control"
                value={content}
                onChange={(e) => handleChange(e.target.value, 'content')}
              />
              {error?.content && (
                <p className="input__error-msg">{error?.content}</p>
              )}
            </div>
          </div>
        </div>
        <div className="group-btn-bottom">
          <Button
            onClick={() =>
              setModalConform({
                ...modalConform,
                isShow: true,
              })
            }
          >
            수정 완료
          </Button>
          <Button
            onClick={() => history.push(ROUTERS.OPERATION_STATUS_BY_COMPANY)}
          >
            취소
          </Button>
        </div>
      </div>

      <ModalPopup
        isOpen={modalConform.isShow}
        isShowHeader
        title="알림"
        isShowIconClose
        isShowFooter
        handleCloseIcon={() =>
          setModalConform({
            ...modalConform,
            isShow: false,
          })
        }
        handleClose={() =>
          setModalConform({
            ...modalConform,
            isShow: false,
          })
        }
        textBtnLeft="확인"
        textBtnRight="취소"
        isShowTwoBtn
        customClassButton="btn-custom"
        handleSubmit={() => handleSubmit()}
      >
        {modalConform?.content}
      </ModalPopup>
    </MainLayout>
  );
};

export default EditEvent;
