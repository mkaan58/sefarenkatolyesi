// =================================================================================
// SEFA RENK ATÖLYESİ - HOMEPAGE WITH AMAZING ANIMATIONS
// Professional Painting Services with WOW Factor!
// Brand colors: Deep Blue (#1E5A8E), Vibrant Orange (#FF6B35), Golden Yellow (#FDB42D)
// =================================================================================
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Star, Award, Smile, X, Paintbrush, Home, Building2, Sparkles, CheckCircle, Clock, Shield, Phone, Palette, Droplets, Zap,MapPin } from 'lucide-react';


const HomePage = () => {
    // MODAL STATE
    const [modalImageSrc, setModalImageSrc] = useState(null);
    
    // SCROLL ANIMATIONS
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState({});
    
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible((prev) => ({
                            ...prev,
                            [entry.target.id]: true
                        }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('[data-animate]').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // --- Services Data ---
    const services = [
        {
            title: "İç Mekan Boyama",
            description: "Evinizin iç duvarlarını profesyonel tekniklerle boyuyoruz. Pürüzsüz yüzey hazırlığı, kaliteli malzeme kullanımı ve titiz işçilikle hayalinizdeki mekanı yaratıyoruz.",
            image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&auto=format&fit=crop",
            icon: <Home size={28} />,
            color: '#1E5A8E'
        },
        {
            title: "Dış Cephe Boyama",
            description: "Binanızın dış cephesini hava koşullarına dayanıklı, uzun ömürlü boyalarla koruyoruz. Profesyonel ekipman ve güvenlik standartlarıyla çalışıyoruz.",
            image: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/DCB.jpg?updatedAt=1762802527080?w=800&auto=format&fit=crop",
            icon: <Building2 size={28} />,
            color: '#FF6B35'
        },
        {
            title: "Kapı ve Pencere Boyama",
            description: "Ahşap ve metal kapı-pencerelerinizi özel boyalarla yeniliyoruz. Detaylı zımparalama, astar ve son kat uygulamasıyla mükemmel sonuçlar sunuyoruz.",
            image: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/Kap%C4%B1.HEIC?updatedAt=1762801853262?w=800&auto=format&fit=crop",
            icon: <Paintbrush size={28} />,
            color: '#FDB42D'
        },
        {
            title: "Dekoratif Uygulamalar",
            description: "Duvar kağıdı, saten, ipek sıva gibi dekoratif uygulamalarla mekanlarınıza özel dokunuş katıyoruz. Renk danışmanlığı hizmetimizle en uygun paleti buluyoruz.",
            image: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/DU.JPG?updatedAt=1762802389149?w=800&auto=format&fit=crop",
            icon: <Sparkles size={28} />,
            color: '#1E5A8E'
        },
        {
            title: "Tadilat Sonrası Boya",
            description: "Tadilat sonrası ortaya çıkan boya ihtiyaçlarınızı hızlı ve kaliteli bir şekilde gideriyoruz. Alçıpan, sıva gibi tüm yüzey tiplerine hakimiz.",
            image: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/TSB.HEIC?updatedAt=1762802275157?w=800&auto=format&fit=crop",
            icon: <Award size={28} />,
            color: '#FF6B35'
        },
        {
            title: "İş Yeri Boyama",
            description: "Ofis, mağaza, restoran gibi ticari mekanlarınızı çalışma saatlerinizi etkilemeden profesyonelce boyuyoruz. Hızlı ve temiz işçilik garantisi.",
            image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop",
            icon: <Building2 size={28} />,
            color: '#FDB42D'
        }
    ];

    // --- Why Choose Us Features ---
    const features = [
        {
            icon: <Palette size={40} />,
            title: "Kaliteli Malzeme",
            description: "Sadece güvenilir markaların ürünlerini kullanıyoruz",
            color: '#1E5A8E'
        },
        {
            icon: <Zap size={40} />,
            title: "Zamanında Teslimat",
            description: "Belirlenen sürede işlerinizi tamamlıyoruz",
            color: '#FF6B35'
        },
        {
            icon: <Shield size={40} />,
            title: "İşçilik Garantisi",
            description: "Tüm işlerimize 2 yıl garanti veriyoruz",
            color: '#FDB42D'
        },
        {
            icon: <Star size={40} />,
            title: "Deneyimli Ekip",
            description: "11+ yıl tecrübeli ustalarla çalışıyoruz",
            color: '#1E5A8E'
        }
    ];

    // --- Project Gallery ---
    const projects = [
        {
            title: "Otel - Ramada Wyndham",
            location: "Muğla, Dalaman",
            image: "https://ik.imagekit.io/46nvsdwq8/sefarenkatolyesi/Ramada.HEIC?updatedAt=1762802595282?w=800&auto=format&fit=crop"
        },
        {
            title: "Lüks Daire - Komple Tadilat",
            location: "Muğla, Bodrum",
            image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop"
        },
        {
            title: "Butik Otel - Dış Cephe",
            location: "Muğla, Fethiye",
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop"
        },
        {
            title: "Restaurant - Dekoratif Boya",
            location: "Muğla, Marmaris",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop"
        },
        {
            title: "Ofis - İç Mekan Boyama",
            location: "Muğla, Dalaman",
            image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&auto=format&fit=crop"
        },
        {
            title: "Yazlık Ev - Komple Boya",
            location: "Muğla, Datça",
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop"
        }
    ];

    // Contact Information
    const phoneNumber = '905550957358';
    const message = encodeURIComponent("Merhaba! Boya işleri hakkında bilgi almak istiyorum.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    const emailAddress = 'info@sefarenk.com';

    // const heroImageUrl = "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1600&auto=format&fit=crop";
     const heroImageUrl = "https://images.unsplash.com/photo-1717281234297-3def5ae3eee1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687?w=1600&auto=format&fit=crop";
    

    // Floating animation keyframes
    const floatingStyle = `
        @keyframes floating {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-20px) rotate(5deg); }
            50% { transform: translateY(-10px) rotate(-5deg); }
            75% { transform: translateY(-15px) rotate(3deg); }
        }
        @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-100px); }
            to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
            from { opacity: 0; transform: translateX(100px); }
            to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInUp {
            from { opacity: 0; transform: translateY(100px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmer {
            0% { background-position: -1000px 0; }
            100% { background-position: 1000px 0; }
        }
        @keyframes paintDrip {
            0% { transform: translateY(-100%) scaleY(0); }
            50% { transform: translateY(0%) scaleY(1.2); }
            100% { transform: translateY(0%) scaleY(1); }
        }
        @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(255, 107, 53, 0.5); }
            50% { box-shadow: 0 0 40px rgba(255, 107, 53, 0.8), 0 0 60px rgba(253, 180, 45, 0.6); }
        }
        .animate-floating { animation: floating 6s ease-in-out infinite; }
        .animate-slide-in-left { animation: slideInLeft 1s ease-out forwards; }
        .animate-slide-in-right { animation: slideInRight 1s ease-out forwards; }
        .animate-slide-in-up { animation: slideInUp 1s ease-out forwards; }
        .animate-fade-in-scale { animation: fadeInScale 1s ease-out forwards; }
        .animate-shimmer { 
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            background-size: 1000px 100%;
            animation: shimmer 3s infinite;
        }
        .animate-paint-drip { animation: paintDrip 1.5s ease-out forwards; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
    `;

    return (
        <div className="animate-fade-in overflow-hidden">
            <style>{floatingStyle}</style>

            {/* Hero Section with Parallax Effect */}
            <div 
                className="relative min-h-[95vh] flex items-center justify-center bg-cover bg-center text-white overflow-hidden" 
                style={{ 
                    backgroundImage: `url(${heroImageUrl})`,
                    backgroundAttachment: 'fixed',
                    transform: `translateY(${scrollY * 0.5}px)`
                }}
            >
                {/* Animated Gradient Overlay */}
                <div 
                    className="absolute inset-0 transition-all duration-1000"
                    style={{
                        background: `linear-gradient(135deg, 
                            rgba(30, 90, 142, ${0.95 - scrollY * 0.0003}) 0%, 
                            rgba(255, 107, 53, ${0.85 - scrollY * 0.0003}) 50%, 
                            rgba(253, 180, 45, ${0.75 - scrollY * 0.0003}) 100%)`
                    }}
                ></div>
                
                {/* Animated Paint Drops */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-3 h-3 rounded-full animate-paint-drip"
                            style={{
                                left: `${10 + i * 12}%`,
                                top: 0,
                                backgroundColor: i % 3 === 0 ? '#1E5A8E' : i % 3 === 1 ? '#FF6B35' : '#FDB42D',
                                animationDelay: `${i * 0.2}s`,
                                opacity: 0.6
                            }}
                        ></div>
                    ))}
                </div>

                {/* Floating Paint Brushes */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <Paintbrush 
                        size={120} 
                        className="absolute text-white/10 animate-floating"
                        style={{ 
                            top: '10%', 
                            left: '5%',
                            animationDelay: '0s',
                            transform: 'rotate(-15deg)'
                        }} 
                    />
                    <Droplets 
                        size={80} 
                        className="absolute text-white/10 animate-floating"
                        style={{ 
                            top: '60%', 
                            right: '8%',
                            animationDelay: '1s'
                        }} 
                    />
                    <Palette 
                        size={100} 
                        className="absolute text-white/10 animate-floating"
                        style={{ 
                            bottom: '15%', 
                            left: '10%',
                            animationDelay: '2s',
                            transform: 'rotate(25deg)'
                        }} 
                    />
                </div>
                
                <div className="relative z-10 text-center px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Animated Icon */}
                        <div className="flex items-center justify-center mb-8">
                            <div className="relative">
                                <Paintbrush size={80} className="text-[#FDB42D] animate-floating" />
                                <div className="absolute inset-0 animate-pulse-glow rounded-full"></div>
                            </div>
                        </div>
                        
                        {/* Title with Staggered Animation */}
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                            <span className="inline-block animate-slide-in-left" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
                                Profesyonel
                            </span>
                            <br />
                            <span className="inline-block animate-slide-in-right" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
                                Boya Hizmetleri
                            </span>
                            <br/>
                            <span 
                                className="inline-block animate-fade-in-scale" 
                                style={{ 
                                    color: '#FDB42D', 
                                    animationDelay: '0.6s',
                                    opacity: 0,
                                    animationFillMode: 'forwards',
                                    textShadow: '0 0 30px rgba(253, 180, 45, 0.5)'
                                }}
                            >
                                Muğla ve Çevresinde
                            </span>
                        </h1>
                        
                        <p 
                            className="mt-8 text-xl md:text-2xl text-gray-100 leading-relaxed animate-slide-in-up max-w-3xl mx-auto"
                            style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}
                        >
                            11 yıllık tecrübe, kaliteli malzeme ve titiz işçilikle hayalinizdeki mekanı yaratıyoruz
                        </p>
                        
                        <div 
                            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center animate-slide-in-up"
                            style={{ animationDelay: '1s', opacity: 0, animationFillMode: 'forwards' }}
                        >
                            <a 
                                href={`tel:+${phoneNumber}`} 
                                className="group relative text-white font-bold text-xl py-5 px-12 rounded-full transition-all duration-300 transform hover:scale-110 inline-flex items-center justify-center shadow-2xl overflow-hidden" 
                                style={{ backgroundColor: '#FF6B35' }}
                            >
                                <span className="absolute inset-0 animate-shimmer"></span>
                                <Phone className="mr-3 group-hover:rotate-12 transition-transform duration-300" size={24} />
                                <span className="relative z-10">Hemen Ara</span>
                            </a>
                            <a 
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-white font-bold text-xl py-5 px-12 rounded-full transition-all duration-300 transform hover:scale-110 inline-flex items-center justify-center shadow-2xl overflow-hidden border-4 border-white" 
                                style={{ color: '#1E5A8E' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#FDB42D';
                                    e.currentTarget.style.color = '#FFFFFF';
                                    e.currentTarget.style.borderColor = '#FDB42D';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                                    e.currentTarget.style.color = '#1E5A8E';
                                    e.currentTarget.style.borderColor = '#FFFFFF';
                                }}
                            >
                                <Sparkles className="mr-3 group-hover:rotate-180 transition-transform duration-500" size={24} />
                                <span className="relative z-10">Ücretsiz Keşif</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* About Section with Slide-in Animation */}
            <div className="py-28 md:py-36 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-20 right-0 w-96 h-96 bg-[#FF6B35]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#1E5A8E]/5 rounded-full blur-3xl"></div>
                
                <div className="container mx-auto px-6 relative z-10">
                    <div 
                        id="about-section"
                        data-animate
                        className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
                    >
                        <div 
                            className={`rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-1000 ${
                                isVisible['about-section'] ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                            }`}
                            style={{ transitionDelay: '0.2s' }}
                        >
                            <div className="relative group">
                                <img 
                                    src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1131" 
                                    
                                    
                                    alt="Sefa Renk Atölyesi - Profesyonel Boya Hizmeti" 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1E5A8E]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                        
                        <div 
                            className={`prose prose-lg max-w-none transform transition-all duration-1000 ${
                                isVisible['about-section'] ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                            }`}
                            style={{ transitionDelay: '0.4s' }}
                        >
                            <div className="flex items-center mb-8">
                                <div className="w-2 h-20 mr-5 rounded-full animate-paint-drip" style={{ backgroundColor: '#FF6B35' }}></div>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight m-0">
                                    Sefa Renk Atölyesi
                                </h2>
                            </div>
                            <p className="text-gray-600 text-xl leading-relaxed">
                                <strong style={{ color: '#1E5A8E' }}>11 yılı aşkın tecrübemizle</strong> Muğla ve çevresinde ev, iş yeri, villa ve her türlü yapının iç-dış boyama işlerini profesyonel bir şekilde gerçekleştiriyoruz.
                            </p>
                            <p className="text-gray-600 text-xl leading-relaxed">
                                Sadece boyamakla kalmıyor, <strong style={{ color: '#FF6B35' }}>renk danışmanlığı hizmetiyle</strong> mekanlarınıza en uygun renk paletini belirlemenize yardımcı oluyoruz.
                            </p>
                            <p className="text-gray-600 text-xl leading-relaxed">
                                <strong style={{ color: '#FDB42D' }}>Müşteri memnuniyeti</strong> bizim önceliğimiz. Temiz işçilik, zamanında teslimat ve işçilik garantisiyle Muğla'nın güvenilir boya ustası olarak hizmet veriyoruz.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Statistics Section with Counter Animation */}
            <div className="py-20 relative overflow-hidden" style={{ backgroundColor: '#F8FAFC' }}>
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0" style={{ 
                        backgroundImage: 'radial-gradient(circle at 25px 25px, #1E5A8E 2%, transparent 0%), radial-gradient(circle at 75px 75px, #FF6B35 2%, transparent 0%)',
                        backgroundSize: '100px 100px'
                    }}></div>
                </div>
                
                <div className="container mx-auto px-6 relative z-10">
                    <div 
                        id="stats-section"
                        data-animate
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        {[
                            { icon: <Users size={48} />, number: '500+', label: 'Mutlu Müşteri', color: '#1E5A8E', delay: '0.1s' },
                            { icon: <Paintbrush size={48} />, number: '11+', label: 'Yıl Tecrübe', color: '#FF6B35', delay: '0.2s' },
                            { icon: <Award size={48} />, number: '98%', label: 'Memnuniyet Oranı', color: '#FDB42D', delay: '0.3s' },
                            { icon: <Star size={48} />, number: '2 Yıl', label: 'İşçilik Garantisi', color: '#FDB42D', delay: '0.4s' }
                        ].map((stat, index) => (
                            <div 
                                key={index}
                                className={`group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-t-4 ${
                                    isVisible['stats-section'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                                }`}
                                style={{ 
                                    borderColor: stat.color,
                                    transitionDelay: isVisible['stats-section'] ? stat.delay : '0s'
                                }}
                            >
                                <div 
    className="mx-auto mb-6 w-20 h-20 rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" 
    style={{ 
        color: '#FFFFFF',  // White icon
        backgroundColor: stat.color  // Colored background circle
    }}
>
    {stat.icon}
</div>
                                <p className="text-5xl font-bold mb-3" style={{ color: stat.color }}>{stat.number}</p>
                                <p className="text-gray-600 font-medium text-lg">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Services Section with Staggered Cards */}
            <div className="py-28 md:py-36 bg-white relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full opacity-20 animate-floating"
                            style={{
                                width: `${Math.random() * 100 + 50}px`,
                                height: `${Math.random() * 100 + 50}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                backgroundColor: i % 3 === 0 ? '#1E5A8E' : i % 3 === 1 ? '#FF6B35' : '#FDB42D',
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${5 + Math.random() * 5}s`,
                                filter: 'blur(40px)'
                            }}
                        ></div>
                    ))}
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div 
                        id="services-title"
                        data-animate
                        className={`text-center max-w-4xl mx-auto mb-20 transform transition-all duration-1000 ${
                            isVisible['services-title'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                        }`}
                    >
                        <div className="inline-flex items-center justify-center mb-6">
                            <div className="w-16 h-1 mr-6 rounded-full animate-paint-drip" style={{ backgroundColor: '#FF6B35' }}></div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Hizmetlerimiz</h2>
                            <div className="w-16 h-1 ml-6 rounded-full animate-paint-drip" style={{ backgroundColor: '#FF6B35', animationDelay: '0.2s' }}></div>
                        </div>
                        <p className="mt-6 text-xl text-gray-600">Her türlü boya ihtiyacınız için profesyonel çözümler sunuyoruz</p>
                    </div>

                    <div 
                        id="services-grid"
                        data-animate
                        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
                    >
                        {services.map((service, index) => (
                            <div 
                                key={index} 
                                className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 ${
                                    isVisible['services-grid'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                                }`}
                                style={{ 
                                    transitionDelay: isVisible['services-grid'] ? `${index * 0.1}s` : '0s'
                                }}
                            >
                                <div 
                                    className="relative h-72 overflow-hidden cursor-pointer"
                                    onClick={() => setModalImageSrc(service.image)}
                                >
                                    <img 
                                        src={service.image} 
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                                    
                                    {/* Animated Icon Circle */}
                                    <div className="absolute bottom-6 left-6 flex items-center pointer-events-none">
                                        <div 
                                            className="w-16 h-16 rounded-full flex items-center justify-center text-white mr-4 shadow-2xl transform group-hover:rotate-360 group-hover:scale-125 transition-all duration-700" 
                                            style={{ backgroundColor: service.color }}
                                        >
                                            {service.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white drop-shadow-lg">{service.title}</h3>
                                    </div>

                                    {/* Shimmer Effect on Hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute inset-0 animate-shimmer"></div>
                                    </div>
                                </div>
                                
                                <div className="p-8 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
                                    {/* Decorative Corner */}
                                    <div 
                                        className="absolute top-0 right-0 w-32 h-32 opacity-10 transform group-hover:scale-150 group-hover:rotate-45 transition-all duration-700"
                                        style={{ 
                                            background: `radial-gradient(circle, ${service.color} 0%, transparent 70%)`
                                        }}
                                    ></div>
                                    <p className="text-gray-700 text-lg leading-relaxed relative z-10">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section with 3D Cards */}
            <div className="py-28 md:py-36 relative overflow-hidden" style={{ backgroundColor: '#1E5A8E' }}>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{ 
                        backgroundImage: 'repeating-linear-gradient(45deg, #FDB42D 0px, #FDB42D 10px, transparent 10px, transparent 20px), repeating-linear-gradient(-45deg, #FF6B35 0px, #FF6B35 10px, transparent 10px, transparent 20px)'
                    }}></div>
                </div>
                
                <div className="container mx-auto px-6 relative z-10">
                    <div 
                        id="features-title"
                        data-animate
                        className={`text-center max-w-4xl mx-auto mb-20 transform transition-all duration-1000 ${
                            isVisible['features-title'] ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                        }`}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Neden Sefa Renk Atölyesi?</h2>
                        <p className="text-xl text-white/90">Kalite, güven ve mükemmellik arayışınızın son durağı</p>
                    </div>
                    
                    <div 
                        id="features-grid"
                        data-animate
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {features.map((feature, index) => (
                            <div 
                                key={index} 
                                className={`group text-center p-10 rounded-3xl transition-all duration-700 transform hover:scale-110 hover:-translate-y-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 cursor-pointer ${
                                    isVisible['features-grid'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                                }`}
                                style={{ 
                                    transitionDelay: isVisible['features-grid'] ? `${index * 0.15}s` : '0s',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
                                }}
                            >
                                <div 
                                    className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8 transform group-hover:rotate-360 group-hover:scale-125 transition-all duration-700" 
                                    style={{ backgroundColor: '#FDB42D' }}
                                >
                                    <div style={{ color: feature.color }} className="transform group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                                <p className="text-white/80 text-lg">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Projects Gallery with Masonry Effect */}
            <div className="py-28 md:py-36 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-6">
                    <div 
                        id="projects-title"
                        data-animate
                        className={`text-center max-w-4xl mx-auto mb-20 transform transition-all duration-1000 ${
                            isVisible['projects-title'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                        }`}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Tamamlanan Projeler</h2>
                        <p className="text-xl text-gray-600">Son dönemde tamamladığımız işlerden örnekler</p>
                    </div>

                    <div 
                        id="projects-grid"
                        data-animate
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {projects.map((project, index) => (
                            <div 
                                key={index} 
                                className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:rotate-1 cursor-pointer ${
                                    isVisible['projects-grid'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                                }`}
                                onClick={() => setModalImageSrc(project.image)}
                                style={{ 
                                    transitionDelay: isVisible['projects-grid'] ? `${index * 0.1}s` : '0s'
                                }}
                            >
                                <div className="relative h-80 overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    {/* Animated Overlay */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/30 to-[#FDB42D]/30"></div>
                                    </div>
                                    
                                    <div className="absolute bottom-6 left-6 right-6 transform group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{project.title}</h3>
                                        <div className="flex items-center text-white/90">
                                            <MapPin size={18} className="mr-2" />
                                            <p className="text-base">{project.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="py-28 md:py-36" style={{ backgroundColor: '#F8FAFC' }}>
                <div className="container mx-auto px-6">
                    <div 
                        id="testimonials-title"
                        data-animate
                        className={`text-center max-w-4xl mx-auto mb-20 transform transition-all duration-1000 ${
                            isVisible['testimonials-title'] ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                        }`}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Müşterilerimiz Ne Diyor?</h2>
                        <p className="text-xl text-gray-600">Hizmetimizden memnun kalan müşterilerimizin görüşleri</p>
                    </div>
                    
                    <div 
                        id="testimonials-grid"
                        data-animate
                        className="grid grid-cols-1 md:grid-cols-3 gap-10"
                    >
                        {[
                            { 
                                name: 'Ahmet Yılmaz', 
                                location: 'Marmaris', 
                                text: 'Villamızın komple boyasını yaptırdık. Hem işçilik hem de kullanılan malzemeler çok kaliteliydi. İşini titizlikle yapan, sözünde duran bir usta. Herkese tavsiye ederim.',
                                initial: 'A',
                                color: '#1E5A8E'
                            },
                            { 
                                name: 'Mehmet Demir', 
                                location: 'Bodrum', 
                                text: 'Restoranımızın dekoratif boyasını çok beğendik. Renk seçiminde yardımcı oldular ve sonuç harika oldu. Çalışma saatlerimizi etkilemeden işi bitirdiler. Çok teşekkürler!',
                                initial: 'M',
                                color: '#FF6B35'
                            },
                            { 
                                name: 'Ayşe Kaya', 
                                location: 'Fethiye', 
                                text: 'Evimizin iç ve dış boyasını yaptırdık. Ekip çok profesyonel, temiz çalışıyor ve işini iyi biliyor. Fiyat-performans açısından çok memnun kaldık. Kesinlikle tavsiye ederim.',
                                initial: 'A',
                                color: '#FDB42D'
                            }
                        ].map((testimonial, index) => (
                            <div 
                                key={index}
                                className={`group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border-l-4 relative overflow-hidden ${
                                    isVisible['testimonials-grid'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                                }`}
                                style={{ 
                                    borderColor: testimonial.color,
                                    transitionDelay: isVisible['testimonials-grid'] ? `${index * 0.2}s` : '0s'
                                }}
                            >
                                {/* Decorative Quote Mark */}
                                <div 
                                    className="absolute top-6 right-6 text-8xl font-serif opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                                    style={{ color: testimonial.color }}
                                >
                                    "
                                </div>
                                
                                <div className="flex items-center mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star 
                                            key={i} 
                                            className="w-6 h-6 fill-current transform group-hover:scale-125 transition-transform duration-300" 
                                            style={{ 
                                                color: '#FDB42D',
                                                transitionDelay: `${i * 0.05}s`
                                            }} 
                                        />
                                    ))}
                                </div>
                                
                                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic relative z-10">
                                    "{testimonial.text}"
                                </p>
                                
                                <div className="flex items-center relative z-10">
                                    <div 
                                        className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" 
                                        style={{ backgroundColor: testimonial.color }}
                                    >
                                        {testimonial.initial}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                                        <p className="text-gray-600">{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal - Enlarged Image Viewer */}
            {modalImageSrc && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4 animate-fade-in"
                    onClick={() => setModalImageSrc(null)}
                >
                    <button 
                        className="absolute top-8 right-8 text-white hover:text-[#FDB42D] z-50 transition-all duration-300 transform hover:scale-125 hover:rotate-90"
                        onClick={() => setModalImageSrc(null)}
                    >
                        <X size={48} />
                    </button>
                    <img 
                        src={modalImageSrc} 
                        alt="Enlarged view"
                        className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl animate-fade-in-scale"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            {/* Final CTA Section with Pulsing Effect */}
            <div className="relative py-28 overflow-hidden" style={{ backgroundColor: '#FF6B35' }}>
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{ 
                        backgroundImage: 'url("https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1600&auto=format&fit=crop")', 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed'
                    }}></div>
                </div>
                
                {/* Animated Circles */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full border-4 border-white/20 animate-pulse-glow"
                            style={{
                                width: `${200 + i * 100}px`,
                                height: `${200 + i * 100}px`,
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                                animationDelay: `${i * 0.2}s`,
                                animationDuration: '3s'
                            }}
                        ></div>
                    ))}
                </div>
                
                <div className="container mx-auto px-6 text-center relative z-10">
                    <Paintbrush size={64} className="mx-auto mb-8 text-white animate-floating" />
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg">
                        Hayalinizdeki Mekanı Birlikte Yaratalım
                    </h2>
                    <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed mb-12">
                        Ücretsiz keşif ve fiyat teklifi için hemen iletişime geçin. Deneyimli ekibimiz size en uygun çözümü sunmak için hazır.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a 
                            href={`tel:+${phoneNumber}`} 
                            className="group bg-white font-bold text-xl py-6 px-14 rounded-full transition-all duration-500 transform hover:scale-110 inline-flex items-center justify-center shadow-2xl hover:shadow-[#FDB42D]/50 relative overflow-hidden" 
                            style={{ color: '#1E5A8E' }}
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-[#FDB42D] to-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                            <Phone className="mr-3 relative z-10 group-hover:animate-pulse" size={24} />
                            <span className="relative z-10 group-hover:text-white transition-colors duration-500">Hemen Ara</span>
                        </a>
                        <a 
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group text-white font-bold text-xl py-6 px-14 rounded-full transition-all duration-500 transform hover:scale-110 inline-flex items-center justify-center shadow-2xl border-4 border-white hover:bg-white hover:text-[#FF6B35] relative overflow-hidden" 
                        >
                            <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                            <span className="relative z-10 flex items-center">
                                WhatsApp ile Yaz
                                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={24} />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;