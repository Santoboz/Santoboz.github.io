// Fungsi untuk membuka formulir pemesanan
function openOrderForm(item) {
    document.getElementById('menu-item').value = item;
    document.getElementById('order-form').style.display = 'flex';
}

// Fungsi untuk menutup formulir pemesanan
function closeOrderForm() {
    document.getElementById('order-form').style.display = 'none';
}

// Fungsi untuk menangani pengiriman formulir pemesanan
document.getElementById('order').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    
    // Mendapatkan data formulir
    const name = form.name.value;
    const email = form.email.value;
    const menuItem = form['menu-item'].value;
    const quantity = form.quantity.value;
    const address = form.address.value;
    
    // Menampilkan pesan sukses
    alert(`Thank you, ${name}! Your order for ${quantity} x ${menuItem} has been placed. We will deliver to: ${address}`);
    
    // Menutup formulir setelah pemesanan
    closeOrderForm();
});
// Function to handle the "Order Now" button click
function orderItem(item) {
    alert("Thank you for ordering " + item + "!");
}

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    alert('Thank you for contacting us!');
    form.reset(); // Clear the form
});
