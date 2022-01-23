const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb+srv://node-mongo:node123@cluster0.hfrot.mongodb.net/todo');


module.exports={ mongoose };