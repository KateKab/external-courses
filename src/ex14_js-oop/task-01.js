function ElectricDevice(name, power) {
  this.name = name;
  this.power = power;
  this.state = 'off';

  this.on = function () {
    this.state = 'on';
    console.log(`${this.name} turned on`);
  };

  this.off = function () {
    this.state = 'off';
    console.log(`${this.name} turned off`);
  };
}

function VacuumCleaner(name, power) {
  ElectricDevice.call(this, name, power);

  this.mode = 'dry';

  this.changeMode = function () {
    if (this.state === 'on') {
      if (this.mode === 'dry') {
        this.mode = 'wet';
        console.log(`${this.name} switched on wet cleaning`);
      } else {
        this.mode = 'dry';
        console.log(`${this.name} switched on dry cleaning`);
      }
    }
  };

  this.seeInfo = function () {
    if (this.state === 'on') {
      console.log(
        `${this.name} power: ${this.power}, mode: ${this.mode} cleaning`,
      );
    }
  };
}

function RobotCleaner(name, power) {
  VacuumCleaner.call(this, name, power);

  this.map = false;

  this.scan = function () {
    if (this.state === 'on') {
      this.map = true;
    }
    console.log('map is loaded');
  };

  this.seeInfo = function () {
    if (this.state === 'on') {
      console.log(
        `${this.name} power: ${this.power}, mode: ${this.mode} cleaning, map is loaded: ${this.map}`,
      );
    }
  };
}

function RobotSoldier(name, power) {
  ElectricDevice.call(this, name, power);

  this.map = false;
  this.shoots = false;

  this.scan = function () {
    if (this.state === 'on') {
      this.map = true;
    }
    console.log('map is loaded');
  };

  this.shoot = function () {
    if (this.state === 'on') {
      this.shoots = true;
    }
    console.log(`${this.name} shoots!`);
  };

  this.stopShoot = function () {
    if (this.state === 'on') {
      this.shoots = false;
    }
    console.log(`${this.name} doesn't shoot!`);
  };

  this.seeInfo = function () {
    if (this.state === 'on') {
      console.log(
        `${this.name} power: ${this.power}, ${this.name} shoots: ${this.shoots}, map is loaded: ${this.map}`,
      );
    }
  };

  this.seeShootInfo = function () {
    if (this.state === 'on') {
      console.log(`${this.name} shoots: ${this.shoots}`);
    }
  };
}

const vac = new VacuumCleaner('vac', 1000);
const rob = new RobotCleaner('rob', 2000);
const sol = new RobotSoldier('sol', 3000);

vac.on();
rob.on();
sol.on();
