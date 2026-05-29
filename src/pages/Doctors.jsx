import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const experts = [
  { name: 'Dr. Aria Chen', specialty: 'Cosmetic Dermatology', exp: '14 Years', edu: 'Harvard School of Dermatology', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80' },
  { name: 'Sophie Laurent', specialty: 'Lead Formulator', exp: '10 Years', edu: 'École de Chimie, Paris', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80' },
  { name: 'Priya Mehta', specialty: 'Skin Health Expert', exp: '8 Years', edu: 'Stanford Beauty Sciences', img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80' },
  { name: 'Luna Nakamura', specialty: 'Color Scientist', exp: '12 Years', edu: 'Tokyo Institute of Cosmetics', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80' },
  { name: 'Zara Williams', specialty: 'Clean Beauty Chemist', exp: '9 Years', edu: 'UCL Cosmetic Science', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80' },
  { name: 'Camille Dubois', specialty: 'Anti-Aging Specialist', exp: '16 Years', edu: 'Institut Pasteur, Paris', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80' },
  { name: 'Aisha Okafor', specialty: 'Inclusive Beauty', exp: '7 Years', edu: 'NYU Tisch Beauty Program', img: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=600&q=80' },
  { name: 'Elena Vasquez', specialty: 'Botanical Ingredients', exp: '11 Years', edu: 'Madrid Botanical Institute', img: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=600&q=80' },
  { name: 'Maya Patel', specialty: 'Wellness & Beauty', exp: '6 Years', edu: 'Ayurvedic Beauty Academy', img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80' },
]

export default function Experts() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-charcoal overflow-hidden">
        <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1600&q=80" alt="Beauty experts" className="absolute inset-0 w-full h-full object-cover opacity-15"/>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-rose text-xs font-semibold tracking-[0.18em] uppercase mb-4">Our Specialists</p>
            <div className="w-12 h-0.5 bg-rose mx-auto mb-6"/>
            <h1 className="font-display text-6xl font-semibold text-white mb-6">Meet Our Experts</h1>
            <p className="text-white/60 text-lg leading-relaxed">
              World-class dermatologists, cosmetic chemists and beauty scientists behind every Glamova formula.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {experts.map(({ name, specialty, exp, edu, img }, i) => (
            <ScrollReveal key={name} direction="up" delay={i * 0.07}>
              <div className="card-lift group bg-white rounded-sm overflow-hidden shadow-sm border border-gray-100">
                <div className="h-72 overflow-hidden relative">
                  <img src={img} alt={name} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <Link to="/contact" className="block text-center bg-rose text-white text-sm font-semibold py-2.5 rounded-sm">
                      Book Consultation
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-charcoal mb-1">{name}</h3>
                  <p className="text-rose text-sm font-semibold mb-3">{specialty}</p>
                  <div className="flex justify-between text-xs text-slate border-t border-gray-100 pt-3">
                    <span>{exp} Experience</span>
                    <span className="truncate ml-2 text-right">{edu}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Join banner */}
      <section className="py-20 bg-white">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-display text-4xl font-semibold text-charcoal mb-4">Join Our Expert Panel</h2>
            <p className="text-slate mb-8">Are you a dermatologist or beauty scientist? We'd love to collaborate.</p>
            <a href="mailto:experts@glamova.com" className="btn-primary inline-block">Get in Touch</a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
