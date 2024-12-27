const cartButtons = document.querySelectorAll('.add-to-cart');
cartButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'login.html';
  });
});
