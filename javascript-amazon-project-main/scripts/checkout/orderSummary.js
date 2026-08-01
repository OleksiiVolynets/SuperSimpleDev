import { addToCart, cart, cartTotalQuantity, deleteFromCart, updateQuantity, updateCartDelivery } from '../../data/cart.js';
import { products } from '../../data/products.js';
import { formatCurrency } from '../utils/money.js';
import { deliveryTime } from '../../data/deliveryTime.js'
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js"
function dateFormat(number) {
  return dayjs().add(number, 'days').format('dddd, MMMM D');
}
const checkoutItemsNumber = document.querySelector('.js-return-to-home-link');
checkoutItemsNumber.innerHTML = cartTotalQuantity() + ' items';
const checkoutContainer = document.querySelector('.js-order-summary');
const checkoutSummary = document.querySelector('.js-payment-summary')


export function displayCheckOut() {
  console.log(cart)
  checkoutItemsNumber.innerHTML = cartTotalQuantity() + ' items';
  let checkoutItemsHTML = '';
  let itemsPrice = 0;
  let deliveryPrice = 0;
  cart.forEach((cartItem) => {
    let matchingItem = products.find( productItem => productItem.id === cartItem.productId);
    let selectedDeliveryOption = deliveryTime.find( deliveryItem => deliveryItem.deliveryId === cartItem.deliveryOptionId);
    deliveryPrice += selectedDeliveryOption.deliveryPriceCents;
    let deliveryOptionsHTML = '';
    itemsPrice += matchingItem.priceCents * cartItem.quantity;
    deliveryTime.forEach((deliveryOption) => {
    const isChecked = deliveryOption.deliveryId === cartItem.deliveryOptionId ? 'checked' : '';
    
    const priceString = deliveryOption.deliveryPriceCents === 0
      ? 'FREE Shipping'
      : `$${formatCurrency(deliveryOption.deliveryPriceCents)} - Shipping`;

    
    deliveryOptionsHTML += `
      <div class="delivery-option js-delivery-option" data-product-id="${matchingItem.id}" data-delivery-option-id="${deliveryOption.deliveryId}">
        <input type="radio" 
          ${isChecked}
          class="delivery-option-input"
          name="delivery-option-${matchingItem.id}">
        <div>
          <div class="delivery-option-date">
            ${dateFormat(deliveryOption.daysToDeliver)}
          </div>
          <div class="delivery-option-price">
            ${priceString}
          </div>
        </div>
      </div>
    `;})



    checkoutItemsHTML += `<div class="cart-item-container js-cart-item-container">
              <div class="delivery-date">
                Delivery date: ${dateFormat(selectedDeliveryOption .daysToDeliver)}
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
                  ${deliveryOptionsHTML}
                </div>
              </div>
            </div>`
  })
  checkoutContainer.innerHTML = checkoutItemsHTML;
  const totalBeforeTaxCents = itemsPrice + deliveryPrice;
  const taxCents = totalBeforeTaxCents * 0.1;
  const totalCents = totalBeforeTaxCents + taxCents;
  checkoutSummary.innerHTML=`<div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${cartTotalQuantity()}):</div>
            <div class="payment-summary-money">$${formatCurrency(itemsPrice)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(deliveryPrice)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency((totalCents))}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>`
}
displayCheckOut();

checkoutContainer.addEventListener('click', (event) => {
  const deleteBtn = event.target.closest('.js-delete-quantity-link');
  const updateBtn = event.target.closest('.js-update-quantity-link');
  const saveBtn = event.target.closest('.js-save-quantity-link');
  const dateInput = event.target.closest('.js-delivery-option')
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
  if (dateInput) {
    const { productId, deliveryOptionId } = dateInput.dataset;
    updateCartDelivery (productId, deliveryOptionId);
    displayCheckOut();
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