/* eslint-disable react-hooks/exhaustive-deps */
// @flow
// libs
import React, { useState, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { setMenuItemClicking } from 'commons/redux';
import { logOut } from 'modules/accounts/redux';

import { withRouter } from 'react-router-dom';
import { DASHBOARD, SETUP, MOCKUP } from 'constants/listMenu';
import IMAGES from 'themes/images';
import { Button } from 'commons/components/Button';
import MenuItem from './MenuItem';

type Props = {
  location: {
    pathname: string,
    state: {
      id: string,
    },
  },
};

const Menu = ({ location }: Props) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.account);
  const [menuClicking, setMenuClicking] = useState({});
  const [isClickLogout, setIsClickLogout] = useState(false);
  const roleName =
    userInfo && userInfo.roles && userInfo.roles[0] && userInfo?.roles[0]?.name;
  const handleClickItem = (item, active) => {
    setMenuClicking(item);
    if (item.name === menuClicking.name && active) {
      setMenuClicking({});
    }
  };

  useEffect(() => {
    if (
      menuClicking &&
      !menuClicking?.childRoute?.includes(location.pathname)
    ) {
      setMenuClicking({});
    }
  }, [location.pathname]);

  const renderMenuList = (listMenu) => {
    return listMenu.items.map((item) => {
      const isActive =
        menuClicking?.key === item.key ||
        item?.childRoute?.includes(
          location.pathname.replace(`/${location?.state?.id}`, '')
        );

      return (
        <MenuItem
          key={item.id}
          item={item}
          listSub={item?.sub}
          handleClickItem={handleClickItem}
          menuClicking={menuClicking}
          isActive={isActive}
          location={location}
        />
      );
    });
  };

  return (
    <div className="menu">
      <h1 className="menu__head">실증단지</h1>
      <div className="wrapper-menu">
        <div className="menu__wraper-head">
          <p className="menu__info">
            <img src={DASHBOARD?.icon} alt="menu" />
            <span>{DASHBOARD?.label}</span>
          </p>
        </div>
        <ul className="menu__list">{renderMenuList(DASHBOARD)}</ul>

        <div className="menu__line"> </div>

        <div className="menu__wraper-head">
          <p className="menu__info">
            <img src={MOCKUP?.icon} alt="menu" />
            <span>{MOCKUP?.label}</span>
          </p>
        </div>
        <ul className="menu__list">{renderMenuList(MOCKUP)}</ul>

        {(roleName === 'admin' || roleName === 'company') && (
          <>
            <div className="menu__line"> </div>
            <div className="menu__wraper-head">
              <p className="menu__info">
                <img src={SETUP?.icon} alt="menu" />
                <span>{SETUP?.label}</span>
              </p>
            </div>

            <ul className="menu__list">{renderMenuList(SETUP)}</ul>
          </>
        )}
      </div>
      <div className="logout">
        <div className="name-user">마스터님</div>
        <Button
          customClass="btn-logout"
          onClick={() => {
            if (!isClickLogout) {
              dispatch(logOut());
            }
            setIsClickLogout(true);
          }}
        >
          <img src={IMAGES.btn_logout} alt="" />
          <div>로그아웃</div>
        </Button>
      </div>
    </div>
  );
};

export default withRouter(memo<Props>(Menu));
