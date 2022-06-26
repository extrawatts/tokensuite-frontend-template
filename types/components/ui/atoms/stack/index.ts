import React from 'react';
export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: string;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  wrap?: 'wrap' | 'nowrap';
}
