// Login button
document.querySelector('.login').addEventListener('click', function() {
  alert('Login button clicked!');
});

// Signup button
document.querySelector('.signup').addEventListener('click', function() {
  alert('Sign up button clicked!');
});

// Email link
document.querySelectorAll('.login-by a')[0].addEventListener('click', function(event) {
  event.preventDefault();
  alert('Logging in via Email');
});

// Google link
document.querySelectorAll('.login-by a')[1].addEventListener('click', function(event) {
  event.preventDefault();
  alert('Logging in via Google');
});

// Facebook link
document.querySelectorAll('.login-by a')[2].addEventListener('click', function(event) {
  event.preventDefault();
  alert('Logging in via Facebook');
});
