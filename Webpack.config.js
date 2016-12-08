const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        path: './public',
        filename: 'bundle.js'
    },
    // devtool: 'inline-source-map',
    devServer: {
        inline: true,
        port: process.env.PORT || 5000,
        host: '0.0.0.0',
        colors: true,
        stats: 'normal'
    },
    resolve: {
        extensions: ['', '.js', '.scss', '.css']
    },
    module: {
        loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules\/(?!react-pure-grid)/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react', 'stage-2','node5']
            }
        },
        {
            test:/(\.scss|\.css)$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css!sass?outputStyle=compressed')
        },
        {
            test: /\.json$/,
            loader: 'json-loader'
        }
        // {
        //     test:   /\.css$/,
        //     loader: "style-loader!css-loader!postcss-loader"
        // }
        ]
    },
    postcss: function () {
        return [require('autoprefixer')];
    },
    sassLoader: {
      includePaths: [
        './node_modules',
        // this is required only for NPM < 3.
        // Dependencies are flat in NPM 3+ so pointing to
        // the internal grommet/node_modules folder is not needed
        // './node_modules/grommet/node_modules'
      ]
    },
    plugins:[
        new ExtractTextPlugin('muscle.min.css', {allChunks: true}),
    ]
};
