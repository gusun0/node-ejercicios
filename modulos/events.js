// modulo de eventos

// aqui declaramos una clase, se llama eventEmiiter
const EventEmitter = require('events');

// crenando un objeto para poder trabajar con la clase
const emitter = new EventEmitter();


// registrar el listener
emitter.on('mensajeLogger',(arg) => {
  console.log('Listener llamado',arg);
});


// Registrar el evento
emitter.emit('mensajeLogger',{id:1,url:'http://prueba.com'});



