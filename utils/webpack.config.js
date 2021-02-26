const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
  mode: 'development',
  devServer: {
    port: 8085,
  },
  module: {
    rules: [
      {
        /* The following line to ask babel 
             to compile any file with extension
             .js */
        test: /\.js?$/,
        // To Use babel Loader
        loader:
          'babel-loader',
        options: {
          presets: [
            '@babel/preset-env' /* to transfer any advansed ES to ES5 */,
          ], // to compile react to ES5
        },
      }
    ],
  },
  plugins: [
    new ModuleFederationPlugin(
      {
        name: 'utils',
        filename:
          'remoteEntry.js',
        exposes: {
          './add':
            './src/add',
        }
      }
    ),
    new HtmlWebpackPlugin({
      template:
        './src/index.html',
    }),
  ],
};