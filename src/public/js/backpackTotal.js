import { getLocalStorage } from "./utils.mjs";

export function totalInCart() {
    displayNumbefOfItems();
}

function displayNumbefOfItems() {
    const numberOfItems = getLocalStorage("so-cart");

    const totalDiv = document.createElement("span");
    totalDiv.classList.add("totalInCart");
    if (numberOfItems != null) {
        document.body.appendChild(totalDiv);
        if (numberOfItems.length > 0) {
            totalDiv.innerText = numberOfItems.length;
            totalDiv.addEventListener("click", function() {
                window.location.href = "/cart/index.html";
            })
        }
    };

}