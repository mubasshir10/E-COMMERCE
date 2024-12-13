function addToCart(product, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    const existingProduct = cart.find(item => item.product === product);
    if (existingProduct) {
      existingProduct.quantity += 1; 
    } else {
      cart.push({ product, price, quantity: 1 }); 
    }
  
    
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
      const product = e.target.getAttribute('data-product');
      const price = parseFloat(e.target.getAttribute('data-price'));
  
      addToCart(product, price);
      alert(`${product} added to cart!`);
    });
  });
  
  function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
  
    cartItemsContainer.innerHTML = '';
  
    let total = 0;
    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <p>${item.product} - $${item.price} x ${item.quantity}</p>
        <button class="remove-item" data-product="${item.product}">Remove</button>
      `;
      cartItemsContainer.appendChild(cartItem);
      total += item.price * item.quantity;
    });
  
    cartTotal.innerText = total.toFixed(2);
  
    document.querySelectorAll('.remove-item').forEach(button => {
      button.addEventListener('click', (e) => {
        const product = e.target.getAttribute('data-product');
        removeFromCart(product);
        displayCart();
      });
    });
  }
  
  function removeFromCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.product !== product);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  if (document.getElementById('cart-items')) {
    displayCart();
  }
  

const cartItems = [
  { name: 'T-shirt', price: 20, quantity: 2 },
  { name: 'Jeans', price: 40, quantity: 1 }
];

const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

function updateCart() {
  let total = 0;
  cartItemsContainer.innerHTML = ''; 

  cartItems.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('cart-item');
    itemElement.innerHTML = `
      <p>${item.name}</p>
      <p>Price: $${item.price}</p>
      <p>Quantity: ${item.quantity}</p>
      <p>Total: $${item.price * item.quantity}</p>
    `;
    cartItemsContainer.appendChild(itemElement);
    total += item.price * item.quantity;
  });

  cartTotal.textContent = total.toFixed(2); 
}

updateCart();
