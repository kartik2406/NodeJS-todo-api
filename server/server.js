const {ObjectID} = require('mongodb');
var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;
      
app.use(bodyParser.json());

app.post('/todos', (request, response) => {
    var todo = new Todo({
       text: request.body.text,
       completed: request.body.completed,
        completedAt: request.body.completedAt
    });
    
    todo.save().then((doc) =>{
        response.send(doc);
    }, (e) => {
        response.status(400).send(e);
    });
});


//Get /todos
app.get('/todos', (request, response) => {
   Todo.find().then( (todos) => {
       response.send({
           todos
       });
   }, (e) => {
       response.staus(400).send(e);
   }) 
});

//Get /todos/id
app.get('/todos/:id', (request, response) => {
    var id = request.params.id;
    if(!ObjectID.isValid(id)){
        return response.status(404).send();
    }
    
    Todo.findById(id).then( (todo) => {
        if(!todo){
            return response.status(404).send();
        }
        response
            .status(200)
            .send({todo});
    }, (e) => {
        response.status(400).send();
    });
});

app.delete('/todos/:id', (request, response) => {
    var id = request.params.id;
    if(!ObjectID.isValid(id)){
        return response.status(404).send();
    }
     Todo.findByIdAndRemove(id).then( (todo) => {
        if(!todo){
            return response.status(404).send();
        }
        response
            .status(200)
            .send({todo});
    }, (e) => {
        response.status(400).send();
    });
});

app.listen(port, () => {
   console.log('Started on port 3000') ;
});

module.exports = {app};