let Bicycle = require('../../models/Bicycle');

exports.bicycle_list = function (req, res) {
    res.status(200).json({
        bikes: Bicycle.allBicycles,
    });
};

exports.bicycle_creator = function (req, res) {
    let newBike = new Bicycle(req.body.id, req.body.color, req.body.model);
    newBike.ubication = [req.body.latitude, req.body.longitude];

    Bicycle.add(newBike);

    res.status(201).json({
        bike: newBike
    })
};

exports.bicycle_remover = function (req, res) {
    Bicycle.removeById(req.body.id);
    res.status(204).send();
};