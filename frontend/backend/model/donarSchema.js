const mongoose = require('mongoose');
const bycrpt = require("bcryptjs");

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
    State:{
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
    },
    disease:{
        type : String,
        required: true
    },
});
// secure the password with the bycrpt
// her save first run the funtion and then the data collected from the user
donorSchema.pre('save', async function(next) {
    // console.log("pre method", this);
    const d = this;
    if(d.isModified("Password")){
        next();
    }
    try {
        const slatRound = await bcrypt.genSalt(10);
        const hashedPassword2 = await bcrypt.hash(d.Password, slatRound);
        d.Password = hashedPassword2;
    } catch (error) {
        
    }
});

module.exports = mongoose.model('donor', donorSchema);