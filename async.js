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

function mensaje(){ 
    return new Promise((resolve,reject) => {
    
     setTimeout(() => {
	     if(!true) resolve('Hola después de 3 sg');
	     reject('Hubo un error');
     },3000);
  
});
}

async function llamadaAsync(){
	console.log('llamada ...');
	const res = await mensaje();
	return res
}

llamadaAsync().
	then(msj => console.log(msj)).
	catch(error => console.log(error))


