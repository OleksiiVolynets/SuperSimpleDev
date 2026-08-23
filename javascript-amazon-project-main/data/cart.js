import { deliveryTime  } from './deliveryTime.js'

export let cart;

loadFromStorage();

export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart6')) || [];
}

export function cartTotalQuantity() {
  let totalQuantity = 0;
  cart.forEach((item) => {
    totalQuantity += item.quantity
  });
  return totalQuantity;
}
export function addToCart(productId, quantity) {
  let matchItem = cart.find((item) => item.productId === productId);
  if (matchItem) {
    matchItem.quantity += quantity;
  }
  else{
    cart.push({
      productId,
      quantity,
      deliveryOptionId:'1'
    }
    );
  }
  saveCart();
}
export function updateCartDelivery(productId,deliveryOptionId){
  let matchItem = cart.find((item) => item.productId === productId);
  let deliveryMatchItem = deliveryTime.find((date) => date.deliveryId === deliveryOptionId);
  if (matchItem && deliveryMatchItem) {
    matchItem.deliveryOptionId = deliveryOptionId;
    saveCart();
  }
}
export function deleteFromCart(productId){
  let matchItem = cart.find((item) => item.productId === productId);
  if(matchItem) {
    cart=cart.filter(item => item.productId !== matchItem.productId);
  }
  saveCart();
}
export function updateQuantity(productId,quantity) {
  let matchItem = cart.find((item) => item.productId === productId);
  if (matchItem) {
    matchItem.quantity = quantity;
    saveCart();
  }
}
export function saveCart() {
  localStorage.setItem('cart6', JSON.stringify(cart));
}
