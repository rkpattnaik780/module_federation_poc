const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
  mode: 'development',
  devServer: {
    port: 8082,
  },
  module: {
    rules: [
      {
        /* The following line to ask babel 
             to compile any file with extension
             .js */
        test: /\.js?$/,
        /* exclude node_modules directory from babel. 
            Babel will not compile any files in this directory*/
        exclude: /node_modules/,
        // To Use babel Loader
        loader:
          'babel-loader',
        options: {
          presets: [
            '@babel/preset-env' /* to transfer any advansed ES to ES5 */,
            '@babel/preset-react',
          ], // to compile react to ES5
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin(
      {
        name: 'host-ui',
        filename:
          'remoteEntry.js',
        remotes: {
          material_components:
            'material_components@http://localhost:8083/remoteEntry.js',
          utils:
          'utils@http://localhost:8085/remoteEntry.js'
        },
        shared: {
          "@material-ui/core": {
              eager: true,
              singleton: true,
          },
          "react": {
              eager: true,
              singleton: true,
          },
          "react-dom": {
              eager: true,
              singleton: true,
          },
      },
      }
    ),
    new HtmlWebpackPlugin({
      template:
        './public/index.html',
    }),
  ],
};