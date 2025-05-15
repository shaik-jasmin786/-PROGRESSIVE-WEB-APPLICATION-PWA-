if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(() => console.log('Service Worker Registered'));
  }
  
  fetch('products.json')
    .then(res => res.json())
    .then(data => {
      const productList = document.getElementById('product-list');
      data.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>$${product.price}</p>
          <button>Add to Cart</button>
        `;
        productList.appendChild(div);
      });
    });
  