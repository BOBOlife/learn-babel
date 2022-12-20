const { transformFileAsync } = require('@babel/core');
const insertParametersPlugin = require('./plugins/parameters-insert-plugin')
const path = require('path')

// 异步的处理
transformFileAsync(path.join(__dirname, './sourceCode.js'), {
  plugins: [insertParametersPlugin],
  parserOpts: {
    sourceType: 'unambiguous',
    plugins: ['jsx']
  }
}).then( res => {
  console.log(res)
})
