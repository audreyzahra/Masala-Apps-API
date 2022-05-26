const User = require("../Model/UserModel");
const bcrypt = require('bcrypt');

const register =  async(req, res, next) => {
    try {
        const {
            name,
            email,
            passwords,
        } = req.body
        var salt = bcrypt.genSaltSync(10);
        var  password  = bcrypt.hashSync(passwords, salt);
        const newUser = new User ({
            name,
            email,
            password,
        })

        await newUser.save();
        res.json({
            status:'true',
            message: 'success', 
            newUser
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

module.exports = {
    register,
}