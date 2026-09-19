


class Car{
  brand;
  model;
  speed;

  constructor(brand, model, speed) {
    this.brand = brand;
    this.model = model;
    if(speed<200 && speed>0) {
      this.speed = speed;
    }
    else{
      console.log("Speed should be lower than 200 and higher than 0 km/h ")
    }
  }

  displayMethod() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Speed: ${this.speed} km/h`)
  }

  go() {
    let newSpeed = this.speed+5;
    if(newSpeed<200){
      this.speed+=5;
    }
    else{
      console.log("Speed should be lower than 200 and higher than 0 km/h ")
    }
  }
  brake() {
    let newSpeed = this.speed-5;
    if(newSpeed>0){
      this.speed-=5;
    }
    else{
      console.log("Speed should be lower than 200 and higher than 0 km/h ")
    }
  }
}

const toyota = new Car('Toyota', 'Corolla', 140);
const tesla = new Car('Tesla', 'Model 3', 160);
toyota.go();

toyota.displayMethod();
tesla.displayMethod();
