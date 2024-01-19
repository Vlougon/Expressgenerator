let express = require('express');
let router = express.Router();
let BicycleControllerApi = require('../../controllers/api/BicycleControllerApi');

router.get('/', BicycleControllerApi.bicycle_list);

module.exports = router;