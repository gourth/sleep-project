import { getParam, setLocalStorage } from "./utils.mjs";
import { getLocalStorage } from "./utils.mjs";
import { findProductById } from "./productData.mjs";
import productDetails from "./productDetails.mjs";

const productId = getParam("product")
productDetails(productId);

function addProductToCart(product) {
  let cartItems = getLocalStorage("so-cart", product);

  if (!cartItems) {
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