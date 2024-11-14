import { cart, removeCartItem, updateDeliveryOption } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { deliveryOptions, getDeliveryOption } from "../../data/deliveryOptions.js";
import { renderPaymentSummary } from "./paymentSummary.js";


export function renderOrderSummary() {
  let checkOutHtml = "";
  let cartDisplayQuantity = 0;

  const today = new dayjs();

  cart.forEach((cartItem) => {
    
    const matchingProduct = getProduct(cartItem.productId);

    let matchingDelivery = getDeliveryOption(cartItem.deliveryOptionId);

    const deliveryDate = today.add(matchingDelivery.deliveryDays, 'days');
    const deliveryString = deliveryDate.format('dddd, MMMM D');

    checkOutHtml += `
    <div class="cart-container js-cart-container-${matchingProduct.id}">
      <div class="delivery-date">Delivery date: ${deliveryString} </div>
      <div class="product-details-container">
        <div class="product-image">
          <img src="${matchingProduct.image}">
        </div>
        <div class="product-details">
          <div class="product-name">${matchingProduct.name}</div>
          <div class="product-price">$${formatCurrency(matchingProduct.priceCents)}</div>
          <div class="product-quantity">Quantity: 
          <span class="js-cart-product-quantity-${matchingProduct.id}">${cartItem.quantity}</span> 
          <a class="js-update-link" data-product-id="${matchingProduct.id}">Update</a>
          <a class="js-delete-link" data-product-id="${matchingProduct.id}">Delete</a></div>
        </div>
        <div>
          <div class="delivery-option-container">
            Choose a delivery option :
          </div>
          <div class="delivery-options">
          ${deliveryOptionsHTML(matchingProduct, cartItem)}
          </div>
        </div>
      </div>
    </div>`;

    cartDisplayQuantity += 1;
    document.querySelector(".js-cart-checkout-quantity").innerHTML = cartDisplayQuantity;

    document.querySelector('.js-cart-container')
    .innerHTML = checkOutHtml;

    document.querySelectorAll(".js-delete-link")
    .forEach((link) => {
      const productId = link.dataset.productId;

      link.addEventListener("click", () => {
        removeCartItem(productId);
      
        const container = document.querySelector(`.js-cart-container-${productId}`);
        container.remove();

        renderPaymentSummary();
        renderOrderSummary();
      });
    });
  });


  function deliveryOptionsHTML(matchingProduct, cartItem) {
    let deliveryOptionHTML = "";

    deliveryOptions.forEach((deliveryOption) => {
      const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
      const deliveryString = deliveryDate.format('dddd, MMMM D');

      let deliveryPriceCents = deliveryOption.priceCents === 0 
      ? 'FREE'
      : formatCurrency(deliveryOption.priceCents);

      let isChecked = deliveryOption.id === cartItem.deliveryOptionId
      ? "checked"
      : "";

      deliveryOptionHTML +=  `
      <div class="js-delivery-option-radio" data-product-id="${matchingProduct.id}"
      data-delivery-option-id="${deliveryOption.id}">
      <input type="radio" ${isChecked} 
      name="delivery-options-${matchingProduct.id} data-product-id="${matchingProduct.id} ">
      <label for="delivery-option1">${deliveryString} <br>
      <span>${deliveryPriceCents} - Shipping</span>
      </label><br>
      </div>
      `;
    });

    return deliveryOptionHTML;
  }

  document.querySelectorAll(".js-delivery-option-radio")
    .forEach((element) => {

      element.addEventListener('click', () => {
        const {productId, deliveryOptionId} = element.dataset;

        updateDeliveryOption(productId, deliveryOptionId);
        renderOrderSummary();
        renderPaymentSummary();
      });
    });
}
