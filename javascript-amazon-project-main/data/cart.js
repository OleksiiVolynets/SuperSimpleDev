export const cart = [];

export function cartTotalQuantity() {
  let totalQuantity = 0;
  cart.forEach((item) => {
    totalQuantity += item.quantity
  });
  return totalQuantity;
}
export function addToCart(productId,quantity) {
  let matchItem = cart.find((item) => item.productId === productId);
  if (matchItem) {
    matchItem.quantity += quantity;
    return;
  }
  cart.push({
    productId,
    quantity}
  );
}