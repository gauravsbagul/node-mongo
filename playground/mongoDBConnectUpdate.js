// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err,db){
    if(err){
        console.log("Unabel to Connect MongoDB server", err);
    }
    console.log('Connected to MongoDB server');
    
    //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5bf65145bb72cfb94e1468f6')
    // },{
    //     $set:{
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) =>{
    //     console.log(result);
    // })
    db.collection('Info').findOneAndUpdate({
        _id: new ObjectID('5bf64b4445c0fa31dcd58104')
    },{
        $set:{
            Name: "Vaibhav",
        },
        $inc:{
            Age : 2
        }
    }, {
        returnOriginal: false
    }).then((result) =>{
        console.log(result);
    })
    
    // db.close();
});  