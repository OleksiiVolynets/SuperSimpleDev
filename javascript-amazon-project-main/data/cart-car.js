


export default class Car{
  brand;
  model;
  speed;
  isTrunkOpen;

  constructor(brand, model, speed) {
    if(speed>200 || speed<0) {
      throw new Error('Invalid speed')
    }
    this.brand = brand;
    this.model = model;
    this.speed=speed;
    this.isTrunkOpen=false;
  }

  displayMethod() {
    let messageTrunk;
    if(this.isTrunkOpen){
      messageTrunk='opened'
    }
    else{
      messageTrunk='closed'
    }
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Speed: ${this.speed} km/h, Trunk is ${messageTrunk}`)
  }

  go() {
    let newSpeed = this.speed+5;
    if(newSpeed<=200 && !this.isTrunkOpen){
      this.speed=newSpeed;
    }
    else if(newSpeed>200) {
      console.log("Speed should be lower or equal to 200 and higher or equal 0 km/h ")
    }
    else if(this.isTrunkOpen){
      console.log("Trunk should be closed ")
    }
  }
  brake() {
    let newSpeed = this.speed-5;
    if(newSpeed>=0){
      this.speed=newSpeed;
    }
    else{
      console.log("Speed should be lower or equal to 200 and higher or equal to 0 km/h ")
    }
  }

  openTrunk(){
    if(this.speed!==0){
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

export class RaceCar extends Car{
  constructor(brand, model,speed, acceleration){
    super(brand, model,speed)
    this.acceleration=acceleration
  }

  go(){
    let newSpeed= this.speed+this.acceleration;
    if(newSpeed<=300){
      this.speed=newSpeed;
    }
  }
  
  openTrunk(){
    console.log("Race car don't have a trunk")
  }
  closeTrunk(){
    
    console.log("Race car don't have a trunk")
  
  }
  displayMethod() {
    
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Speed: ${this.speed} km/h, Acceleration is ${this.acceleration}`)
  }
}


