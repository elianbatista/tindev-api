const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://elianbatista:a8t4j5z8@cluster0-s4voz.mongodb.net/omnistack?retryWrites=true&w=majority', {

       useNewUrlParser: true

});

server.use(cors());

server.use(express.json());

server.use(routes);

server.listen(3333);