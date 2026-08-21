import {addToCart, cart, loadFromStorage} from '../../data/cart.js';

describe('AddToCart function', ()=>{
 beforeEach(() => {
  spyOn(localStorage, 'setItem');
 })
  it('add an existing product to the cart', () => {

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity:4,
        deliveryOptionId:'1'
      }])
    });
    
    loadFromStorage();
    addToCart('15b6fc6f-327a-4ec4-896f-486349e85a3d', 2);
    expect(cart.length).toBe(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toBe('15b6fc6f-327a-4ec4-896f-486349e85a3d');
    expect(cart[0].quantity).toBe(6);
    let stringCart = JSON.stringify(cart)
    expect(localStorage.setItem).toHaveBeenCalledWith('cart6', stringCart)
  })

  it('add a new product to the cart', () => {
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([])
    });
    
    loadFromStorage();
    addToCart('15b6fc6f-327a-4ec4-896f-486349e85a3d', 4);
    expect(cart.length).toBe(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toBe('15b6fc6f-327a-4ec4-896f-486349e85a3d');
    expect(cart[0].quantity).toBe(4);
    expect(cart[0].deliveryOptionId).toBe('1');
    let stringCart = JSON.stringify(cart)
    expect(localStorage.setItem).toHaveBeenCalledWith('cart6',stringCart)

  })
})
