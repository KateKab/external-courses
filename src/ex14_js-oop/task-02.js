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

  off() {
    this.state = 'off';
    console.log(`${this.name} turned on`);
  }
}

class Room {
  constructor(name, electrics) {
    this.name = name;
    this.electrics = electrics;
  }

  findElecrticDevice(device) {
    this.electrics.forEach((element) => {
      if (device === element.name) {
        console.log(`${element.name} is in ${this.name}`);
      }
    });
  }

  countPowers() {
    let powers = 0;
    this.electrics.forEach((element) => {
      if (element.state === 'on') {
        powers += element.power;
      }
    });

    console.log(`Total power consumption in ${this.name} is ${powers}`);
  }
}

class Computer extends ElectricDevice {
  constructor(name, power, model, processor, memory) {
    super(name, power);
    this.model = model;
    this.processor = processor;
    this.memory = memory;
  }

  showCharacteristics() {
    console.log(
      `Model: ${this.model}, Processor: ${this.processor}, Memory: ${this.memory}`,
    );
  }
}

class HeatingDevice extends ElectricDevice {
  constructor(name, power, minTemperature, maxTemperature) {
    super(name, power);
    this.maxTemperature = maxTemperature;
    this.minTemperature = minTemperature;
  }
}

class Iron extends HeatingDevice {
  constructor(name, power, minTemperature, maxTemperature) {
    super(name, power, minTemperature, maxTemperature);
    this.steam = 'off';
    this.currentTemperature = 0;
  }

  chooseMode(mode) {
    if (this.state === 'on') {
      switch (mode) {
        case 'silk':
          this.currentTemperature = 80;
          break;
        case 'cotton':
          this.currentTemperature = 150;
          break;
        case 'linen':
          this.currentTemperature = this.maxTemperature;
          break;
        default:
          this.currentTemperature = 100;
          break;
      }

      console.log(
        `${this.name} is on, current mode is ${mode}, current temperature is ${this.currentTemperature}C`,
      );
    }
  }

  activateSteam() {
    this.steam = 'on';
    console.log(`${this.name}'s steam is on`);
  }
}

class Pot extends HeatingDevice {
  constructor(name, power, maxTemperature, minTemperature) {
    super(name, power, maxTemperature, minTemperature);
    this.currentTemperature = 0;
  }

  boil() {
    this.currentTemperature = 100;
    console.log(
      `${this.name} boiled water. Current temperature is ${this.currentTemperature}С`,
    );
  }
}

class WashingMachine extends ElectricDevice {
  constructor(name, power) {
    super(name, power);
    this.currentTemperature = 0;
    this.mode = 'normal';
    this.spin = 2000;
  }

  wash(color, mode) {
    if (this.state === 'on') {
      if (mode === 'delicate') {
        this.spin = 1000;
      }
      if (color === 'white') {
        this.currentTemperature = 80;
      }
      if (color === 'black') {
        this.currentTemperature = 30;
      }
      if (color === 'colored') {
        this.currentTemperature = 40;
      }

      console.log(
        `${this.name} start washing ${color} ${mode} on temperature ${this.currentTemperature}C and spin ${this.spin}`,
      );
    }
  }
}

const laptop = new Computer('Laptop', 1200, 'ideapad', 'intel', '2Tb');
const heater = new HeatingDevice('Heater', 3600, 50, 80);
const hairDryer = new HeatingDevice('Hair Dryer', 2100, 20, 70);
const iron = new Iron('Iron', 3000, 60, 250);
const pot = new Pot('Pot', 2500, 30, 100);
const washer = new WashingMachine('Washer', 4000);
const kitchen = new Room('Kitchen', [pot]);
const bathroom = new Room('Bathroom', [hairDryer, washer]);
const bedroom = new Room('Bedroom', [iron, heater, laptop]);

bathroom.findElecrticDevice('Washer');
kitchen.findElecrticDevice('Pot');
bedroom.countPowers();
