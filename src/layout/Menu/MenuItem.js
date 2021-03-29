// @flow
// libs
import React, { memo, useState } from 'react';
// import { setSubMenuItemActived } from 'commons/redux';
// import { useSelector, useDispatch } from 'react-redux';

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
  location: {
    pathname: string,
  },
};

const MenuItem = ({
  item,
  listSub,
  handleClickItem,
  isActive,
  location,
}: Props) => {
  const { to, name, sub } = item;
  // const subMenuActived = useSelector((state) => state?.commons?.subMenuActived);
  // const dispatch = useDispatch();

  const [listNestSub, setListNestSub] = useState([]);
  const [activeSub, setActiveSub] = useState(false);
  const [nestSubClicking, setNestSubClicking] = useState({});

  // useEffect(() => {
  //   setNestSubClicking(subMenuActived);
  //   setListNestSub(subMenuActived?.sub);
  // }, [subMenuActived]);

  const handleClickItemSub = (e, itemSub, active) => {
    e.stopPropagation();
    setActiveSub(active);
    setNestSubClicking(itemSub);
    // dispatch(setSubMenuItemActived(itemSub));
    setListNestSub(itemSub.sub);
    if (itemSub.name === nestSubClicking.name && active) {
      setNestSubClicking({});
    }
  };

  const renderSub =
    listSub &&
    listSub.length > 0 &&
    listSub.map((itemSub) => {
      const isActiveNestSub =
        nestSubClicking.name === itemSub.name ||
        location.pathname.includes(item.to);
      return (
        <Submenu
          key={itemSub.id}
          itemSub={itemSub}
          nestSub={itemSub.sub}
          handleClickItemSub={handleClickItemSub}
          listNestSub={listNestSub}
          isActiveNestSub={isActiveNestSub}
          location={location}
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
        to={to || '#'}
        className={`item__link ${isActive ? 'active' : ''} ${
          isActive && !sub ? 'active-link' : ''
        }`}
      >
        <p className="item__link__label">{name}</p>
        {sub && <FontAwesomeIcon icon={faChevronRight} />}
      </Link>
      <ul className={`menu__listsub ${isActive || activeSub ? 'open' : ''}`}>
        {renderSub}
      </ul>
    </li>
  );
};

export default memo<Props>(MenuItem);
