//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect to mongo db server');
    }
    console.log('Connected to mongo db server');
    
  //findOneAndUpdate
/*    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5889ff050f33b9aabbd827fd')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then( (result) => {
        console.log(result);
    });*/
    
//update and use $inc
    db.collection('Users').findOneAndUpdate({
        name: 'Jen'
    }, {
        $set: {
            name: 'Kartik'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then( (result) => {
        console.log(result);
    });
    
  //  db.close();
});;