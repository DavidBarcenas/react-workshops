const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path') 

const ruleForStyles = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
}

const ruleForJavaScript = {
  test: /\.js$/,
  loader: 'babel-loader',
  options: {
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic'
        }
      ]
    ]
  }
}

const rules = [
  ruleForJavaScript,
  ruleForStyles
]

module.exports = (env, argv) => {
  const {mode} = argv
  const isProduction = mode === 'production'

  return {
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'build')
    },
    plugins: [
      new HtmlWebpackPlugin({template: 'src/index.html'})
    ],
    module: { rules },
    devServer: {
      open: true,
      port: 3200,
      overlay: true,
      compress: true
    }
  }
}