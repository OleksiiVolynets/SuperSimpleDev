import { deliveryTime  } from './deliveryTime.js';

function Cart() {
  const cart = {
    cartItems: undefined,
    loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem('cart-oop')) || [];},
    saveCart() {
    localStorage.setItem('cart-oop', JSON.stringify(this.cartItems));
    },
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
    },
    deleteFromCart(productId){
    let matchItem = this.cartItems.find((item) => item.productId === productId);
    if(matchItem) {
      this.cartItems=this.cartItems.filter(item => item.productId !== matchItem.productId);
    }
    this.saveCart();
    },
    cartTotalQuantity() {
    let totalQuantity = 0;
    this.cartItems.forEach((item) => {
      totalQuantity += item.quantity
    });
    return totalQuantity;
    },
    updateCartDelivery(productId,deliveryOptionId){
    let matchItem = this.cartItems.find((item) => item.productId === productId);
    let deliveryMatchItem = deliveryTime.find((date) => date.deliveryId === deliveryOptionId);
    if (matchItem && deliveryMatchItem) {
      matchItem.deliveryOptionId = deliveryOptionId;
      this.saveCart();
    }
    },
    updateQuantity(productId,quantity) {
    let matchItem = this.cartItems.find((item) => item.productId === productId);
    if (matchItem) {
      matchItem.quantity = quantity;
      this.saveCart();
    }
    }



  
  

}

return cart;
}


const cart = Cart();

const businessCart = Cart();


cart.loadFromStorage();







businessCart.loadFromStorage();


console.log(cart, businessCart)