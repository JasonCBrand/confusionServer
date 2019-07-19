const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);

var Currency = mongoose.Types.Currency;
const Schema = mongoose.Schema;

var promoSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: ''
    },
    price: {
        type: Currency,
        required: true,
        min: 0
    },
    featured: {
        type: Boolean,
        default:false      
    },
},  
{
    usePushEach: true,
    timestamps: true
});



var Promotions = mongoose.model('Promotion', promoSchema);

module.exports = Promotions;