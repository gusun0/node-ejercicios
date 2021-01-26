// Fn Callback 

// problmeas de los callback
/*
hacerAlgo(function(resultado){
 hacerAlgoMas(resultado, function(nuevoResultado){
   hacerAlgoMasDeNuevo(nuevoResultado, function(resultadoFinal){
     console.log(resultadoFinal); 
   },fallCallback) 
 },fallCallback)
},fallCallback)

const hacerAlgo = new Promises((response,reject) => {
  resolve(resultado);
  reject(error);
});
*/

const mensaje = new Promise((resolve,reject) => {
     setTimeout(() => {
	     if(!true) resolve('Hola después de 3 sg');
	     reject('Hubo un error');
     },3000);
  
});

mensaje.
	then(msj => {
		console.log(msj);
	}).
	catch(error => {
		console.log(error);
	})
	

