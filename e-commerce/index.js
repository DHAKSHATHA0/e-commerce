
function customAlert(message) {
  
  const alertContainer = document.createElement('div');
  alertContainer.className = 'custom-alert';


  const messageText = document.createElement('p');
  messageText.textContent = message;

  
  const closeButton = document.createElement('button');
  closeButton.textContent = 'OK';
  closeButton.onclick = () => {
    document.body.removeChild(alertContainer);
  };

  
  alertContainer.appendChild(messageText);
  alertContainer.appendChild(closeButton);

  
  document.body.appendChild(alertContainer);
}


function addToCart() {
  customAlert('Item added to your cart!');
}

const cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, image) {
  cart.push({ name, price, image });
  localStorage.setItem("cart", JSON.stringify(cart));
    customAlert('Item added to your cart!');
  
}

document.querySelectorAll(".product-card .buy-now").forEach((button, index) => {
  button.addEventListener("click", () => {
    const productCard = button.parentElement;
    const productName = productCard.querySelector("h3").innerText;
    const productPrice = parseInt(productCard.querySelector("p").innerText.replace("₹", ""));
   /* const productImage = productCard.querySelector("").src;*/

    
    const buyNowItems = JSON.parse(localStorage.getItem("buyNowItems")) || [];
    buyNowItems.push({ name: productName, price: productPrice, image: productImage });
    localStorage.setItem("buyNowItems", JSON.stringify(buyNowItems));

    alert("Product added to your orders!");
  });
});



