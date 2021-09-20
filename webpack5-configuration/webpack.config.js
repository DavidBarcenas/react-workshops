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

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'src/index.html'})
  ],
  module: { rules }
}