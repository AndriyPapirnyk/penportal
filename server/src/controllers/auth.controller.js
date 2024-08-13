const User = require('../../models/user.model');

async function authUser(req, res) {
    try {
        const { userId } = req.body;
        const user = await User.findOne({ userId: userId });
        user ? res.status(200).json({exists: true}) : res.status(200).json({exists: false})
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { authUser }
