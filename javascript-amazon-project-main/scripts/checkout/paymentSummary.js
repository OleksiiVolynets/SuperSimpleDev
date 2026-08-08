import { cartTotalQuantity, cart } from '../../data/cart.js'
import { formatCurrency } from '../utils/money.js';
import { products } from '../../data/products.js';
import { deliveryTime } from '../../data/deliveryTime.js'



const checkoutSummary = document.querySelector('.js-payment-summary');

export function displayCheckoutSummary(){
  let itemsPrice = 0;
  let deliveryPrice = 0;
  cart.forEach((cartItem) => {
      let matchingItem = products.find( productItem => productItem.id === cartItem.productId);
      let selectedDeliveryOption = deliveryTime.find( deliveryItem => deliveryItem.deliveryId === cartItem.deliveryOptionId);
      deliveryPrice += selectedDeliveryOption.deliveryPriceCents;
      itemsPrice += matchingItem.priceCents * cartItem.quantity;})
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
  </button>`}