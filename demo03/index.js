const { codeFrameColumns } = require('@babel/code-frame')

const res = codeFrameColumns(code, {
  start: {line: 2, column: 1},
  end: {line: 3, column: 5}
}, {
  highlightCode: true,
  message: '这里出错'
})

console.log(res)