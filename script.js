// Define an array to store the items in the shopping cart
const cart = [];

// Function to add an item to the cart
function addToCart(productName, price) {
    const item = {
        name: productName,
        price: price,
    };
    cart.push(item);
}

// Function to display the items in the cart
function displayCart() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = ""; // Clear the previous content

    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        total += item.price;

        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(listItem)

    const totalElement = document.getElementById("cart-total");
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Add event listeners for "Add to Cart" buttons
const addToCartButton= document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const productName = button.dataset.productName;
        const price = parseFloat(button.dataset.price);
        addToCart(productName, price);
        displayCart();
    });
});

// Call the displayCart function initially to display an empty cart
displayCart();
// JavaScript code for your hero section (if needed)
// You can add interactive features here
// JavaScript code for adding products to the cart (if needed)
const addToCartButton = document.querySelectorAll('.add-to-cart');
const cart = [];

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productName = product.querySelector('h2').textContent;
        const price = parseFloat(product.querySelector('.price').textContent.replace('$', ''));

        // Add the product to the cart
        cart.push({ name: productName, price: price });
        alert(`${productName} added to the cart!`);
    });
})// JavaScript code for adding products to the cart (if needed)
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cart = [];

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productName = product.querySelector('h2').textContent;
        const price = parseFloat(product.querySelector('.price').textContent.replace('$', ''));

        // Add the product to the cart
        cart.push({ name: productName, price: price });
        alert(`${productName} added to the cart!`);
    });
});

