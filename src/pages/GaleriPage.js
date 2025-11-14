import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { ArrowRight, X, ChevronLeft, ChevronRight, Paintbrush, Home, Building2, Sparkles, Phone } from 'lucide-react';


// Project bundles - each project can have multiple photos
const projectBundles = [
  {
    id: 1,
    title: "Modern Villa - İç Mekan",
    location: "Marmaris, Muğla",
    category: "ic-mekan",
    coverImage: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/1a-.JPG?updatedAt=1763108924747?w=800&auto=format&fit=crop",
    photos: [
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/1a-.JPG?updatedAt=1763108924747?w=800&auto=format&fit=crop", caption: "Oturma odası - Öncesi" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/1b+.JPG?updatedAt=1763108926954?w=800&auto=format&fit=crop", caption: "Oturma odası - Sonrası" },
    ]
  },
  {
    id: 2,
    title: "Lüks Daire - Dekorasyon",
    location: "Bodrum, Muğla",
    category: "dekoratif",
    coverImage: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/2a.JPG?updatedAt=1763108916422?w=800&auto=format&fit=crop",
    photos: [
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/2a.JPG?updatedAt=1763108916422?w=800&auto=format&fit=crop", caption: "Giriş kapısı - Öncesi" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/2b.JPG?updatedAt=1763108915556?w=800&auto=format&fit=crop", caption: "Giriş kapısı - Sonrası" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/2c.JPG?updatedAt=1763108915984?w=800&auto=format&fit=crop", caption: "Oda kapıları - Öncesi" }
    ]
  },
  {
    id: 3,
    title: "Butik Otel - Dış Cephe",
    location: "Fethiye, Muğla",
    category: "kapi-pencere",
    coverImage: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/3a-.jpg?updatedAt=1763108810045?w=800&auto=format&fit=crop",
    photos: [
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/3a-.jpg?updatedAt=1763108810045?w=800&auto=format&fit=crop", caption: "Ön cephe - Öncesi" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/3b+.HEIC?updatedAt=1763108908949?w=800&auto=format&fit=crop", caption: "Ön cephe - Sonrası" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/3c+.HEIC?updatedAt=1763108912321?w=800&auto=format&fit=crop", caption: "Yan cephe - Öncesi" },
    ]
  },
  {
    id: 4,
    title: "Daire-Dolap Boyama & Dekoratif",
    location: "Marmaris, Muğla",
    category: "kapi-pencere",
    coverImage: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/4a-.JPG?updatedAt=1763108916380?w=800&auto=format&fit=crop",
    photos: [
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/4a-.JPG?updatedAt=1763108916380?w=800&auto=format&fit=crop", caption: "Salon alanı - Öncesi" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/4b-.JPG?updatedAt=1763108907065?w=800&auto=format&fit=crop", caption: "Salon alanı - Sonrası" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/4c+.JPG?updatedAt=1763108916690?w=800&auto=format&fit=crop", caption: "Bar bölümü - Öncesi" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/4d+.JPG?updatedAt=1763108910273?w=800&auto=format&fit=crop", caption: "Bar bölümü - Sonrası" },

    ]
  },
  {
    id: 5,
    title: "Ofis - İç Mekan Tezgah Tadilatı",
    location: "Dalaman, Muğla",
    category: "tadilat",
    coverImage: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/5a-.JPG?updatedAt=1763108923146?w=800&auto=format&fit=crop",
    photos: [
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/5a-.JPG?updatedAt=1763108923146?w=800&auto=format&fit=crop", caption: "Toplantı odası - Öncesi" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/5b-.JPG?updatedAt=1763108914328?w=800&auto=format&fit=crop", caption: "Toplantı odası - Sonrası" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/5c-.JPG?updatedAt=1763108917112?w=800&auto=format&fit=crop", caption: "Çalışma alanı - Öncesi" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/5d-.JPG?updatedAt=1763108924997?w=800&auto=format&fit=crop", caption: "Çalışma alanı - Sonrası" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/5e-.JPG?updatedAt=1763108915999?w=800&auto=format&fit=crop", caption: "Resepsiyon - Öncesi" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/5f+.JPG?updatedAt=1763108918020?w=800&auto=format&fit=crop", caption: "Resepsiyon - Sonrası" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/5g+.JPG?updatedAt=1763108918203?w=800&auto=format&fit=crop", caption: "Resepsiyon - Sonrası" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/5h+.JPG?updatedAt=1763108915628?w=800&auto=format&fit=crop", caption: "Resepsiyon - Sonrası" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/5j+.JPG?updatedAt=1763108918528?w=800&auto=format&fit=crop", caption: "Resepsiyon - Sonrası" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/5k+.JPG?updatedAt=1763108914831?w=800&auto=format&fit=crop", caption: "Resepsiyon - Sonrası" },
    ]



  },
  {
    id: 6,
    title: "Dış cephe - Boya Dekorasyon",
    location: "Datça, Muğla",
    category: "dis-cephe",
    coverImage: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/6a-.jpg?updatedAt=1763108914856?w=800&auto=format&fit=crop",
    photos: [
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/6a-.jpg?updatedAt=1763108914856?w=800&auto=format&fit=crop", caption: "Genel görünüm - Öncesi" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/6b-.jpg?updatedAt=1763108929281?w=800&auto=format&fit=crop", caption: "Genel görünüm - Sonrası" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/6c-.HEIC?updatedAt=1763108845529?w=800&auto=format&fit=crop", caption: "Salon - Öncesi" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/6d+.HEIC?updatedAt=1763108894955?w=800&auto=format&fit=crop", caption: "Salon - Sonrası" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/6e+.HEIC?updatedAt=1763108911831?w=800&auto=format&fit=crop", caption: "Teras - Öncesi" },

      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/6f+.HEIC?updatedAt=1763108901620?w=800&auto=format&fit=crop", caption: "Teras - Sonrası" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/6g+.HEIC?updatedAt=1763108907120?w=800&auto=format&fit=crop", caption: "Yatak odaları - Öncesi" },

    ]
  },
  {
    id: 7,
    title: "Kapı boyama",
    location: "Marmaris, Muğla",
    category: "kapi-pencere",
    coverImage: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/8a-.HEIC?updatedAt=1763108904929?w=800&auto=format&fit=crop",
    photos: [
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/8a-.HEIC?updatedAt=1763108904929?w=800&auto=format&fit=crop", caption: "Pencere 1 - Öncesi" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/8b-.HEIC?updatedAt=1763108899308?w=800&auto=format&fit=crop", caption: "Pencere 1 - Sonrası" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/8c+.HEIC?updatedAt=1763108910647?w=800&auto=format&fit=crop", caption: "Pencere 2 - Öncesi" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/8d+.HEIC?updatedAt=1763108902157?w=800&auto=format&fit=crop", caption: "Pencere 2 - Sonrası" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/8e+.HEIC?updatedAt=1763108915230?w=800&auto=format&fit=crop", caption: "Tüm pencereler - Final" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/8f+.HEIC?updatedAt=1763108907144?w=800&auto=format&fit=crop", caption: "Pencere 2 - Sonrası" },

    ]
  },
  {
    id: 8,
    title: "Ev içi dekorasyon",
    location: "Bodrum, Muğla",
    category: "dekoratif",
    coverImage: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/7a-.HEIC?updatedAt=1763108919665?w=800&auto=format&fit=crop",
    photos: [
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/7a-.HEIC?updatedAt=1763108919665?w=800&auto=format&fit=crop", caption: "Cephe - Öncesi" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/7b+.HEIC?updatedAt=1763108929446?w=800&auto=format&fit=crop", caption: "Cephe - Sonrası" },
      { src: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/7c+.HEIC?updatedAt=1763108931269?w=800&auto=format&fit=crop", caption: "Detay görünüm" }
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

  const closeProject = useCallback(() => {
    setSelectedProject(null);
    setCurrentPhotoIndex(0);
  }, []); // State setter'lar stabildir, bağımlılığa gerek yok

  const goToPrevious = useCallback(() => {
    // Bu fonksiyon sadece selectedProject varken çağrılır,
    // bu yüzden selectedProject'e bağlı olmalıdır.
    if (!selectedProject) return; 
    const numPhotos = selectedProject.photos.length;
    setCurrentPhotoIndex((prev) => 
      prev === 0 ? numPhotos - 1 : prev - 1
    );
  }, [selectedProject]); // selectedProject'e bağlı

  const goToNext = useCallback(() => {
    if (!selectedProject) return;
    const numPhotos = selectedProject.photos.length;
    setCurrentPhotoIndex((prev) => 
      prev === numPhotos - 1 ? 0 : prev + 1
    );
  }, [selectedProject]); // selectedProject'e bağlı

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape') closeProject();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  
    // Bağımlılık dizisini GÜNCELLEYİN
  }, [selectedProject, goToPrevious, goToNext, closeProject]);

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