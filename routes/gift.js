var express = require('express');
const gift_controlers= require('../controllers/gift');
var router = express.Router();
/* GET gift */

router.get('/', gift_controlers.gift_view_all_Page);

router.put('/', function(req, res) {
    if(req.body.checkboxsale)toUpdate.sale = true;
    else toUpdate.same = false;
    })

// Delete
router.get('/', gift_controlers.gift_delete );

//s6
/* GET detail gift page */
router.get('/detail', gift_controlers.gift_view_one_Page);

//s7
/* GET create gift page */
router.get('/create', gift_controlers.gift_create_Page);

//s8
/* GET create update page */
router.get('/update', gift_controlers.gift_update_Page);

//s9
/* GET delete gift page */
router.get('/delete', gift_controlers.gift_delete_Page);


module.exports = router;