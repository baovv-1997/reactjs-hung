// @flow
// libs
import React, { memo, useState } from 'react';

// import { Avatar } from 'components/Avatar';
import { withRouter } from 'react-router-dom';
import LIST_MENU from '../../constants/listMenu';
import ItemMenu from './Item';
// import IMAGES from '../../constants/images';
// import { Creators } from '../../commons/redux';

type Props = {
  activeItem: {
    id: number,
    label: string,
    to: string,
    icon: string,
    active: boolean,
    sub: boolean,
    listSub?: {
      id: number,
      subLabel: string,
      subTo: string,
      subIcon: string,
      subActive: boolean,
    },
  },
  innerRef: any,
  location: Object,
  match: {
    params: {
      id: number,
    },
  },
};

const Menu = ({ location, innerRef, match }: Props) => {
  const [activeProductSub, setActiveProductSub] = useState(false);
  const [activeRevenuerSub, setActiveRevenueSub] = useState(false);
  const [activeManagementSub, setActiveManagementSub] = useState(false);

  const handleClickMenu = (itemClicking) => {
    console.log('itemClicking', itemClicking);
    if (itemClicking.sub && itemClicking.name === 'product') {
      setActiveProductSub(!activeProductSub);
      setActiveRevenueSub(false);
      setActiveManagementSub(false);
    }

    if (itemClicking.sub && itemClicking.name === 'revenue') {
      setActiveRevenueSub(!activeRevenuerSub);
      setActiveProductSub(false);
      setActiveManagementSub(false);
    }

    if (itemClicking.sub && itemClicking.name === 'management') {
      setActiveManagementSub(!activeManagementSub);
      setActiveProductSub(false);
      setActiveRevenueSub(false);
    }
  };

  /**
   * function render menu
   * prams list array
   */
  const renderListItem = () => {
    let result = [];
    if (LIST_MENU.length > 0) {
      result = LIST_MENU.map((item) => {
        let listSub = [];
        if (item.sub) {
          listSub = item.listSub;
        }
        console.log('item', item.to);
        return (
          <ItemMenu
            key={item.id}
            id={match && match.params && match.params.id}
            keyId={item.id}
            to={item.to}
            icon={item.icon}
            label={item.label}
            sub={item.sub}
            subMenu={listSub}
            activeProductSub={activeProductSub}
            activeRevenuerSub={activeRevenuerSub}
            activeManagementSub={activeManagementSub}
            location={location}
            handelClickMenu={() => handleClickMenu(item)}
          />
        );
      });
    }
    return result;
  };
  return (
    <nav className="sidebar__nav " ref={innerRef}>
      {/* <Avatar url={IMAGES.imgAdmin} customClass="img-avatar" /> */}
      <ul className="nav">{renderListItem()}</ul>
    </nav>
  );
};

export default withRouter(memo<Props>(Menu));
