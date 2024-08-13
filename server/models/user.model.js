const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{ type: String, require: true },
    lastName:{ type: String, require: true },
    userId:{ type: String, require: true },
    email:{ type: String, require: true },
    interests:{ type: Array, require: true },
})

const User = mongoose.model('User',userSchema);

module.exports = User;