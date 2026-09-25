import  Car, { RaceCar } from './cart-car.js'

try{
let toyota = new Car('Toyota', 'Corolla', 300,true);
toyota.go();

toyota.displayMethod();
}
catch(error) {
  console.log(error.message)
}




try{
  let tesla = new Car('Tesla', 'Model 3', 0,false);
  tesla.displayMethod();
  tesla.brake();
  tesla.go()
  tesla.displayMethod();
  tesla.openTrunk();
  tesla.displayMethod();
  tesla.brake();
  tesla.openTrunk();
  tesla.go()
  tesla.displayMethod();
}
catch(error) {
  console.log(error.message);
}

try{
  let raceCar= new RaceCar("McLaren","F1",100,20);

  raceCar.go();
  raceCar.openTrunk();
  raceCar.closeTrunk();
  raceCar.displayMethod()
  raceCar.go();
  raceCar.go();
  raceCar.go();
  raceCar.go();

}
catch(error)
{
  console.log(error.message);
}