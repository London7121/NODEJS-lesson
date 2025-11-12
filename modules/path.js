const path = require('path')

console.log(path.basename(__filename))
console.log(path.dirname(__dirname))
console.log(path.parse(__filename).dir)
console.log(path.join(__dirname,'templates','index.html'))
console.log(path.resolve(__dirname,'templates','index.html'))