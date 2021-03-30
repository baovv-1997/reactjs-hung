// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import MainLayout from 'layout/MainLayout';
import { useDispatch, useSelector } from 'react-redux';
import TitleHeader from 'commons/components/TitleHeader';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import SelectDropdown from 'commons/components/Select';
import ModalPopup from 'commons/components/Modal';
import Radio from 'commons/components/Radio';
import Button from 'commons/components/Button';
import { Validator } from 'helpers/validator';
import * as SignInAction from 'modules/accounts/redux';
import { useHistory } from 'react-router-dom';
import ROUTERS from 'constants/routers';

const StatusByAreaCompanyRegister = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isProcessing, listCompany } = useSelector((state) => state?.account);
  const [modalConform, setModalConform] = useState({
    isShow: false,
    content: '현황을 등록하시겠습니까?',
  });

  const [dataSubmit, setDataSubmit] = useState({
    typeEvent: 'event',
    content: '',
    company: null,
  });
  const [error, setError] = useState({
    content: '',
    company: '',
  });

  useEffect(() => {
    dispatch(SignInAction.getListCompany());
    // eslint-disable-next-line
  }, []);

  const { typeEvent, content, company } = dataSubmit;
  const handleSubmit = () => {
    let validation = {};
    const rules = {
      content: ['required'],
      company: ['required'],
    };

    const dataValidate = {
      content,
      company: company && company.label,
    };
    validation = Validator(dataValidate, rules);
    if (Object.keys(validation).length > 0) {
      setError({
        ...error,
        content: validation && validation.content,
        company: validation && validation.company,
      });
      setModalConform({
        ...modalConform,
        isShow: false,
      });
      return;
    }
    // Call api register event
    history.push(ROUTERS.TEST_MOCKUP_OPERATION);
  };

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
                      typeEvent: 'event',
                    })
                  }
                  isChecked={typeEvent === 'event'}
                  name="typeEvent"
                  labelRadio="설비 이력"
                  id="event"
                />
                <Radio
                  onChange={() =>
                    setDataSubmit({
                      ...dataSubmit,
                      typeEvent: 'history',
                    })
                  }
                  isChecked={typeEvent === 'history'}
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
          <Button onClick={() => history.push(ROUTERS.TEST_MOCKUP_OPERATION)}>
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

export default StatusByAreaCompanyRegister;
