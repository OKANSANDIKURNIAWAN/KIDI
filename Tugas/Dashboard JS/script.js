function calculate() {
  var myBox1 = document.getElementById("box1").value;
  var myBox2 = document.getElementById("box2").value;
  var operator = document.getElementById("operator").value;
  var result = document.getElementById("result");
  var myResult;

  if (operator == "+") {
    myResult = Number(myBox1) + Number(myBox2);
  } else if (operator == "-") {
    myResult = Number(myBox1) - Number(myBox2);
  } else if (operator == "*") {
    myResult = Number(myBox1) * Number(myBox2);
  } else if (operator == "/") {
    myResult = Number(myBox1) / Number(myBox2);
  }

  result.value = myResult;
}

function sapaSekolah(namaSiswa, pelajaran, kesan) {
  console.log(namaSiswa + " belajar " + pelajaran + " dan dia merasa " + kesan);
}

function tampilkanPesanan() {
  sapaSekolah("Haidar", "Matematika", "membosankan") +
    "<br>" +
    sapaSekolah("Atha", "IoT", "menyenangkan");
}

function cekStatus() {
  alert("Status: Alert dalam function bisa berjalan nihh");
}

function perkalian(a, b) {
  return a * b;
}

function tampilkanHasil() {
  let total = perkalian(5, 4);

  console.log("Total perkalian: " + total);
}

function StringMethod() {
  let nama = " Okan Sandi ";
  let namaKapital = nama.toUpperCase();
  let namaRapi = nama.trim();
  let namaKecil = nama.toLowerCase();

  console.log("CONTOH STRING METHOD");
  console.log("Nama:", nama);
  console.log("Nama setelah di toUpperCase.():", namaKapital);
  console.log("Nama setelah di trim.():", namaRapi);
  console.log("Nama setelah di toLowerCase.():", namaKecil);
}

function ArrayMethod() {
  let daftarHuruf = ["Aa", "Bb", "Cc", "Ddd", "Ee"];

  console.log("CONTOH ARRAY METHOD");

  daftarHuruf.push("Ff");
  console.log("Setelah di push():", daftarHuruf);

  daftarHuruf.unshift("Gg");
  console.log("Setelah di unshift():", daftarHuruf);

  daftarHuruf.pop();
  console.log("Setelah di pop():", daftarHuruf);

  daftarHuruf.shift();
  console.log("Setelah di shift():", daftarHuruf);

  let adaCc = daftarHuruf.includes("Cc");
  console.log(
    "Memfilter apakah ada huruf Cc, dengan menggunakan includes():",
    adaCc,
  );

  let hurufPanjang = daftarHuruf.find((huruf) => huruf.length > 2);
  console.log(
    "Memfilter apakah ada daftar huruf yang lebih dari 2 huruf, dengan menggunakan method array find():",
    hurufPanjang,
  );
}

function contohForEach() {
  const siswa = ["Atha", "Haidar", "Iqbal"];

  console.log("Data siswa:", siswa);

  siswa.forEach((nama) => {
    console.log("Hadir:", nama);
  });
}

function contohFind() {
  const siswa = [
    { nama: "Amaris", tinggi: 172 },
    { nama: "Anggun", tinggi: 180 },
  ];

  console.log("Data siswa:", siswa);

  const hasil = siswa.find((siswa) => siswa.tinggi === 172);

  console.log("Siswa dengan tinggi 172:", hasil);
}

function contohSome() {
  const stock = [15, 0, 8, 20];

  console.log("Data stock:", stock);

  const hasil = stock.some((stock) => stock === 0);

  console.log("Apakah ada stock 0?", hasil);
}

function contohEvery() {
  const umur = [20, 21, 22];

  console.log("Data umur:", umur);

  const hasil = umur.every((umur) => umur >= 18);

  console.log("Apakah semua umur sudah 18 tahun atau lebih?", hasil);
}

function contohIncludes() {
  const angka = [1, 2, 3, 4, 5];

  console.log("Data angka:", angka);

  const hasil = angka.includes(3);

  console.log("Apakah angka 3 ada di dalam array?", hasil);
}

// TODOLIST

let dashboardTasks = [];

function renderDashboardTasks() {
  const dashboardTodo = document.getElementById("dashboardTodo");
  const dashboardDone = document.getElementById("dashboardDone");

  dashboardTodo.innerHTML = "";
  dashboardDone.innerHTML = "";

  const tugasBelumSelesai = dashboardTasks.filter(
    (task) => task.status === "TODO",
  );

  const tugasSelesai = dashboardTasks.filter((task) => task.status === "DONE");

  tugasBelumSelesai.forEach((task) => {
    const item = document.createElement("div");

    item.className = "todo-item";

    item.innerHTML = `
      <span>${task.judul}</span>

      <button onclick="selesaikanDashboardTask(${task.id})">
        Selesai
      </button>
    `;

    dashboardTodo.appendChild(item);
  });

  tugasSelesai.forEach((task) => {
    const item = document.createElement("div");

    item.className = "todo-item done";

    item.innerHTML = `
      <span>${task.judul}</span>
    `;

    dashboardDone.appendChild(item);
  });
}

// Menambahkan tugas baru
function tambahDashboardTask() {
  const input = document.getElementById("dashboardTask");

  const teksInput = input.value.trim();

  if (teksInput === "") {
    alert("Tugas tidak boleh kosong!");
    return;
  }

  // Membuat tugas baru
  const tugasBaru = {
    id: Date.now(),
    judul: teksInput,
    status: "TODO",
  };

  dashboardTasks = [...dashboardTasks, tugasBaru];

  console.log("Tugas ditambahkan:", tugasBaru);

  input.value = "";
  renderDashboardTasks();
}
function selesaikanDashboardTask(idTask) {
  const taskDipilih = dashboardTasks.find((task) => task.id === idTask);

  if (taskDipilih) {
    taskDipilih.status = "DONE";

    console.log("Tugas selesai:", taskDipilih);

    renderDashboardTasks();
  }
}
renderDashboardTasks();

// JQUERY PREVIEW

function previewJqueryText() {
  const judul = document.getElementById("jqueryJudul");
  const deskripsi = document.getElementById("jqueryDeskripsi");

  judul.textContent = "Judul Berhasil Diubah!";
  deskripsi.textContent = "Sekarang deskripsi berhasil diubah!";

  judul.style.color = "#ff5733";

  console.log("jQuery: text() dan css()");
}

function previewJqueryBox() {
  const box = $("#jqueryBox");

  box.slideToggle(400);
  console.log("jQuery: slideToggle() - Animasi 400 ms");
}

function previewJqueryDark() {
  const preview = document.querySelector(".jquery-preview");
  const box = document.getElementById("jqueryBox");

  preview.classList.toggle("jquery-dark");
  box.classList.toggle("jquery-dark-box");

  console.log("jQuery: toggleClass() - Dark Mode");
}
