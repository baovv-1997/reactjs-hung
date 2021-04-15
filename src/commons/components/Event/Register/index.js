// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
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
import * as EventAction from 'commons/redux';
import { useHistory } from 'react-router-dom';
import ROUTERS from 'constants/routers';
import { addNewEvent } from 'commons/redux';

type Props = {
  location: {
    pathname: string,
    state: {
      prevRoute: string,
      typeEvent: string,
    },
  },
};

const EventRegister = ({ location }: Props) => {
  const stateTypeEvent = location?.state && location?.state.typeEvent;
  const history = useHistory();
  const dispatch = useDispatch();

  const { type, deviceList, comList, posList } = useSelector(
    (state) => state.commons
  );
  const listInverterSolar = deviceList && deviceList.slice(1);

  const [modalConform, setModalConform] = useState({
    isShow: false,
    content: '현황을 등록하시겠습니까?',
  });

  const [modalError, setModalError] = useState({
    isShow: false,
    content: '',
  });

  const [dataSubmit, setDataSubmit] = useState({
    typeEvent: '1',
    content: '',
    company: null,
    area: null,
    inverter: null,
  });

  useEffect(() => {
    if (stateTypeEvent !== 'mockup') {
      dispatch(EventAction.getCompanyList({ sort_by: 'id', sort_dir: 'asc' }));
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (stateTypeEvent && stateTypeEvent === 'mockup') {
      dispatch(
        EventAction.getListDevice({
          per_page: 999999,
          type: '3',
        })
      );
    } else {
      dispatch(
        EventAction.getListDevice({
          per_page: 999999,
          com_id: dataSubmit?.company?.value,
          pos_id: dataSubmit?.area?.value,
          type: '0',
        })
      );
    }
  }, [dataSubmit?.company?.value, dataSubmit?.area?.value]);

  useEffect(() => {
    switch (type) {
      case 'commons/addNewEventSuccess':
        history.go(-1);
        dispatch(SignInAction.getEventNotification());
        break;
      default:
        break;
    }
  }, [type]);

  const { typeEvent, content, company, area, inverter } = dataSubmit;
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

    setModalConform({
      ...modalConform,
      isShow: false,
    });

    if (Object.keys(validation).length > 0) {
      setModalError({
        isShow: true,
        content: '필수 정보를 모두 입력해주세요.',
      });
      return;
    }
    // Call api register event
    dispatch(
      addNewEvent({
        type: dataSubmit?.typeEvent,
        content: dataSubmit?.content,
        inverter_id: dataSubmit?.inverter?.value,
      })
    );
  };

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
          EventAction.getPosList({
            per_page: 99999999,
            com_id: value?.id,
          })
        );
        break;
      case 'area':
        setDataSubmit({
          ...dataSubmit,
          area: value,
          inverter: null,
        });

        break;
      case 'inverter':
        setDataSubmit({
          ...dataSubmit,
          inverter: value,
        });
        break;
      case 'content':
        setDataSubmit({
          ...dataSubmit,
          content: value,
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

  const renderTitle = () => {
    let title = '';
    switch (stateTypeEvent) {
      case 'mockup':
        title = '테스트(목업) 운영 현황';
        break;

      default:
        title = '실증단지 운영 현황';
        break;
    }

    return title;
  };

  return (
    <>
      <div className="content-wrap">
        <TitleHeader
          title={renderTitle()}
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
                />
              </div>
            </div>
          </div>
          <div className="item-row d-flex">
            <div className="colum-left">모듈정보</div>
            <div className="colum-right">
              <div className="item-role">
                <div className="group-select">
                  {stateTypeEvent !== 'mockup' && (
                    <div className="group-item">
                      <SelectDropdown
                        placeholder="업체 선택"
                        listItem={(comList && comList.slice(1)) || []}
                        onChange={(option) => handleChange(option, 'company')}
                        option={company || null}
                        noOptionsMessage={() => '옵션 없음'}
                      />
                      <img src={images.icon_next} alt="" />
                    </div>
                  )}
                  {stateTypeEvent !== 'mockup' && (
                    <div className="group-item">
                      <SelectDropdown
                        placeholder="구역 선택"
                        listItem={(posList && posList.slice(1)) || []}
                        onChange={(option) => handleChange(option, 'area')}
                        option={area || null}
                        noOptionsMessage={() => '옵션 없음'}
                      />
                      <img src={images.icon_next} alt="" />
                    </div>
                  )}
                  <div className="group-item">
                    <SelectDropdown
                      placeholder="모듈 선택"
                      listItem={
                        stateTypeEvent === 'mockup'
                          ? listInverterSolar
                          : (area && listInverterSolar) || []
                      }
                      onChange={(option) => handleChange(option, 'inverter')}
                      option={inverter || null}
                      noOptionsMessage={() => '옵션 없음'}
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
            완료
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
        handleClose={() => {
          setModalConform({
            ...modalConform,
            isShow: false,
          });
        }}
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

export default EventRegister;
