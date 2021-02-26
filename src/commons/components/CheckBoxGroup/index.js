// @flow
import React from 'react';

type Props = {
  children?: any,
  legend?: String,
};

const CheckBoxGroup = ({ children, legend }: Props) => {
  const createCheckbox = React.Children.map(children, (child) => {
    return (
      <li>
        {React.cloneElement(child, {
          id: child.props.id,
          label: child.props.label,
          disabled: child.props.disabled,
          name: child.props.name,
        })}
      </li>
    );
  });
  return (
    <div className="checkbox">
      <fieldset className="usa-fieldset-inputs usa-sans">
        <legend className="usa-sr-only">{legend}</legend>
        <ul className="usa-unstyled-list">{createCheckbox}</ul>
      </fieldset>
    </div>
  );
};

CheckBoxGroup.defaultProps = {
  children: null,
  legend: '',
};

export default CheckBoxGroup;
