// ============================================================================
//  birthday.js — SEMUA TEKS UTAMA WEBSITE ADA DI SINI
//  Ubah teks di dalam tanda kutip. Jangan hapus nama properti (kiri titik dua).
//  Foto  -> src/data/gallery.js
//  Ucapan -> src/data/wishes.js
//  Surat  -> src/data/letter.js
//  Musik  -> src/data/music.js
// ============================================================================

// ---- Data dasar (dipakai countdown & judul) --------------------------------
export const person = {
  name: "Cypiaa",
  birthDay: 18,
  birthMonth: 10,
  birthYear: 2011,
  timeZone: "Asia/Jakarta",
  displayDate: "18.10.2011",
  longDate: "18 Oktober 2011",
  showAge: true,
};

// ---- Info situs ------------------------------------------------------------
export const site = {
  title: "Cypiaa",
  description:
    "Sebuah sudut kecil di internet, dibuat khusus untuk ulang tahun cypiaa.",
  footerNote: "dibuat untuk cypia",
};

// ---- Menu navigasi ---------------------------------------------------------
export const nav = [
  { to: "/", label: "Home", end: true },
  { to: "/gallery", label: "Gallery" },
  { to: "/wishes", label: "Wishes" },
  { to: "/letter", label: "Letter" },
  { to: "/music", label: "Music" },
];

// ---- Hero (bagian paling atas halaman Home) --------------------------------
export const hero = {
  handNote: "happy birthday",
  headline: "a little corner of the world, just for you",
  description:
    "Tempat kecil ini dibuat untuk merayakan harimu. Ada foto-foto, ucapan dari teman-teman, sebuah surat, dan beberapa lagu. Silakan jalan-jalan pelan-pelan.",
  primaryCta: { label: "Open the gallery", to: "/gallery" },
  secondaryCta: { label: "Read the wishes", to: "/wishes" },
  mainPhoto: {
    src: "/images/image1.jpg",
    alt: "Foto Cypiaa",
    caption: "",
  },
  secondPhoto: {
    src: "/images/image2.jpg",
    alt: "Foto Cypiaa yang kedua",
    caption: "",
  },
  stampText: "cypiaa · 18 oktober 2011 · happy birthday · ",
};

// ---- Section di halaman Home ----------------------------------------------
export const home = {
  intro: {
    title: "A Little Introduction",
    handNote: "hello, you",
    paragraphs: [
      "Ini adalah halaman kecil yang disiapkan khusus untuk Cypiaa. Tidak ada yang rumit di sini, hanya hal-hal yang ingin disimpan dan diberikan di hari ulang tahunnya.",
      "hallo cypiaaa, ini website dariku seorang yaa!!, ada beberapa support kokk, semoga kamu suka website sederhana ini yaa!!",
    ],
    // Daftar kecil di samping teks. Tambah / hapus baris sesukamu.
    facts: [
      { label: "Nama", value: "Cypiaa" },
      { label: "Lahir", value: "18 Oktober 2011" },
    ],
  },

  moments: {
    title: "Little Moments",
    text: "Beberapa potongan kecil yang dikumpulkan di satu tempat. Kalau mau lihat semuanya, album lengkapnya ada di halaman Gallery.",
    cta: "See all the photos",
  },

  song: {
    title: "A Song for You",
    text: "Ada satu lagu yang ingin diperdengarkan hari ini. Tekan play kapan pun kamu siap.",
    cta: "Go to the music page",
    emptyTitle: "Lagu pilihan akan muncul di sini",
    emptyText: "Isi link Spotify di src/data/music.js.",
  },

  countdown: {
    title: "Birthday Countdown",
    text: "Menghitung mundur menuju 18 Oktober, tanpa melewatkan satu detik pun.",
    // {age} diganti otomatis dengan umur yang akan dicapai.
    untilTextWithAge: "menuju ulang tahun ke-{age}",
    untilText: "menuju hari ulang tahun",
    unitLabels: { days: "hari", hours: "jam", minutes: "menit", seconds: "detik" },
    // Tampil saat tanggal 18 Oktober sedang berlangsung (zona Asia/Jakarta).
    birthdayTitle: "Selamat ulang tahun, Cypiaa",
    birthdayTextWithAge: "Hari ini kamu genap {age} tahun. Semoga harinya menyenangkan dari pagi sampai malam.",
    birthdayText: "Semoga harimu menyenangkan dari pagi sampai malam.",
  },

  note: {
    title: "A Little Note",
    text: "Terima kasih sudah mampir ke sudut kecil ini. Semoga harimu terasa ringan, hangat, dan penuh hal-hal baik.",
    signature: "shafiq pembaik",
  },
};
