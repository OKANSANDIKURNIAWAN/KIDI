$(document).ready(function () {
  // 1. Logika Latihan jQuery Dasar & Ganti Tema
  $("#btnUbahTeks").click(function () {
    $("#teksDeskripsi").text("Mantap! Teks dan gaya berhasil dimanipulasi.");
    $("#teksDeskripsi").css("color", "#38bdf8");
  });

  $("#btnToggleBox").click(function () {
    $("#kotakDemo").slideToggle(300);
  });

  // Tombol Ganti Tema (Dari Dark ke Light)
  $("#btnGantiTema").click(function () {
    $("body").toggleClass("light-theme");
  });

  // 2. Logika Toast Notification System yang Aman dari Bug Antrean
  function tampilkanToast(pesan, warnaBg, durasi = 3000) {
    // Reset total animasi sebelumnya agar tidak terjadi bug kecepatan/nyangkut
    $("#globalToast").stop(true, true);
    $("#toastProgres").stop(true, true);

    // Set ulang properti dan tampilkan
    $("#globalToast").css({
      "background-color": warnaBg,
      display: "block",
      opacity: "1",
    });

    $("#globalToastText").text(pesan);

    // Jalankan animasi progress bar mundur
    $("#toastProgres")
      .css({ width: "100%" })
      .animate({ width: "0%" }, durasi, "linear", function () {
        $("#globalToast").fadeOut(300);
      });
  }

  $("#triggerSukses").click(function () {
    tampilkanToast(
      "Sukses!! Data Anda berhasil disimpan dengan aman.",
      "#10b981",
      4000,
    );
  });

  $("#triggerError").click(function () {
    tampilkanToast(
      "Gagal!! Terjadi kesalahan saat memproses data.",
      "#ef4444",
      3000,
    );
  });

  $("#triggerInfo").click(function () {
    tampilkanToast(
      "Info: Sistem berjalan dalam kondisi stabil.",
      "#0ea5e9",
      3000,
    );
  });
});
