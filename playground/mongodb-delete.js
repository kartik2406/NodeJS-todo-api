//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect to mongo db server');
    }
    console.log('Connected to mongo db server');
    
    //deleteMany
   /* db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
       console.log(result) ;
    });*/
    
    //deleteOne
   /* db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then( (result) => {
        console.log(result);
    });*/
    
    //find one and delete
    /*db.collection('Todos').findOneAndDelete({completed: false}).then( (result) => {
       console.log(result);
    });*/
    
    //delete many from user
    /*db.collection('Users').deleteMany({name: 'Kartik Malik'}).then( (result) => {
       console.log(result);
    });*/
    
    //find one and delete user
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5889f1cb442c87134e3c5ec8')
    }).then( (result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });
  //  db.close();
});;