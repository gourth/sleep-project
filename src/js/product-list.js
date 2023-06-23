import { totalInCart } from "./backpackTotal";
import productList from "./productList.mjs";
import { getParam, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();
const category = getParam("category");
productList(".product-list", category);
totalInCart();