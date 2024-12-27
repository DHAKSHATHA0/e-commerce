
  
  // Set Order Placed and Delivery Dates
  const placedDate = new Date();
  const deliveryDate = new Date();
  deliveryDate.setDate(placedDate.getDate() + 5); // Example: Delivery in 5 days
  
  document.getElementById("placed-date").textContent = placedDate.toLocaleDateString();
  document.getElementById("delivery-date").textContent = deliveryDate.toLocaleDateString();
  
// Function to load order details from localStorage
function loadOrderDetails() {
  // Get the order items and total amount from localStorage
  const orderItems = JSON.parse(localStorage.getItem("orderItems")) || [];
  const totalAmount = orderItems.reduce((sum, item) => sum + item.price, 0);

  // Display the items in the order
  const orderList = document.getElementById("order-list");
  orderList.innerHTML = ""; // Clear existing items
  orderItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    orderList.appendChild(li);
  });

  // Display the total amount
  document.getElementById("total-amount").textContent = totalAmount.toFixed(2);
}

// Redirect to a confirmation page on "Proceed to Buy"
document.getElementById("proceed-to-buy").addEventListener("click", function () {
  alert("Your order has been placed successfully!");
  localStorage.removeItem("orderItems"); // Clear order items after proceeding
  window.location.href = "confirmation.html"; // Replace with your confirmation page
});

// Load order details when the page loads
document.addEventListener("DOMContentLoaded", loadOrderDetails);
