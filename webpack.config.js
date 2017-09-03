var path = require('path');

module.exports = {
    entry: './source/js/index.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'source/js/')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',

                }
            }
        ]
    }
};
