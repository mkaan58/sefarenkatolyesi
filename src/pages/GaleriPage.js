import React, { useState, useMemo } from 'react';
import { ArrowRight, X, ChevronLeft, ChevronRight, Paintbrush, Home, Building2, Sparkles, Phone } from 'lucide-react';

// Project bundles - each project can have multiple photos
const projectBundles = [
  {
    id: 1,
    title: "Modern Villa - İç Mekan",
    location: "Marmaris, Muğla",
    category: "ic-mekan",
    coverImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop",
    photos: [
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop", caption: "Oturma odası - Öncesi" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop", caption: "Oturma odası - Sonrası" },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&auto=format&fit=crop", caption: "Yatak odası - Öncesi" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop", caption: "Yatak odası - Sonrası" },
      { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop", caption: "Mutfak - Öncesi" }
    ]
  },
  {
    id: 2,
    title: "Lüks Daire - Kapı Boyama",
    location: "Bodrum, Muğla",
    category: "kapi-pencere",
    coverImage: "https://images.unsplash.com/photo-1585128792304-b77b2a3c1f69?w=800&auto=format&fit=crop",
    photos: [
      { src: "https://images.unsplash.com/photo-1585128792304-b77b2a3c1f69?w=800&auto=format&fit=crop", caption: "Giriş kapısı - Öncesi" },
      { src: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&auto=format&fit=crop", caption: "Giriş kapısı - Sonrası" },
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop", caption: "Oda kapıları - Öncesi" }
    ]
  },
  {
    id: 3,
    title: "Butik Otel - Dış Cephe",
    location: "Fethiye, Muğla",
    category: "dis-cephe",
    coverImage: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=800&auto=format&fit=crop",
    photos: [
      { src: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=800&auto=format&fit=crop", caption: "Ön cephe - Öncesi" },
      { src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop", caption: "Ön cephe - Sonrası" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop", caption: "Yan cephe - Öncesi" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop", caption: "Yan cephe - Sonrası" },
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop", caption: "Arka cephe - Öncesi" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop", caption: "Arka cephe - Sonrası" },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&auto=format&fit=crop", caption: "Balkonlar - Öncesi" },
      { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop", caption: "Balkonlar - Sonrası" }
    ]
  },
  {
    id: 4,
    title: "Restaurant - Dekoratif Boya",
    location: "Marmaris, Muğla",
    category: "dekoratif",
    coverImage: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&auto=format&fit=crop",
    photos: [
      { src: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&auto=format&fit=crop", caption: "Salon alanı - Öncesi" },
      { src: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&auto=format&fit=crop", caption: "Salon alanı - Sonrası" },
      { src: "https://images.unsplash.com/photo-1585128792304-b77b2a3c1f69?w=800&auto=format&fit=crop", caption: "Bar bölümü - Öncesi" },
      { src: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=800&auto=format&fit=crop", caption: "Bar bölümü - Sonrası" },
      { src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop", caption: "Tavan detayı" }
    ]
  },
  {
    id: 5,
    title: "Ofis - İç Mekan Tadilat",
    location: "Dalaman, Muğla",
    category: "tadilat",
    coverImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop",
    photos: [
      { src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop", caption: "Toplantı odası - Öncesi" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop", caption: "Toplantı odası - Sonrası" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop", caption: "Çalışma alanı - Öncesi" },
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop", caption: "Çalışma alanı - Sonrası" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop", caption: "Resepsiyon - Öncesi" },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&auto=format&fit=crop", caption: "Resepsiyon - Sonrası" }
    ]
  },
  {
    id: 6,
    title: "Yazlık Ev - Komple Boya",
    location: "Datça, Muğla",
    category: "ic-mekan",
    coverImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
    photos: [
      { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop", caption: "Genel görünüm - Öncesi" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop", caption: "Genel görünüm - Sonrası" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop", caption: "Salon - Öncesi" },
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop", caption: "Salon - Sonrası" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop", caption: "Teras - Öncesi" },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&auto=format&fit=crop", caption: "Teras - Sonrası" },
      { src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop", caption: "Yatak odaları - Öncesi" },
      { src: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=800&auto=format&fit=crop", caption: "Yatak odaları - Sonrası" },
      { src: "https://images.unsplash.com/photo-1585128792304-b77b2a3c1f69?w=800&auto=format&fit=crop", caption: "Mutfak - Öncesi" },
      { src: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&auto=format&fit=crop", caption: "Mutfak - Sonrası" }
    ]
  },
  {
    id: 7,
    title: "Villa Pencere Çerçeveleri",
    location: "Marmaris, Muğla",
    category: "kapi-pencere",
    coverImage: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&auto=format&fit=crop",
    photos: [
      { src: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&auto=format&fit=crop", caption: "Pencere 1 - Öncesi" },
      { src: "https://images.unsplash.com/photo-1585128792304-b77b2a3c1f69?w=800&auto=format&fit=crop", caption: "Pencere 1 - Sonrası" },
      { src: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=800&auto=format&fit=crop", caption: "Pencere 2 - Öncesi" },
      { src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop", caption: "Pencere 2 - Sonrası" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop", caption: "Tüm pencereler - Final" }
    ]
  },
  {
    id: 8,
    title: "Apartman Dış Cephe Yenileme",
    location: "Bodrum, Muğla",
    category: "dis-cephe",
    coverImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop",
    photos: [
      { src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop", caption: "Cephe - Öncesi" },
      { src: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=800&auto=format&fit=crop", caption: "Cephe - Sonrası" },
      { src: "https://images.unsplash.com/photo-1585128792304-b77b2a3c1f69?w=800&auto=format&fit=crop", caption: "Detay görünüm" }
    ]
  }
];

const categories = [
  { key: 'tumu', name: 'Tüm Projeler', icon: <Paintbrush size={20} /> },
  { key: 'ic-mekan', name: 'İç Mekan', icon: <Home size={20} /> },
  { key: 'dis-cephe', name: 'Dış Cephe', icon: <Building2 size={20} /> },
  { key: 'kapi-pencere', name: 'Kapı-Pencere', icon: <Paintbrush size={20} /> },
  { key: 'dekoratif', name: 'Dekoratif', icon: <Sparkles size={20} /> },
  { key: 'tadilat', name: 'Tadilat', icon: <Building2 size={20} /> },
];

const GaleriPage = () => {
  const [activeCategory, setActiveCategory] = useState('tumu');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const filteredProjects = useMemo(() => 
    activeCategory === 'tumu'
      ? projectBundles
      : projectBundles.filter(project => project.category === activeCategory),
    [activeCategory]
  );

  const heroImageUrl = "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1600&auto=format&fit=crop";
  
  const whatsappNumber = '905551234567';
  const whatsappMessage = encodeURIComponent('Merhaba! Galeriyi inceledim, boya hizmetleri hakkında bilgi almak istiyorum.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentPhotoIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentPhotoIndex(0);
  };

  const goToPrevious = () => {
    setCurrentPhotoIndex((prev) => 
      prev === 0 ? selectedProject.photos.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentPhotoIndex((prev) => 
      prev === selectedProject.photos.length - 1 ? 0 : prev + 1
    );
  };

  const handleKeyDown = (e) => {
    if (!selectedProject) return;
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'Escape') closeProject();
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center text-white flex items-center justify-center overflow-hidden" 
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E5A8E]/95 via-[#FF6B35]/85 to-[#FDB42D]/90"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)' }}></div>
        </div>
        <div className="relative text-center z-10 px-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Paintbrush size={56} className="text-white animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Projelerimiz</h1>
          <p className="text-lg md:text-2xl font-light leading-relaxed">
            Tamamladığımız işlerden öncesi ve sonrası fotoğraflar
          </p>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
            {categories.map(cat => (
              <button 
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`inline-flex items-center gap-2 px-6 py-3 text-sm md:text-base font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg ${
                  activeCategory === cat.key 
                    ? 'text-white border-2' 
                    : 'bg-white text-gray-700 hover:shadow-xl border-2 border-transparent'
                }`}
                style={{
                  backgroundColor: activeCategory === cat.key ? '#FF6B35' : undefined,
                  borderColor: activeCategory === cat.key ? '#FDB42D' : undefined
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== cat.key) {
                    e.target.style.backgroundColor = '#FFF4ED';
                    e.target.style.color = '#FF6B35';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== cat.key) {
                    e.target.style.backgroundColor = '#FFFFFF';
                    e.target.style.color = '#374151';
                  }
                }}
              >
                <span style={{ color: activeCategory === cat.key ? '#FFFFFF' : undefined }}>
                  {cat.icon}
                </span>
                <span style={{ color: activeCategory === cat.key ? '#FFFFFF' : undefined }}>
                  {cat.name}
                </span>
              </button>
            ))}
          </div>

          {/* Projects Grid with Realistic Polaroid Stack Effect */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group cursor-pointer"
                onClick={() => openProject(project)}
                style={{ perspective: '1000px' }}
              >
                {/* Polaroid Stack Container */}
                <div className="relative" style={{ paddingRight: '40px', paddingBottom: '40px' }}>
                  {/* Back Polaroids (Stack Effect) - 3 photos scattered behind with REAL images */}
                  {[...Array(Math.min(3, project.photos.length - 1))].map((_, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 bg-white rounded-lg transition-all duration-700 overflow-hidden"
                      style={{
                        transform: `translateX(${(i + 1) * 15}px) translateY(${(i + 1) * 12}px) rotate(${(i + 1) * 4 - 2}deg)`,
                        zIndex: -(i + 1),
                        boxShadow: `
                          0 ${4 + i * 2}px ${10 + i * 5}px rgba(0, 0, 0, 0.15),
                          0 ${2 + i}px ${5 + i * 2}px rgba(0, 0, 0, 0.1)
                        `,
                        border: '8px solid #FFFFFF',
                        borderBottom: '40px solid #FFFFFF'
                      }}
                    >
                      {/* Real Photo Preview from project photos */}
                      <div 
                        className="w-full rounded-t-sm overflow-hidden"
                        style={{ height: '240px' }}
                      >
                        <img 
                          src={project.photos[i + 1]?.src || project.coverImage} 
                          alt={`Preview ${i + 1}`}
                          className="w-full h-full object-cover"
                          style={{ opacity: 0.85 }}
                        />
                        {/* Subtle overlay to distinguish from front */}
                        <div 
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background: `linear-gradient(135deg, 
                              ${i === 0 ? 'rgba(255, 107, 53, 0.05)' : i === 1 ? 'rgba(253, 180, 45, 0.05)' : 'rgba(30, 90, 142, 0.05)'} 0%, 
                              transparent 100%)`,
                            top: 0,
                            height: '240px'
                          }}
                        ></div>
                      </div>
                      {/* Polaroid Caption Area */}
                      <div className="absolute bottom-0 left-0 right-0 h-10 bg-white"></div>
                    </div>
                  ))}

                  {/* Front Polaroid (Main Photo) */}
                  <div 
                    className="relative bg-white rounded-lg overflow-hidden transform group-hover:-translate-y-8 group-hover:rotate-0 group-hover:scale-105 transition-all duration-700 z-10"
                    style={{
                      boxShadow: `
                        0 10px 30px rgba(0, 0, 0, 0.3),
                        0 5px 15px rgba(0, 0, 0, 0.2),
                        inset 0 0 0 1px rgba(255, 255, 255, 0.5)
                      `,
                      border: '10px solid #FFFFFF',
                      borderBottom: '50px solid #FFFFFF',
                      rotate: '-2deg'
                    }}
                  >
                    {/* Polaroid Photo Area */}
                    <div className="relative overflow-hidden" style={{ height: '280px' }}>
                      <img 
                        src={project.coverImage} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Photo Count Badge */}
                      <div 
                        className="absolute top-3 right-3 px-3 py-2 rounded-lg text-white font-bold shadow-2xl backdrop-blur-md flex items-center gap-2 border border-white/30"
                        style={{ backgroundColor: 'rgba(255, 107, 53, 0.95)' }}
                      >
                        <Paintbrush size={16} />
                        <span className="text-sm">{project.photos.length}</span>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/95 to-[#FDB42D]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="text-center text-white transform scale-90 group-hover:scale-100 transition-transform duration-300">
                          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 mb-3 mx-auto w-20 h-20 flex items-center justify-center shadow-2xl">
                            <Paintbrush size={40} />
                          </div>
                          <p className="text-lg font-bold drop-shadow-lg">Tüm Fotoğrafları Gör</p>
                          <p className="text-xs mt-1 opacity-90">{project.photos.length} fotoğraf</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Polaroid Caption Area (Bottom White Space) */}
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-white" style={{ height: '50px' }}>
                      <p className="text-xs font-bold text-gray-800 truncate" style={{ marginTop: '-5px' }}>
                        {project.title}
                      </p>
                      <p className="text-[10px] text-gray-500 flex items-center truncate">
                        <Building2 size={10} className="mr-1" />
                        {project.location}
                      </p>
                    </div>

                    {/* Handwritten-style number on Polaroid */}
                    <div 
                      className="absolute bottom-2 right-4 text-gray-400 font-bold italic opacity-60"
                      style={{ 
                        fontSize: '24px',
                        fontFamily: 'cursive',
                        transform: 'rotate(-8deg)'
                      }}
                    >
                      #{project.id}
                    </div>
                  </div>

                  {/* Scattered Tape Effect on Front Polaroid */}
                  <div 
                    className="absolute top-0 left-1/2 w-16 h-8 rounded-sm opacity-60 transform -translate-x-1/2 -translate-y-2 rotate-0 pointer-events-none z-20"
                    style={{
                      background: 'rgba(255, 255, 255, 0.5)',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                      backdropFilter: 'blur(2px)'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Project Photos */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={closeProject}
        >
          {/* Close Button */}
          <button
            onClick={closeProject}
            className="absolute top-6 right-6 text-white hover:text-[#FDB42D] transition-all duration-300 transform hover:scale-125 hover:rotate-90 z-50 p-2 rounded-full"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          >
            <X size={40} />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-6 text-white transition-all duration-300 transform hover:scale-110 z-50 p-3 rounded-full shadow-2xl"
            style={{ backgroundColor: '#FF6B35' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#E55A28'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#FF6B35'}
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image Container */}
          <div 
            className="max-w-7xl max-h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Project Title */}
            <div className="text-white text-center mb-4 px-6 py-3 rounded-full backdrop-blur-sm" style={{ backgroundColor: 'rgba(30, 90, 142, 0.8)' }}>
              <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              <p className="text-sm mt-1">{selectedProject.location}</p>
            </div>

            {/* Main Image */}
            <img
              src={selectedProject.photos[currentPhotoIndex].src}
              alt={selectedProject.photos[currentPhotoIndex].caption}
              className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl"
            />

            {/* Photo Caption */}
            <div className="mt-4 text-white text-center px-6 py-3 rounded-full backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 107, 53, 0.8)' }}>
              <p className="text-lg font-medium">{selectedProject.photos[currentPhotoIndex].caption}</p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-6 text-white transition-all duration-300 transform hover:scale-110 z-50 p-3 rounded-full shadow-2xl"
            style={{ backgroundColor: '#FF6B35' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#E55A28'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#FF6B35'}
          >
            <ChevronRight size={40} />
          </button>

          {/* Photo Counter */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold px-6 py-3 rounded-full backdrop-blur-sm shadow-2xl" style={{ backgroundColor: 'rgba(30, 90, 142, 0.9)' }}>
            {currentPhotoIndex + 1} / {selectedProject.photos.length}
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] pb-2">
            {selectedProject.photos.map((photo, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentPhotoIndex(index);
                }}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentPhotoIndex 
                    ? 'ring-4 ring-[#FDB42D] scale-110' 
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="py-20 relative overflow-hidden" style={{ backgroundColor: '#1E5A8E' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FDB42D 0px, #FDB42D 10px, transparent 10px, transparent 20px)' }}></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <Paintbrush size={64} className="mx-auto mb-8 text-[#FDB42D] animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Projelerimizden İlham Aldınız mı?</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Sizin için de benzer kalitede işler yapabiliriz. Ücretsiz keşif ve fiyat teklifi için hemen iletişime geçin!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:+905551234567"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-xl font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
              style={{ color: '#1E5A8E' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#FDB42D'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#FFFFFF'}
            >
              <Phone className="mr-3" size={24} />
              Hemen Ara
            </a>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white text-xl font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#FFFFFF';
                e.target.style.color = '#FF6B35';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#FFFFFF';
              }}
            >
              WhatsApp ile Yaz
              <ArrowRight className="ml-3" size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaleriPage;