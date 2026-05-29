import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const values = [
  { title: 'Clean Beauty', desc: 'We use only safe, non-toxic, and ethically sourced ingredients in every product.', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80' },
  { title: 'Sustainability', desc: 'Eco-conscious packaging and carbon-neutral manufacturing processes.', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80' },
  { title: 'Inclusivity', desc: 'Products designed for every skin tone, type, and texture — beauty for all.', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80' },
  { title: 'Innovation', desc: 'Cutting-edge formulations backed by cosmetic science and dermatology.', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80' },
]

const leadership = [
  { name: 'Aria Chen', role: 'Founder & Creative Director', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80' },
  { name: 'Sophie Laurent', role: 'Head of Formulation', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80' },
  { name: 'Priya Mehta', role: 'Director of Brand & Marketing', img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80' },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-charcoal overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1600&q=80"
          alt="Glamova beauty"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-rose text-xs font-semibold tracking-[0.18em] uppercase mb-4">Our Story</p>
            <div className="w-12 h-0.5 bg-rose mx-auto mb-6"/>
            <h1 className="font-display text-6xl font-semibold text-white mb-6">About Glamova</h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Founded on the belief that beauty should be clean, inclusive, and joyful. For over 12 years, Glamova has been redefining luxury cosmetics with a conscience.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&q=80" alt="Beauty products" className="w-full h-[480px] object-cover rounded-sm shadow-2xl"/>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <p className="text-rose text-xs font-semibold tracking-[0.18em] uppercase mb-4">Who We Are</p>
            <div className="w-12 h-0.5 bg-rose mb-6"/>
            <h2 className="font-display text-5xl font-semibold text-charcoal leading-tight mb-6">
              Beauty With Purpose
            </h2>
            <p className="text-slate leading-relaxed mb-4">
              Glamova started in 2012 as a small artisan beauty lab. Today our 200+ product line is loved by customers in 40+ countries, built on a promise of clean ingredients and uncompromising quality.
            </p>
            <p className="text-slate leading-relaxed mb-8">
              We're proud to be certified cruelty-free, vegan, and sustainably produced — because great beauty shouldn't cost the earth.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[['200+','Products'],['50K+','Customers'],['40+','Countries']].map(([v,l]) => (
                <div key={l} className="border-t-2 border-rose pt-3">
                  <div className="font-display text-3xl font-bold text-rose mb-1">{v}</div>
                  <div className="text-slate text-xs">{l}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-rose text-xs font-semibold tracking-[0.18em] uppercase mb-4">What Guides Us</p>
              <div className="w-12 h-0.5 bg-rose mx-auto mb-6"/>
              <h2 className="font-display text-5xl font-semibold text-charcoal">Our Core Values</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map(({ title, desc, img }, i) => (
              <ScrollReveal key={title} direction="up" delay={i * 0.1}>
                <div className="card-lift group overflow-hidden rounded-sm shadow-sm">
                  <div className="h-48 overflow-hidden">
                    <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                  </div>
                  <div className="p-6 bg-white border-t-2 border-rose">
                    <h3 className="font-display text-xl font-semibold text-charcoal mb-2">{title}</h3>
                    <p className="text-slate text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-rose text-xs font-semibold tracking-[0.18em] uppercase mb-4">The Team</p>
              <div className="w-12 h-0.5 bg-rose mx-auto mb-6"/>
              <h2 className="font-display text-5xl font-semibold text-white">Meet the Founders</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {leadership.map(({ name, role, img }, i) => (
              <ScrollReveal key={name} direction="up" delay={i * 0.12}>
                <div className="card-lift group text-center">
                  <div className="h-64 overflow-hidden rounded-sm mb-5">
                    <img src={img} alt={name} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"/>
                  </div>
                  <h3 className="font-semibold text-white text-base">{name}</h3>
                  <p className="text-rose text-sm mt-1">{role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-rose">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-display text-4xl font-semibold text-white mb-4">Ready to Discover Glamova?</h2>
            <p className="text-white/70 mb-8">Explore our full range and find your new beauty essentials.</p>
            <Link to="/services" className="bg-white text-rose font-bold px-8 py-4 rounded-sm hover:bg-cream transition-colors inline-block">
              Shop Collections
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
