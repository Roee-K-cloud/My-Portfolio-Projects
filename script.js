const products = [
    { id: 1, name: "T-Shirt", price: 25000 },
    { id: 2, name: "Sneakers", price: 70000 },
    { id: 3, name: "Watch", price: 105000 }
  ];

  let cart = [];

  function renderProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <div>${product.name} - ${product.price} MMK</div>
        <button onclick="addToCart(${product.id})">Add</button>
      `;
      productList.appendChild(div);
    });
  }

  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
      cartItem.qty++;
    } else {
      cart.push({...product, qty: 1});
    }
    renderCart();
  }

  function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const totalEl = document.getElementById('total');
    cartItems.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
      total += item.price * item.qty;
      const li = document.createElement('li');
      li.textContent = `${item.name} (x${item.qty})`;
      const priceSpan = document.createElement('span');
      priceSpan.textContent = `${item.price * item.qty} MMK`;
      li.appendChild(priceSpan);
      cartItems.appendChild(li);
    });

    totalEl.textContent = `Total: ${total} MMK`;
  }

  renderProducts();
  renderCart();