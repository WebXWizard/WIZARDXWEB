const {Schema, model} = require('../connection');
const productSchema = new Schema({
    name: String,
    price:Number,
    image:String,
    category:String,
    description:String
});

module.exports = model('product', productSchema)