// @flow
// libs
import React, { memo, useState } from 'react';
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
    to: string,
    name: string,
  }>,
  isActiveNestSub: boolean,
  handleClickItemSub: Function,
};

const Submenu = ({
  itemSub,
  listNestSub,
  isActiveNestSub,
  handleClickItemSub,
}: Props) => {
  const [nestSubClicking, setNestSubClicking] = useState({});

  const handleClickNestSub = (e, item) => {
    e.stopPropagation();
    setNestSubClicking(item);
  };
  const renderNestedSub =
    listNestSub &&
    listNestSub.length > 0 &&
    listNestSub.map((item) => {
      const activeNestItem = item.name === nestSubClicking.name;
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

  return (
    <li
      className="item"
      onClick={(e) => handleClickItemSub(e, itemSub, isActiveNestSub)}
      tabIndex={0}
      role="menuitem"
      onKeyPress={() => {}}
    >
      <Link
        to={to}
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
