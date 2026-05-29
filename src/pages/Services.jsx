import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const products = [
  { title: 'Rose Glow Serum', sub: 'Skincare', desc: 'Vitamin C & hyaluronic acid serum that brightens, plumps and protects your skin barrier.', img: 'https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?w=700&q=80' },
  { title: 'Velvet Matte Lip', sub: 'Lip Color', desc: '12-hour matte formula in 40 shades — comfortable, non-drying, and transfer-proof.', img: 'https://images.unsplash.com/photo-1586495777744-4e6232bf5236?w=700&q=80' },
  { title: 'Skin Veil Foundation', sub: 'Foundation', desc: 'Buildable coverage with SPF 30 — available in 50 shades for every complexion.', img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=700&q=80' },
  { title: 'Smoky Eye Palette', sub: 'Eye Makeup', desc: '12-shade curated palette from everyday nudes to dramatic evening looks.', img: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=700&q=80' },
  { title: 'Midnight Repair Oil', sub: 'Serums & Oils', desc: 'Overnight restorative facial oil with retinol, rosehip and bakuchiol.', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=700&q=80' },
  { title: 'Glow Gift Set', sub: 'Gift Sets', desc: 'A curated set of our bestsellers — the perfect introduction to the Glamova world.', img: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=700&q=80' },
  { title: 'Hydra Plump Moisturizer', sub: 'Skincare', desc: 'Intense 72-hour hydration with ceramides and peptides for all skin types.', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=700&q=80' },
  { title: 'Lash Define Mascara', sub: 'Eye Makeup', desc: 'Lengthening and volumizing formula that lasts all day without smudging.', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80' },
  { title: 'Blush & Bronzer Duo', sub: 'Face Color', desc: 'Silky-smooth powder formula for a healthy, sun-kissed glow in every season.', img: 'https://images.unsplash.com/photo-1631730486784-74757276d934?w=700&q=80' },
]

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-charcoal overflow-hidden">
        <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1600&q=80" alt="Collections" className="absolute inset-0 w-full h-full object-cover opacity-20"/>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-rose text-xs font-semibold tracking-[0.18em] uppercase mb-4">What We Offer</p>
            <div className="w-12 h-0.5 bg-rose mx-auto mb-6"/>
            <h1 className="font-display text-6xl font-semibold text-white mb-6">Our Collections</h1>
            <p className="text-white/60 text-lg leading-relaxed">
              From skin-transforming serums to bold lip colors — every Glamova product is crafted with clean ingredients and unapologetic luxury.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {products.map(({ title, sub, desc, img }, i) => (
              <ScrollReveal key={title} direction="up" delay={i * 0.07}>
                <div className="card-lift group overflow-hidden rounded-sm bg-white border border-gray-100 shadow-sm h-full flex flex-col">
                  <div className="overflow-hidden h-56 relative img-overlay">
                    <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                    <div className="absolute bottom-4 left-4 z-10">
                      <span className="bg-rose text-white text-xs font-semibold px-3 py-1 rounded-sm">{sub}</span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-2xl font-semibold text-charcoal mb-3">{title}</h3>
                    <p className="text-slate text-sm leading-relaxed flex-1">{desc}</p>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-rose text-sm font-semibold mt-5 group-hover:gap-3 transition-all">
                      Add to Wishlist
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter banner */}
      <section className="py-16 bg-rose">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-3xl font-semibold text-white mb-2">Free Shipping on Orders Over $50</h3>
              <p className="text-white/70">Join Glamova Rewards and earn points on every purchase.</p>
            </div>
            <Link to="/contact" className="bg-white text-rose font-bold px-8 py-4 rounded-sm hover:bg-cream transition-colors whitespace-nowrap">
              Join Rewards
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
