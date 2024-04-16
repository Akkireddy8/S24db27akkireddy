var express = require('express');
const gift_controlers= require('../controllers/gift');
var router = express.Router();
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }
router.get('/', gift_controlers.gift_view_all_Page);

router.put('/', function(req, res) {
    if(req.body.checkboxsale)toUpdate.sale = true;
    else toUpdate.same = false;
    })
router.get('/', gift_controlers.gift_delete );

router.get('/detail', gift_controlers.gift_view_one_Page);

router.get('/create',secured, gift_controlers.gift_create_Page);

router.get('/update', secured, gift_controlers.gift_update_Page);

router.get('/delete', secured, gift_controlers.gift_delete_Page);

module.exports = router;