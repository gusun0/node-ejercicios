//const datos = require('./datos');
//datos('hola');
//console.log(module)
const path = require('path');
const os = require('os');

console.log(path.parse(__filename).ext.split('.')[1]);
console.log(os.homedir());



