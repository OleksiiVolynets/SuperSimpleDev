import { displayCheckOut } from './checkout/orderSummary.js';
import { displayCheckoutSummary } from './checkout/paymentSummary.js';
import { loadProducts } from '../data/products.js';

// import '../data/backend-practise.js';
// import '../data/cart-car_practise.js';
// import '../data/cart-class.js'

loadProducts(()=>{
  displayCheckOut();
  displayCheckoutSummary();
})



