
const { ObjectId } = require('mongodb');
const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/todo');

var id ='5bf69c3684c3523fa431c73a'
 Todo.remove({}).then((result) => {
    console.log(result);
 });

//  Todo.findOneAndRemove()
// Todo.findByIdAndRemove()
Todo.findByIdAndRemove(id).then((todo) => {
    console.log(todo);
}); 