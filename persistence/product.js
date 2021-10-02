var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    code : {type: String, requiere:true},
    name : {type:String, require:true, max:50},
    price : {type: String, requiere:true},
    stock : {type: String, requiere:true}
});

module.exports = mongoose.model('Product', ProductSchema);