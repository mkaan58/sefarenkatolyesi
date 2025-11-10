// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Clock, Paintbrush } from 'lucide-react';

const Footer = () => {
  
  const FooterLink = ({ page, children }) => {
    const path = page === 'home' ? '/' : `/${page}`;
    
    return (
      <Link 
        to={path} 
        className="text-left text-gray-500 transition-colors duration-300 text-base hover:pl-2"
        onMouseEnter={(e) => e.target.style.color = '#FF6B35'}
        onMouseLeave={(e) => e.target.style.color = '#6B7280'}
      >
        {children}
      </Link>
    );
  };

  return (
    <footer className="bg-white text-gray-800 border-t-4" style={{ borderColor: '#1E5A8E' }}>
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Information */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/sefarenkat%C3%B6lyesi_LOGO.svg?updatedAt=1762793723501?tr=w-100,h-100,f-auto" 
                alt="Sefa Renk Atölyesi Logo" 
                className="h-12 mr-3"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/sefarenkat%C3%B6lyesi_LOGO.svg?updatedAt=1762793723501?tr=w-100,h-100,f-auto";
                }}
              />
              <span className="text-2xl font-bold" style={{ color: '#1E5A8E' }}>
                Sefa Renk <span style={{ color: '#FF6B35' }}>Atölyesi</span>
              </span>
            </div>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              11 yılı aşkın tecrübemizle Muğla ve çevresinde profesyonel boya hizmetleri sunuyoruz. Kaliteli işçilik, güvenilir malzeme, müşteri memnuniyeti.
            </p>
            <div className="flex items-center text-gray-600 text-sm">
              <Paintbrush size={16} className="mr-2" style={{ color: '#FF6B35' }} />
              <span className="font-medium">2 Yıl İşçilik Garantisi</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#1E5A8E' }}>Hızlı Bağlantılar</h3>
            <div className="flex flex-col space-y-3">
              <FooterLink page="home">Ana Sayfa</FooterLink>
              <FooterLink page="services">Hizmetlerimiz</FooterLink>
              <FooterLink page="gallery">Galeri</FooterLink>
              <FooterLink page="about">Hakkımızda</FooterLink>
              <FooterLink page="contact">İletişim</FooterLink>
            </div>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#1E5A8E' }}>Hizmetlerimiz</h3>
            <div className="flex flex-col space-y-3">
              <FooterLink page="ic-mekan">İç Mekan Boyama</FooterLink>
              <FooterLink page="dis-cephe">Dış Cephe Boyama</FooterLink>
              <FooterLink page="kapi-pencere">Kapı-Pencere Boyama</FooterLink>
              <FooterLink page="dekoratif">Dekoratif Uygulamalar</FooterLink>
              <FooterLink page="tadilat">Tadilat Sonrası Boya</FooterLink>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#1E5A8E' }}>İletişim</h3>
            <div className="flex flex-col space-y-4">
              <a 
                href="tel:+905550957358" 
                className="flex items-center text-gray-500 transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.color = '#FF6B35'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#6B7280'}
              >
                <Phone size={18} className="mr-3 flex-shrink-0" />
                <span>+90 555 095 73 58</span>
              </a>
              <a 
                href="mailto:info@sefarenk.com" 
                className="flex items-center text-gray-500 transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.color = '#FF6B35'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#6B7280'}
              >
                <Mail size={18} className="mr-3 flex-shrink-0" />
                <span>info@sefarenk.com</span>
              </a>
              <div className="flex items-start text-gray-500">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0" style={{ color: '#FF6B35' }} />
                <span>Dalaman, Muğla<br />Türkiye</span>
              </div>
              <div className="flex items-start text-gray-500">
                <Clock size={18} className="mr-3 mt-1 flex-shrink-0" style={{ color: '#FDB42D' }} />
                <span>Pazartesi - Cumartesi<br />08:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Social Media */}
        <div className="mt-16 pt-8 border-t-2" style={{ borderColor: '#FFF4ED' }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} <span className="font-semibold" style={{ color: '#1E5A8E' }}>Sefa Renk Atölyesi</span>. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center space-x-1">
              <span className="text-sm text-gray-500 mr-3">Bizi Takip Edin:</span>
              <a 
                href="https://www.instagram.com/sefarenkatolyesi_/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full transition-all"
                style={{ backgroundColor: '#FFF4ED' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FF6B35';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFF4ED';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <Instagram size={24} style={{ color: '#1E5A8E' }} />
              </a>

            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-6 border-t" style={{ borderColor: '#FFF4ED' }}>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#FF6B35' }}></div>
              <span>Ücretsiz Keşif</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#FDB42D' }}></div>
              <span>Kaliteli Malzeme</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#1E5A8E' }}></div>
              <span>Deneyimli Ekip</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#FF6B35' }}></div>
              <span>İşçilik Garantisi</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;