import { findProductById } from "./externalServices.mjs";
<<<<<<< HEAD:src/js/productDetails.mjs
import { setLocalStorage, getLocalStorage, alertMessage } from "./utils.mjs";
=======
import { setLocalStorage, getLocalStorage } from "./utils.mjs";
>>>>>>> 351967d9b46b8cbf0e20d5f679e2652d2f361608:src/public/js/productsDetail.mjs

let product = {};

export default async function productDetails(productId) {
  // get the details for the current product. findProductById will return a promise! use await or .then() to process it
  product = await findProductById(productId);
  // once we have the product details we can render out the HTML
  renderProductDetails();
  // once the HTML is rendered we can add a listener to Add to Cart button
  document.getElementById("addToCart").addEventListener("click", addToCart);
}
function addToCart() {
  let cartContents = getLocalStorage("so-cart");
  //check to see if there was anything there
  if (!cartContents) {
    cartContents = [];
  }
  // then add the current product to the list
  cartContents.push(product);
  setLocalStorage("so-cart", cartContents);
<<<<<<< HEAD:src/js/productDetails.mjs
  alertMessage(`${product.NameWithoutBrand} added to cart!`);
=======
>>>>>>> 351967d9b46b8cbf0e20d5f679e2652d2f361608:src/public/js/productsDetail.mjs
}
function renderProductDetails() {
  document.querySelector("#productName").innerText = product.Brand.Name;
  document.querySelector("#productNameWithoutBrand").innerText =
    product.NameWithoutBrand;
  document.querySelector("#productImage").src = product.Images.PrimaryLarge;
  document.querySelector("#productImage").alt = product.Name;
  document.querySelector("#productFinalPrice").innerText = product.FinalPrice;
  document.querySelector("#productColorName").innerText =
    product.Colors[0].ColorName;
  document.querySelector("#productDescriptionHtmlSimple").innerHTML =
    product.DescriptionHtmlSimple;
  document.querySelector("#addToCart").dataset.id = product.Id;
}
