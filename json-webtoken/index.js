const jwt = require('jsonwebtoken');

const SECRET_KEY = 'keepsThisPasswordSecret';

const user = {
	id: 1,
	username: 'mike12',
	sessionId: '433f74105'
}




console.log('\n********************* SIGN TOKEN *****************\n');

// sign recibe el payload

let token = jwt.sign({
	username: user.username,
	sessionId: user.sessionId,
	password: user.password
},SECRET_KEY,{
	expiresIn: 3

});

console.log(token);

user.sessionId = '420f74105';


/*
console.log('\n********* DECODE TOKEN PAYLOAD MANUALLY  ********\n');

const tokenSplitted = token.split('.') 
const base64Payload = tokenSplitted[1];
const payload = JSON.parse(Buffer.from(base64Payload, 'base64').toString());

console.log('Normal:',payload);


console.log('Normal:',payload);
payload.username = 'admin';
console.log('Modified:',payload);

const modPayload = Buffer.from(JSON.stringify(payload)).toString('base64');

tokenSplitted[1] = modPayload;
// token = tokenSplitted.join('.');

	
console.log(modPayload);

*/
console.log('\n**************** VERIFY TOKEN *****************\n');
jwt.verify(token, SECRET_KEY, (err, payload) => {
	if(err){
		console.error(err);
		return;
	}

	if(payload.sessionId  !== user.sessionId){
		console.error(`Invalid user sessionId ${payload.sessionId}`);
		return;
	}
	console.log('success',payload);
});



/*
console.log('\n**************** VERIFY EXPIRED TOKEN *****************\n');

setTimeout(() =>{
	
jwt.verify(token, SECRET_KEY, (err, payload) => {
	if(err){
		console.error(err);
		return;
	}
	console.log('success',payload);
});

},3000);

*/
