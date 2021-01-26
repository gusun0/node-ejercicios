// serie fibonacci
// 1 1 2 3 5 8 13

const serie = require('./serie');
let cantidad = 10;

let argv = process.argv;
let valor = argv[2];
valor = valor.split("=")[1];

serie.crearSerie(valor).then(msj => console.log(msj)).catch(err => console.log(err));

