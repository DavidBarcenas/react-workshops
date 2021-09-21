const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path') 

const ruleForStyles = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
}

const ruleForTypeScript = {
  test: /\.tsx?$/,
  use: {
    loader: 'awesome-typescript-loader'
  }
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
  ruleForTypeScript,
  ruleForStyles,
]

module.exports = (_, argv) => {
  const {mode} = argv
  const isProduction = mode === 'production'

  return {
    entry: './src/index.tsx',
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'build')
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
      new HtmlWebpackPlugin({template: './public/index.html'})
    ],
    module: { rules },
    devServer: {
      open: true,
      port: 3200,
      hot: true,
      compress: true,
      client: {
        overlay: true,
      },
    }
  }
}