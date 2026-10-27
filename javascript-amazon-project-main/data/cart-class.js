import { deliveryTime  } from './deliveryTime.js';

class Cart {
  cartItems;
  #localStorageKey;

  constructor(localStorageKey) {
    this.#localStorageKey = localStorageKey;
    this.#loadFromStorage()
  }

  #loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)) || [];}

  saveCart() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }
  addToCart(productId, quantity) {
    let matchItem = this.cartItems.find((item) => item.productId === productId);
    if (matchItem) {
      matchItem.quantity += quantity;
    }
    else{
      this.cartItems.push({
        productId,
        quantity,
        deliveryOptionId:'1'
      }
      );
    }
    this.saveCart();
    }

  deleteFromCart(productId){
    let matchItem = this.cartItems.find((item) => item.productId === productId);
    if(matchItem) {
      this.cartItems=this.cartItems.filter(item => item.productId !== matchItem.productId);
    }
    this.saveCart();
    }

  cartTotalQuantity() {
    let totalQuantity = 0;
    this.cartItems.forEach((item) => {
      totalQuantity += item.quantity
    });
    return totalQuantity;
    }
  updateCartDelivery(productId,deliveryOptionId){
    let matchItem = this.cartItems.find((item) => item.productId === productId);
    let deliveryMatchItem = deliveryTime.find((date) => date.deliveryId === deliveryOptionId);
    if (matchItem && deliveryMatchItem) {
      matchItem.deliveryOptionId = deliveryOptionId;
      this.saveCart();
    }
    }
  updateQuantity(productId,quantity) {
    let matchItem = this.cartItems.find((item) => item.productId === productId);
    if (matchItem) {
      matchItem.quantity = quantity;
      this.saveCart();
    }
    }
}

export const cart = new Cart('cart6');

export function loadCart(fun){
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load',()=>{
    console.log(xhr.response)
    fun();
  })
  xhr.open('GET', 'https://supersimplebackend.dev/cart');
  xhr.send();
  
}