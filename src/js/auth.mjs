import { loginRequest } from "./externalServices.mjs";
import { alertMessage, getLocalStorage, setLocalStorage } from "./utils.mjs";
import jwt_decode from "jwt-decode";

const tokenKey = "so-token";

function isTokenValid(token) {
    // if we have a token
  if (token) {
    const decoded = jwt_decode(token);
    // get the current date
    let currentDate = new Date();
    // check if the token is expired
    if (decoded.exp * 1000 < currentDate.getTime()) {
        // token expired
      console.log("Token expired.");
      return false;
    } else {
        // token is valid
      console.log("Valid token");
      return true;
    }

  } else return false;
}

export function checkLogin() {
    // get the token from local storage
  const token = getLocalStorage(tokenKey);
    // check if the token is valid
  const valid = isTokenValid(token);

  if (!valid) {
    // if the token is not valid, remove it from local storage
    localStorage.removeItem(tokenKey);
    // get the current location
    const location = window.location;
    console.log(location);
    // redirect to the login page
    window.location = `/login/index.html?redirect=${location.pathname}`;
  } else return token; // return the token
}

export async function login(creds, redirect = "/") {
  try {
    const token = await loginRequest(creds);
    setLocalStorage(tokenKey, token);
    window.location = redirect;
  } catch (err) {
    alertMessage(err.message.message);
  }
}