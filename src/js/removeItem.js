
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