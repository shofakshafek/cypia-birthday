import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import Wishes from "./pages/Wishes.jsx";
import BirthdayLetter from "./pages/BirthdayLetter.jsx";
import Music from "./pages/Music.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  const location = useLocation();

  // Mulai dari atas setiap pindah halaman.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <a className="skip-link" href="#main">
        Lompat ke konten
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        {/* key membuat transisi halus dijalankan ulang di setiap halaman */}
        <div className="page" key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/wishes" element={<Wishes />} />
            <Route path="/letter" element={<BirthdayLetter />} />
            <Route path="/music" element={<Music />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}
