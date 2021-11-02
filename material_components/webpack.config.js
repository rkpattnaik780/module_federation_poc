const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
  mode: 'development',
  devServer: {
    port: 8083,
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
        name: 'material_components',
        filename:
          'remoteEntry.js',
        remotes: {
          css_components:
            'css_components@http://localhost:8084/remoteEntry.js',
        },
        exposes: {
          './NavBar':
            './src/Components/NavBar',
        },
        shared: ["react", "react-dom", "@material-ui/core", "@material-ui/icons"]
      }
    ),
    // file to be served by webpack dev server
    new HtmlWebpackPlugin({
      template:
        './public/index.html',
    }),
  ],
};