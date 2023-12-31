const express = require('express');
const app = express();

app.use(express.json());

const manageUsers = require('./user-management');
app.use('/', manageUsers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))