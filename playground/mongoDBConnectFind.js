// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err,db){
    if(err){
        console.log("Unabel to Connect MongoDB server", err);
    }
    console.log('Connected to MongoDB server');
    
    // db.collection('Todos').find({
    //     _id: new ObjectID('5bf644febb72cfb94e1463ae')
    //      }).toArray().then((docs)=> {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //     console.log('Unabel to fetch todos',err)
    // });
    // db.collection('Todos').find().count().then((count)=> {
    //     console.log(`Todos count:${count}`);
        
    // }, (err) => {
    //     console.log('Unabel to fetch todos',err)
    // });

    db.collection('Info').find({Name:'Gaurav Bagul'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined, 2));
    });


    // db.close();
}); 