const findElementById = (id) => {
  return document.getElementById(id);
};

const addProduct = () => {
  const productField = findElementById("product-name").value;
  const productQuantity = findElementById("product-quantity").value;
  displayProduct(productField, productQuantity);
  saveProductToLocalStorage(productField, productQuantity);

  findElementById("product-name").value = "";
  findElementById("product-quantity").value = "";
};

const displayProduct = (product, quantity) => {
  const li = document.createElement("li");
  li.innerText = `${product}: ${quantity}`;

  findElementById("product-container").appendChild(li);
};

const getStoredShoppingCart = () => {
  let cart = {};
  const storeCart = localStorage.getItem("cart");
  if (storeCart) {
    cart = JSON.parse(storeCart);
  }
  return cart;
};

const saveProductToLocalStorage = (product, quantity) => {
  const cart = getStoredShoppingCart();

  cart[product] = quantity;
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart",cartStringified)
};

const displayProductFromLocalStorage = () =>{
    const saveCart = getStoredShoppingCart();
    for (const product in saveCart) {
        const quantity = saveCart[product]
        displayProduct(product,quantity)
    }

}
displayProductFromLocalStorage()
