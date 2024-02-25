

function handleQuantityButtonClick(button, action) {
    const quantityElement = button.parentNode.querySelector('.quantity');
    let currentQuantity = parseInt(quantityElement.textContent);
  
    if (action === 'increment') {
      currentQuantity++;
    } else if (action === 'decrement' && currentQuantity > 0) {
      currentQuantity--;
    }
  
    quantityElement.textContent = currentQuantity;
  
    
    updateTotalPrice();
  }
  
  function updateTotalPrice() {
    const totalPriceElement = document.getElementById('total-price');
    const coatPrice = 200 * parseInt(document.getElementById('coat-quantity').textContent);
    const jeansPrice = 100 * parseInt(document.getElementById('jeans-quantity').textContent);
    const totalPrice = coatPrice + jeansPrice;
  
    totalPriceElement.textContent = `Total to pay: $${totalPrice}`;
  }
  