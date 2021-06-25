const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload({
    createParentPath: true
}));

require('./routes')(app);

app.listen(5000, () => {
    console.log("Server running on Port 5000 ...");
});