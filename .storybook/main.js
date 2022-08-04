const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next',
    {
      name: '@storybook/preset-scss',
      options: {
        esModule: true,
        sassLoaderOptions: {
          additionalData: (content) => {
            // paths are relative to root dir in this case
            return (
              `
              @import "src/styles/variables/index.scss";
              @import "src/styles/mixins/index.scss";
            ` + content
            );
          },
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};
