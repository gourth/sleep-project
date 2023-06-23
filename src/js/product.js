import { getParam } from "./utils.mjs";
import productDetails from "./productDetails.mjs";
import { totalInCart } from "./backpackTotal";

const productId = getParam("product");
productDetails(productId);
totalInCart();