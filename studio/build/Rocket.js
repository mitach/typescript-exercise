"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            sum += Number(item.massKg);
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        var astronautsMassKg = this.sumMass(this.astronauts);
        var cargoMassKg = this.sumMass(this.cargoItems);
        var currMass = astronautsMassKg + cargoMassKg;
        return currMass;
    };
    Rocket.prototype.canAdd = function (item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        var canAddFlag = this.canAdd(cargo);
        if (canAddFlag) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        var canAddFlag = this.canAdd(astronaut);
        if (canAddFlag) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
