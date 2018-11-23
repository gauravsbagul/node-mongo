//Global
const _ = require ('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectId } = require('mongodb');

//Local
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {studentDB} = require('./models/studentDB');

var app = express();
const port = process.env.PORT || 3000
app.use(bodyParser.json());

app.post('/todos', (req, res) =>{
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
        console.log(doc);
    }, (e) => {
        res.status(400).send(e);
    });
    // console.log(req.body);
});

app.get('/todos',(req,res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    },(e) => {
        res.status(400).send(e)
        console.log("eror=>");
    });
});

//GET /Todos/1234
app.get('/todos/:id',(req, res) => {
    var id = req.params.id;
        if(!ObjectId.isValid(id)){
            return res.status(404).send();
            // console.log("ID not valid");
        }
        Todo.findById(id).then((todo) => {
            if(!todo){
                return res.status(404).send();
            }
            res.send({todo});
        }).catch((e) => {
            res.status(400).send()
        });
    });

app.delete('/todos/:id', (req, res) => {
    //get the id
    var id = req.params.id;
    console.log(id)
        if(!ObjectId.isValid(id)){
            return res.status(404).send();
        }
        
        Todo.findByIdAndRemove(id).then((todo) => {
            if(!todo){
                return res.status(404).send();
            }
                res.send({todo})
                // console.log("todo deleted", todo);
            }).catch((e) => {
                res.status(400).send();
            });
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed'])

    if(!ObjectId.isValid(id)){
        return res.status(404).send();
    }
    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();

    }
       
        Todo.findByIdAndUpdate(id, {$set: body}, {new: true} ).then((todo) => {
            if(!todo){
                return res.status(404).send();
            } else {
                    if(body.completed = false){
                        body.completedAt = null;
                    }
            }
            res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    })
});

app.listen(port,() => {
    console.log('Starting at port',port);
});

module.exports = {app};