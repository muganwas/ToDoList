'use strict';

var mongoose = require('mongoose'),
request = require('request'),
sendmail = require('sendmail')({
    logger: {
      debug: console.log,
      info: console.info,
      warn: console.warn,
      error: console.error
    },
    silent: false,
    devPort: 1025, // Default: False
    devHost: 'localhost', // Default: localhost
    smtpPort: 2525, // Default: 25
    smtpHost: 'localhost' // Default: -1 - extra smtp host after resolveMX
  }),
DoWebPaymentResult = mongoose.model('DoWebPaymentResult');

//getwebpament details
function getWebPaymentDetails(token){
    let url = 'https://dev.aliendynamic.com/examples/web/getWebPaymentDetails.php';
    request.post({url, form: {
        token: token
    }}, function(err, response, body){
        sendmail({
            from: 'no-reply@danapay.com',
            to: 'stevenmuganwa@live.com, stevenmuganwa@gmail.com',
            subject: 'Payment Status',
            html: body,
          }, function(err, reply) {
            console.log(err && err.stack);
            console.dir(reply);
        });
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
