var mongoose = require('mongoose');
var studentDB = mongoose.model('studentDB', {
    Name: {
        type: String,
        required: true,
        minlength: 5,
        trim: true
    },
    RollNo:{
        type: Number,
        minlength: 1
    },
    mobileNo:{
        type : Number,
        default: null
    },
});
module.exports={studentDB};