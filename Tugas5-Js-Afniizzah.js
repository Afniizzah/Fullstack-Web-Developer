// Data Produk
let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Tablet", harga: 7000000 },
    { id: 4, nama: "Headphone", harga: 1500000 },
    { id: 5, nama: "Smartwatch", harga: 3000000 }
];

// Event Handler
const eventHandler = {
    tambah: (id, nama, harga) => console.log(`Menambahkan Produk: ID=${id}, Nama=${nama}, Harga=${harga}`),
    hapus: (id) => console.log(`Menghapus Produk dengan ID: ${id}`),
    tampil: () => console.log("Menampilkan Semua Produk:")
};

// Menambahkan Produk dengan Spread Operator
function tambahProduk(id, nama, harga) {
    produkList = [...produkList, { id, nama, harga }];
    eventHandler.tambah(id, nama, harga);
}

// Menghapus Produk dengan Rest Parameter
function hapusProduk(id) {
    produkList = produkList.filter(produk => produk.id !== id);
    eventHandler.hapus(id);
}

// Menampilkan Produk dengan Destructuring
function tampilkanProduk() {
    eventHandler.tampil();
    produkList.forEach(({ id, nama, harga }) => {
        console.log(`ID: ${id}, Nama: ${nama}, Harga: ${harga}`);
    });
}

// Contoh penggunaan fungsi
tambahProduk(6, "Monitor", 2500000);
tampilkanProduk();
hapusProduk(2);
tampilkanProduk();
