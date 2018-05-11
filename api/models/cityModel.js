var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var CitySchema = new Schema({
    name: {
        type: String,
        required: "There was no city name"
    },
    quarters: {
        type: Object
    }
});

module.exports = mongoose.model('City', CitySchema);