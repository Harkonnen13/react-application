const data = require('./data');
const data_en = require('./data_en');

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'js/bundle.js',
    chunkFilename: 'js/[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options:{
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-class-properties','@babel/plugin-syntax-dynamic-import']
          }
        }
      },
      { test: /\.html$/, use: ['html-loader'] },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
              outputPath: 'img/',
              publicPath: '/img/'
            }  
          }
        ]
      },
      {
        test: /\.css$/,
        use: [ 
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  },
  devServer: {
    setup(app){
      app.get('/store', function(req, res){
        switch(req.query.lng){
          case 'en':
            res.send(data_en.products.filter(p => p.type === req.query.type));
            break;
          case 'ru':
            res.send(data.products.filter(p => p.type === req.query.type));
            break;
        }
      });
    },
    historyApiFallback: {
      rewrites: [
          { from: /^\//, to: '/index.html' },
      ]
    },
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/',
    compress: true,
    port: 3000,
    host: 'localhost',
    stats: 'minimal',
    open: true,
    watchOptions: {
      poll: true
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new CopyWebpackPlugin([{
      from:'public/img', to:'img'
    }]),
    new ManifestPlugin(),
    new MiniCssExtractPlugin({
      outputPath:'css/',
      publicPath: 'css/',
      filename: 'css/bundle.css',
      chunkFilename: 'css/[name].bundle.css'
    })
  ],
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  optimization: {
    namedChunks: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        common: {
          name: 'common',
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};