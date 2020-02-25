const ExtractTextplugin = require('extract-text-webpack-plugin'),
    modules = {
        // 需要配一个规则rules,数组类型
        rules: [{
                // 规定文件类型(css文件);
                test: /\.css$/,
                // 规定的文件类型用style-loader和css-loader处理;
                // use:['style-loader', 'css-loader'],
                // 分离css文件插件;
                use: ExtractTextplugin.extract({
                    // 解析css时,要使用的loader; postcss用来处理前缀;
                    use: ['css-loader', 'postcss-loader'],
                    // 将css代码回退到style-loader中;
                    fallback: 'style-loader',
                    // 配置css背景图的路径(打包的时候, 会把backgorund-image: url中的../去掉,如果不配置这项, 就不会在css背景图中有正确的路径)
                    publicPath: '../'
                })
            },
            {
                test: /\.(png|jpg|git)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        // 限制图片大小;
                        limit: 50000,
                        // 规定输出的图片目录(dist下);
                        outputPath: 'images',
                    }
                }]
            },
            {
                test: /\.less$/,
                // 注意顺序, 从右往左, 先加载less转成css, css文件扔到style里面的一个过程;
                // use: ['style-loader', 'css-loader', 'less-loader']
                use: ExtractTextplugin.extract({
                    use: ['css-loader', 'less-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(sass|scss)$/,
                // 注意顺序, 从右往左, 先加载less转成css, css文件扔到style里面的一个过程;
                // use: ['style-loader', 'css-loader', 'less-loader']
                use: ExtractTextplugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                // use: [{
                //     loader: 'babel-loader',
                //     options: {
                //         preset: 'env'
                //     }
                // }],
                // 不检索noe_modules中的js和jsx文件;
                exclude: /node_modules/
            }
        ]
    };

// 导出module 模块;
module.exports = modules;