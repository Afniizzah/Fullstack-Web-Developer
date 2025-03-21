// Kelas untuk kendaraan
class Kendaraan {
    constructor(merk, tipe) {
        this.merk = merk;
        this.tipe = tipe;
    }
}

// Kelas untuk pelanggan
class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null; // Awalnya tidak ada kendaraan yang disewa
    }

    // Metode untuk mencatat transaksi penyewaan kendaraan
    sewaKendaraan(kendaraan) {
        this.kendaraanDisewa = kendaraan;
        console.log(`${this.nama} telah menyewa kendaraan ${kendaraan.merk} ${kendaraan.tipe}.`);
    }

    // Metode untuk mengembalikan kendaraan
    kembalikanKendaraan() {
        console.log(`${this.nama} telah mengembalikan kendaraan ${this.kendaraanDisewa.merk} ${this.kendaraanDisewa.tipe}.`);
        this.kendaraanDisewa = null; // Mengatur kendaraan disewa menjadi null
    }
}

// Kelas untuk sistem manajemen transportasi
class SistemManajemenTransportasi {
    constructor() {
        this.pelangganList = []; // Daftar pelanggan
    }

    // Metode untuk menambahkan pelanggan
    tambahPelanggan(pelanggan) {
        this.pelangganList.push(pelanggan);
    }

    // Metode untuk menampilkan daftar pelanggan yang sedang menyewa kendaraan
    tampilkanPelangganSewa() {
        console.log("Daftar Pelanggan yang Sedang Menyewa Kendaraan:");
        this.pelangganList.forEach(pelanggan => {
            if (pelanggan.kendaraanDisewa) {
                console.log(`- Nama: ${pelanggan.nama}, Nomor Telepon: ${pelanggan.nomorTelepon}, Kendaraan: ${pelanggan.kendaraanDisewa.merk} ${pelanggan.kendaraanDisewa.tipe}`);
            }
        });
    }
}

// Contoh penggunaan
const sistem = new SistemManajemenTransportasi();

// Membuat beberapa kendaraan
const kendaraan1 = new Kendaraan("Toyota", "Avanza");
const kendaraan2 = new Kendaraan("Honda", "Civic");

// Membuat beberapa pelanggan
const pelanggan1 = new Pelanggan("John Doe", "08123456789");
const pelanggan2 = new Pelanggan("Jane Smith", "08987654321");

// Menambahkan pelanggan ke sistem
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);

// Pelanggan menyewa kendaraan
pelanggan1.sewaKendaraan(kendaraan1);
pelanggan2.sewaKendaraan(kendaraan2);

// Menampilkan daftar pelanggan yang sedang menyewa kendaraan
sistem.tampilkanPelangganSewa();

// Pelanggan mengembalikan kendaraan
pelanggan1.kembalikanKendaraan();

// Menampilkan daftar pelanggan yang sedang menyewa kendaraan setelah pengembalian
sistem.tampilkanPelangganSewa();