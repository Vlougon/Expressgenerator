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

exports.bicycle_updater = function (req, res) {
    const updatedBike = Bicycle.allBicycles.filter(bike => bike.id === req.body.id);

    updatedBike[0].id = req.body.id;
    updatedBike[0].color = req.body.color;
    updatedBike[0].model = req.body.model;
    updatedBike[0].ubication = [req.body.latitude, req.body.longitude];

    res.status(200).json({
        bike: updatedBike
    })
};

exports.bicycle_remover = function (req, res) {
    Bicycle.removeById(req.body.id);
    res.status(204).send();
};