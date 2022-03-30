const User = require('../models/user');
const routes = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Auth = require('../middleware/auth');

routes.post('/signup', (req, res) => {
    const { firstname, lastname, email, phone, address, password } = req.body;
    if (!email || !password || !firstname || !lastname || !phone || !address) {
        return res.status(422).json({ error: 'Please add all the fields' });
    }
    User.findOne({ email })
        .then((user) => {
            if (user) {
                res.status(422).json({ error: "This Email id Already Exist" });
            }
            else {
                bcrypt.hash(password, 16)
                    .then((newpassword) => {
                        const newuser = new User({
                            firstname: firstname,
                            lastname: lastname,
                            email: email,
                            phone: phone,
                            address: address,
                            password: newpassword
                        })
                        newuser.save()
                            .then((user) => {
                                const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
                                res.send({ token });
                            })
                            .catch((err) => console.log(err));
                    })
                    .catch((err) => console.log(err));
            }
        })
        .catch((err) => console.log(err));
})

routes.post('/signin', (reg, res) => {
    const { email, password } = reg.body;
    if (!email || !password) {
        return res.status(422).json({ error: 'Please add all the fields' });
    }
    User.findOne({ email })
        .then((user) => {
            if (!user) {
                res.status(422).json({ error: "This Email id is not correct" });
            }
            else {
                bcrypt.compare(password, user.password)
                    .then((match) => {
                        if (match) {
                            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
                            res.send({ token });
                        }
                        else {
                            res.status(422).json({ error: "Incorrect Password" });
                        }
                    })
                    .catch((err) => console.log(err));
            }
        })
        .catch((err) => console.log(err));
})

routes.get('/', Auth, (req, res) => {
    const userid = req.user._id;
    User.findOne({ _id: userid })
        .then((user) => {
            res.send(user);
        })
        .catch(err => console.log(err));
})

module.exports = routes;