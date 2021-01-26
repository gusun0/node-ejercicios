
const fs = require('fs');

let crearSerie = (cantidad) => {

return new Promise((resolve, reject) => {

let fibo1 = 1;
let fibo2 = 1;
let serie = '';

serie += fibo1 + '\n';


for(let i = 2; i<= cantidad; i++){
   serie += fibo2 +'\n';
   fibo2 = fibo1 + fibo2;
   fibo1 = fibo2 - fibo1;
}

fs.writeFile('fibonacci.txt',serie,(err) => {
  if(err) reject('Error al crear el archivo');
  resolve ('The file has been saved!');
});

})

}

module.exports = { crearSerie };


