/* eslint-disable react-hooks/exhaustive-deps */
// @flow
import React, { memo, useRef, useState } from 'react';
import images from 'themes/images';
import useClickOutside from 'customHooks/useClickOutSide';
import ModalEvent from './ModalEvent';

type Props = {
  eventCount?: number,
};

const Header = ({ eventCount = 0 }: Props) => {
  const [isShow, setIsShow] = useState(false);

  const wrapperRef = useRef(null);
  const iconRef = useRef(null);

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
          {eventCount > 0 ? (
            <span className="header__notification">{eventCount}</span>
          ) : (
            ''
          )}
        </div>

        <div className="header__label-event">
          <span className="header__label-content">이벤트발생</span>
          {/* Modal event */}
          <ModalEvent isShow={isShow} wrapperRef={wrapperRef} />
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  eventCount: 0,
};

export default memo<Props>(Header);
