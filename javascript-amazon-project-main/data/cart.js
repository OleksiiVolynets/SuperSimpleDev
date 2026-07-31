export let cart = JSON.parse(localStorage.getItem('cart6')) || [];

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
  if (matchItem) {
    matchItem.deliveryOptionId = deliveryOptionId;
  }
}
export function deleteFromCart(id){
  
  cart=cart.filter(item => item.productId !== id);
  console.log(cart)
  saveCart();
}
export function updateQuantity(productId,quantity) {
  let matchItem = cart.find((item) => item.productId === productId);
  if (matchItem) {
    matchItem.quantity = quantity;
  }
  saveCart();
}
export function saveCart() {
  localStorage.setItem('cart6', JSON.stringify(cart));
}
