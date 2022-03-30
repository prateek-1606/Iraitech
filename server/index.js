const express = require('express');
const mongoose = require('mongoose');
const app = express();
const env = require('dotenv');
const userroute = require('./routes/user');
const cors = require('cors');

env.config();
app.use(express.json());
var corsOptions = {
    origin: 'http://localhost:3000/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

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