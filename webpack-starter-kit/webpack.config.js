const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (_, argv) => {
  const { mode } = argv
  const isProduction = mode === 'production'

  return {
    entry: './src/index.tsx',
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'build.js',
      path: path.resolve(__dirname, 'build'),
      publicPath: '/'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'assets/[name].css',
      }),
    ],
    devServer: {
      compress: true,
      hot: true,
      open: true,
      port: 3200,
      historyApiFallback: true,
      client: {
        overlay: true,
      },
    },
  }
}