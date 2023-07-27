var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'w',function (err, file) {
// fs.appendFile('mynewfile1.txt', 'hello world',function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});