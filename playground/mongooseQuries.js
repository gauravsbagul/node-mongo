
const { ObjectId } = require('mongodb');
const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/todo');


var id = '5bf786d661bf2111588e4891';

if(!ObjectId.isValid(id)){
    console.log("ID not valid");
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
}); 

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});
myid = '5bf786db61bf2111588e4892';
Todo.findById(myid).then((todo) => {
    if(!todo){
        return console.log("No todo found",todo);
    }
    console.log("todo by id", todo);
}).catch((e) => console.log(e))




//Output of above code
// Todos [ { completed: false,
//     completedAt: null,
//     _id: 5bf786d661bf2111588e4891,
//     text: 'somthing to do from postman 1',
//     __v: 0 } ]
// Todo { completed: false,
//   completedAt: null,
//   _id: 5bf786d661bf2111588e4891,
//   text: 'somthing to do from postman 1',
//   __v: 0 }
// todo by id { completed: false,
//   completedAt: null,
//   _id: 5bf786db61bf2111588e4892,
//   text: 'somthing to do from postman 2',
//   __v: 0 }