const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const {BundleAnalyzerPlugin}  = require('webpack-bundle-analyzer')
const loader = require('sass-loader')
const HTMLWebpackPugPlugin = require('html-webpack-pug-plugin')


const isDev = process.env.NODE_ENV === 'develompent'
const isProd = !isDev

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }
    if (!isProd) {
        config.minimizer = [
            new CssMinimizerPlugin(),
            new TerserWebpackPlugin()
        ]
    }
    return config
}



const cssLoaders = extra => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
        },
        'css-loader'
    ]
    if (extra) {
        loaders.push(extra)
    }
    return loaders
}

const plugins = () => {
    const base = [

        new HTMLWebpackPlugin({
            template: './index.pug',
        }),
        new HTMLWebpackPlugin({
            template: './view/cart.pug',
            filename: 'cart.html',
        }),
        new HTMLWebpackPlugin({
            template: './view/basket.pug',
            filename: 'basket.html',
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        
    ]
    if(isDev){
        base.push(new BundleAnalyzerPlugin())
    }
    return base
}
module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './index.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.png', '.html', '.css', '.scss', '.svg' ],
        alias: {
            '@img': path.resolve(__dirname, 'src/images'),
            '@scr': path.resolve(__dirname, 'src/script'),
            
        }
    },
    optimization: optimization(),
    devServer: {
        port: 9000,
        open: true,
        hot: isDev,
    },
    // devtool: isDev ? 'source-map': '',
    // devtool: 'source-map',
    plugins: plugins(),
    module: {
        rules: [
            
            {
                test: /\.html$/,
                use: ['html-loader']

            },
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {  
                test: /\.pug$/,
                use: ['pug-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                loader: 'file-loader',
                options: {
                    publicPath: '../',
                    name: `images/[name].[ext]`,
                }
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/i,
                type: 'asset/resource', 
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-typescript'
                        ]
                    }
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    }
}
