import React from 'react';

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  shrink?: number;
  wrap?: 'wrap' | 'nowrap';
  direction?: 'row' | 'column';
  grow?: number;
}
