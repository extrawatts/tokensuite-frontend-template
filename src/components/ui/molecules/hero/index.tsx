import React from 'react';
import styles from './hero.module.scss';
import cx from 'classnames';
import { HeroProps } from 'types/components/ui/molecules/hero';

const Hero: React.FC<HeroProps> = ({
  className,
  children,
  centeredSelector = 'centerH1',
  noPadding = false,
  space = 'spaceSm',
  minHeight = 'md',
}) => {
  return (
    <div
      className={cx(
        styles.hero,
        className,
        { [styles.noPadding]: noPadding },
        styles[space],
        styles[minHeight],
        styles[centeredSelector]
      )}
    >
      {children}
    </div>
  );
};

export default Hero;
