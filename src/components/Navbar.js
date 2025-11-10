import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const mainNavLinks = [
    { title: 'Ana Sayfa', path: '/' },
    { title: 'Galeri', path: '/gallery' },
    { title: 'İletişim', path: '/contact' },
  ];


  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
  
  // Active link style with blue-orange color scheme
  const getNavLinkClass = ({ isActive }) => 
    `text-base font-medium transition-colors pb-1 ${isActive ? 'border-b-2' : 'text-gray-600'}`;
  
  const getNavLinkStyle = (isActive) => ({
    color: isActive ? '#1E5A8E' : undefined,
    borderColor: isActive ? '#FF6B35' : undefined
  });
  
  const getMobileNavLinkClass = ({ isActive }) =>
    `block w-full text-left px-6 py-4 text-lg font-medium transition-all duration-300 rounded-lg ${isActive ? 'text-white' : 'text-gray-700'}`;
  
  const getMobileNavLinkStyle = (isActive) => ({
    backgroundColor: isActive ? '#1E5A8E' : undefined
  });

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center h-24">
        
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center gap-3" onClick={closeAllMenus}>
            <img 
              src="https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/sefarenkat%C3%B6lyesi_LOGO.svg?updatedAt=1762793723501?tr=w-100,h-100,f-auto" 
              alt="Sefa Renk Atölyesi Logo" 
              className="h-12 md:h-14 w-12 md:w-14 flex-shrink-0"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/mnt/user-data/uploads/sefarenkatölyesi_LOGO.png";
              }}
            />
            <span className="text-xl md:text-2xl font-bold transition-colors whitespace-nowrap" 
                  style={{ color: '#1E5A8E' }}
                  onMouseEnter={(e) => e.target.style.color = '#FF6B35'}
                  onMouseLeave={(e) => e.target.style.color = '#1E5A8E'}>
              Sefa Renk <span style={{ color: '#FF6B35' }}>Atölyesi</span>
            </span>
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          {mainNavLinks.map(link => (
            <NavLink 
              key={link.path} 
              to={link.path} 
              className={getNavLinkClass}
              style={({ isActive }) => getNavLinkStyle(isActive)}
              onMouseEnter={(e) => !e.currentTarget.classList.contains('border-b-2') && (e.currentTarget.style.color = '#FF6B35')}
              onMouseLeave={(e) => !e.currentTarget.classList.contains('border-b-2') && (e.currentTarget.style.color = '#6B7280')}
            >
              {link.title}
            </NavLink>
          ))}
          

        </div>

        <div className="flex items-center">
          <a href="tel:+905550957358" 
             className="hidden lg:inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-full text-white transition-all transform hover:scale-105 shadow-lg"
             style={{ backgroundColor: '#FF6B35' }}
             onMouseEnter={(e) => e.target.style.backgroundColor = '#E55A28'}
             onMouseLeave={(e) => e.target.style.backgroundColor = '#FF6B35'}>
            <Phone className="mr-2 h-5 w-5" />
            Hemen Ara
          </a>
          <button 
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} 
            className="lg:hidden ml-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            style={{ color: '#1E5A8E' }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 z-40 lg:hidden transition-opacity duration-300"
          onClick={closeAllMenus}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b-4" style={{ backgroundColor: '#1E5A8E', borderColor: '#FF6B35' }}>
          <div className="flex items-center">
            <img 
              src="https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/sefarenkat%C3%B6lyesi_LOGO.svg?updatedAt=1762793723501?tr=w-100,h-100,f-auto" 
              alt="Logo" 
              className="h-10 w-10 mr-3 bg-white rounded-full p-1"
            />
            <span className="text-xl font-bold text-white">Menü</span>
          </div>
          <button 
            onClick={closeAllMenus} 
            className="text-white hover:text-gray-200 transition-colors p-2 hover:bg-white/10 rounded-lg"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="overflow-y-auto h-full pb-32 bg-white">
          <div className="py-6 px-4">
            {mainNavLinks.map((link, index) => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                className={getMobileNavLinkClass}
                style={({ isActive }) => ({
                  ...getMobileNavLinkStyle(isActive),
                  animationDelay: `${index * 50}ms`
                })}
                onClick={closeAllMenus}
                onMouseEnter={(e) => {
                  if (!e.currentTarget.style.backgroundColor || e.currentTarget.style.backgroundColor === 'transparent') {
                    e.currentTarget.style.backgroundColor = '#FFF4ED';
                  }
                }}
                onMouseLeave={(e) => {
                  if (e.currentTarget.style.backgroundColor === 'rgb(255, 244, 237)') {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {link.title}
              </NavLink>
            ))}
            

          </div>

          {/* Mobile Call Button */}
          <div className="px-6 py-4 border-t-2 border-gray-200 bg-white">
            <a 
              href="tel:+905550957358" 
              className="w-full inline-flex items-center justify-center px-6 py-4 border-2 text-base font-semibold rounded-full text-white transition-all transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: '#FF6B35', borderColor: '#FDB42D' }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#E55A28';
                e.target.style.borderColor = '#E09B1D';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#FF6B35';
                e.target.style.borderColor = '#FDB42D';
              }}
              onClick={closeAllMenus}
            >
              <Phone className="mr-2 h-5 w-5" />
              Hemen Ara
            </a>
          </div>

          {/* Mobile Menu Footer */}
          <div className="px-6 py-6 text-center text-xs text-gray-500 border-t border-gray-100 bg-white">
            <p className="font-medium">© 2025 Sefa Renk Atölyesi</p>
            <p className="mt-1">Profesyonel Boya Hizmetleri</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;