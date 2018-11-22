//Global
var express = require('express');
var bodyParser = require('body-parser');

//Local
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {studentDB} = require('./models/studentDB');

var app = express();

app.use(bodyParser.json());

app.post('/todo', (req, res) =>{
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
        console.log(doc);
    }, (e) => {
        res.status(400).send(e);
    });
    console.log(req.body);
});


app.listen(3000,() => {
    console.log('Starting at port 3000');
});