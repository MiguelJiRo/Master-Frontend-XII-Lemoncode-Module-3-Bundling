const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: "development",
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new Dotenv({
            path: "./dev.env",
        }),
    ],
});