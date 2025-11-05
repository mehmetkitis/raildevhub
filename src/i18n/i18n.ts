import { useLanguage } from '../context/LanguageContext';

// Simple i18n dictionary. Extend as needed.
const dict = {
  en: {
    'about.hero.title': 'RailDevHub',
    'about.hero.slogan': 'The Digital Nerve Center of Rail',
    'about.hero.subtext': 'We build real-time intelligence for your transport network. Our AI-powered platforms turn every kilometer of rail into a bastion of predictability.',
    'about.hero.cta': 'Power Your Future Now',
    'about.mission.banner': "Every train is not just a vehicle, it's a critical data node. To control the future, we must first learn to read it.",
    'about.story.title': '⚡ Genesis: Challenging the Status Quo',
    'about.story.intro': 'The rail industry carries a century of legacy. But to match the speed and demands of the 21st century, it needed a radical leap. 15 visionary engineers and data architects convened in Istanbul to challenge the dominion of paper and delayed data. Our goal: To create an operating system that marries the steel rail with the silicon revolution.',
    'about.core.title': '🔭 Seeing the Rails with AI',
    'about.core.text': 'RailDevHub is not just a software house; it is the central brain of your rail ecosystem. Our platform manages everything—from predictive maintenance to capacity optimization—without the need for manual intervention. We shift transport operations from a reactive state to a predictive one.',
    'about.core.diff': "💡 Our Difference: We don't just solve problems; our algorithms analyze trends long before they materialize, empowering your operators with the ability to see the future.",
    'about.mission.cards': [
      {
        icon: '🧠',
        title: 'Data-First Operations',
        description: 'We abandoned traditional methods. Every decision we make is rooted in millions of real-time data points streamed directly from the tracks and equipment.'
      },
      {
        icon: '🌍',
        title: 'Global Vision, Local Intelligence',
        description: 'We convert the unique, complex knowledge gained from Turkish infrastructure into AI models applicable to global transport challenges.'
      }
    ],
    'about.capabilities': [
      {
        icon: '🛡️',
        title: 'Cyber Resilience & Reliability',
        focus: 'Architecture for 100% Uptime',
        description: 'Military-grade encryption and guaranteed continuous operations for critical infrastructure.'
      },
      {
        icon: '📊',
        title: 'Real-Time Forecasting Engines',
        focus: 'Coding the Future',
        description: 'Proprietary AI models predicting equipment failure and network congestion with 99% accuracy.'
      },
      {
        icon: '🔗',
        title: 'Open API & Seamless Integration',
        focus: 'Bridging Legacy Systems',
        description: 'Open standards for universal, frictionless integration with your existing infrastructure.'
      }
    ],

    'expertise.header.title': 'The Intersection of Expertise',
    'expertise.header.subtitle': "We don't just provide railway solutions; we create an integrated ecosystem encompassing passengers, stations, trains, and operations. Our solutions comply with global standards.",
    'expertise.domains': [
      { icon: '🚄', title: 'High-Speed Assets', description: 'Real-time intelligence for train performance, maintenance, and energy management.' },
      { icon: '👨‍👩‍👧‍👦', title: 'Passenger Experience Arch.', description: 'Personalized information flow, smart ticketing, and post-journey feedback loops.' },
      { icon: '🚉', title: 'Intelligent Stations', description: 'Transforming stations into data hubs for security, energy optimization, and capacity management.' },
      { icon: '🚦', title: 'Network Command', description: 'AI-powered autonomous systems for scheduling, traffic management, and emergency response.' }
    ],
    'expertise.standards.title': 'European Compliant, Globally Valid',
    'expertise.standards.text': 'All our solutions are designed and implemented in accordance with European railway standards. This means cross-border interoperability, security, and uncompromising quality.',
    'expertise.cta.title': 'Ready to Join the Revolution?',
    'expertise.cta.text': "Explore our projects, discover our expertise, and see how we're redefining railway technology.",
    'expertise.cta.primary': 'View Our Projects',
    'expertise.cta.secondary': 'Explore Our Expertise'
  },
  tr: {
    'about.hero.title': 'RailDevHub',
    'about.hero.slogan': 'Raylı Sistemlerin Dijital Sinir Merkezi',
    'about.hero.subtext': 'Ulaşım ağınız için gerçek zamanlı zekâ üretiyoruz. Yapay zekâ destekli platformlarımız, rayların her kilometresini öngörülebilirliğin kalesine dönüştürür.',
    'about.hero.cta': 'Geleceğinizi Şimdi Güçlendirin',
    'about.mission.banner': 'Her tren sadece bir araç değildir, kritik bir veri düğümüdür. Geleceği kontrol etmek için önce onu okumayı öğrenmeliyiz.',
    'about.story.title': '⚡ Başlangıç: Statükoya Meydan Okumak',
    'about.story.intro': 'Raylı sistemler yüzyıllık bir miras taşır. Ancak 21. yüzyılın hızına ve taleplerine yetişmek için radikal bir sıçrama gerekiyordu. 15 vizyoner mühendis ve veri mimarı, kâğıdın ve gecikmiş verinin tahakkümüne meydan okumak için İstanbul’da bir araya geldi. Hedefimiz: çeliği silikon devrimiyle buluşturan bir işletim sistemi kurmak.',
    'about.core.title': '🔭 Yapay Zekâ ile Rayları Görmek',
    'about.core.text': 'RailDevHub sadece bir yazılım evi değildir; ray ekosisteminizin merkezi beynidir. Platformumuz, kestirimci bakımdan kapasite optimizasyonuna kadar her şeyi manuel müdahale gerektirmeden yönetir. Operasyonları tepkisel durumdan öngörüsel duruma taşıyoruz.',
    'about.core.diff': '💡 Farkımız: Sadece sorunları çözmüyoruz; algoritmalarımız eğilimleri çok önceden analiz ederek operatörlerinize geleceği görme gücü veriyor.',
    'about.mission.cards': [
      {
        icon: '🧠',
        title: 'Veri-Öncelikli Operasyonlar',
        description: 'Geleneksel yöntemleri geride bıraktık. Aldığımız her karar, doğrudan raylardan ve ekipmandan akıtılan milyonlarca gerçek zamanlı veri noktasına dayanır.'
      },
      {
        icon: '🌍',
        title: 'Küresel Vizyon, Yerel Zekâ',
        description: 'Türkiye altyapısından edindiğimiz benzersiz ve karmaşık bilgiyi, küresel ulaşım sorunlarına uygulanabilir yapay zekâ modellerine dönüştürüyoruz.'
      }
    ],
    'about.capabilities': [
      {
        icon: '🛡️',
        title: 'Siber Dayanıklılık ve Güvenilirlik',
        focus: 'Yüzde 100 Çalışırlık Mimarisi',
        description: 'Kritik altyapı için askeri düzey şifreleme ve kesintisiz çalışırlık.'
      },
      {
        icon: '📊',
        title: 'Gerçek Zamanlı Tahmin Motorları',
        focus: 'Geleceği Kodluyoruz',
        description: 'Ekipman arızası ve ağ tıkanıklığını %99 doğrulukla öngören özgün yapay zekâ modelleri.'
      },
      {
        icon: '🔗',
        title: 'Açık API ve Sorunsuz Entegrasyon',
        focus: 'Miras Sistemleri Köprülemek',
        description: 'Mevcut altyapınızla evrensel ve sürtünmesiz entegrasyon için açık standartlar.'
      }
    ],

    'expertise.header.title': 'Uzmanlığın Kesişim Noktası',
    'expertise.header.subtitle': 'Sadece raylı sistem çözümleri sunmuyoruz; yolcu, istasyon, tren ve operasyonları kapsayan entegre bir ekosistem kuruyoruz. Çözümlerimiz küresel standartlarla uyumludur.',
    'expertise.domains': [
      { icon: '🚄', title: 'Yüksek Hızlı Varlıklar', description: 'Tren performansı, bakım ve enerji yönetimi için gerçek zamanlı zekâ.' },
      { icon: '👨‍👩‍👧‍👦', title: 'Yolcu Deneyimi Mimarisi', description: 'Kişiselleştirilmiş bilgi akışı, akıllı biletleme ve yolculuk sonrası geri bildirim döngüleri.' },
      { icon: '🚉', title: 'Akıllı İstasyonlar', description: 'Güvenlik, enerji optimizasyonu ve kapasite yönetimi için istasyonları veri merkezlerine dönüştürmek.' },
      { icon: '🚦', title: 'Ağ Komut Merkezi', description: 'Planlama, trafik yönetimi ve acil durum müdahalesi için yapay zekâ destekli otonom sistemler.' }
    ],
    'expertise.standards.title': 'Avrupa Uyumlu, Küresel Geçerli',
    'expertise.standards.text': 'Tüm çözümlerimiz Avrupa raylı sistem standartlarına göre tasarlanır ve uygulanır. Bu; sınır ötesi birlikte çalışabilirlik, güvenlik ve ödün vermez kalite demektir.',
    'expertise.cta.title': 'Devrime Katılmaya Hazır mısınız?',
    'expertise.cta.text': 'Projelerimizi keşfedin, uzmanlığımızı inceleyin ve raylı teknolojiyi nasıl yeniden tanımladığımızı görün.',
    'expertise.cta.primary': 'Projelerimizi Görüntüleyin',
    'expertise.cta.secondary': 'Uzmanlığımızı Keşfedin'
  }
} as const;

export const useI18n = () => {
  const { language } = useLanguage();
  function t(key: keyof typeof dict['en']): any {
    const langDict = dict[language];
    // @ts-ignore
    return langDict[key] ?? dict.en[key];
  }
  return { t, language };
};
