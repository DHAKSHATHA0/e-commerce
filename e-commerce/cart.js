// Retrieve cart data from localStorage
const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

// Function to render the cart items
function renderCartItems() {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalAmountElement = document.getElementById("total-amount");
  let totalAmount = 0;

  cartItemsContainer.innerHTML = ""; // Clear existing items

  cartItems.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

  cartItem.innerHTML = `
     
      <div class="details">
        <h3>${item.name}</h3>            
        <p>Price: ₹${item.price}</p>
      </div>
      <button class="remove-item" data-index="${index}">Remove</button>
    `;

    cartItemsContainer.appendChild(cartItem);
    totalAmount += parseInt(item.price, 10);
  });
  

  totalAmountElement.textContent = totalAmount;

  // Add remove functionality
  const removeButtons = document.querySelectorAll(".remove-item");
  removeButtons.forEach((button) =>
    button.addEventListener("click", (event) => {
      const index = event.target.getAttribute("data-index");
      cartItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      renderCartItems(); // Re-render cart items
    })
  );
}

// Initialize cart on page load
renderCartItems();






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

document.getElementById("buy-now").addEventListener("click", function () {
  // Assume `cartTotal` holds the total amount calculated in the cart
  const cartTotal = document.getElementById("total-price").textContent;

  // Save the total amount to localStorage
  localStorage.setItem("totalmount", cartTotal);

  // Redirect to the Your Order page
  window.location.href = "your order.html";
});



document.getElementById("buy-now").addEventListener("click", function () {
  // Get cart items from localStorage or initialize an empty array
  const orderItems = JSON.parse(localStorage.getItem("orderItems")) || [];

  // Example item structure
  const cartItems = [
    { name: "Product 1", price: 500 },
    { name: "Product 2", price: 300 },
  ]; // Replace with your cart logic

  // Add cart items to the order
  orderItems.push(...cartItems);

  // Save updated order items to localStorage
  localStorage.setItem("orderItems", JSON.stringify(orderItems));

  // Redirect to the Your Order page
  window.location.href = "your order.html";
});
