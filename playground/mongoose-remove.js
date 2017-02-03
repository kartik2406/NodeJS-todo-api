const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*
Todo.remove({}).then( (result) => {
   console.log(result);
});
*/

//Todo.findOneAndRemove()
    //both return back the doc
//Todo.findByIDAndRemove

Todo.findOneAndRemove ({_id: '588ca1478395df290b033264' }).then( (todo) => {
   console.log(todo) ;
});

/*Todo.findByIdAndRemove('588ca1478395df290b033264').then( (todo) => {
   console.log(todo) ;
});*/