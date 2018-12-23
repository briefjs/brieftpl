const path = require('path');

module.exports = function (env = {}) {
  const outputPath = path.resolve(__dirname, env.outputPath || 'dist');

  const output = {
    path: outputPath,
    filename: env.production ? 'brieftpl.min.js' : 'brieftpl.js',
    publicPath: '/js/',
    library: 'brieftpl',
    libraryTarget: 'umd',
  };

  return {
    mode: env.production ? 'production' : 'none',
    entry: './src/index',
    output,

    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],

      /* Advanced module configuration (click to show) */
    },
    // Don't follow/bundle these modules, but request them at runtime from the environment

    stats: 'errors-only',
    // lets you precisely control what bundle information gets displayed

    devServer: {
      contentBase: path.join(__dirname, env.server || 'example'),
      disableHostCheck: true,
      compress: true,
      port: 9090,
      // ...
    },

    plugins: [
      // ...
    ],
    // list of additional plugins


    /* Advanced configuration (click to show) */
  };
};
