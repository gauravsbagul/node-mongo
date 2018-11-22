// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err,db){
    if(err){
        console.log("Unabel to Connect MongoDB server", err);
    }
    console.log('Connected to MongoDB server');
    
    //deleteMany
    db.collection('Info').deleteMany({Name:'Suraj C'}).then((result)=>{
            console.log(result);
    });

    //deleteOne
    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Users').findOneAndDelete({completed: true}).then((result)=>{
    //     console.log(result);
    // });
    // db.close();
});  