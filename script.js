// Constructor function for Car
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Method added to Car prototype
Car.prototype.getMakeModel = function() {
  return this.make + ' ' + this.model;
};

// Constructor function for SportsCar inheriting from Car
function SportsCar(make, model, topSpeed) {
  Car.call(this, make, model); // Call the Car constructor to inherit make and model
  this.topSpeed = topSpeed;
}

// Inherit Car prototype methods
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Method added to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

window.Car=Car;
window.SportsCar=SportsCar;