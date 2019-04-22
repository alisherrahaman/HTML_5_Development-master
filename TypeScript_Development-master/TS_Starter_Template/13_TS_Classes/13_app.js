var BMW = (function () {
    function BMW(color, enginCapacity, fuel, seatingCapacity) {
        this._color = color;
        this._engineCapacity = enginCapacity;
        this._fuel = fuel;
        this._seatingCapacity = seatingCapacity;
    }
    Object.defineProperty(BMW.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BMW.prototype, "engineCapacity", {
        get: function () {
            return this._engineCapacity;
        },
        set: function (value) {
            this._engineCapacity = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BMW.prototype, "fuel", {
        get: function () {
            return this._fuel;
        },
        set: function (value) {
            this._fuel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BMW.prototype, "seatingCapacity", {
        get: function () {
            return this._seatingCapacity;
        },
        set: function (value) {
            this._seatingCapacity = value;
        },
        enumerable: true,
        configurable: true
    });
    BMW.prototype.HasAirBags = function () {
        return true;
    };
    BMW.prototype.specification = function () {
        var specification = "\n        Color:" + this.color + ",\n        engineCapacity:" + this.engineCapacity + ",\n        SeatingCapacity:" + this.seatingCapacity + ",\n        Has AirBags:" + this.HasAirBags() + ",\n        Has Camera:" + this.HasCamera() + "\n        ";
        return specification;
    };
    BMW.prototype.HasCamera = function () {
        return true;
    };
    return BMW;
}());
var car1 = new BMW('white', '3000CC', 'Diesel', 4);
var carSpec = car1.specification();
console.log(carSpec);
