'use strict';

var mongoose = require('mongoose'),
City = mongoose.model('City');

//
exports.list_all_cities = function (req, res){
    City.find({}, function(err, city){
        if(err){
            res.send(err)
        }
        res.json(city);
    });
}

exports.save_a_city = function(req, res){
    var new_transaction = new City(req.body);
    new_transaction.save(function(err, city){
        if(err)
            res.send(err)
        res.json(city)
    });
}

exports.read_a_city = function (req, res){
    City.findOne({name:req.params.name}, function(err, city){
        if(err)
            res.send(err)
        res.json(city);
    });
    /*
    City.findById(req.params.token, function(err, city){
        if(err){
            res.send(err)
        }
        res.json(city)
    })*/
}

exports.update_a_city = function (req, res){
    City.findOneAndUpdate({name:req.params.name}, req.body, {new:true}, function(err, city){
        if(err){
            res.send(err)
        }
        res.json(city)
    })
}

exports.delete_a_city = function (re1, res){
    City.remove({name:req.params.name}, function(err, city){
        if(err){
            res.send(err)
        }
        res.json({message: 'city successfully deleted'})
    })
}
