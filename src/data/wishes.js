// ============================================================================
//  wishes.js — UCAPAN DARI ENAM TEMAN
//
//  CARA MENGISI
//  Cukup isi  name  dan  message  pada slot yang kamu mau. Kartu akan muncul
//  otomatis. Slot yang masih kosong tidak ditampilkan.
//
//  PENJELASAN PROPERTI
//  id       : nomor slot (1 sampai 6), jangan diubah.
//  label    : nama slot, hanya dipakai pada tampilan kosong ("Friend 01").
//  name     : nama pengirim.
//  avatar   : (opsional) lokasi foto profil, mis. "/images/avatar1.jpg".
//             Kosongkan untuk memakai inisial nama.
//  message  : isi ucapan. Boleh beberapa baris; pakai \n untuk baris baru.
//  date     : (opsional) tulisan kecil di kartu, mis. "18.10.2026" atau "dari Rani".
//  visible  : "auto"  -> tampil otomatis kalau name dan message sudah terisi.
//             true    -> selalu tampil (walau masih kosong).
//             false   -> selalu disembunyikan (walau sudah terisi).
//  variant  : (opsional) bentuk kartu: "paper" | "note" | "postcard".
//             Kalau dikosongkan, bentuk dipilih bergantian secara otomatis.
//
//  Contoh slot yang sudah terisi:
//  { id: 1, label: "Friend 01", name: "Nama Teman", avatar: "",
//    message: "Selamat ulang tahun! Semoga ...", date: "", visible: "auto" },
// ============================================================================

export const wishesIntro = {
  title: "Wishes",
  text: "Ucapan-ucapan kecil dari teman-temanmu, dikumpulkan seperti surat di dalam satu kotak.",
  handNote: "dari mereka, untukmu",
  emptyTitle: "Kotak suratnya masih menunggu",
  emptyText:
    "Isi name dan message pada slot di src/data/wishes.js, maka kartunya langsung muncul di sini.",
};

export const wishes = [
  { id: 1, label: "Friend 01", name: "lala", avatar: "", message: "pia bistiii kuu habede nyakk, panjang umur sehat selalu, banyak rezekinya, makin langgeng hubungan nya aamiin. doa dari lala ni bistiii", date: "", visible: "auto" },
  { id: 2, label: "Friend 02", name: "bryant", avatar: "", message: "selamat ulang tahun pia adikk akuu, semoga kamu sehat selalu, rezeki nya dilancarkan, ketika naik kelas semoga jadi pribadi yang lebih baik kedepannya, jangan lupain kakak muu ini. Kak bryant", date: "", visible: "auto" },
  { id: 3, label: "Friend 03", name: "ceci", avatar: "", message: "hai piaa, happy birthday yaa, sayanggg!. bulan ini adalah bulan di mana seseorang yang hebat seperti kamu dilahirkan ke dunia. nggak kerasa, sekarang kamu udah 15 tahun. selama 15 tahun ini, kamu udah melewati banyak hal, menghadapi berbagai masalah, dan mungkin ada banyak hal yang kamu pendam sendiri tanpa orang lain tahu. aku nggak tahu semua hal yang udah kamu lewati, tapi aku harap kamu selalu ingat kalau kamu udah berusaha sebaik mungkin sampai sejauh ini, dan itu adalah sesuatu yang patut kamu banggakan.piaa, kamu tahu nggak? menurutku, kamu adalah salah satu orang yang kehadirannya bisa membawa kebahagiaan buat banyak orang. kamu punya cara tersendiri untuk bikin suasana jadi lebih seru, bikin orang lain tertawa, dan memecah keheningan yang ada. mungkin buat kamu, hal-hal kecil yang kamu lakukan itu biasa aja, tapi bisa jadi, buat orang lain, kehadiran kamu adalah salah satu hal yang bikin hari mereka jadi lebih baik. kamu mungkin nggak selalu sadar seberapa berartinya diri kamu buat orang-orang di sekitarmu, tapi aku harap kamu tahu kalau kamu punya tempat yang istimewa di hati banyak orang.", date: "", visible: "auto" },
  { id: 4, label: "Friend 04", name: "", avatar: "", message: "", date: "", visible: "auto" },
  { id: 5, label: "Friend 05", name: "", avatar: "", message: "", date: "", visible: "auto" },
  { id: 6, label: "Friend 06", name: "", avatar: "", message: "", date: "", visible: "auto" },
];
