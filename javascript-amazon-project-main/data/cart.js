const cart=[];

function cartTotalQuantity() {
  let totalQuantity=0;
  cart.forEach((item) => {
    totalQuantity+= item.quantity
  })
  return totalQuantity;
}