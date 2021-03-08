import React, { useState } from 'react';
import { DASHBOARD } from 'constants/listMenu';
import MenuItem from './MenuItem';

const Menu = () => {
  const [listSub, setListSub] = useState([]);
  const [menuClicking, setMenuClicking] = useState({});
  const handleClickItem = (item, active) => {
    setListSub(item.sub);
    setMenuClicking(item);
    if (item.name === menuClicking.name && active) {
      setMenuClicking([]);
    }
  };

  const renderMenuList = DASHBOARD.items.map((item) => {
    const isActive = menuClicking.name === item.name;
    return (
      <MenuItem
        key={item.id}
        item={item}
        listSub={listSub}
        handleClickItem={handleClickItem}
        menuClicking={menuClicking}
        isActive={isActive}
      />
    );
  });

  return (
    <div className="menu">
      <div className="menu__wraper-head">
        <h1 className="menu__head">실증단지</h1>
        <p className="menu__info">
          <img src={DASHBOARD?.icon} alt="menu" />
          <span>{DASHBOARD?.label}</span>
        </p>
      </div>
      <ul className="menu__list">{renderMenuList}</ul>
    </div>
  );
};

export default Menu;
