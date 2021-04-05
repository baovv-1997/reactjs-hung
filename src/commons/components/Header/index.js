// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { lazy, useRef, useState, useEffect, memo } from 'react';
import images from 'themes/images';
import useClickOutside from 'customHooks/useClickOutSide';
import { useDispatch, useSelector } from 'react-redux';
import { getEventNotification } from 'modules/accounts/redux';
// import ModalEvent from './ModalEvent';
import { useHistory } from 'react-router-dom';
import ROUTERS from 'constants/routers';
// import ModalEvent from './ModalEvent';
import { updateCheckEvent } from 'commons/redux';

const ModalEvent = lazy(() => import('./ModalEvent'));
const Header = () => {
  const dispatch = useDispatch();
  const { eventNotifications } = useSelector((state) => state?.account);
  const history = useHistory();
  const [isShow, setIsShow] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const solarEvent = notifications.filter((item) => item.ds_type === '0');
  const testMockupEvent = notifications.filter((item) => item.ds_type === '2');
  const testSolarEvent = notifications.filter((item) => item.ds_type === '3');

  const wrapperRef = useRef(null);
  const iconRef = useRef(null);
  useEffect(() => {
    dispatch(getEventNotification());
    setNotifications(eventNotifications);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getEventNotification());
      setNotifications(eventNotifications);
    }, 10000);

    return () => clearInterval(interval);
  }, [eventNotifications]);

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
    dispatch(updateCheckEvent({ event_id: id }));
    setNotifications(notifications.filter((x) => x.id !== id));
    history.push(`${ROUTERS.EVENT}/detail/${id}`);
  };

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
          {notifications.length > 0 && (
            <ModalEvent
              isShow={isShow}
              wrapperRef={wrapperRef}
              handleEventClick={handleEventClick}
              solarEvent={solarEvent}
              testMockupEvent={testMockupEvent}
              testSolarEvent={testSolarEvent}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default memo<Props>(Header);
