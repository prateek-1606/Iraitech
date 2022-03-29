const express = require('express');
const mongoose = require('mongoose');
const app = express();
const env = require('dotenv');
const userroute = require('./routes/user');

env.config();
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        return app.listen({ port: PORT })
    })
    .then(() => console.log('Server Running'))
    .catch((err) => console.log(err))


app.get('/', (req, res) => {
    res.send('Welcome to Iraitech')
})
app.use('/user', userroute);