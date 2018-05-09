'use strict';

var mongoose = require('mongoose'),
$ = require('jquery'),
DoWebPaymentResult = mongoose.model('DoWebPaymentResult');

//getwebpament details
function getWebPaymentDetails(token){
    $.post('https://dev.aliendynamic.com/examples/web/getWebPaymentDetails.php',
     { 
       token: token
    }).then((result)=>{
        console.log(result);
    });
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
