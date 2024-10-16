// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  // TODO: Declare properties of the Motorbike class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  vin;
  color;
  make;
  model;
  year;
  weight;
  topSpeed;
  wheels;
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])
constructor (vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels: Wheel[]= [new Wheel(), new Wheel()]) {
  super();
  this.vin = vin;
  this.color = color;
  this.make = make;
  this.model = model;
  this.year = year;
  this.weight = weight;
  this.topSpeed = topSpeed;
  this.wheels = wheels;

  if(wheels.length === 2) {
    this.wheels = wheels
  } else {
    this.wheels = [new Wheel(15, 'Harley Davidson'), new Wheel(16,'Harley Davidson')];
  };
}
  // TODO: Implement the wheelie method
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
wheelie(): void {
  if(this.started) {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  } else {
    console.log(`You need to start first!`);
  }
}
// Override the printDetails parent property
override printDetails(): void {
  // call the parent printDetails
  super.printDetails();
  // print details of the motorcycle
  console.log(
    `VIN: ${this.vin}
     COLOR: ${this.color}
     MAKE: ${this.make}
     MODEL: ${this.model}
     YEAR: ${this.year}
     WEIGHT: ${this.weight} lbs
     TOP SPEED: ${this.topSpeed} mph
     Wheels: ${this.wheels.length}`
  );
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
    // Print details of the wheels
    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
  }

}

// Export the Motorbike class as the default export
export default Motorbike;
