document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get the username and password from the form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Check if the username and password match the desired values
    if (username === 'abc@gmail.com' && password === '1234') {
      // Redirect to the homepage
      window.location.href = 'home.html';
    } else {
      // If credentials are incorrect, you can display an error message or handle it accordingly
      alert('Invalid username or password. Please try again.');
    }
  });
  