// @flow
// libs
import React, { useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { DASHBOARD, SETUP, MOCKUP } from 'constants/listMenu';
import { setMenuClicking, setNestSubClicking } from 'commons/redux';
import MenuItem from './MenuItem';

type Props = {
  location: {
    pathname: string,
  },
};

const Menu = ({ location }: Props) => {
  const dispatch = useDispatch();
  const menuClicking = useSelector((state) => state?.commons?.menuClicking);
  const [listSub, setListSub] = useState(menuClicking?.sub);
  const handleClickItem = (item, active) => {
    setListSub(item.sub);

    dispatch(setMenuClicking(item));

    if (item.name === menuClicking.name && active) {
      dispatch(setMenuClicking({}));
    }
    if (item.id !== menuClicking?.id) {
      dispatch(setNestSubClicking({}));
    }
  };

  const renderMenuList = (listMenu) => {
    return listMenu.items.map((item) => {
      const isActive =
        menuClicking.name === item.name || location.pathname.includes(item.to);
      return (
        <MenuItem
          key={item.id}
          item={item}
          listSub={listSub}
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
    </div>
  );
};

export default withRouter(memo<Props>(Menu));
