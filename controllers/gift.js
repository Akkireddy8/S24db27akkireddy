var gift = require('../models/gift');

exports.gift_list = function(req, res) {
 res.send('NOT IMPLEMENTED: gift list');
};

exports.gift_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: gift detail: ' + req.params.id);
};

exports.gift_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: gift create POST');
};

exports.gift_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: gift delete DELETE ' + req.params.id);
};

exports.gift_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: gift update PUT' + req.params.id);
};

exports.gift_list = async function(req, res) {
    try{
    thegift = await gift.find();
    res.send(thegift);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };

 
exports.gift_view_all_Page = async function(req, res) {
    try{
    thegift = await gift.find();
    res.render('gift', { title: 'gift Search Results', results: thegift });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };


exports.gift_create_post = async function(req, res) {
    console.log(req.body)
    let document = new gift();
    document.gift_type = req.body.gift_type;
    document.gift_size = req.body.gift_size;
    document.gift_price = req.body.gift_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   }

exports.gift_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await gift.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   }

   exports.gift_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await gift.findById(req.params.id)
        
        if (req.body.gift_type)
            toUpdate.gift_type = req.body.gift_type;
        if (req.body.gift_size) toUpdate.gift_size = req.body.gift_size;
        if (req.body.gift_price) toUpdate.gift_price = req.body.gift_price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
        failed`);
    }
};

exports.gift_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await gift.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };


exports.gift_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await gift.findById( req.query.id)
    res.render('giftdetail',
    { title: 'gift Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };


exports.gift_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('giftcreate', { title: 'gift Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    
exports.gift_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await gift.findById(req.query.id)
    res.render('giftupdate', { title: 'gift Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    

    exports.gift_delete_Page = async function (req, res) {
        console.log("Delete view for id " + req.query.id)
        try {
            result = await gift.findById(req.query.id)
            res.render('giftdelete', {
                title: 'gift Delete', toShow:
                    result
            });
        }
        catch (err) {
            res.status(500)
            res.send(`{'error': '${err}'}`);
        }
    };