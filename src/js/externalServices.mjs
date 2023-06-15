const baseURL = import.meta.env.VITE_SERVER_URL;
<<<<<<< HEAD:src/js/externalServices.mjs
async function convertToJson(res) {
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw { name: "servicesError", message: data };
=======
function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
>>>>>>> 351967d9b46b8cbf0e20d5f679e2652d2f361608:src/public/js/externalServices.mjs
  }
}

export async function getProductsByCategory(category) {
  const response = await fetch(baseURL + `products/search/${category}`);
  const data = await convertToJson(response);
  return data.Result;
}

export async function findProductById(id) {
  const response = await fetch(baseURL + `product/${id}`);
  const product = await convertToJson(response);
  return product.Result;
}

export async function checkout(payload) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  return await fetch(baseURL + "checkout/", options).then(convertToJson);
<<<<<<< HEAD:src/js/externalServices.mjs
}
=======
}
>>>>>>> 351967d9b46b8cbf0e20d5f679e2652d2f361608:src/public/js/externalServices.mjs
