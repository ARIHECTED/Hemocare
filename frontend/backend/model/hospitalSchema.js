const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
    hospital_name: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true
    },
    Password: {
        type: String,
        require: true
    },
    Address: {
        type: String,
        require: true
    },
    Phone: {
        type: Number,
        require: true
    },

})

const User = mongoose.model('hospital', hospitalSchema);
module.exports=User;