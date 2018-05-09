var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var TransactionDetailsSchema = new Schema({
    token: {
        type: String,
        required: "There was no token"
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    city: {
        type: String
    },
    quarter: {
        type: String
    },
    amountToReceive: {
        type: Number
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Details', TransactionDetailsSchema);