import React from 'react';
import styles from './input.module.scss';
import cx from 'classnames';
import { InputProps } from 'types/components/ui/atoms/input';

const Input = React.forwardRef<HTMLInputElement | null, InputProps>(
  (
    {
      type,
      name,
      placeholder,
      onChange,
      value,
      className,
      label,
      paddingLeft = 16,
      leftPrefix,
      testId,
      onWheel,
      disabled,
      password = false,
      error = false,
      ...props
    },
    ref
  ) => {
    const paddingLeftValue = password || leftPrefix ? 32 + paddingLeft : paddingLeft;

    return (
      <div className={cx(styles.container, className)}>
        <label htmlFor={label}>{label}</label>
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={(e) => {
            onChange && onChange(e);
          }}
          value={value}
          className={cx(styles.input, className, error && styles.error)}
          style={{ paddingLeft: `${paddingLeftValue}px` }}
          data-testid={testId}
          onWheel={onWheel}
          disabled={disabled}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export default Input;
