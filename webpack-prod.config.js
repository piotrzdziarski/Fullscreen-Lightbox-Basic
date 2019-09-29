const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, ''),
        libraryTarget: "commonjs2",
        filename: "./index.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new CopyPlugin([
            { from: './index.js', to: './dist' },
            { from: './package.json', to: './dist' },
            { from: './README.md', to: './dist' }
        ])
    ]
};