// @flow
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

type Props = {
  isShow?: boolean,
  wrapperRef: any,
  handleEventClick: Function,
  solarEvent: any,
  testMockupEvent: any,
  testSolarEvent: any,
};
const ModalEvent = ({
  isShow = false,
  wrapperRef,
  handleEventClick,
  solarEvent,
  testMockupEvent,
  testSolarEvent,
}: Props) => {
  // const { eventNotifications } = useSelector((state) => state?.commons);
  // const [notifications, setNotifications] = useState(eventNotifications);

  // const solarEvent = notifications.filter((item) => item.ds_type === '0');
  // const testMockupEvent = notifications.filter((item) => item.ds_type === '2');
  // const testSolarEvent = notifications.filter((item) => item.ds_type === '3');

  // handle event click
  // const handleEventClick = (id) => {
  //   console.log(id);
  //   // GOIT API
  //   // Hard code

  //   setNotifications(notifications.filter((x) => x.id !== id));
  // };
  // console.log('new notifications', notifications);

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
              onClick={() => handleEventClick(item.id)}
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
