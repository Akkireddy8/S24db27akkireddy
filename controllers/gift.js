var gift = require('../models/gift');
// List of all gift
exports.gift_list = function (req, res) {
    res.send('NOT IMPLEMENTED: gift list');
};
// for a specific gift.
exports.gift_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: gift detail: ' + req.params.id);
};
// Handle gift create on POST.
exports.gift_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: gift create POST');
};
// Handle gift delete from on DELETE.
exports.gift_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: gift delete DELETE ' + req.params.id);
};
 
// Handle gift update form on PUT.
exports.gift_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: gift update PUT' + req.params.id);
};
 
 
exports.gift_list = async function (req, res) {
    try {
        thegift = await gift.find();
        res.send(thegift);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
 
 
exports.gift_view_all_Page = async function (req, res) {
    try {
        thegifts = await gift.find();
        res.render('gift', { title: 'gift Search Results', results: thegifts });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
 
 
// Handle gift create on POST.
exports.gift_create_post = async function (req, res) {
    console.log(req.body)
    let document = new gift();
    // We are gifting for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"gift_type":"goat", "price":12, "size":"large"}
    document.gift_type = req.body.gift_type;
    document.gift_size = req.body.gift_size;
    document.gift_price = req.body.gift_price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
