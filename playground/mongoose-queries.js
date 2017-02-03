const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//for user
var id = '588a0e2078a5c723252593bc';
User.findById(id).then((user) => {
    if(!user){
        return console.log('User not found');
    }
    console.log('Welcome '+user.email);
}).catch( (e) => console.log(e));


/*var id = '588c41698829db781f1d7f0e11';

if(!ObjectID.isValid(id))
    {
        console.log('Object ID is not valid')
    }*/


/*
Todo.find({
_id: id
}).then( (todos) => {
    console.log('Todos ',todos);
});

Todo.findOne({
_id: id
}).then( (todo) => {
    console.log('Todo ',todo);
});
*/

/*Todo.findById(id).
then( (todo) => {
    if(!todo){
        return console.log('Id not found');
    }
    console.log('Todo By Id ',todo);
}).catch((e) => console.log(e));*/