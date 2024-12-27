
 
 /*// Retrieve cart data from localStorage
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
      <img src="${item.image}" alt="${item.name}">
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
  */
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
  function buyNowItems() {
    customAlert('Proceeding to place order');
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
     /* const productImage = productCard.querySelector("C:\Users\DHAKSHATHA SELVARAJ\OneDrive\Desktop\e-commerce\img1.jpg").src;*/
  
      
      const buyNowItems = JSON.parse(localStorage.getItem("buyNowItems")) || [];
      buyNowItems.push({ name: productName, price: productPrice, image: productImage });
      localStorage.setItem("buyNowItems", JSON.stringify(buyNowItems));
  
      alert("Product added to your orders!");
    });
  });
  
  


  