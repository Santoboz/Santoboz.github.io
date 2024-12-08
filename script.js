// Mengupdate harga dan total saat pilihan menu atau jumlah diubah
document.getElementById("menu-item").addEventListener("change", updatePrice);
document.getElementById("quantity").addEventListener("input", updatePrice);

function updatePrice() {
    var menuItem = document.getElementById("menu-item").value;
    var quantity = document.getElementById("quantity").value;
    var price = 0;

    if (menuItem === "seblak-original") {
        price = 20000; // Harga Seblak Original
    } else if (menuItem === "seblak-ceker") {
        price = 25000; // Harga Seblak Ceker
    } else if (menuItem === "seblak-mie") {
        price = 22000; // Harga Seblak Mie
    }

    var total = price * quantity;

    // Update harga dan total
    document.getElementById("price").textContent = "Rp " + price.toLocaleString();
    document.getElementById("total").textContent = "Rp " + total.toLocaleString();
}
