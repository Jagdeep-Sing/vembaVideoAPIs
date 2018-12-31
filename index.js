let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();


// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
 }));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/vembaVideo');
var db = mongoose.connection;

var port = process.env.PORT || 8080;

let apiRoutes = require("./api-routes");

app.get('/', (req, res) => res.send('Hello World with Express'));


app.use('/api',apiRoutes);



app.listen(port, function () {
    console.log("Running service on port " + port);
});