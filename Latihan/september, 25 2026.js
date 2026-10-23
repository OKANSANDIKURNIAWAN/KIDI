// 1. DATABASE LOKAL (ARRAY OF OBJECT)
let tasks = [
  { id: 1, judul: "Mengerjakan PR Bahasa Jawa", Status: "TODO" },
  { id: 1, judul: "Mengerjakan PR Bahasa Japan", Status: "DONE" },
  { id: 1, judul: "Mengerjakan PR Bahasa Inggris", Status: "DONE" },
];

// 2. MENANGKAP ELEMENT HTML (DOM Selection)
// Kita hubungkan elemen HTML di layar ke dalam variabel JS agar bisa kita manipulasi

const inputTask = document.querySelector("#inputTask");
const btnTambah = document.querySelector("#btnTambah");
const colTodo = document.querySelector("#colTodo");
const colDone = document.querySelector("#colDone");

// SECTION 2: RENDER TAMPILAN KE LAYAR (RENDERING)
function renderTasks() {
  // Langkah 1 Bersihkan dulu isi kolom dilayar sehingga tidak menumpuk
  colTodo.innerHTML = "";
  colDone.innerHTML = "";

  // Langkah 2 Pisahkan data berdasarkan status menggunakan filter
  const listTodo = tasks.filter((t) => t.Status === "TODO");
  const listDone = tasks.filter((t) => t.Status === "DONE");

  // Langkah 3: Gambar kartu tugas kolom "belum berhasil" (TODO)
  
  listTodo.forEach((item) => {
    const { id, judul } = item;
  });

  const card = document.createElement("div");
  card.innerHTML = `
    <span>${judul}</span>
    <button class="btn-done" onclick="pindahStatus(${id})"> Selesai </button>`;
  colTodo.appendChild(card);
}

 // Langkah 3: Gambar kartu tugas kolom "berhasil" (DONE)
listDone.forEach((item) => {
  const { judul } = item;
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<span>${judul}</span>`;
  colDone.appendChild(card);
});
