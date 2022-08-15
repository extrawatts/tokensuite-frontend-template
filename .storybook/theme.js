import { create } from '@storybook/theming';
import ThemeLogo from './logo.svg';

export default create({
  base: 'dark',

  colorPrimary: 'white',
  colorSecondary: '#6a3ece',

  // UI
  appBg: '#090909',
  appContentBg: '#F2F2F2',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Text colors
  textColor: 'white',
  textInverseColor: 'red',

  //   // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: '#A85CF9',
  barBg: '#3f3f3f',

  brandTitle: 'Token Suite',
  brandImage: ThemeLogo,
  brandTarget: '_self',
});
