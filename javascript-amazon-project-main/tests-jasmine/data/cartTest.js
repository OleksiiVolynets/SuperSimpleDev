
import { cart  } from '../../data/cart-class.js';

describe('AddToCart function', ()=>{
 beforeEach(() => {
  spyOn(localStorage, 'setItem');
 })
  it('add an existing product to the cart', () => {

    cart.cartItems = [{
        productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity:4,
        deliveryOptionId:'1'
      }];

    cart.addToCart('15b6fc6f-327a-4ec4-896f-486349e85a3d', 2);
    expect(cart.cartItems.length).toBe(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart.cartItems[0].productId).toBe('15b6fc6f-327a-4ec4-896f-486349e85a3d');
    expect(cart.cartItems[0].quantity).toBe(6);
    let stringCart = JSON.stringify(cart.cartItems)
    expect(localStorage.setItem).toHaveBeenCalledWith('cart6', stringCart)
  })

  it('add a new product to the cart', () => {
    cart.cartItems = [];
    
    cart.addToCart('15b6fc6f-327a-4ec4-896f-486349e85a3d', 4);
    expect(cart.cartItems.length).toBe(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart.cartItems[0].productId).toBe('15b6fc6f-327a-4ec4-896f-486349e85a3d');
    expect(cart.cartItems[0].quantity).toBe(4);
    expect(cart.cartItems[0].deliveryOptionId).toBe('1');
    let stringCart = JSON.stringify(cart.cartItems)
    expect(localStorage.setItem).toHaveBeenCalledWith('cart6',stringCart)

  })
})

describe('deleteFromCart function',() => {
  let cartText;
  beforeEach(() => {
    spyOn(localStorage,'setItem');
    cart.cartItems=[{
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 4,
        deliveryOptionId:'1'
      },{
        productId: '54e0eccd-8f36-462b-b68a-8182611d9add',
        quantity: 6,
        deliveryOptionId:'3'
      }];
  })

  it('delete an existing product in the cart', () => {

    cart.deleteFromCart('15b6fc6f-327a-4ec4-896f-486349e85a3d');
    expect(cart.cartItems.length).toEqual(1);
    cartText=JSON.stringify(cart.cartItems);
    expect(cart.cartItems[0].productId).toEqual('54e0eccd-8f36-462b-b68a-8182611d9add');
  })

  it('delete a not existing product in the cart', () => {

    cart.deleteFromCart('dd82ca78-a18b-4e2a-9250-31e67412f98d');
    expect(cart.cartItems.length).toEqual(2);
    expect(cart.cartItems[0].productId).toEqual('15b6fc6f-327a-4ec4-896f-486349e85a3d');
    expect(cart.cartItems[1].productId).toEqual('54e0eccd-8f36-462b-b68a-8182611d9add');
    cartText=JSON.stringify(cart.cartItems);
  });



  afterEach(() => {
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart6', cartText);
  })
})

describe('updateCartDelivery', () => {
  const productId1 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
  const productId2 = '54e0eccd-8f36-462b-b68a-8182611d9add';
  beforeEach(()=> {
    spyOn(localStorage, 'setItem');
    cart.cartItems=[{
        productId: productId1,
        quantity: 4,
        deliveryOptionId:'1'
      },{
        productId: productId2,
        quantity: 6,
        deliveryOptionId:'3'
      }];
  })
  it('update date of an existing product in the cart', () => {

    cart.updateCartDelivery(productId1,'2');
    expect(cart.cartItems.length).toBe(2);
    expect(cart.cartItems[0].productId).toEqual('15b6fc6f-327a-4ec4-896f-486349e85a3d');
    expect(cart.cartItems[1].productId).toEqual('54e0eccd-8f36-462b-b68a-8182611d9add');
    expect(cart.cartItems[0].deliveryOptionId).toEqual('2');
    expect(cart.cartItems[1].deliveryOptionId).toEqual('3');
     const cartText = JSON.stringify(cart.cartItems);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart6', cartText);



  });
  it('update date of not existing product in the cart', () => {

    cart.updateCartDelivery('dd82ca78-a18b-4e2a-9250-31e67412f98d','2');
    expect(cart.cartItems.length).toBe(2);
    expect(cart.cartItems[0].productId).toEqual('15b6fc6f-327a-4ec4-896f-486349e85a3d');
    expect(cart.cartItems[1].productId).toEqual('54e0eccd-8f36-462b-b68a-8182611d9add');
    expect(cart.cartItems[0].deliveryOptionId).toEqual('1');
    expect(cart.cartItems[1].deliveryOptionId).toEqual('3');
    expect(localStorage.setItem).toHaveBeenCalledTimes(0);
  });

  it('update date of an existing product and not existing deliveryId in the cart', () => {

    cart.updateCartDelivery(productId2,'4');
    expect(cart.cartItems.length).toBe(2);
    expect(cart.cartItems[0].productId).toEqual('15b6fc6f-327a-4ec4-896f-486349e85a3d');
    expect(cart.cartItems[1].productId).toEqual('54e0eccd-8f36-462b-b68a-8182611d9add');
    expect(cart.cartItems[0].deliveryOptionId).toEqual('1');
    expect(cart.cartItems[1].deliveryOptionId).toEqual('3');
    expect(localStorage.setItem).toHaveBeenCalledTimes(0);
  });

})
