const http = require('http');
// creo el objeto server, creando una instancia
const server = http.createServer();

server.on('connection', (port) => {
 console.log('nueva conexión...',port);
});

server.listen(3000, () => {
  console.log('Server listen in port',3000);
});


