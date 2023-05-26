import { setLocalStorage , getLocalStorage , getParam } from "./utils.mjs";
import { findProductById } from "./productData.mjs";
import productDetails from "./productsDetail.mjs";

const productId = getParam("product");
productDetails(productId);

function addProductToCart(product) {
  let cartItems = getLocalStorage("so-cart");

  if (!Array.isArray(cartItems)) {
    cartItems = [];
  }

  cartItems.push(product);

  setLocalStorage("so-cart", cartItems);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);

function getCartLength() {
  let cartItems = getLocalStorage("so-cart");
  return cartItems ? cartItems.length : "0";
}

const cartLength = getCartLength();
console.log(cartLength);