// @flow
// libs
import React, { useState, memo } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setMenuItemClicking } from 'commons/redux';

import { withRouter } from 'react-router-dom';
import { DASHBOARD, SETUP, MOCKUP } from 'constants/listMenu';
import IMAGES from 'themes/images';
import { Button } from 'commons/components/Button';
import MenuItem from './MenuItem';

type Props = {
  location: {
    pathname: string,
  },
};

const Menu = ({ location }: Props) => {
  const [menuClicking, setMenuClicking] = useState({});

  // useEffect(() => {
  //   setMenuClicking(menuActived);
  //   setListSub(menuActived?.sub);
  // }, [menuActived]);

  const handleClickItem = (item, active) => {
    setMenuClicking(item);
    if (item.name === menuClicking.name && active) {
      setMenuClicking({});
    }
  };

  const renderMenuList = (listMenu) => {
    return listMenu.items.map((item) => {
      const isActive =
        menuClicking?.name === item.name ||
        item?.childRoute?.includes(location.pathname);

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

        <div className="menu__wraper-head">
          <p className="menu__info">
            <img src={MOCKUP?.icon} alt="menu" />
            <span>{MOCKUP?.label}</span>
          </p>
        </div>
        <ul className="menu__list">{renderMenuList(MOCKUP)}</ul>

        <div className="menu__wraper-head">
          <p className="menu__info">
            <img src={SETUP?.icon} alt="menu" />
            <span>{SETUP?.label}</span>
          </p>
        </div>
        <ul className="menu__list">{renderMenuList(SETUP)}</ul>
        <div className="logout">
          <div className="name-user">마스터님</div>
          <Button customClass="btn-logout">
            <img src={IMAGES.btn_logout} alt="" />
            <div>로그아웃</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(memo<Props>(Menu));
