const path = require('path');

console.log(path.join(__dirname, '..', '/src/styles'));
console.log(path.resolve(__dirname, '../next.config.js'));
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: 'storybook-addon-next',
      options: {
        nextConfigPath: path.resolve(__dirname, '../next.config.js'),
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, '..', '/src/styles')],
  //   prependData: `@import "src/styles/variables"; @import "src/styles/mixins";`,
  // },
};
