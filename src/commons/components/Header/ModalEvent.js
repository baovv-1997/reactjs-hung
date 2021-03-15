// @flow
import React from 'react';

type Props = {
  isShow?: boolean,
  wrapperRef: any,
};
const ModalEvent = ({ isShow = false, wrapperRef }: Props) => {
  return (
    <div
      className={`modal__event ${isShow ? 'show-modal-event' : ''}`}
      ref={wrapperRef}
    >
      <div className="modal__event-title">이벤트 알림</div>

      <div className="modal__event__group-content">
        <div className="modal__event__type-event">실증단지</div>
        <p className="modal__event__event-name">
          <span>[측정 문제 발생] </span>옥토끼이미징
        </p>
      </div>

      <div className="modal__event__group-content">
        <div className="modal__event__type-event">실증단지</div>
        <p className="modal__event__event-name">
          <span>[측정 문제 발생] </span>옥토끼이미징
        </p>
      </div>
    </div>
  );
};

ModalEvent.defaultProps = {
  isShow: false,
};

export default ModalEvent;
