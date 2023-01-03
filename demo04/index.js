const { transformFileAsync, transformFromAstSync } = require('@babel/core')
const parser = require('@babel/parser')
const autoTrackPlugin = require('./plugins/auto-track-plugin')
const fs = require('fs')
const path = require('path')


const sourceCode = fs.readFileSync(path.join(__dirname, './sourceCode.js'), {
  encoding: 'utf-8'
})

const ast = parser.parse(sourceCode, {
  sourceType: 'unambiguous'
  // sourceType: 'module'
})

transformFromAstSync(ast, sourceCode, {
  plugins: [
    [autoTrackPlugin, {
      trackerPath: 'tracker'
    }]
  ]
}).then(code => {
  console.log(code)
})
