// @flow
// libs
import React, { memo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Submenu from './Submenu';

type Props = {
  item: {
    id: number,
    to: string,
    name: string,
    sub: Array<{}>,
  },
  listSub: Array<{
    id: number,
    name: string,
    to: string,
    sub: Array<{}>,
  }>,
  handleClickItem: Function,
  isActive: boolean,
};

const MenuItem = ({ item, listSub, handleClickItem, isActive }: Props) => {
  const { to, name, sub } = item;
  const [nestSubClicking, setNestSubClicking] = useState({});
  const [listNestSub, setListNestSub] = useState([]);

  const handleClickItemSub = (e, itemSub, active) => {
    e.stopPropagation();

    setNestSubClicking(itemSub);
    setListNestSub(itemSub.sub);
    if (itemSub.name === nestSubClicking.name && active) {
      setNestSubClicking({});
    }
  };

  const renderSub =
    listSub &&
    listSub.length > 0 &&
    listSub.map((itemSub) => {
      const isActiveNestSub = nestSubClicking.name === itemSub.name;
      return (
        <Submenu
          key={itemSub.id}
          itemSub={itemSub}
          nestSub={itemSub.sub}
          handleClickItemSub={handleClickItemSub}
          listNestSub={listNestSub}
          isActiveNestSub={isActiveNestSub}
        />
      );
    });

  return (
    <li
      className="item"
      onClick={() => handleClickItem(item, isActive)}
      tabIndex={0}
      role="menuitem"
      onKeyPress={() => {}}
    >
      <Link
        to={to}
        className={`item__link ${isActive ? 'active' : ''} ${
          isActive && !sub ? 'active-link' : ''
        }`}
      >
        <p className="item__link__label">{name}</p>
        {sub && <FontAwesomeIcon icon={faChevronRight} />}
      </Link>
      <ul className={`menu__listsub ${isActive ? 'open' : ''}`}>{renderSub}</ul>
    </li>
  );
};

export default memo<Props>(MenuItem);
