import { useEffect } from "react";
import { site } from "../data/birthday.js";

// Mengatur judul tab browser per halaman. Tanpa argumen = judul bawaan.
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · ${site.title}` : `${site.title} · a little corner of the world`;
  }, [title]);
}
