<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $menu_item = $_POST['menu-item'];
    $quantity = $_POST['quantity'];

    // Kirim email atau simpan data ke database
    mail("email@domain.com", "Pesanan Seblak Baru", "Pesanan oleh: $name\nNo. Telepon: $phone\nMenu: $menu_item\nJumlah: $quantity");

    echo "Pesanan Anda telah diterima!";
}
?>
