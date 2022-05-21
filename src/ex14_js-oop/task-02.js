class ElectricDevice {
  constructor(name, power) {
    this.name = name;
    this.state = 'off';
    this.power = power;
  }

  on() {
    this.state = 'on';
    console.log(`${this.name} turned on`);
  }
}

class Room {
  constructor(name, electrics) {
    this.name = name;
    this.electrics = electrics;
  }

  findElecrticDevice(namee) {
    this.electrics.forEach((element) => {
      if (namee === element.name) {
        console.log(`${element.name} is in ${this.name}`);
      }
    });
  }
}

class Computer extends ElectricDevice {}

class HeatingDevice extends ElectricDevice {}

class Iron extends HeatingDevice {}

class Pot extends HeatingDevice {}

class WashingMachine extends ElectricDevice {}

const laptop = new Computer('Laptop', 1200);
const heater = new HeatingDevice('Heater', 3600);
const hairDryer = new HeatingDevice('Hair Dryer', 2100);
const iron = new Iron('Iron', 3000);
const pot = new Pot('Pot', 2500);
const washer = new WashingMachine('Washer', 4000);
const kitchen = new Room('Kitchen', pot);
const bathroom = new Room('Bathroom', [hairDryer, washer]);
const bedroom = new Room('Bedroom', [iron, heater, laptop]);

bathroom.findElecrticDevice('Washer');
kitchen.findElecrticDevice('Pot');
bedroom.findElecrticDevice('Iron');

const countPowers = () => {
  const electricDevices = [];
  electricDevices.push(laptop, heater, hairDryer, iron, pot, washer);
  let powers = 0;
  electricDevices.forEach((element) => {
    if (element.state === 'on') {
      powers += element.power;
    }
  });
  console.log(`Total power consumption is ${powers}`);
};

countPowers();
