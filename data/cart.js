let isProductAdded = false;
let cartQuantity = 0;


export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart) {
  cart = [
    {
      productId : "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity : 1,
      deliveryOptionId : "1"
    }, {
      productId : "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
      deliveryOptionId : "2"
    }
  ];
}

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}


export function updateCartQuantity() {
  const cartItemElement = document.querySelector('.js-cart-quantity');
  
  cartQuantity += 1;
  cartItemElement.innerHTML = cartQuantity;
}


export function updateCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {

    if(productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if(matchingItem) {
    matchingItem.quantity += 1;
  }
  else {
    cart.push({
      productId : productId,
      quantity : 1,
      deliveryOptionId : "1"
    });
  }

  saveToStorage();
}


export function removeCartItem(productId) {
  let newCart = [];

  cart.forEach((cartItem) => {

    if(cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  saveToStorage();
}


export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if(productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}



export function displayingCartText(displayID, buttonElementID, displayCart) {
  if(displayID === buttonElementID) {

    const displaying = setInterval((display) => {

      if(!isProductAdded) {
        displayCart.innerHTML = "✔ Added";
        isProductAdded = true;
      }
      else {
        clearInterval(displaying);
        displayCart.innerHTML = "";
        isProductAdded = false;
      }
    }, 1000);
  }
}