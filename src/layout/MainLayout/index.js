/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useRef } from 'react';
import useClickOutside from 'customHooks/useClickOutSide';
// import Header from '../../components/Header';
import Loading from 'commons/components/Loading';
import Header from 'commons/components/Header';

import SidebarMenu from '../Menu';


type Props = {
  children: React.AbstractComponent<{}>,
  isSearch?: boolean,
  isSelect?: boolean,
  isProcessing?: boolean,
  handleChangeSelect?: Function,
};

export const MainLayout = ({
  children,
  isSearch = false,
  isSelect = false,
  isProcessing = false,
  handleChangeSelect = () => { }
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

  let showHeader;
  if (isSearch) showHeader = <Header isSearch />;
  else if (isSelect) showHeader = <Header isSelect handleChangeSelect={handleChangeSelect} />;
  else showHeader = <Header />;

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
            onKeyPress={() => { }}
            ref={iconRef}
          >
            <span className="icon" />
          </div>
        </div>
        <div className={`sidebar ${isOpen ? 'show' : ''} ${classHeight}`}>
          <SidebarMenu innerRef={refMenu} />
        </div>
        <div className="main-content" ref={mainContent}>
          {showHeader}
          <div className="content">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

MainLayout.defaultProps = {
  isSearch: false,
  isSelect: false,
  isProcessing: false,
  handleChangeSelect: () => { },
};

export default MainLayout;
