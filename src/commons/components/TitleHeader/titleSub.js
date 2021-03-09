// @flow
// libs
import React, { memo } from 'react';
import images from 'themes/images';

type Props = {
  title: string,
  onClick?: Function,
  className?: string,
  id?: string,
  titleLight?: string,
};

export const TitleSubHeader = ({
  title,
  onClick = () => {},
  className = '',
  id,
  titleLight = '',
}: Props) => {
  return (
    <div id={id} className={`wrap-title-sub ${className}`}>
      <div
        className="wrap-title-sub__header"
        onClick={onClick}
        onKeyPress={() => {}}
        role="button"
        tabIndex="0"
      >
        <img src={images.icon_arrow} alt="" />
        <div className="wrap-title-sub__header__name">
          {title}
          <span>{titleLight}</span>
        </div>
      </div>
    </div>
  );
};

TitleSubHeader.defaultProps = {
  className: '',
  onClick: () => {},
  titleLight: '',
  id: '',
};

export default memo<Props>(TitleSubHeader);
