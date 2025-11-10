import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Bileşenleri import et
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Sayfaları import et
import HomePage from './pages/HomePage';
// Diğer sayfalar (oluşturulunca import edilecek)
import GaleriPage from './pages/GaleriPage'; // YENİ İMPORT
import IletisimPage from './pages/IletisimPage'; // YENİ İMPORT
import { FloatingWhatsApp } from 'react-floating-whatsapp';



// const avatarUrl = "/sarissa-logo-avatar.png";
const avatarUrl = "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/sefarenkat%C3%B6lyesi_LOGO.svg";

// Sayfa değiştiğinde en üste scroll yapma bileşeni
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          {/* Ana Sayfa */}
          <Route path="/" element={<HomePage />} />
          


          {/* Diğer Sayfalar (oluşturulunca eklenecek) */}
          <Route path="/gallery" element={<GaleriPage />} />
          <Route path="/contact" element={<IletisimPage />} />


        </Routes>
      </main>
      <Footer />
      
      <FloatingWhatsApp 
        phoneNumber="5550957358"
        accountName="Sefa Renk Atölyesi"
        statusMessage="15 dakika içinde cevaplarız!"
        chatMessage={"Merhaba! 🤝\nSefa Renk Atölyesine hoş geldiniz nasıl yardımcı olabiliriz ?"}
        placeholder="Mesajınızı yazınız..."
        avatar={avatarUrl}
        allowClickAway
        notification
        notificationSound
      />
    </div>
  );
}

export default App;
