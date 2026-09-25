import  Car from './cart-car.js'

try{
let toyota = new Car('Toyota', 'Corolla', 300);
toyota.go();

toyota.displayMethod();
}
catch(error) {
  console.log(error.message)
}




try{
  let tesla = new Car('Tesla', 'Model 3', 0);
  tesla.displayMethod();
  tesla.brake();
}
catch(error) {
  console.log(error.message)
}