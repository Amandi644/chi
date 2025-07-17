const removeCartItemButtons = document.querySelectorAll('.btn-danger');
console.log(removeCartItemButtons);

for (let i = 0; i < removeCartItemButtons.length; i++) {
  const button = removeCartItemButtons[i];
  button.addEventListener('click', 
    function (event) {
    const buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
  });
}

function updateCartTotal() {
  const cartItemContainer = document.querySelector('.cart-items'); // no [0] needed
  const cartRows = cartItemContainer.querySelectorAll('.cart-rows'); // select ALL rows

  let total = 0;

  for (let i = 0; i < cartRows.length; i++) {
    const cartRow = cartRows[i];
    const priceElement = cartRow.querySelector('.cart-price');
    const quantityElement = cartRow.querySelector('.cart-quantity-input');

    const price = parseFloat(priceElement.innerText.replace('$', ''));
    const quantity = parseInt(quantityElement.value);

    total += price * quantity;
  }

  total = Math.round(total * 100) / 100; // optional: round to 2 decimal places
  document.querySelector('.cart-total-price').innerText = '$' + total;
}
function handleCheckout (){
  alert('We Thank You for Your Purchase');
  const cartItems = document.querySelector('.cart-items');
  cartItems.innerHTML = ''; // ✅ This clears all items from the cart
  updateCartTotal();        // ✅ This sets total to $0.00
}