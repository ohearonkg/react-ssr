module.exports = {
  webpackConfig: require('./webpack.dev.js'),
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse
}