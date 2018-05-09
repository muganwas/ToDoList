var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var DoWebPaymentResultSchema = new Schema({
    notificationType: {
        type: String,
        required: "Please provide notification type"
    },
    token: {
        type: String,
        required: "Please provide token"
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('DoWebPaymentResult', DoWebPaymentResultSchema);