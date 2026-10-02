// 1. Data 10 Barang (Array of Objects)
let daftarBarang = [
  { nama: "Ramen", harga: 18500 },
  { nama: "Pizza", harga: 25000 },
  { nama: "Fried Rice", harga: 11000 },
  { nama: "Burger", harga: 15000 },
  { nama: "Fried Chicken", harga: 13500 },
  { nama: "Dimsum", harga: 15500 },
  { nama: "Lemon tea", harga: 5000 },
  { nama: "Coffe Latte", harga: 8000 },
  { nama: "Matcha", harga: 18000 },
  { nama: "Water", harga: 3000 },
];

let barangDipilih = null;

// 2.  Menampilkan daftar barang ke tabel pakai for...of
function tampilkanBarang() {
  let tbody = document.getElementById("tabel-barang");
  tbody.innerHTML = "";

  let index = 0;
  for (let item of daftarBarang) {
    let row = `
            <tr>
                <td>${item.nama}</td>
                <td>Rp ${item.harga.toLocaleString("id-ID")}</td>
                <td>
                    <button class="btn-pilih" onclick="pilihBarang(${index})">Pilih</button>
                </td>
            </tr>
        `;
    tbody.innerHTML += row;
    index++;
  }
}

// 3.  Pilih button
function pilihBarang(index) {
  barangDipilih = daftarBarang[index];
  document.getElementById("barang-terpilih").value =
    `${barangDipilih.nama} - Rp ${barangDipilih.harga.toLocaleString("id-ID")}`;
}

// 4.  Menghitung transaksi pakai switch...case & try...catch
function hitungTransaksi() {
  try {
    if (!barangDipilih) {
      throw new Error("Pilih barangnya dulu dari tabel!");
    }

    let jumlah = parseInt(document.getElementById("jumlah").value);
    if (isNaN(jumlah) || jumlah <= 0) {
      throw new Error("Jumlah beli minimal 1!");
    }

    let statusMember = document.getElementById("status-member").value;
    let bayar = parseInt(document.getElementById("uang-bayar").value);

    if (isNaN(bayar)) {
      throw new Error("Masukkan nominal uang pembayaran!");
    }

    let subtotal = barangDipilih.harga * jumlah;
    let persenDiskon = 0;

    // Switch, case diskon member nya
    switch (statusMember) {
      case "GOLD":
        persenDiskon = 0.15;
        break;
      case "SILVER":
        persenDiskon = 0.1;
        break;
      case "BRONZE":
        persenDiskon = 0.05;
        break;
      default:
        persenDiskon = 0;
        break;
    }

    let potongan = subtotal * persenDiskon;
    let totalBayar = subtotal - potongan;

    if (bayar < totalBayar) {
      throw new Error(
        `Uang kurang! Silahkan lengkapi pembayarannya ya! Total pembayaran: Rp ${totalBayar.toLocaleString("id-ID")}`,
      );
    }

    let kembalian = bayar - totalBayar;

    // Menampilkan struk di HTML nys
    let divHasil = document.getElementById("hasil-struk");
    divHasil.style.display = "block";
    divHasil.className = "struk-box";
    divHasil.innerHTML = `
            <b>STRUK PEMBAYARAN</b>
            <p>PEMBAYARAN BERHASIL!</p>
            Item: ${barangDipilih.nama} (x${jumlah})<br>
            Subtotal: Rp ${subtotal.toLocaleString("id-ID")}<br>
            Diskon (${statusMember}): Rp ${potongan.toLocaleString("id-ID")}<br>
            <b>Total Bayar: Rp ${totalBayar.toLocaleString("id-ID")}</b><br>
            Cash: Rp ${bayar.toLocaleString("id-ID")}<br>
            Kembalian: Rp ${kembalian.toLocaleString("id-ID")}
        `;
  } catch (error) {
    let divHasil = document.getElementById("hasil-struk");
    divHasil.style.display = "block";
    divHasil.className = "struk-box error";
    divHasil.innerHTML = `<b>[ERROR]</b> ${error.message}`;
  } finally {
    console.log("Proses transaksi selesai dieksekusi.");
  }
}
tampilkanBarang();
