// require('dotenv').config();
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
// const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const aliases = require('./aliases');

module.exports = withCSS(withSass({
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: '[local]___[hash:base64:10]',
  },
  webpack: (config) => {
    const newConfig = { ...config };
    newConfig.module.rules = [
      ...newConfig.module.rules,
      // this allows us to have mixins and variables in every .scss file
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'sass-resources-loader',
            options: {
              resources: ['./base/scss/mixins.scss', './base/scss/variables.scss'],
            },
          },
        ],
      },
    ];
    newConfig.resolve.alias = {
      ...config.resolve.alias,
      ...aliases.absoluteAliases,
    };
    // newConfig.plugins = [
    //   ...config.plugins,
    //   new FilterWarningsPlugin({
    //     // Silence mini-css-extract-plugin generating lots of warnings for CSS ordering.
    //     // We use CSS modules that should not care for the order of CSS imports, so we
    //     // should be safe to ignore these.
    //     // See: https://github.com/webpack-contrib/mini-css-extract-plugin/issues/250
    //     // and https://github.com/webpack-contrib/mini-css-extract-plugin/issues/250#issuecomment-447346852
    //     exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
    //   }),
    // ];
    return newConfig;
  },
//   publicRuntimeConfig: { // Will be available on both server and client
//     MAPS_API_KEY: process.env.MAPS_API_KEY,
//     API_ROOT: process.env.API_ROOT,
//     RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
//   },
}));