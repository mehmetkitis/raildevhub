import type { FC } from 'react';
import './ValuesRoadmap.css';
import { useLanguage } from '../../context/LanguageContext';

interface CoreValue {
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface RoadmapBlock {
  year: number;
  title: string;
  color: string;
  goal: string;
  items: string[];
}

const coreValuesEN: CoreValue[] = [
  {
    icon: "🛡️",
    title: "Security",
    description: "Protection Beyond Time. Enterprise-level encryption and zero-trust architecture protecting critical infrastructure.",
    color: "#3B82F6" // blue
  },
  {
    icon: "⚡",
    title: "Performance",
    description: "Intelligence Beyond Speed. Power to manage massive datasets in real-time with uncompromising low latency.",
    color: "#F97316" // orange
  },
  {
    icon: "✨",
    title: "Modern Design",
    description: "User-Centric Experience. Simplifying complex systems with intuitive, clean interfaces to accelerate decision-making.",
    color: "#EAB308" // yellow
  },
  {
    icon: "✅",
    title: "Quality",
    description: "Zero-Error Commitment. Production-ready, rigorously tested solutions for flawless and reliable operations.",
    color: "#EF4444" // red
  }
];

const coreValuesTR: CoreValue[] = [
  {
    icon: "🛡️",
    title: "Güvenlik",
    description: "Zamanın Ötesinde Koruma. Kritik altyapıyı koruyan kurumsal düzey şifreleme ve sıfır güven mimarisi.",
    color: "#3B82F6" // blue
  },
  {
    icon: "⚡",
    title: "Performans",
    description: "Hızın Ötesinde Zeka. Ödün vermeden düşük gecikmeyle büyük veri setlerini gerçek zamanlı yönetme gücü.",
    color: "#F97316" // orange
  },
  {
    icon: "✨",
    title: "Modern Tasarım",
    description: "Kullanıcı Odaklı Deneyim. Karmaşık sistemleri sezgisel, temiz arayüzlerle basitleştirerek karar vermeyi hızlandırma.",
    color: "#EAB308" // yellow
  },
  {
    icon: "✅",
    title: "Kalite",
    description: "Sıfır Hata Taahhüdü. Kusursuz ve güvenilir operasyonlar için üretime hazır, titizlikle test edilmiş çözümler.",
    color: "#EF4444" // red
  }
];

const roadmapBlocksEN: RoadmapBlock[] = [
  {
    year: 2025,
    title: "The Digital Core Year",
    color: "#1D4ED8", // dark blue
    goal: "Digital transformation fundamentals are laid. Every process becomes data-driven.",
    items: [
      "Full platform deployment",
      "25,000+ daily active users",
      "500+ reports and smart dashboards",
      "Fully real-time data flow"
    ]
  },
  {
    year: 2027,
    title: "Autonomous Intelligence Layer",
    color: "#DC2626", // red
    goal: "Decision-making authority transitions to AI agents. Maintenance costs and delays approach zero.",
    items: [
      "100% predictive maintenance",
      "Real-time anomaly and cyber threat detection",
      "Self-optimizing smart energy management",
      "Autonomous operational scheduling"
    ]
  },
  {
    year: 2030,
    title: "The Smart Rail Network",
    color: "#D97706", // amber
    goal: "Every train, track, and station becomes a node in the smart network. Turkey sets global standards.",
    items: [
      "Fully autonomous operation monitoring",
      "Blockchain-certified security records",
      "Carbon-neutral operation optimization",
      "Passenger Experience AI (PX AI)"
    ]
  }
];

const roadmapBlocksTR: RoadmapBlock[] = [
  {
    year: 2025,
    title: "Dijital Çekirdek Yılı",
    color: "#1D4ED8", // dark blue
    goal: "Dijital dönüşüm temelleri atılıyor. Her süreç veri odaklı hale geliyor.",
    items: [
      "Tam platform dağıtımı",
      "25.000+ günlük aktif kullanıcı",
      "500+ rapor ve akıllı pano",
      "Tamamen gerçek zamanlı veri akışı"
    ]
  },
  {
    year: 2027,
    title: "Otonom Zeka Katmanı",
    color: "#DC2626", // red
    goal: "Karar verme yetkisi yapay zeka ajanlarına geçiyor. Bakım maliyetleri ve gecikmeler sıfıra yaklaşıyor.",
    items: [
      "%100 öngörüsel bakım",
      "Gerçek zamanlı anomali ve siber tehdit tespiti",
      "Kendi kendini optimize eden akıllı enerji yönetimi",
      "Otonom operasyonel planlama"
    ]
  },
  {
    year: 2030,
    title: "Akıllı Ray Ağı",
    color: "#D97706", // amber
    goal: "Her tren, ray ve istasyon akıllı ağda bir düğüm haline geliyor. Türkiye küresel standartlar belirliyor.",
    items: [
      "Tamamen otonom operasyon izleme",
      "Blockchain sertifikalı güvenlik kayıtları",
      "Karbon-nötr operasyon optimizasyonu",
      "Yolcu Deneyimi Yapay Zekası (PX AI)"
    ]
  }
];

const ValuesRoadmap: FC = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';
  const coreValues = isTR ? coreValuesTR : coreValuesEN;
  const roadmapBlocks = isTR ? roadmapBlocksTR : roadmapBlocksEN;
  
  return (
    <section className="values-roadmap">
      {/* Core Values Section */}
      <div className="values-section">
        <div className="section-header">
          <h2>
            <span className="icon">🧭</span>
            {isTR ? 'Bizi İleriye Taşıyan İlkeler' : 'The Principles That Propel Us'}
          </h2>
          <p className="slogan">
            {isTR ? 'Sadece bir platform değil, bir felsefe inşa ediyoruz.' : 'We\'re building not just a platform, but a philosophy.'}
          </p>
        </div>

        <div className="values-grid">
          {coreValues.map((value, index) => (
            <div 
              key={index} 
              className="value-card"
              style={{ '--value-color': value.color } as React.CSSProperties}
            >
              <span className="value-icon" style={{ color: value.color }}>{value.icon}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="roadmap-section">
        <div className="section-header">
          <h2>
            <span className="icon">🔭</span>
            {isTR ? 'Yol Haritamız: Devrimsel Bir Yörünge' : 'Our Roadmap: A Revolutionary Trajectory'}
          </h2>
          <p className="slogan">
            {isTR 
              ? 'Yol haritamız sadece iddialı değil; küresel standartları yeniden yazıyor.'
              : 'Our roadmap isn\'t just ambitious; it\'s rewriting global standards.'}
          </p>
        </div>

        <div className="goal-banner">
          {isTR 
            ? '2030 yılına kadar Türkiye\'nin demiryolu ağını dünyanın en akıllısı yapmayı hedefliyoruz.'
            : 'By 2030, we aim to make Turkey\'s railway network the smartest in the world.'}
        </div>

        <div className="timeline">
          {roadmapBlocks.map((block, index) => (
            <div 
              key={index} 
              className="timeline-block"
              style={{ '--block-color': block.color } as React.CSSProperties}
            >
              <div className="year-marker">
                <span className="year">{block.year}</span>
              </div>
              <div className="block-content">
                <h3>{block.title}</h3>
                <p className="block-goal">{block.goal}</p>
                <ul className="block-items">
                  {block.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Beyond 2030 */}
        <div className="future-vision">
          <h3>{isTR ? '2030\'un Ötesi: Gerçekleşen Rüya' : 'Beyond 2030: The Dream Realized'}</h3>
          <p>
            {isTR
              ? 'Yolcuların ihtiyaçlarını onlar farkına varmadan bilen, arızaların hiç gerçekleşmediği bir demiryolu ağı hayal edin. Her yolculuğun mükemmel, güvenli, verimli ve tamamen sürdürülebilir olduğu bir dünya. Bu bilim kurgu değil. Bu, yol haritamızın kaçınılmaz sonucu.'
              : 'Imagine a railway network that knows passengers\' needs before they do, where failures never materialize. A world where every journey is perfect, secure, efficient, and completely sustainable. This isn\'t science fiction. This is the inevitable outcome of our roadmap.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValuesRoadmap;