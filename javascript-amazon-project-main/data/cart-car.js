


export default class Car{
  brand;
  model;
  #speed;
  isTrunkOpen;

  constructor(brand, model, speed, isTrunkOpen) {
    if(speed>200 || speed<0) {
      throw new Error('Invalid speed')
    }
    this.brand = brand;
    this.model = model;
    this.#speed=speed;
    this.isTrunkOpen=isTrunkOpen;
  }

  displayMethod() {
    let messageTrunk;
    if(this.isTrunkOpen===true){
      messageTrunk='opened'
    }
    else{
      messageTrunk='closed'
    }
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Speed: ${this.#speed} km/h, Trunk is ${messageTrunk}`)
  }

  go() {
    let newSpeed = this.#speed+5;
    if(newSpeed<=200 && this.isTrunkOpen===false){
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

  openTrunk(){
    if(this.#speed!==0){
      console.log("Car is going you can't open the trunk")
    }
    else{
      this.isTrunkOpen=true;
    }
  }

  closeTrunk(){
    this.isTrunkOpen=false;
  }
}




