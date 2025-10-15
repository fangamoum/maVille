const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/JS/index.js',
    
    output:{
        filename: 'bundle.js',
        path:path.resolve(__dirname, 'dist'),
        clean : true,
    },

    module: {
        rules:[
            {
              test : /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },
            {
                test : /\.(png|jpg|gif)$/i,
                type: 'asset/ressource',
            },

            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use : {
                    loader : 'babel-loader',
                    options : {presets : ['@babel/preset-env']},
                },
            },
        ],

    },

    plugins : [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    devServer : {
        static : './dist',
        port:8080,
        hot:true,
        open:true,
    },
    mode : 'development',
};