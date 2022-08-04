// import '!style-loader!css-loader!sass-loader!../src/styles/variables/index.scss';
// import '!style-loader!css-loader!sass-loader!../src/styles/mixins/index.scss';

// import "src/styles/variables/_colors.scss"
// import "src/styles/variables/index.scss"
// import "src/styles/mixins/index.scss"
// import 'src/styles/global.scss';
import '!style-loader!css-loader!sass-loader!../src/styles/global.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
