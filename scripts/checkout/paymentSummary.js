import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { formatCurrency } from "../utils/money.js";
import { renderOrderSummary } from "./orderSummary.js";

export function renderPaymentSummary() {
  let paymentHtml = "";
  let productPriceCents = 0;
  let deliveryPriceCents = 0;
  let cartDisplayQuantity = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    deliveryPriceCents += deliveryOption.priceCents;

    cartDisplayQuantity++;
  });

  const totalBeforeTax = productPriceCents + deliveryPriceCents;
  const taxCents = totalBeforeTax * 0.1;
  const totalPriceCents = totalBeforeTax + taxCents;

  paymentHtml += `
    <div class="checkout-details">
      <div class="order-summary">Order Summary</div>
      <div class="checkout-div1">
        <div>Items (${cartDisplayQuantity}): </div> <div>$${formatCurrency(productPriceCents)}</div>
      </div>
      <div class="checkout-div2">
        <div>Shipping & handling:</div> <div>$${formatCurrency(deliveryPriceCents)}</div>
      </div>
      <div class="checkout-div3">
        <div>Total before Tax:</div> <div>$${formatCurrency(totalBeforeTax)}</div>
      </div>
      <div class="checkout-div4">
        <div>Estimated Tax (10%):</div> <div>$${formatCurrency(taxCents)}</div>
      </div>
      <div class="checkout-div5">
        <div>Order Total:</div> <div>$${formatCurrency(totalPriceCents)}</div>
      </div>
      <div class="payment-method">Use PayPal<input type="checkbox"></div>
      <button class="order-button">Place your Order</button>
    </div>
  `;

  document.querySelector('.js-checkout-container')
  .innerHTML = paymentHtml;

  renderOrderSummary();
}