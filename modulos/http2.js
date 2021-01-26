const http = require('http');
// creo el objeto server, creando una instancia

const server = http.createServer((req,res) => {
  if(req.url === '/'){
	  res.write('Hola mundo');
	  res.end();
  }

  if(req.url === '/api/productos'){
	  res.write(JSON.stringify([1,2,3]));
	  res.end();
  }
});


server.listen(3000, () => {
  console.log('Server listen in port',3000);
});


