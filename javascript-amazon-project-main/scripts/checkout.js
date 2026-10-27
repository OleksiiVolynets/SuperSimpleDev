import { displayCheckOut } from './checkout/orderSummary.js';
import { displayCheckoutSummary } from './checkout/paymentSummary.js';
import { loadProducts } from '../data/products.js';
import { loadCart } from '../data/cart-class.js';

// import '../data/backend-practise.js';
// import '../data/cart-car_practise.js';
// import '../data/cart-class.js'

Promise.all([
  new Promise((resolve)=>{
  loadProducts(()=>{
    resolve('value1');
  });
}), new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  })

]).then(()=>{
  displayCheckOut();
  displayCheckoutSummary();
})

// new Promise((resolve)=>{
//   loadProducts(()=>{
//     resolve('value1');
//   });
// }).then((value)=>{
//   console.log(value)
//   return new Promise((resolve)=>{
//     loadCart(()=>{
//       resolve();
//     });
//   })
  
// }).then(()=>{
//   displayCheckOut();
//   displayCheckoutSummary();
// })

// loadProducts(()=>{
//   loadCart(()=>{
//     displayCheckOut();
//     displayCheckoutSummary();
//   })
// })


// function Mathm(a,b) {
//   return a+b;
// }


// then(()=>{
//   return Mathm(7,11)
// })