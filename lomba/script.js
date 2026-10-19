let nilai = {
  teknologi: 0,
  seni: 0,
  musik: 0,
  olahraga: 0,
  sains: 0,
  komunikasi: 0
};

const pertanyaan = document.querySelectorAll(".pertanyaan");

let jumlahJawaban = 0;

pertanyaan.forEach(function (soal) {
  const tombol = soal.querySelectorAll(".jawaban button");

  tombol.forEach(function (button) {
    button.addEventListener("click", function () {

      if (soal.classList.contains("sudah-dijawab")) {
        return;
      }

      soal.classList.add("sudah-dijawab");

      let bidang = button.id.split("-")[0];

      nilai[bidang]++;
      jumlahJawaban++;

      if (jumlahJawaban === pertanyaan.length) {
        let hasil = Object.keys(nilai).reduce(function (a, b) {
          return nilai[a] > nilai[b] ? a : b;
        });

        alert("Potensi kamu adalah " + hasil);
      }
    });
  });
});