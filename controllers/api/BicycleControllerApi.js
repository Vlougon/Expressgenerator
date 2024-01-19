let Bicycle = require('../../models/Bicycle');

exports.bicycle_list = function (req, res) {
    res.status(200).json({
        bikes: Bicycle.allBicycles,
    });
};