module.exports = {
    entry:  './src',
    output: {
      path:     'builds',
      filename: 'bundle.js',
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }]
    }
};
