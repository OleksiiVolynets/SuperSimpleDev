import { addToCart, cart, cartTotalQuantity, deleteFromCart, updateQuantity } from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js'

hello();
const checkoutItemsNumber = document.querySelector('.js-return-to-home-link');
checkoutItemsNumber.innerHTML = cartTotalQuantity() + ' items';
const checkoutContainer = document.querySelector('.js-order-summary');
function displayCheckOut() {
  checkoutItemsNumber.innerHTML = cartTotalQuantity() + ' items';
  let checkoutItemsHTML = '';
  cart.forEach((cartItem) => {
    let matchingItem = products.find( productItem => productItem.id === cartItem.productId);
    checkoutItemsHTML += `<div class="cart-item-container js-cart-item-container">
              <div class="delivery-date">
                Delivery date: Tuesday, June 21
              </div>

              <div class="cart-item-details-grid">
                <img class="product-image"
                  src="${matchingItem.image}">

                <div class="cart-item-details">
                  <div class="product-name">
                    ${matchingItem.name}
                  </div>
                  <div class="product-price">
                    $${formatCurrency(matchingItem.priceCents)}
                  </div>
                  <div class="product-quantity">
                    <span>
                      Quantity: <span class="quantity-label js-quantity-label-${matchingItem.id}">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary js-update-quantity-link" data-product-id="${matchingItem.id}">
                      Update
                    </span>
                    <input class="quantity-input js-quantity-input-${matchingItem.id} js-quantity-input" type="number" data-product-id="${matchingItem.id}"> 
                    <span class="save-quantity-link link-primary js-save-quantity-link" data-product-id="${matchingItem.id}">
                      Save
                    </span>
                    <span class="delete-quantity-link link-primary js-delete-quantity-link" data-product-id="${matchingItem.id}">
                      Delete
                    </span>
                  </div>
                </div>

                <div class="delivery-options">
                  <div class="delivery-options-title">
                    Choose a delivery option:
                  </div>
                  <div class="delivery-option">
                    <input type="radio" checked
                      class="delivery-option-input"
                      name="delivery-option-${ matchingItem.id }">
                    <div>
                      <div class="delivery-option-date">
                        Tuesday, June 21
                      </div>
                      <div class="delivery-option-price">
                        FREE Shipping
                      </div>
                    </div>
                  </div>
                  <div class="delivery-option">
                    <input type="radio"
                      class="delivery-option-input"
                      name="delivery-option-${ matchingItem.id }">
                    <div>
                      <div class="delivery-option-date">
                        Wednesday, June 15
                      </div>
                      <div class="delivery-option-price">
                        $4.99 - Shipping
                      </div>
                    </div>
                  </div>
                  <div class="delivery-option">
                    <input type="radio"
                      class="delivery-option-input"
                      name="delivery-option-${ matchingItem.id }">
                    <div>
                      <div class="delivery-option-date">
                        Monday, June 13
                      </div>
                      <div class="delivery-option-price">
                        $9.99 - Shipping
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`
  })
  checkoutContainer.innerHTML = checkoutItemsHTML;
}
displayCheckOut();

checkoutContainer.addEventListener('click', (event) => {
  const deleteBtn = event.target.closest('.js-delete-quantity-link');
  const updateBtn = event.target.closest('.js-update-quantity-link');
  const saveBtn = event.target.closest('.js-save-quantity-link');
  if (deleteBtn) {
    const { productId } = deleteBtn.dataset;
    deleteFromCart(productId);
    displayCheckOut();
  }
  if (updateBtn) {
    const { productId } = updateBtn.dataset;
    const currentQuantity = document.querySelector(`.js-quantity-label-${productId}`).innerHTML;
    const itemContainer = updateBtn.closest(`.js-cart-item-container`);
    itemContainer.classList.add('is-editing-quantity');
    const quantityInput = document.querySelector(`.js-quantity-input-${productId}`)
    quantityInput.value = currentQuantity;
  }
  if (saveBtn) {
    const { productId } = saveBtn.dataset;
    const quantityInput = Number(document.querySelector(`.js-quantity-input-${productId}`).value);
    if (quantityInput > 0 && quantityInput < 1000 ) {
      updateQuantity(productId, quantityInput);
      displayCheckOut();
    }
    else {
      alert('Quantity should be higher than 0 and lower than 1000');
    }
    
  }

});

checkoutContainer.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const quantityInput = event.target.closest('.js-quantity-input');
    if (quantityInput) {
      const { productId } = quantityInput.dataset;
      const newValue = Number(quantityInput.value);
      if (newValue > 0 && newValue < 1000 ) {
        updateQuantity(productId, newValue);
        displayCheckOut();
      }
      else {
        alert('Quantity should be higher than 0 and lower than 1000');
      }
    }
  }
});