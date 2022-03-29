const jwt = require('jsonwebtoken');


const Auth = (req, res, next) => {
    const token = req.header("Authorization").split(" ")[1];
    if (!token) {
        return res.status(400).json({ msg: "Invalid Authentication" })
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(400).json({ msg: "Invalid Authentication" })
        }

        req.user = user;
        next();
    })
}

module.exports = Auth;