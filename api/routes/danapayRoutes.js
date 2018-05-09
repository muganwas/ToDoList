'use strict';
module.exports = function(app){
    var details = require('../controllers/detailsController');
    var notifications = require('../controllers/notificationController');

    //details routes
    app.route('/details')
        .get(details.list_all_transactions)
        .post(details.save_a_transaction);

    app.route('/details/:token')
        .get(details.read_a_transaction)
        .put(details.update_a_transaction)
        .delete(details.delete_a_transaction);
        
    app.route('/details/:notificationType&:token')
        .get(notifications.storeTransactionInfo);

}