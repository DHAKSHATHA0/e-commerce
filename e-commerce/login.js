document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
      customAlert('Login successful!');
      window.location.href = 'index.html';
    } else {
      customAlert('Please enter both username and password.');
    }
  });
  document.getElementById("loginButton").addEventListener("click", () => {
    customAlert("Login successfully!");
  });
  
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
  customAlert('Login successfully!');
}

  
  