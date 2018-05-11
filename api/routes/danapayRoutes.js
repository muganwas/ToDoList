'use strict';
module.exports = function(app){
    var details = require('../controllers/detailsController');
    var notifications = require('../controllers/notificationController');
    var cities = require('../controllers/cityController');

    //details routes
    app.route('/details')
        .get(details.list_all_transactions)
        .post(details.save_a_transaction);

    app.route('/details/:token')
        .get(details.read_a_transaction)
        .put(details.update_a_transaction)
        .delete(details.delete_a_transaction);
        
    app.route('/')
        .get(notifications.storeTransactionInfo);
    app.rout('/cities')
        .get(cities.list_all_cities)
        .post(cities.save_a_city)

}