//  letter.js — ISI SURAT ULANG TAHUN
  //  semua kalimat di bawah adalah CONTOH, gnti pake tulisanmu sendiri
    //  setiap bagian punya daftar paragraf (paragraphs); tambah atau hapus
      //  paragraf sesukamu. satu string = satu paragraf
        //  bagian: pembukaan, harapan, doa, apresiasi, penutup

export const letterPage = {
  title: "Birthday Letter",
  envelopeNote: "sebuah surat, untuk dibaca pelan-pelan",
  showSectionLabels: true, // ganti aja true / false
};

export const letter = {
  dateLabel: "18 Oktober",
  greeting: "Untuk Cypiaa,",

  sections: [
    {
      id: "pembukaan",
      label: "Pembukaan",
      paragraphs: [
        "Selamat ulang tahun. Surat ini sederhana saja, sengaja ditulis supaya bisa dibaca kapan pun kamu sedang punya waktu.",
      ],
    },
    {
      id: "harapan",
      label: "Harapan",
      paragraphs: [
        "Semoga tahun yang baru ini memberimu ruang untuk mencoba hal-hal yang kamu penasaran, dan cukup waktu untuk istirahat di antaranya.",
      ],
    },
    {
      id: "doa",
      label: "Doa",
      paragraphs: [
        "Semoga kamu selalu sehat, selalu punya alasan untuk tersenyum, dan dikelilingi orang-orang yang membuatmu merasa nyaman.",
      ],
    },
    {
      id: "apresiasi",
      label: "Apresiasi",
      paragraphs: [
        "Terima kasih sudah menjadi dirimu sendiri. Keberadaanmu membuat hari-hari di sekitarmu terasa sedikit lebih baik.",
      ],
    },
  ],

  closing: "Sekali lagi, selamat ulang tahun. Semoga harimu menyenangkan.",
  signoff: "Salam hangat,",
  signature: "Shafiq Pembaik",
};
