/* eslint-disable react-hooks/exhaustive-deps */
// @flow
// libs
import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  itemSub: {
    to: string,
    name: string,
    sub: Array<{}>,
  },
  listNestSub: Array<{
    id: any,
    to: string,
    name: string,
  }>,
  isActiveNestSub: boolean,
  handleClickItemSub: Function,
  location: {
    pathname: string,
  },
};

const Submenu = ({
  itemSub,
  listNestSub,
  isActiveNestSub,
  handleClickItemSub,
  location,
}: Props) => {
  const [nestSubClicking, setNestSubClicking] = useState({});

  const handleClickNestSub = (e, item) => {
    e.stopPropagation();
    setNestSubClicking(item);
  };

  useEffect(() => {
    const activeNestSub =
      listNestSub && listNestSub.find((item) => item.to === location.pathname);
    setNestSubClicking(activeNestSub);
  }, []);

  console.log('nestSubClicking', nestSubClicking);
  const renderNestedSub =
    listNestSub &&
    listNestSub.length > 0 &&
    listNestSub.map((item) => {
      const activeNestItem =
        item?.key === nestSubClicking?.key && location.pathname === item.to;

      return (
        <li
          className="item"
          onClick={(e) => handleClickNestSub(e, item)}
          tabIndex={0}
          role="menuitem"
          onKeyPress={() => {}}
          key={item.id}
        >
          <Link
            to={item?.to || '#'}
            className={`item__link item-link-nest-sub ${
              activeNestItem ? 'active-link' : ''
            }`}
          >
            <p className="item__link__label item-link-label-nest-sub">
              {item.name}
            </p>
          </Link>
        </li>
      );
    });

  const { to, name, sub } = itemSub;
  console.log('isActiveNestSub', isActiveNestSub);
  return (
    <li
      className="item"
      onClick={(e) => handleClickItemSub(e, itemSub, isActiveNestSub)}
      tabIndex={0}
      role="menuitem"
      onKeyPress={() => {}}
    >
      <Link
        to={to || '#'}
        className={`item__link ${
          isActiveNestSub ? 'active' : ''
        } item-link-sub ${isActiveNestSub && !sub ? 'active-link' : ''}`}
      >
        <p className="item__link__label item-link-label-sub">{name}</p>
        {sub && <FontAwesomeIcon icon={faChevronRight} />}
      </Link>

      <ul className={`menu__listsub ${isActiveNestSub ? 'open' : ''}`}>
        {renderNestedSub}
      </ul>
    </li>
  );
};

export default memo<Props>(Submenu);
