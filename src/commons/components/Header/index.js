/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from 'react';
import images from 'themes/images';
import useClickOutside from 'customHooks/useClickOutSide';
import { useDispatch, useSelector } from 'react-redux';
import { getEventNotification } from 'commons/redux';
import ModalEvent from './ModalEvent';

const Header = () => {
  const dispatch = useDispatch();
  const { eventNotifications } = useSelector((state) => state?.commons);
  const [isShow, setIsShow] = useState(false);
  const [notifications, setNotifications] = useState(eventNotifications);

  const solarEvent = notifications.filter((item) => item.ds_type === '0');
  const testMockupEvent = notifications.filter((item) => item.ds_type === '2');
  const testSolarEvent = notifications.filter((item) => item.ds_type === '3');

  const wrapperRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    dispatch(getEventNotification());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getEventNotification());
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // handle click outside event
  useClickOutside(
    wrapperRef,
    () => {
      if (isShow) {
        setIsShow(false);
      }
    },
    { iconRef }
  );

  const handleEventClick = (id) => {
    console.log(id);
    // GOIT API
    // Hard code

    setNotifications(notifications.filter((x) => x.id !== id));
  };
  console.log('new notifications', notifications);

  return (
    <div className="header">
      <div className="header__left"> </div>
      <div className="header__right">
        <div className="header__event">
          <img
            src={images.icon_event}
            alt="Icon Event"
            className="header__icon"
            onClick={() => setIsShow(!isShow)}
            role="presentation"
            ref={iconRef}
          />
          {notifications.length > 0 ? (
            <span className="header__notification">{notifications.length}</span>
          ) : (
            ''
          )}
        </div>

        <div className="header__label-event">
          <span className="header__label-content">이벤트발생</span>
          {/* Modal event */}
          <ModalEvent
            isShow={isShow}
            wrapperRef={wrapperRef}
            handleEventClick={handleEventClick}
            solarEvent={solarEvent}
            testMockupEvent={testMockupEvent}
            testSolarEvent={testSolarEvent}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
