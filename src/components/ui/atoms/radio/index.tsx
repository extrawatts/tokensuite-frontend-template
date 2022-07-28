import React from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';
import { RadioProps } from 'types/components/ui/atoms/radio';

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ onClick, label, id, value, className, ...props }, ref) => {
    return (
      <div className={cx(styles.radioField, className)}>
        <div className={cx(styles.radioWrapper, value && styles.radioChecked)}>
          <input
            className={cx(styles.radio)}
            type="radio"
            value={value}
            onClick={onClick}
            defaultChecked={value}
            id={`radio-${id}`}
            ref={ref}
            {...props}
          />
          {value && <span className={styles.ball} />}
        </div>
        {label && (
          <label
            htmlFor={`radio-${id}`}
            className={cx(styles.label, value && styles.radioCheckedLabel)}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);
Radio.displayName = 'Radio';

export default Radio;
