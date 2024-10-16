// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // TODO: Declare properties of the Truck class
  vin;
  color;
  make;
  model;
  year;
  weight;
  topSpeed;
  wheels;
  towingCapacity;

  // The properties should include vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels: Wheel[] = [new Wheel(), new Wheel(), new Wheel(), new Wheel()], towingCapacity: number) {
    
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
    this.towingCapacity = towingCapacity

    // TODO: Create a constructor that accepts the properties of the Truck class
      // TODO: The constructor should call the constructor of the parent class, Vehicle
      // TODO: The constructor should initialize the properties of the Truck class
      // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not

      if(wheels.length === 4) {
      this.wheels = wheels
    } else {
      this.wheels = [new Wheel(25, 'GoodYear'), new Wheel(25, 'GoodYear'), new Wheel(25, 'GoodYear'), new Wheel(25, 'GoodYear')]
    };
  }


    // TODO: Implement the tow method from the AbleToTow interface
    tow(vehicle: Truck | Motorbike | Car): void {
      if ("make" in vehicle && "model" in vehicle && "weight" in vehicle) {
        // Now TypeScript knows that vehicle has these properties
        let make = vehicle.make;
        let model = vehicle.model;
    
        // Check if the vehicle's weight is less than or equal to the truck's towing capacity
        if (vehicle.weight <= this.towingCapacity) {
          console.log(`The ${make} ${model} is being towed.`);
        } else {
          console.log(`The vehicle is too heavy to be towed!`);
        }
      } else {
        console.log(`This vehicle doesn't exist or lacks the required properties!`);
      }
    }


// Override the printDetails method from the Vehicle class
override printDetails(): void {
  // Call the printDetails method of the parent class, Vehicle
  super.printDetails();
  
  // Print details of the Truck class
  console.log(
    `VIN: ${this.vin}
     COLOR: ${this.color}
     MAKE: ${this.make}
     MODEL: ${this.model}
     YEAR: ${this.year}
     WEIGHT: ${this.weight} lbs
     TOP SPEED: ${this.topSpeed} mph
     TOWING CAPACITY: ${this.towingCapacity} torque
     Wheels: ${this.wheels.length}`
  );

  // Print details of the wheels
  console.log(
    `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
  );
  console.log(
    `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
  );
  console.log(
    `Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
  );
  console.log(
    `Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`
  );
}
}

// Export the Truck class as the default export
export default Truck;
