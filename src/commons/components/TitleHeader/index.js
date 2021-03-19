// @flow
// libs
import React, { memo } from 'react';
import images from 'themes/images';

type Props = {
  title: string,
  onClick?: Function,
  className?: string,
  id?: string,
  descSub?: string,
};

export const TitleHeader = ({
  title,
  onClick = () => {},
  className = '',
  id,
  descSub = '',
}: Props) => {
  return (
    <div id={id} className={`wrap-title ${className}`}>
      <div
        className="wrap-title__header"
        onClick={onClick}
        onKeyPress={() => {}}
        role="button"
        tabIndex="0"
      >
        <img src={images.icon_title_header} alt="" />
        <div className="wrap-title__header__name">
          {title}
          <span>{descSub}</span>
        </div>
      </div>
    </div>
  );
};

TitleHeader.defaultProps = {
  className: '',
  onClick: () => {},
  id: '',
  descSub: '',
};

export default memo<Props>(TitleHeader);
