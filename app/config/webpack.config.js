const path = require('path');

module.exports={
    devtool: 'eval',
    entry:'./src/app.js',
    devServer: {
        historyApiFallback: true
    },
    output: {
    // build files into a real folder
    path: path.resolve('dist'),
    filename: 'bundle.js',
    // so the build files (in memory) are served from here -> localhost:8080/dist/*
    publicPath: '/dist/',
  },
resolve: {
    modules: [
      // so you can simple import your components as:
      // - import Header from 'components/Header' OR
      // - import App from 'containers/App'
      // any files under src/ folder can be imported as above anwhere under /src (no matter how deep you're).
      // absolute paths FTW!
      'src',
      'node_modules',
      'config'
    ],
  }

}