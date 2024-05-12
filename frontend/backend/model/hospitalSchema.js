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

// hospitalSchema.pre('save', async function())
hospitalSchema.pre('save', async function(next) {
    // console.log("pre method", this);
    const d = this;
    if(d.isModified("Password")){
        next();
    }
    try {
        const slatRound = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(d.Password, slatRound);
        d.Password = hashedPassword;
    } catch (error) {
        
    }
});

module.exports = mongoose.model('hospital', hospitalSchema);
