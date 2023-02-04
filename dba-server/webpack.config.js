// Generated using webpack-cli https://github.com/webpack/webpack-cli

const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const commonPaths = require('./build/webpack.common.paths');


const isProduction = process.env.NODE_ENV == 'production';

const config = {
    entry: commonPaths.srcPath + '/start.ts',
    devtool: 'source-map',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        filename: 'start.js',
        path: commonPaths.outputPath
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            }
        ],
    },
    plugins: [
          new webpack.ProgressPlugin(),
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
