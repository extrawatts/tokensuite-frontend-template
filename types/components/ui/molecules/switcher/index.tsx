export interface SwitcherProps {
  className?: string;
  threshold: 'deviceXs' | 'deviceSm' | 'deviceMd';
  gap?: 'gapSm' | 'gapMd' | 'gapLg';
  limit: 'one' | 'two' | 'three';
}
