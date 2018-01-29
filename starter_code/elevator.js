class Elevator {
  constructor() {
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = 'up';
    this.waitingList = [];
    this.requests = [];
    this.passengers = [];
  }

  update() { 
    if (this.direction === "up") {
      this.floorUp();
      this._passengersEnter(this.floor);
      this._passengersLeave(this.floor);
      console.log('The direction of the elevator is: ' + this.direction);
    }
    if (this.direction === "down") {
      this.floorDown();
      this._passengersEnter(this.floor);
      this._passengersLeave(this.floor);
      console.log('The direction of the elevator is: ' + this.direction);
    }
    this.log();
  }
  
  start() {
    this.start = setInterval(() => {
    this.update();
    }, 1000);
  }


  stop() { 
    clearInterval(this.start);
  }


  floorUp() { 
    if (this.floor < this.MAXFLOOR) { this.floor++; }
    else { this.direction = 'down'; }
  }


  floorDown() { 
    if (this.floor > 0) { this.floor--; }
    else { this.direction = 'up'; }
  }
  
  
  log() { 
    console.log(`Direction = ${this.direction} | Floor: ${this.floor}`);
  }
  
  call(Person) { 
    this.waitingList.push(Person.originFloor);
    this.requests.push(Person.destinationFloor);
  }

  _passengersEnter (floor) {
    this.waitingList.forEach(function() {
      if (this.waitingList[i].originFloor === floor) {
        this.passengers.push(waitingList[i]);
        this.requests.push(this.waitingList[i].destinationFloor);
        console.log(`${this.waitingList[i].name} has entered the elevator`);
        this.waitingList[i].splice(i, 1); 
      }     
    }, i);
  }

  _passengersLeave (floor) {
    this.waitingList.forEach(function() {
      if (this.passengers[i].destinationFloor === floor) {
        console.log(`${this.waitingList[i].name} has left the elevator`);
        this.passengers.splice(i, 1);
        this.requests.splice(i, 1);
      }     
    }, i);
  }

}

module.exports = Elevator;



