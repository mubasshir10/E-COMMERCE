// Toggle menu visibility on mobile
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

function navigateToCart() {
  window.location.href = 'cart.html'; // Replace 'cart.html' with your desired page
}
