const User = require('../../models/user.model');

async function authUser(req, res) {
    try {
        const { name, password } = req.body;
        res.status(500).json('hello');
        console.log(name, password)
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { authUser }
