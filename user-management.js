const express = require('express');
const manageUsers = express.Router();

manageUsers.get('/', (req, res) => {
    console.log('GET request at /')
    res.send('Hello world!');

})

module.exports = manageUsers;