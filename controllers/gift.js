var gift = require('../models/gift');
// List of all gift
exports.gift_list = function(req, res) {
 res.send('NOT IMPLEMENTED: gift list');
};
// for a specific gift.
exports.gift_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: gift detail: ' + req.params.id);
};
// Handle gift create on POST.
exports.gift_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: gift create POST');
};
// Handle gift delete from on DELETE.
exports.gift_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: gift delete DELETE ' + req.params.id);
};
// Handle gift update form on PUT.
exports.gift_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: gift update PUT' + req.params.id);
};

// List of all gift
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

   // VIEWS
// Handle a show all view
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

// Handle gift create on POST.
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

   // specific gift. lab-12 s-1
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
   
   //lab-12 s-2
   exports.gift_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await gift.findById(req.params.id)
        // Do updates of properties
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

// s4 ad s5
// Handle gift delete on DELETE.
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

//s6

// Handle a show one view with id specified by query
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

// s7

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

//s8
    
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
    
    //s9

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