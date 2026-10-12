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
  { id: 1, label: "Friend 01", name: "lala", avatar: "", message: "pia bistiii kuu habede nyakk, panjang umur sehat selalu, banyak rezekinya , makin langgeng hubungan nya aminn
doa dari lala ni bistiii", date: "", visible: "auto" },
  { id: 2, label: "Friend 02", name: "", avatar: "", message: "", date: "", visible: "auto" },
  { id: 3, label: "Friend 03", name: "", avatar: "", message: "", date: "", visible: "auto" },
  { id: 4, label: "Friend 04", name: "", avatar: "", message: "", date: "", visible: "auto" },
  { id: 5, label: "Friend 05", name: "", avatar: "", message: "", date: "", visible: "auto" },
  { id: 6, label: "Friend 06", name: "", avatar: "", message: "", date: "", visible: "auto" },
];
