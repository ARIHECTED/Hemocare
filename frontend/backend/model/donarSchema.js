const mongoose = require('mongoose');
const donorSchema =  new mongoose.Schema({
    fullName:{
        type : String,
        required: true
    },
    Email:{
        type : String,
        required: true
    },
    Password:{
        type : String,
        required: true
    },
    Address:{
        type : String,
        required: true
    },
    Phone:{
        type : Number,
        required: true
    },
    Age:{
        type : Number,
        required: true
    },
    bloodGroup:{
        type : String,
        required: true
    },
    LastDonation:{
        type : Date,
        required: true
    }
});
module.exports = mongoose.model("donor", donorSchema);