// @flow
import React from 'react';
// import { useSelector } from 'react-redux';

type Props = {
  isShow?: boolean,
  wrapperRef: any,
  handleEventClick: Function,
  solarEvent: any,
  testMockupEvent: any,
  testSolarEvent: any,
  setIsShow: Function,
};
const ModalEvent = ({
  isShow = false,
  wrapperRef,
  handleEventClick,
  solarEvent,
  testMockupEvent,
  testSolarEvent,
  setIsShow,
}: Props) => {
  const renderEvent = (listEvent) => {
    let newListEvent;

    if (listEvent.length) {
      newListEvent = (
        <div className="modal__event__group-content">
          <div className="modal__event__type-event">
            {listEvent[0]?.ds_type_label}
          </div>
          {listEvent.map((item) => (
            <p
              className="modal__event__event-name"
              onClick={() => {
                handleEventClick(item.id);
                setIsShow(false);
              }}
              role="presentation"
              key={item.id}
            >
              <span>[{item.evt_type_label}] </span>
              {item.evt_content}
            </p>
          ))}
        </div>
      );
    }
    return newListEvent;
  };

  return (
    <div
      className={`modal__event ${isShow ? 'show-modal-event' : ''}`}
      ref={wrapperRef}
    >
      <div className="modal__event__content">
        <div className="modal__event-title">이벤트 알림</div>
        {renderEvent(solarEvent)}
        {renderEvent(testMockupEvent)}
        {renderEvent(testSolarEvent)}
      </div>
    </div>
  );
};

ModalEvent.defaultProps = {
  isShow: false,
};

export default ModalEvent;
