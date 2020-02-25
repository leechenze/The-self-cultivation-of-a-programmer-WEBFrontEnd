// node中的全局系统模块, 解决路径问题的;
const Webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    { CleanWebpackPlugin } = require("clean-webpack-plugin"),
    Uglify = require("uglifyjs-webpack-plugin"),
    ExtractTextplugin = require('extract-text-webpack-plugin'),
    PurifyCssWebpack = require('purifycss-webpack'),
    glob = require('glob'),
    // 引入webpack.module.js文件(就是module下的规则配置);
    moduleConfig = require('./webpack.module.js'),
    // 引入webpack.config.json文件(配置webpack-server);
    jsonConfig = require('./webpack.config.json'),
    // 引入helloworld的公共方法;
    helloworld = require('./modules/helloworld'),
    // 引入静态资源输出插件
    CopyWebpackPlugin = require('copy-webpack-plugin');



helloworld();
console.log(jsonConfig);




// glob和
//   console.log(path.join(__dirname, 'src/*.html'))
//   console.log(path.join(__dirname, 'src/*.html'))





// webpack的配置都在这个文件中, webpack采用的是commentJS的规范;
// 整个webpack需要想到处一个模块:
module.exports = {
    // 这里设置mode, 在package.json中webpack命令 的--mode的参数是一样的;
    // mode: 'development',
    // 入口配置, 数组形式多对一(入口对出口), json形式多对多(入口对出口);
    // entry: ['./src/index.js', './src/index1.js'],
    entry: {
        // key随便起名
        index: './src/js/index.js',
        index1: './src/js/index1.js',
        index2: './src/js/index2.js',
        jquery: 'jquery'
    },
    // 出口配置;
    output: {
        // 定义路径,这里定义的路径必须是绝对路径, 所以需要使用node中的全局模块__dirname(当前目录);
        path: __dirname + '/dist', // path.resolve(__dirname, 'dist'), resolve方法用来合并, 和前面结果相同;
        // filename这个名字是定死的, 定义路径下的输出文件, 多出口文件需要配置[name].bundle.js, [name]对应的就是entry对象中的键; 
        filename: '[name].bundle.js'
    },

    // webpack3.x之前在这里开启调试(无论开发还是生产环境), 如果上线必须注掉;
    // webpack4.x更简单只需要给命令加参数, 所以这个方式淘汰掉;
    // devtool: 'source-map',

    // module.rules,module中配置的都是一些规则;
    module: moduleConfig,
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
            template: './src/index.html',
            // minify: {
            //     collapseInlineTagWhitespace: true,
            //     collapseWhitespace: true,
            //     removeAttributeQuotes: true
            // },
            chunks: ['index'] // 对应的是入口文件entry中的键
        }),
        new HtmlWebpackPlugin({
            filename: 'index1.html',
            hash: true,
            title: '第二个页面',
            template: './src/index.html',
            // minify: {
            //     collapseInlineTagWhitespace: true,
            //     collapseWhitespace: true,
            //     removeAttributeQuotes: true
            // },
            chunks: ['index1', 'index2'] // 对应的是入口文件entry中的键
        }),
        // 提取到dist目录下的 css/index.css文件中(规定打包文件夹dist的css分类);
        new ExtractTextplugin('css/index.css'),
        // 清除css冗余代码;
        new PurifyCssWebpack({
            // 定义路径,glob扫描文件路径,并且同步路径的, join也是合并路径的方法,和resolve只是有参数的区别, 没参数就功能一样;
            paths: glob.sync(path.join(__dirname, 'src/*.html'))
        }),
        // 静态资源输出插件
        new CopyWebpackPlugin([{
            // 从哪里复制: src下的assets文件夹;
            from: path.resolve(__dirname, 'src/assets'),
            // 粘贴到哪里: 粘贴到pubilc文件夹中, 
            to: '../pubilc'
        }]),
        // 提供全局的第三方库应用;
        new Webpack.ProvidePlugin({
            $: 'jquery'
        })
    ],
    optimization: {
        // 分离node_modules文件夹;
        splitChunks: {
            cacheGroups: {
                chunks: 'all',
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `npm.${packageName.replace('@', '')}`;
                    },
                },
            },
        },
    },
    //开发服务器, 热加载, 代理, 跨域等,都需要在此配置;
    devServer: {
        // 设置服务器访问的基本目录;
        contentBase: path.resolve(__dirname, 'dist'),
        // 设置服务器主机名;(使用引入的外部的json文件配置)
        host: jsonConfig.host,
        // 设置端口(使用引入的外部的json文件配置)
        port: jsonConfig.port,
        // 自动打开页面(使用引入的外部的json文件配置)
        open: jsonConfig.open,
        // 热更新(使用引入的外部的json文件配置)
        hot: jsonConfig.hot
    }
}