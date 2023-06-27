import { loadHeaderFooter } from "./utils.mjs";
import shoppingCart from "./shoppingCart.mjs";
import { totalInCart } from "./backpackTotal";
import { removeItem } from "./removeItem";

loadHeaderFooter();
shoppingCart();
totalInCart();
removeItem();