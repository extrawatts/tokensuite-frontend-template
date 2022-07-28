import React from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';
import { CheckmarkIcon } from 'src/components/ui/atoms/icons';
import { CheckboxProps } from 'types/components/ui/atoms/checkbox';

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ onClick, label, id, value, className, ...props }, ref) => {
    return (
      <div className={cx(styles.checkboxField, className)}>
        <div className={cx(styles.checkboxWrapper, value && styles.checkboxChecked)}>
          <input
            className={cx(styles.checkbox)}
            type="checkbox"
            value={value}
            onClick={onClick}
            defaultChecked={value}
            id={`checbox-${id}`}
            ref={ref}
            {...props}
          />
          {value && <CheckmarkIcon className={styles.checkmarkIcon} width={11} height={18} />}
        </div>
        <label
          htmlFor={`checbox-${id}`}
          className={cx(styles.label, value && styles.checkboxCheckedLabel)}
        >
          {label}
        </label>
      </div>
    );
  }
);
Checkbox.displayName = 'Checkbox';

export default Checkbox;
