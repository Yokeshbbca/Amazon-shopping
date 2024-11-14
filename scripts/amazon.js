import {updateCartQuantity, cart, updateCart, displayingCartText} from "../data/cart.js"
import {products} from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

let htmlMaker = "";

products.forEach((product) => {
  
  htmlMaker += `
  <div class="product">
    <div class="product-image">
      <img src="${product.image}">
    </div>
    <div class="product-name">${product.name}</div>
    <div class="product-rating">
      <img src="images/ratings/rating-${product.rating.stars}.png">
      <div>${product.rating.count}</div>
    </div>
    <div class="product-price">$${formatCurrency(product.priceCents)}</div>
    <div class="product-quantity">
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
    </div>
    <div class="js-product-added product-added" data-id="${product.id}">
    </div>
    <div class="cart-btn">
      <button class="js-addToCart" data-id="${product.id}">Add to Cart</button>
    </div>
  </div>`;

  document.querySelector('.js-container')
  .innerHTML = htmlMaker; 

  
  document.querySelectorAll('.js-addToCart')
  .forEach((buttonElement) => {
    
    buttonElement.addEventListener('click', () => {
      const productId = buttonElement.dataset.id;

      updateCart(productId);

      document.querySelectorAll('.js-product-added')
      .forEach((displayCart) => {
        const displayID = displayCart.getAttribute("data-id");
        const buttonElementID = buttonElement.getAttribute("data-id");
      
        displayingCartText(displayID, buttonElementID, displayCart);

      });
      
      updateCartQuantity();
    });
  });    
});
