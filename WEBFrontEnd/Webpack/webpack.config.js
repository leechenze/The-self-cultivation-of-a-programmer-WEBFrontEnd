// node中的全局系统模块, 解决路径问题的;
const webpack = require('webpack'),
      path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      { CleanWebpackPlugin } = require("clean-webpack-plugin"),
      Uglify = require("uglifyjs-webpack-plugin"),
      ExtractTextplugin = require('extract-text-webpack-plugin');









// webpack的配置都在这个文件中, webpack采用的是commentJS的规范;
// 整个webpack需要想到处一个模块:
module.exports = {
    // 这里设置mode, 在package.json中webpack命令 的--mode的参数是一样的;
    // mode: 'development',
    // 入口配置, 数组形式多对一(入口对出口), json形式多对多(入口对出口);
    // entry: ['./src/index.js', './src/index1.js'],
    entry: {
        // key随便起名
        index: './src/index.js',
        index1: './src/index1.js',
        index2: './src/index2.js'
    },
    // 出口配置;
    output: {
        // 定义路径,这里定义的路径必须是绝对路径, 所以需要使用node中的全局模块__dirname(当前目录);
        path: __dirname + '/dist',  // path.resolve(__dirname, 'dist'), resolve方法用来合并, 和前面结果相同;
        // filename这个名字是定死的, 定义路径下的输出文件, 多出口文件需要配置[name].bundle.js, [name]对应的就是entry对象中的键; 
        filename: '[name].bundle.js'
    },
    // module.rules,module中配置的都是一些规则;
    module: {
        // 需要配一个规则rules,数组类型
        rules: [
            {
                // 规定文件类型(css文件);
                test: /\.css$/,
                // 规定的文件类型用style-loader和css-loader处理;
                // use:['style-loader', 'css-loader'],
                use:ExtractTextplugin.extract({
                    // 解析css时,要使用的loader;
                    use: 'css-loader',
                    // 回滚使用style-loader;
                    fallback: 'style-loader',
                    // 配置css背景图的路径(打包的时候, 会把backgorund-image: url中的../去掉,如果不配置这项, 就不会在css背景图中有正确的路径)
                    publicPath: '../'
                })
            },
            {
                test: /\.(png|jpg|git)$/,
                use:[{
                    loader: 'url-loader',
                    options: {
                        // 限制图片大小;
                        limit: 50000,
                        // 规定输出的图片目录(dist下);
                        outputPath: 'images',
                    }
                }]
            }
        ]
    },
    // 插件, 一般用于生产环境打包;
    plugins: [
        // 压缩插件
        // new Uglify(),
        // 确认启用热更新
        // new webpack.HotModuleReplacementPlugin(),
        // 运行前初始化项目(删除打包的文件夹);
        new CleanWebpackPlugin(),
        // 生成页面index;
        new HtmlWebpackPlugin({
            filename: 'index.html',
            // 清除缓存
            hash: true,
            title: '第一个页面',
            template:'./src/index.html',
            // minify: {
            //     collapseInlineTagWhitespace: true,
            //     collapseWhitespace: true,
            //     removeAttributeQuotes: true
            // },
            chunks: ['index']       // 对应的是入口文件entry中的键
        }),
        new HtmlWebpackPlugin({
            filename: 'index1.html',
            hash: true,
            title: '第二个页面',
            template:'./src/index.html',
            // minify: {
            //     collapseInlineTagWhitespace: true,
            //     collapseWhitespace: true,
            //     removeAttributeQuotes: true
            // },
            chunks: ['index1','index2']      // 对应的是入口文件entry中的键
        }),
        // 提取到dist目录下的 css/index.css文件中(规定打包文件夹dist的css分类);
        new ExtractTextplugin('css/index.css')
    ],
    //开发服务器, 热加载, 代理, 跨域等,都需要在此配置;
    // devServer: {
    //     // 设置服务器访问的基本目录;
    //     contentBase:path.resolve(__dirname, 'dist'),
    //     // 设置服务器主机名;
    //     host: '127.0.0.1',
    //     // 设置端口
    //     port: 8080,
    //     // 自动打开页面
    //     open: true,
    //     // 热更新
    //     hot: true
    // }
}