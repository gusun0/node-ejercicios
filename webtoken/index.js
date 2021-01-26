const crypto = require('crypto');
const utfToBase64 = str => Buffer.from(str).toString('base64');
const base64ToUtf = str => Buffer.from(str,'base64').toString();

const header = {
	alg: 'HS256',
	typ: 'JWT'
}

const SECRET_KEY = 'keepsThisPasswordSecrt';

// base64Header . base64Payload . base64HMAC

class Jwt{
	constructor(KEY, header){
		this.KEY = KEY;
		this.header = header;
//		this.divisor = '.';
	}

	joinToken(strPayload,hmac){
		const strHeader = JSON.stringify(header);

		return `${utfToBase64(strHeader)}.${utfToBase64(strPayload)}.${utfToBase64(hmac)}`;
			
	}

	splitToken(token){
		const splittedToken = token.split('.');

		return {
			header: base64ToUtf(splittedToken[0]),
			payload: base64ToUtf(splittedToken[1]),
			hmac: base64ToUtf(splittedToken[2])

		}
	}

	hmac(strPayload){
		return crypto
			.createHmac('sha256',this.KEY)
			.update(strPayload)
			.digest('hex');

	}

	

	sign(payload){
		const strPayload = JSON.stringify(payload);

		return this.joinToken(strPayload,this.hmac(strPayload))

	}

	verify(token){
		//return this.splitToken(token);
		const splittedToken = this.splitToken(token);
		console.log('splittedToken:',this.hmac(splittedToken.payload));
		console.log(splittedToken.hmac);

		if(this.hmac(splittedToken.payload) !== splittedToken.hmac ){
			return false;
		}
		return true;
	}

}


const user ={
	id: 1,
	username: 'mike12',
	password: '123456',
	sessionId: '433f74105'
}

const jwt = new Jwt(SECRET_KEY,header);


const payload = {
	username: user.username,
	sessionId: user.sessionId
}


console.log('\n************* SIGN TOKEN ********* \n');

const token = jwt.sign(payload);
console.log(token);


console.log('\n************* VERIFY TOKEN ********* \n');
console.log(jwt.verify(token));
