// Daftar produk yang tersedia di toko
let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// Fungsi untuk menambahkan produk baru
function tambahProduk(nama, harga, stok) {
    const idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
    const produkBaru = { id: idBaru, nama: nama, harga: harga, stok: stok };
    produkToko.push(produkBaru);
    console.log(`Produk ${nama} berhasil ditambahkan.`);
}

// Fungsi untuk menghapus produk berdasarkan id
function hapusProduk(id) {
    const index = produkToko.findIndex(produk => produk.id === id);
    if (index !== -1) {
        const produkDihapus = produkToko.splice(index, 1);
        console.log(`Produk ${produkDihapus[0].nama} berhasil dihapus.`);
    } else {
        console.log(`Produk dengan ID ${id} tidak ditemukan.`);
    }
}

// Fungsi untuk menampilkan daftar produk
function tampilkanProduk() {
    console.log("Daftar Produk:");
    produkToko.forEach(produk => {
        console.log(`ID: ${produk.id}, Nama: ${produk.nama}, Harga: ${produk.harga}, Stok: ${produk.stok}`);
    });
}

// Contoh penggunaan
tampilkanProduk(); // Menampilkan daftar produk awal

tambahProduk("Monitor", 3000000, 4); // Menambahkan produk baru
tampilkanProduk(); // Menampilkan daftar produk setelah penambahan

hapusProduk(2); // Menghapus produk dengan ID 2
tampilkanProduk(); // Menampilkan daftar produk setelah penghapusan