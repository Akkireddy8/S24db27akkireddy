var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var gift_controller = require('../controllers/gift');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// gift ROUTES ///
// POST request for creating a gift.
router.post('/gift', gift_controller.gift_create_post);
// DELETE request to delete gift.
router.delete('/gift/:id', gift_controller.gift_delete);
// PUT request to update gift.
router.put('/gift/:id', gift_controller.gift_update_put);
// GET request for one gift.
router.get('/gift/:id', gift_controller.gift_detail);
// GET request for list of all gift items.
router.get('/gift', gift_controller.gift_list);
module.exports = router;