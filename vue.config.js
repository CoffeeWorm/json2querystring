const { name } = require('./package.json');

module.exports = {
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd'
    },
    devServer: {
      headers: { 'Access-Control-Allow-Origin': '*' }
    }
  }
};
