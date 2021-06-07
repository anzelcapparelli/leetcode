
/*
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */

var spaces={}

var ParkingSystem = function (big, medium, small) {
    spaces = {
        big,
        medium,
        small
    }
};


/* 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
    if (carType === 3) {
        if (spaces.small >= 1) {
            spaces.small--;
            return true;
        }
        else return false;
    } else if (carType === 2) {
        if (spaces.medium >= 1) {
            spaces.medium--;
            return true;
        }
        else return false;
    } else {
        if (spaces.big >= 1) {
            spaces.big--;
            return true;
        }
        else return false;
    }
};



/*
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

var obj = new ParkingSystem(1, 1, 0);
console.log (spaces);

// var param_1 = obj.addCar(carType)