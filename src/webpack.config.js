const path = require('path'); 
module.exports = {
    entry: { 
        main:'./index.js'
    }, //打包入口文件 
    output:{ //输出 
        path: path.resolve(__dirname, 'dist'), 
        filename: 'webpack.bundle.js',
    },
    mode:'development', //开发环境 
    devServer: { 
        static: { 
            directory: path.join(__dirname, 'public'), 
        },
        compress: true, 
        port: 9000, 
    },
    module: {
        rules: [
            { test: /\.js|jsx$/, use: 'babel-loader', 
            exclude: /node_modules/ }
          ]
  
    }
}