export interface WithSidebarProps {
  className?: string;
  side?: 'left' | 'right';
  sideWidth?: 'sm' | 'md' | 'lg';
  contentMinPercentage?: 'percent33' | 'percent50' | 'percent66';
  gap?: 'gapSm' | 'gapMd' | 'gapLg';
  noStretch?: boolean;
}
