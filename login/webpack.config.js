// entry point -> then final output

const path = require('path');

// output:path: has to be absolute path on machine, this finds that (using path).
//console.log(path.join(__dirname, 'public'));

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
                // loader  ( for having webpack work with babel )
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,   // <- only grabs .js files
            exclude: /node_modules/ // <- tells it to not use node_modules folder
        }, { // setting up css for webpack
            test:/\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map'
};