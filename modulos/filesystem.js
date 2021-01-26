const fs = require('fs');

const archivos = fs.readdirSync('./');
//console.log(archivos);

// de manera asincrona
fs.readdir('./', (err,files) => {
  if(err) console.log(err);
  console.log(files);
});
