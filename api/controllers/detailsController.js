'use strict';

var mongoose = require('mongoose'),
Details = mongoose.model('Details');

//
exports.list_all_transactions = function (req, res){
    Details.find({}, function(err, detail){
        if(err){
            res.send(err)
        }
        res.json(detail);
    });
}

exports.save_a_transaction = function(req, res){
    var new_transaction = new Details(req.body);
    new_transaction.save(function(err, detail){
        if(err)
            res.send(err)
        res.json(detail)
    });
}

exports.read_a_transaction = function (req, res){
    Details.findById(req.params.token, function(err, detail){
        if(err){
            res.send(err)
        }
        res.json(detail)
    })
}

exports.update_a_transaction = function (req, res){
    Details.findOneAndUpdate({_id:req.params.token}, req.body, {new:true}, function(err, detail){
        if(err){
            res.send(err)
        }
        res.json(detail)
    })
}

exports.delete_a_transaction = function (re1, res){
    Details.remove({_id:req.params.token}, function(err, detail){
        if(err){
            res.send(err)
        }
        res.json({message: 'detail successfully deleted'})
    })
}
