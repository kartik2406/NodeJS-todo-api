//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

/*var obj = new ObjectID();
console.log(obj);*/

/*var user = {name: 'Kartik', age: 21};
var {name} = user;
console.log(name);*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect to mongo db server');
    }
    console.log('Connected to mongo db server');
    
/*    db.collection('Todos').insertOne({
        text: 'Something Todo',
        completed: false
    }, (err, result) => {
        if (err){
            return console.log('Unable to insert Todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });*/
    
/*    db.collection('Users').insertOne({
        name: 'Kartik Malik',
        age: 21,
        location: 'Goa'
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert todo ',err)
        }
        console.log(result.ops[0]._id.getTimestamp());
        console.log(JSON.stringify(result.ops, undefined, 2))    ;
    });*/
    
    db.close();
});;