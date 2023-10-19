function toggleLike(button) {
    button.classList.toggle("liked");
}

function incrementQuantity(button) {
    const quantitySpan = button.nextElementSibling;
    const currentQuantity = parseInt(quantitySpan.textContent);
    quantitySpan.textContent = currentQuantity + 1;
    updateTotalPrice();
}

function decrementQuantity(button) {
    const quantitySpan = button.previousElementSibling;
    const currentQuantity = parseInt(quantitySpan.textContent);
    if (currentQuantity > 1) {
        quantitySpan.textContent = currentQuantity - 1;
        updateTotalPrice();
    }
}

function deleteItem(button) {
    const item = button.parentElement.parentElement;
    item.remove();
    updateTotalPrice();
}

function updateTotalPrice() {
    const prices = document.querySelectorAll(".item-details p:nth-child(2)");
    const quantities = document.querySelectorAll(".quantity");
    let totalPrice = 0;

    for (let i = 0; i < prices.length; i++) {
        const price = parseFloat(prices[i].textContent.slice(1));
        const quantity = parseInt(quantities[i].textContent);
        totalPrice += price * quantity;
    }

    document.getElementById("total-price").textContent = "$" + totalPrice.toFixed(2);
}

// Initial total price update
updateTotalPrice();