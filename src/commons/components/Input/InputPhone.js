// @flow

import React, { memo } from 'react';
import Cleave from 'cleave.js/react';

type Props = {
  placeholder?: string,
  value?: string | number | any,
  errorMsg?: any,
  label?: string,
  disabled?: boolean,
  type?: string,
  onBlur?: Function,
  onBlurWrapper?: Function,
  onFocusWrapper?: Function,
  onClickWrapper?: Function,
  onChange?: Function,
  onFocus?: Function,
  onKeyPress?: Function,
  onPaste?: Function,
  readOnly?: boolean,
  variant?: string,
  customClassName?: string,
  customClassLabel?: string,
  customClassWrap?: string,
  name?: string,
  request?: boolean,
  innerRef?: any,
  customClass?: string,
  innerRef?: any,
  options: Object,
  maxLength?: string,
  autocomplete?: string,
  autoFocus?: boolean,
  pattern?: string,
};

const InputPhone = ({
  placeholder = '',
  value = '',
  errorMsg = '',
  label = '',
  disabled = false,
  readOnly = false,
  type = 'text',
  onBlur = () => {},
  onBlurWrapper = () => {},
  onFocusWrapper = () => {},
  onClickWrapper = () => {},
  onChange = () => {},
  customClassName = null,
  customClassWrap = null,
  customClassLabel = null,
  onFocus = () => {},
  onKeyPress = () => {},
  onPaste = () => {},
  variant = 'outline',
  name = '',
  request = false,
  customClass = '',
  innerRef = null,
  pattern = '',
  options,
  maxLength = '',
  autocomplete = '',
  autoFocus,
}: Props) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={`input__wrapper ${
        variant !== 'outline' ? ` input__wrapper--${variant}` : ''
      }`}
      onBlur={(e) => onBlurWrapper(e)}
      onFocus={(e) => onFocusWrapper(e)}
      onClick={(e) => onClickWrapper(e)}
      onKeyUp={() => {}}
    >
      {!!label && (
        <p className={`${customClassLabel} input__label`}>
          {label}
          {request && <span className="request">*</span>}
        </p>
      )}
      <div className={`input__box ${customClassWrap}`}>
        <Cleave
          placeholder={placeholder}
          options={options}
          type={type}
          value={value}
          disabled={disabled}
          className={`input-change ${
            customClass.length > 0 ? customClass : ''
          } ${
            variant !== 'outline' ? `input--${variant}` : ''
          } ${customClassName} ${!value ? 'no-value' : ''}`}
          ref={innerRef}
          onPaste={onPaste}
          onKeyPress={onKeyPress}
          readOnly={readOnly}
          onBlur={(e) => onBlur(e)}
          onFocus={(e) => onFocus(e)}
          onChange={(e) => onChange(e)}
          autoCapitalize="none"
          name={name}
          maxLength={maxLength}
          pattern={pattern}
          autoComplete={autocomplete}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={autoFocus}
        />
      </div>
      {errorMsg && <p className="error-msg">{errorMsg}</p>}
    </div>
  );
};

InputPhone.defaultProps = {
  placeholder: '',
  value: '',
  errorMsg: '',
  label: '',
  disabled: false,
  readOnly: false,
  type: 'text',
  onBlur: () => {},
  onBlurWrapper: () => {},
  onFocusWrapper: () => {},
  onClickWrapper: () => {},
  onFocus: () => {},
  onChange: () => {},
  onKeyPress: () => {},
  onPaste: () => {},
  maxLength: '',
  variant: 'outline',
  customClassName: '',
  customClassLabel: '',
  customClassWrap: '',
  name: '',
  request: false,
  innerRef: null,
  customClass: '',
  pattern: '',
  autocomplete: '',
  autoFocus: false,
};

export default memo<Props>(InputPhone);
