// @flow
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useRef, memo } from 'react';
import useClickOutside from 'customHooks/useClickOutSide';
import Loading from 'commons/components/Loading';
import Header from 'commons/components/Header';
import { withRouter } from 'react-router-dom';
import ROUTERS from 'constants/routers';

import SidebarMenu from '../Menu';

type Props = {
  children: React.AbstractComponent<{}>,
  isProcessing?: boolean,
  location: {
    pathname: string,
  },
};

export const MainLayout = ({
  children,
  isProcessing = false,
  location,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const refMenu = useRef(null);
  const iconRef = useRef(null);
  const mainContent = useRef(null);

  useClickOutside(
    refMenu,
    () => {
      if (isOpen) {
        setIsOpen(false);
      }
    },
    { iconRef }
  );
  let classHeight = '';
  if (window.innerHeight < 900) {
    classHeight = 'heightMenu';
  }

  console.log('redner main');
  return (
    <>
      {isProcessing && <Loading />}
      <div className={`wrapper-content ${isOpen ? 'open' : ''}`}>
        <div className="wrapper-mobile">
          <div
            className={`d-mobile btn-menu  ${isOpen ? 'show' : ''}`}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            tabIndex={0}
            role="menuitem"
            onKeyPress={() => {}}
            ref={iconRef}
          >
            <span className="icon" />
          </div>
        </div>

        {location.pathname !== ROUTERS.LOGIN && (
          <div className={`sidebar ${isOpen ? 'show' : ''} ${classHeight}`}>
            <SidebarMenu innerRef={refMenu} />
          </div>
        )}
        <div
          className={`${
            location.pathname !== ROUTERS.LOGIN ? 'main-content' : 'no-content'
          }`}
          ref={mainContent}
        >
          {location.pathname !== ROUTERS.LOGIN && <Header />}
          <div className="content">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

MainLayout.defaultProps = {
  isProcessing: false,
};

export default withRouter(memo<Props>(MainLayout));
