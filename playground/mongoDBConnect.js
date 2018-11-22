// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log("​obj", obj)
// var user  = {name: 'Gaurav' , age: 25};
// var {name} = user;
// console.log(name)
MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err,db){
    if(err){
        console.log("Unabel to Connect MongoDB server", err);
    }
    console.log('Connected to MongoDB server');
    
      db.collection('Info').insertOne({
            Name: 'pqrs',
            Address: 'Nashk',
            Age: 24
        }, (err, result) => {
            if(err){
               return console.log("Unable to insert todo")
            } else {
                console.log(JSON.stringify(result.ops));
            }
        });

    db.close();
}); 