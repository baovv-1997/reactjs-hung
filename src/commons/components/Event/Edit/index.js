// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from 'commons/components/LineChart';
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
import { getEventList, updateEvent } from 'commons/redux';

type Props = {
  match: {
    params: {
      id: any,
    },
  },
  location: {
    state: {
      prevRoute: string,
    },
  },
};

const EditEvent = ({ match, location }: Props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { listCompany, listArea, listInverter } = useSelector(
    (state) => state?.account
  );
  const { eventList, type, isProcessingDetail, deviceList } = useSelector(
    (state) => state.commons
  );

  const listInverterTest =
    (deviceList && deviceList.filter((item) => item.ds_type === '3')) || [];

  const [modalConform, setModalConform] = useState({
    isShow: false,
    content: '현황을 등록하시겠습니까?',
  });

  const [modalError, setModalError] = useState({
    isShow: false,
    content: '',
  });

  const [dataSubmit, setDataSubmit] = useState({
    typeEvent: eventList,
    content: '월 정기 설비 진행',
    company: null,
    area: null,
    inverter: null,
  });

  useEffect(() => {
    dispatch(SignInAction.getListCompany());
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
      inverter: inverter && inverter.label,
    };
    validation = Validator(dataValidate, rules);
    if (Object.keys(validation).length > 0) {
      setModalError({
        isShow: true,
        content: '필수 정보를 모두 입력해주세요.',
      });
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
        history.go(-1);
        dispatch(SignInAction.getEventNotification());
        break;
      default:
        break;
    }
  }, [type]);

  const handleChange = (value, name) => {
    switch (name) {
      case 'company':
        setDataSubmit({
          ...dataSubmit,
          company: value,
          inverter: null,
          area: null,
        });

        dispatch(
          SignInAction.getListArea({
            per_page: 99999999,
            com_id: dataSubmit?.company?.value,
          })
        );
        dispatch(
          SignInAction.getListInverter({
            per_page: 99999,
            com_id: value && value.value,
          })
        );
        break;
      case 'area':
        setDataSubmit({
          ...dataSubmit,
          area: value,
          inverter: null,
        });
        dispatch(
          SignInAction.getListInverter({
            per_page: 999999,
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
        break;
      default:
        setDataSubmit({
          ...dataSubmit,
          [name]: value,
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
    <>
      {isProcessingDetail && <Loading />}
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
                      typeEvent: '1',
                    })
                  }
                  isChecked={typeEvent === '1'}
                  name="typeEvent"
                  labelRadio="설비 이력"
                  id="event"
                  disabled={typeEvent === '0'}
                />
                <Radio
                  onChange={() =>
                    setDataSubmit({
                      ...dataSubmit,
                      typeEvent: '2',
                    })
                  }
                  isChecked={typeEvent === '2'}
                  labelRadio="보수 이력"
                  name="typeEvent"
                  id="history"
                  disabled={typeEvent === '0'}
                />
              </div>
            </div>
          </div>
          <div className="item-row d-flex">
            <div className="colum-left">모듈정보</div>
            <div className="colum-right">
              <div className="item-role">
                <div className="group-select">
                  {eventList?.ds_type !== '3' && (
                    <div className="group-item">
                      <SelectDropdown
                        placeholder="업체 선택"
                        listItem={listCompany}
                        onChange={(option) => handleChange(option, 'company')}
                        option={company || null}
                        noOptionsMessage={() => '옵션 없음'}
                        disabled={typeEvent === '0'}
                      />
                      <img src={images.icon_next} alt="" />
                    </div>
                  )}
                  {eventList?.ds_type !== '3' && (
                    <div className="group-item">
                      <SelectDropdown
                        placeholder="구역 선택"
                        listItem={listArea}
                        onChange={(option) => handleChange(option, 'area')}
                        option={area || null}
                        noOptionsMessage={() => '옵션 없음'}
                        disabled={typeEvent === '0'}
                      />
                      <img src={images.icon_next} alt="" />
                    </div>
                  )}

                  <div className="group-item">
                    <SelectDropdown
                      placeholder="구역 선택"
                      listItem={
                        eventList?.ds_type !== '3'
                          ? listInverter
                          : listInverterTest
                      }
                      onChange={(option) => handleChange(option, 'inverter')}
                      option={inverter || null}
                      noOptionsMessage={() => '옵션 없음'}
                      disabled={typeEvent === '0'}
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
                disabled={typeEvent === '0'}
                onChange={(e) => handleChange(e.target.value, 'content')}
              />
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
          <Button onClick={() => history.push(location?.state?.prevRoute)}>
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
      <ModalPopup
        isOpen={modalError.isShow}
        isShowHeader
        title="알림"
        isShowIconClose
        isShowFooter
        handleCloseIcon={() =>
          setModalError({
            ...modalError,
            isShow: false,
          })
        }
        handleClose={() => {
          setModalError({
            ...modalError,
            isShow: false,
          });
        }}
        textBtnRight="확인"
        handleSubmit={() =>
          setModalError({
            ...modalError,
            isShow: false,
          })
        }
      >
        {modalError?.content}
      </ModalPopup>
    </>
  );
};

export default EditEvent;
