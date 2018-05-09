var express = require('express'),
app = express(),
port = process.env.PORT || 4000,
mongoose = require('mongoose'),
Task = require('./api/models/todoListModel'),
bodyParser = require('body-parser');
//mongo db connection string
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', function(err){
    if(err)
        throw err;
    console.log("connected successfully");
});

app.use(bodyParser.urlencoded({extended: true}));
/*automatically sends this
**************************
app.use(function(req, res){
    res.status(404).send({url: req.originalUrl + " Not Found"})
});
*/
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes');
routes(app);

app.listen(port);

console.log("todoList RESTful API server started at " + port);