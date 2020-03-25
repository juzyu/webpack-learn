const path = require('path');
const webpack = require('webpack'); 


module.exports = { 
  devtool: 'eval-source-map',
  entry:{
    app:__dirname+'/src/app.js',//唯一入口文件,__dirname是nodejs里的一个全局变量，它指向的是我们项目的根目录
  },
  output:{
    path: path.resolve(__dirname, './dist'),//打包后的文件存放的地方
    filename:'bundle.js'   //打包后输出文件的文件名
  },
  devServer: {
    port: 18010,
    inline: true//实时刷新
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ],
      }
    ]
  }
}
