const fs = require('fs')
const input = fs.readFileSync('./input')

return input
  .toString()
  .split('\n')
  .map(item => parseInt(item, 10))
  .reduce((a, b) =>  a+b);

