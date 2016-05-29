// webpack.config.js
var webpack = require('webpack');
var path = require('path');

var PROD = (process.env.NODE_ENV === 'production');

module.exports = {
    entry: './public/scripts/main.js',
    output: {
        devtool: 'source-map',
        filename: PROD ? './public/scripts/designai.min.js' : './public/scripts/designai.js',
    },
    externals: {
        'react': 'React',
        'react-dom' : 'ReactDOM',
        'react-bootstrap': 'ReactBootstrap',
    },
    module: {
        loaders: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel", 
                query: {
                    presets:['react', 'es2015']
                }
            }
        ]
    },
    plugins: PROD ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }),
    ] : []
};
