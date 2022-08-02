const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss',
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

  reactOptions: {
    fastRefresh: true,
  },
  staticDirs: ['../public'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "./src/styles/variables"; @import "./src/styles/mixins";`,
  },
  // webpackFinal: async (config, { configType }) => {
  //   //IMPORT CONFIG
  //   config.resolve.modules = [...(config.resolve.modules || []), path.resolve('./')];
  //   // //SCSS CONFIG
  //   // config.module.rules.push({
  //   //   test: /\.scss$/,
  //   //   use: ['style-loader', 'css-loader', 'sass-loader'],
  //   //   include: path.resolve(__dirname, '../'),
  //   // });

  //   return config;
  // },
};
