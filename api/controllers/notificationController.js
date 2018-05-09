'use strict';

var mongoose = require('mongoose'),
request = require('request'),
DoWebPaymentResult = mongoose.model('DoWebPaymentResult');

//getwebpament details
function getWebPaymentDetails(token){
    let url = 'https://dev.aliendynamic.com/examples/web/getWebPaymentDetails.php';
    request.post({url, form: {
        token: token
    }}, function(err, response, body){
        console.log("Get web payment details: "+body);
    });
    /*
    jquery.post('https://dev.aliendynamic.com/examples/web/getWebPaymentDetails.php',
     { 
       token: token
    },function(success){
        console.log(success);
    });
    */
}
exports.storeTransactionInfo = function (req, res){
    var notificationType = req.query.notificationType;
    var token = req.query.token;
    getWebPaymentDetails(token);
    var obj = {notificationType: notificationType, token:token}
    var newDoWebPaymentResult = new DoWebPaymentResult(obj);
    newDoWebPaymentResult.save(function(err, detail){
        if(err){
            res.send(err);
        }
        res.json(detail);
    });
}
