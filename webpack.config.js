const HtmlWebpackPlugin = require('html-webpack-plugin');
// const VueWebpackPlugin = require('vue-loader/lib/plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports =  {
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                  'vue-style-loader',
                  'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin,
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ]

}