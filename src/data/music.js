// ============================================================================
//  music.js — LAGU (Spotify Embed)
//
//  CARA MENGGANTI LAGU
//  1. Buka Spotify -> klik titik tiga pada lagu / playlist -> Share
//     -> "Copy link to song" (atau "Copy link to playlist").
//  2. Tempel link-nya ke spotifyUrl. Contoh:
//       https://open.spotify.com/track/xxxxxxxxxxxxxxxxxxxxxx
//       https://open.spotify.com/playlist/xxxxxxxxxxxxxxxxxxxxxx
//     Link album, episode, dan podcast juga bisa.
//  3. Simpan. Player berubah otomatis, tidak ada komponen yang perlu diedit.
//
//  Link pendek "spotify.link/..." tidak bisa dipakai. Gunakan link lengkap
//  yang diawali https://open.spotify.com/ .
//
//  PENJELASAN PROPERTI
//  id         : nomor unik.
//  title      : (opsional) judul lagu.
//  artist     : (opsional) nama artis.
//  note       : (opsional) catatan pendek kenapa lagu ini dipilih.
//  spotifyUrl : link Spotify. Kosong = tampil placeholder.
//
//  Lagu pertama selalu tampil. Lagu kedua dan seterusnya hanya tampil kalau
//  spotifyUrl-nya sudah diisi. Lagu pertama juga dipakai di halaman Home.
// ============================================================================

export const musicIntro = {
  title: "a song for this little moment",
  text: "Tekan play kapan pun kamu siap. Tidak ada lagu yang berputar sendiri.",
  moreTitle: "songs that remind me of you",
  handNote: "volume secukupnya",
};

export const tracks = [
  {
    id: 1,
    title: " My Love Mine All Mine",
    artist: "mitski",
    note: "mungkin ini lagu yang cocok untuk cipiak",
    spotifyUrl: "https://open.spotify.com/track/3vkCueOmm7xQDoJ17W1Pm3?si=FVc6K6xOQUWlh1sUzKtBqQ&utm_source=copy-link",
  },
  {
    id: 2,
    title: "Glue Song",
    artist: "beabadoobee",
    note: "lagu yang hangat nan manis, ibarat senyummu dihari ulang tahunmu.",
    spotifyUrl: "https://open.spotify.com/track/3iBgrkexCzVuPy4O9vx7Mf?si=vv8Ow1H5QvSnO-6GoD00dA&utm_source=copy-link",
  },
  {
    id: 3,
    title: "Best Part",
    artist: "Daniel Caesar",
    note: "",
    spotifyUrl: "https://open.spotify.com/track/1Q7EgiMOuwDcB0PJC6AzON?si=knf2zqeWS3miPQM_1nftJg&utm_source=copy-link",
  },
];
