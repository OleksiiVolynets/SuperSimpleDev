import { cartTotalQuantity } from '../../data/cart.js'
import { formatCurrency } from '../utils/money.js'


const checkoutSummary = document.querySelector('.js-payment-summary');

export function displayCheckoutSummary(itemsPrice, deliveryPrice){
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