import React from 'react';
import styles from './button.module.scss';
import cx from 'classnames';
import { ButtonProps } from 'types';
import Spinner from '../spinner';

const Button: React.FC<ButtonProps> = ({
  className,
  color,
  size,
  children,
  pill = false,
  isLoading = false,
  disabled,
  as = 'button',
  ...props
}) => {
  const Component = as as React.ElementType;

  return (
    <Component
      className={cx(styles.button, className, styles[color], styles[size], {
        [styles['pill']]: pill,
        [styles['loading']]: isLoading,
      })}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <div className={styles.loading__wrapper}>
          <Spinner />
        </div>
      ) : (
        children
      )}
    </Component>
  );
};

export default Button;
