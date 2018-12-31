let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');


let apiRoutes = require("./api-routes");

let app = express();

app.use('/api',apiRoutes);

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
 }));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/vembaVideo');
var db = mongoose.connection;


var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello World with Express'));


app.listen(port, function () {
    console.log("Running service on port " + port);
});