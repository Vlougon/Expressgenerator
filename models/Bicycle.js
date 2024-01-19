let Bicycle = function (id, color, model, ubication) {
    this.id = id;
    this.color = color;
    this.model = model;
    this.ubication = ubication;
}

Bicycle.allBicycles = [];

Bicycle.add = function (bike) {
    this.allBicycles.push(bike);
}

let bike1 = new Bicycle(1, "Red", "Trek", [28.503789, -13.853296]);
let bike2 = new Bicycle(2, "Blue", "Orbea", [28.501367, -13.853476]);
Bicycle.add(bike1);
Bicycle.add(bike2);

module.exports = Bicycle;