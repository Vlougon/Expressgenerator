let express = require('express');
let router = express.Router();
let BicycleControllerApi = require('../../controllers/api/BicycleControllerApi');

router.get('/', BicycleControllerApi.bicycle_list);
router.post('/create', BicycleControllerApi.bicycle_creator);
router.put('/update', BicycleControllerApi.bicycle_updater);
router.delete('/delete', BicycleControllerApi.bicycle_remover);

module.exports = router;