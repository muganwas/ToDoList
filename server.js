var express = require('express'),
app = express(),
port = process.env.PORT || 4000,
cors = require('cors'),
mongoose = require('mongoose'),
Details = require('./api/models/transactionsDetailsModel'),
City = require('./api/models/cityModel'),
DoWebPaymentResult = require('./api/models/doWebPaymentResultModel'),
bodyParser = require('body-parser');
//mongo db connection string
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://alien:dynamics@ds117540.mlab.com:17540/aliendev', function(err){
    if(err)
        throw err;
    console.log("connected successfully");
});

app.use(bodyParser.urlencoded({extended: true}));
/** to avaoid problems with front end techs trying to access this resource */
app.use(cors());
/*automatically sends this
**************************
app.use(function(req, res){
    res.status(404).send({url: req.originalUrl + " Not Found"})
});
*/
app.use(bodyParser.json());

var routes = require('./api/routes/danapayRoutes');
routes(app);

app.listen(port);

console.log("danapayTransaction RESTful API server started at " + port);