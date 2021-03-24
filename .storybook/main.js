const path = require('path');
const webpack = require('webpack');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        // resolve-url-loader is for resolving url(..etc) in the scss files
        {
          loader: 'resolve-url-loader',
          options: {
            root: path.resolve(__dirname, '../public')
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: [path.resolve(__dirname, '../src')]
            }
          }
        }
      ],
      include: path.resolve(__dirname, '../')
    });
    // config.resolve.modules.push(process.cwd() + '/src');
    // config.plugins.push(
    //   new webpack.ProvidePlugin({
    //     React: 'react'
    //   })
    // );

    // Return the altered config
    return config;
  },
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials']
};
