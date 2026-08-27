import { deliveryTime  } from './deliveryTime.js';

class Cart {
  cartItems = undefined;
  localStoragekey = undefined;

  constructor(localStoragekey) {
    this.localStoragekey = localStoragekey;
    this.loadFromStorage(this.localStoragekey)
  }

  loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.localStoragekey)) || [];}

  saveCart() {
    localStorage.setItem(this.localStoragekey, JSON.stringify(this.cartItems));
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



const cart = new Cart('cart-oop');

const businessCart = new Cart('cart-business');


console.log(cart);
console.log(businessCart);
console.log(businessCart instanceof Cart)