const { defineConfig } = require('@vue/cli-service');
const { name } = require('./package.json');

module.exports = defineConfig({
  publicPath: `/${name}`,
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd'
    },
    devServer: {
      headers: { 'Access-Control-Allow-Origin': '*' }
    },
    plugins: [require('unplugin-element-plus/webpack')()]
  }
});
