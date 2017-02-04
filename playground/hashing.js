const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var passsword = '123abc!';

/*
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(passsword, salt, (err, hash) => {
        console.log(hash);
    });
}); //(numberof rounds, callback)
*/


var hasshedPassword = '$2a$10$NTYYdQs04vAAEvitiUnoJOl2nNOxxLGTV3uriHt3eAx/7n4VIQW2C';

bcrypt.compare(passsword, hasshedPassword, (err, res) => {
    console.log(res);
});

/*var data = {
    id: 10
};

var token = jwt.sign(data, '123abc');
console.log('Token: ',token);

var decodedResult = jwt.verify(token, '123abc');
console.log('Decoded: ',decodedResult);
var message = 'I am an User';
var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

var data = {
    id: 4
};

var token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'secret').toString()
}

//changing data
token.data.id = 5;
token.hash = SHA256(JSON.stringify(token.data)).toString();

var resultHash = SHA256(JSON.stringify(token.data) + 'secret').toString();


if(resultHash === token.hash){
    console.log('The data was not changed');
} else{
    console.log('Data was changed do not trust');
}*/