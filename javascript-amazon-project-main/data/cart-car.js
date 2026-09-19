


class Car{
  brand;
  model;

  constructor(brand, model) {
    this.brand=brand;
    this.model=model;
  }

  displayMethod() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`)
  }
}

const toyota = new Car('Toyota', 'Corolla');
const tesla = new Car('Tesla', 'Model 3');


toyota.displayMethod();
tesla.displayMethod();
