const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: ['babel-polyfill', './src/index.jsx'],
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        devtool: 'cheap-module-source-map',
        devServer: {
            historyApiFallback: true,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                        },
                    ],
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: {
                                minimize: isProduction,
                            },
                        },
                    ],
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: isProduction,
                            },
                        },
                        {
                            loader: 'sass-loader',
                        },
                    ],
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: isProduction,
                            },
                        },
                    ],
                },
                {
                    test: /\.(jpe?g|ico|gif|png|svg|woff|ttf|wav|mp3)$/,
                    loader: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new UglifyJSPlugin({
                uglifyOptions: {
                    compress: {
                        drop_console: isProduction,
                    }
                }
            }),
            new HtmlWebPackPlugin({
                template: './src/index.html',
                filename: './index.html',
                favicon: './src/favicon.ico',
            }),
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[id].css',
            }),
        ],
    };
};
