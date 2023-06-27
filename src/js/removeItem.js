import { getLocalStorage } from "./utils.mjs";

export function removeItem(product) {
  const removeButton = document.querySelector(".remove-item");
  if (removeButton) {
    removeButton.addEventListener("click", () => {
      const items = getLocalStorage("so-cart");

      if (product !== -1) {
        items.splice(product, 1);
        localStorage.setItem("so-cart", JSON.stringify(items));
        location.reload();
      }
    });
  } else {
    document.querySelector(".product-list").innerHTML = "Your cart is empty";
  }
}