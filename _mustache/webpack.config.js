const path = require('path');

module.exports = {
    //模式 開發
    mode: 'development',
    //入口文件
    entry: './src/index.js',
    //打包到那個文件夾
    output: {
        filename: 'bundle.js',
        // path: path.resolve(__dirname, 'build')
    },
    devServer: {
        //靜態文件根目錄
        contentBase: path.join(__dirname, 'www'),
        //不壓縮
        compress: false,
        port: 8080, //端口号
        open: true, //自动打开浏览器
        //虛擬打包路徑，bundle.js文件沒有真正的生成
        publicPath: '/xuni/'
    }

}