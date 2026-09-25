


export default class Car{
  brand;
  model;
  #speed;

  constructor(brand, model, speed) {
    if(speed>200 || speed<0) {
      throw new Error('Invalid speed')
    }
    this.brand = brand;
    this.model = model;
    this.#speed=speed;
  }

  displayMethod() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Speed: ${this.#speed} km/h`)
  }

  go() {
    let newSpeed = this.speed+5;
    if(newSpeed<=200){
      this.#speed=newSpeed;
    }
    else{
      console.log("Speed should be lower or equal to 200 and higher or equal 0 km/h ")
    }
  }
  brake() {
    let newSpeed = this.#speed-5;
    if(newSpeed>=0){
      this.#speed=newSpeed;
    }
    else{
      console.log("Speed should be lower or equal to 200 and higher or equal to 0 km/h ")
    }
  }
}




