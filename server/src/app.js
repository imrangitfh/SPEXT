const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const db = require('./database');

const app = express();

app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);

app.listen(5000, () => {
    console.log("Server running on Port 5000 ...");
});