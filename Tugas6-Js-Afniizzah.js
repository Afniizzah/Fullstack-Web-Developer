// combined.js

// Array data
const data = [
    { nama: "Alice", umur: 25, alamat: "Jakarta", email: "alice@example.com" },
    { nama: "Bob", umur: 30, alamat: "Bandung", email: "bob@example.com" },
    { nama: "Charlie", umur: 28, alamat: "Surabaya", email: "charlie@example.com" },
    { nama: "Diana", umur: 22, alamat: "Medan", email: "diana@example.com" },
    { nama: "Ethan", umur: 35, alamat: "Bali", email: "ethan@example.com" },
    { nama: "Fiona", umur: 27, alamat: "Yogyakarta", email: "fiona@example.com" },
    { nama: "George", umur: 31, alamat: "Semarang", email: "george@example.com" },
    { nama: "Hannah", umur: 29, alamat: "Palembang", email: "hannah@example.com" },
    { nama: "Ian", umur: 26, alamat: "Makassar", email: "ian@example.com" },
    { nama: "Julia", umur: 24, alamat: "Banjarmasin", email: "julia@example.com" },
    // Menambahkan 2 data lagi
    { nama: "Kevin", umur: 32, alamat: "Batam", email: "kevin@example.com" },
    { nama: "Laura", umur: 23, alamat: "Pekanbaru", email: "laura@example.com" }
];

// Fungsi untuk melihat data
const viewData = () => {
    console.log("Data Saat Ini:");
    data.forEach(item => {
        console.log(`Nama: ${item.nama}, Umur: ${item.umur}, Alamat: ${item.alamat}, Email: ${item.email}`);
    });
};

// Fungsi untuk menambah data
const addData = (newData) => {
    data.push(newData);
    console.log("Data berhasil ditambahkan!");
};

// Fungsi untuk menghapus data berdasarkan nama
const deleteData = (name) => {
    const index = data.findIndex(item => item.nama === name);
    if (index !== -1) {
        data.splice(index, 1);
        console.log(`${name} telah berhasil dihapus!`);
    } else {
        console.log(`${name} tidak ditemukan!`);
    }
};

// Contoh penggunaan
console.log("Data Awal:");
viewData(); // Melihat data yang ada

// Menambahkan data baru
addData({ nama: "Mike", umur: 29, alamat: "Jakarta", email: "mike@example.com" });
addData({ nama: "Nina", umur: 21, alamat: "Bandung", email: "nina@example.com" });

// Melihat data setelah penambahan
console.log("\nData Setelah Penambahan:");
viewData();

// Menghapus entri data
deleteData("Alice");

// Melihat data setelah penghapusan
console.log("\nData Setelah Penghapusan:");
viewData();