import { displayCheckOut } from '../../scripts/checkout/orderSummary.js';

import { loadFromStorage, cart } from '../../data/cart.js'

describe('test suite: displayCheckOut', () => {
  const productId1 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
  const productId2 = '54e0eccd-8f36-462b-b68a-8182611d9add';
  beforeEach(()=> {
    spyOn(localStorage, 'setItem');
    document.querySelector('.js-test-container').innerHTML = ` <a class="return-to-home-link js-return-to-home-link"
            href="amazon.html">3 items</a>
            <div class="js-order-summary"></div> 
            <div class="js-payment-summary"></div>`;

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: productId1,
        quantity: 4,
        deliveryOptionId:'1'
      },{
        productId: productId2,
        quantity: 6,
        deliveryOptionId:'3'
      }])
    });
    
    loadFromStorage();
    displayCheckOut ();
  })
  it('display the cart', () => {

    expect(document.querySelectorAll('.js-cart-item-container').length).toBe(2)

    expect(document.querySelector(`.js-product-quantity-${productId1}`).innerText).toContain('Quantity: 4');

    expect(document.querySelector(`.js-product-quantity-${productId2}`).innerText).toContain('Quantity: 6');

    expect(document.querySelector(`.js-product-name-${productId1}`).innerText).toBe('Intermediate Size Basketball');
    expect(document.querySelector(`.js-product-name-${productId2}`).innerText).toBe('2 Slot Toaster - Black');
    expect(document.querySelector(`.js-cart-item-container-${productId1}`).querySelector('.product-price').innerText).toBe('$20.95');
    expect(document.querySelector(`.js-cart-item-container-${productId2}`).querySelector('.product-price').innerText).toBe('$18.99')
 

  })

  it('remove a product',() => {
    

    document.querySelector(`.js-delete-quantity-link[data-product-id="${productId1}"]`).click();

    expect(document.querySelector(`.js-cart-item-container-${productId1}`)).toBe(null);

    expect(document.querySelector(`.js-cart-item-container-${productId2}`)).not.toEqual(null);

    expect(cart.length).toBe(1)
    expect(cart[0].productId).toBe(productId2);
    expect(cart[0].quantity).toBe(6);
    expect(document.querySelector(`.js-product-name-${productId2}`).innerText).toBe('2 Slot Toaster - Black')
    expect(document.querySelector(`.js-cart-item-container-${productId2}`).querySelector('.product-price').innerText).toBe('$18.99')
     
  })

  afterEach(() => {
    document.querySelector('.js-test-container').innerHTML ='';

  })
})