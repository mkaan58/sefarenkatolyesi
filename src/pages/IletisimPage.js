import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Paintbrush } from 'lucide-react';

const IletisimPage = () => {
    const heroImageUrl = "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1600&auto=format&fit=crop";

    const whatsappNumber = '905550957358';
    const whatsappMessage = encodeURIComponent('Merhaba! Web sitenizden ulaşıyorum. Boya hizmetleri hakkında bilgi almak istiyorum.');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <div className="animate-fade-in">
            {/* Hero Section with Gradient Overlay */}
            <div className="relative h-[500px] bg-cover bg-center text-white flex items-center justify-center overflow-hidden" style={{ backgroundImage: `url(${heroImageUrl})` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E5A8E]/95 via-[#FF6B35]/85 to-[#FDB42D]/90"></div>
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)' }}></div>
                </div>
                <div className="relative text-center z-10 px-4 max-w-4xl mx-auto">
                    <div className="flex items-center justify-center mb-6">
                        <Paintbrush size={56} className="text-white animate-pulse" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Bize Ulaşın</h1>
                    <p className="text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
                        Profesyonel boya hizmetleri için hemen iletişime geçin. Ücretsiz keşif ve fiyat teklifi için buradayız!
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="tel:+905550957358"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-lg font-bold rounded-full transition-all transform hover:scale-105 shadow-2xl"
                            style={{ color: '#1E5A8E' }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#FDB42D';
                                e.target.style.color = '#FFFFFF';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#FFFFFF';
                                e.target.style.color = '#1E5A8E';
                            }}
                        >
                            <Phone className="mr-2" size={20} />
                            Hemen Ara
                        </a>
                        <a 
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-bold rounded-full transition-all transform hover:scale-105 shadow-2xl"
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#FFFFFF';
                                e.target.style.color = '#FF6B35';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.color = '#FFFFFF';
                            }}
                        >
                            <MessageCircle className="mr-2" size={20} />
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            {/* Contact Content - Centered Layout */}
            <div className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center justify-center mb-6">
                            <div className="w-16 h-1 mr-6 rounded-full" style={{ backgroundColor: '#FF6B35' }}></div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">İletişim Bilgileri</h2>
                            <div className="w-16 h-1 ml-6 rounded-full" style={{ backgroundColor: '#FF6B35' }}></div>
                        </div>
                        <p className="text-center text-xl text-gray-600 leading-relaxed mb-16 max-w-3xl mx-auto">
                            Boya hizmetlerimiz hakkında detaylı bilgi almak için bize ulaşın. Deneyimli ekibimiz size yardımcı olmak için hazır!
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="flex items-start group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4" style={{ borderColor: '#1E5A8E' }}>
                                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center transition-all" style={{ backgroundColor: '#FFF4ED' }}>
                                    <MapPin size={32} style={{ color: '#FF6B35' }} />
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Adres</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        Dalaman, Muğla<br/>
                                        Türkiye
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4" style={{ borderColor: '#FF6B35' }}>
                                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center transition-all" style={{ backgroundColor: '#E8F4FD' }}>
                                    <Phone size={32} style={{ color: '#1E5A8E' }} />
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Telefon</h3>
                                    <a 
                                        href="tel:+905550957358" 
                                        className="text-gray-600 text-lg transition-colors font-medium"
                                        onMouseEnter={(e) => e.target.style.color = '#FF6B35'}
                                        onMouseLeave={(e) => e.target.style.color = '#4B5563'}
                                    >
                                        +90 555 095 73 58
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-start group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4" style={{ borderColor: '#FDB42D' }}>
                                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center transition-all" style={{ backgroundColor: '#FFF4ED' }}>
                                    <Mail size={32} style={{ color: '#FF6B35' }} />
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">E-posta</h3>
                                    <a 
                                        href="mailto:info@sefarenk.com" 
                                        className="text-gray-600 text-lg transition-colors font-medium"
                                        onMouseEnter={(e) => e.target.style.color = '#FF6B35'}
                                        onMouseLeave={(e) => e.target.style.color = '#4B5563'}
                                    >
                                        info@sefarenk.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4" style={{ borderColor: '#1E5A8E' }}>
                                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center transition-all" style={{ backgroundColor: '#FFFAED' }}>
                                    <Clock size={32} style={{ color: '#FDB42D' }} />
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Çalışma Saatleri</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        Pazartesi - Cumartesi<br/>
                                        08:00 - 18:00
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Map */}
                        <div className="rounded-3xl overflow-hidden shadow-2xl border-4" style={{ borderColor: '#FF6B35' }}>
                           <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50631.84!2d28.80277778!3d36.76583333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c04fe63c3c3c3d%3A0x3c3d3d3d3c3c3c3d!2sDalaman%2C%20Mu%C4%9Fla%2C%20Turkey!5e0!3m2!1sen!2str!4v1731254400000!5m2!1sen!2str" 
    width="100%" 
    height="450" 
    style={{ border: 0 }} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
    title="Dalaman Location Map"
></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Info Section */}
            <div className="py-20 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#1E5A8E' }}>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FDB42D 0px, #FDB42D 10px, transparent 10px, transparent 20px)' }}></div>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <Paintbrush size={48} className="mx-auto mb-6 text-[#FDB42D]" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Neden Sefa Renk Atölyesi?</h2>
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-12">
                            15 yılı aşkın tecrübemiz, kaliteli malzeme kullanımımız ve müşteri memnuniyetine verdiğimiz önem ile Muğla'nın en güvenilir boya ustasıyız. Tüm işlerimize 2 yıl işçilik garantisi veriyoruz.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            <div className="p-8 rounded-2xl backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                                <div className="text-5xl font-bold text-white mb-2">500+</div>
                                <div className="text-white/90 font-medium">Mutlu Müşteri</div>
                            </div>
                            <div className="p-8 rounded-2xl backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                                <div className="text-5xl font-bold text-white mb-2">15+</div>
                                <div className="text-white/90 font-medium">Yıl Tecrübe</div>
                            </div>
                            <div className="p-8 rounded-2xl backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                                <div className="text-5xl font-bold text-white mb-2">98%</div>
                                <div className="text-white/90 font-medium">Memnuniyet</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Contact Strip */}
            <div className="py-8" style={{ backgroundColor: '#FF6B35' }}>
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold text-white mb-2">Hızlı Teklif İçin</h3>
                            <p className="text-white/90">Bugün arayın, ücretsiz keşif ve fiyat teklifi alın!</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a 
                                href="tel:+905550957358"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white text-lg font-bold rounded-full transition-all transform hover:scale-105 shadow-2xl whitespace-nowrap"
                                style={{ color: '#1E5A8E' }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#FDB42D'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#FFFFFF'}
                            >
                                <Phone className="mr-2" size={20} />
                                +90 555 095 73 58
                            </a>
                            <a 
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-bold rounded-full transition-all transform hover:scale-105 shadow-2xl whitespace-nowrap"
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#FFFFFF';
                                    e.target.style.color = '#FF6B35';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'transparent';
                                    e.target.style.color = '#FFFFFF';
                                }}
                            >
                                <MessageCircle className="mr-2" size={20} />
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IletisimPage;