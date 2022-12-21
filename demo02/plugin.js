module.exports = function noisyReadToken (Parser) {
  return class extends Parser {
    readToken(code){
      console.log('reading a token')
      super.readToken(code)
    }
  }
}