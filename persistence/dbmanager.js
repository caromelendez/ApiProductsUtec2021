var mongoose = require('mongoose');
//var dev_db_url = "mongodb://localhost:27017/anaDB";
var dev_db_url = 'mongodb+srv://carouser:Carolina123*@cluster0.y0bqw.mongodb.net/anadb?retryWrites=true&w=majority'

mongoose.connect(dev_db_url);
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console,'MongoDB Connection error:'));

var Product = require('./product');

/////////////// CRUD OPERATIONS ////////////////////

///// CREATE -------
exports.product_create = function(req, res){
 
    var product = new Product({
        code: req.body.code,
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock
    });
    product.save(function(err){
        if(err){
            return next(err)
        }
        res.send({'message':'OK'})
    });

}

///// READ -------
exports.product_read = function(req, res){

    Product.findById(req.query.id, function(err,product){
        if(err) return next(err) 
        res.send(product)

    });
    

}

///// UPDATE -------
exports.product_update = function(req, res){
    
    Product.findByIdAndUpdate(req.query.id, {$set:req.body},function(err,product){
        if(err) return next(err) 
        res.send({'message':'Updated'})

    });

}

///// DELETE -------
exports.product_delete = function(req, res){
    
    Product.findByIdAndRemove(req.query.id, function(err,product){
        if(err) return next(err) 
        res.send({'message':'Deleted'})

    });

}