import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollReveal from '../components/ScrollReveal'

gsap.registerPlugin(ScrollTrigger)

const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1600&q=80',
  about: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&q=80',
  feature: 'https://images.unsplash.com/photo-1631730486784-74757276d934?w=900&q=80',
  team: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1600&q=80',
}

const stats = [
  { value: '200+', label: 'Products' },
  { value: '50K+', label: 'Happy Customers' },
  { value: '100%', label: 'Cruelty Free' },
  { value: '12+', label: 'Years of Beauty' },
]

const products = [
  {
    title: 'Skincare',
    desc: 'Nourishing serums, moisturizers and cleansers crafted from botanical ingredients.',
    img: 'https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?w=600&q=80',
  },
  {
    title: 'Lip Color',
    desc: 'Velvety matte and glossy lip shades for every skin tone and occasion.',
    img: 'https://images.unsplash.com/photo-1586495777744-4e6232bf5236?w=600&q=80',
  },
  {
    title: 'Foundation',
    desc: 'Buildable, breathable coverage that lets your natural beauty shine through.',
    img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80',
  },
  {
    title: 'Eye Makeup',
    desc: 'Palettes, liners and mascaras designed to define and mesmerize.',
    img: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80',
  },
  {
    title: 'Serums & Oils',
    desc: 'Targeted treatments packed with actives to transform your skin overnight.',
    img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80',
  },
  {
    title: 'Gift Sets',
    desc: 'Beautifully curated collections — perfect for gifting or self-indulgence.',
    img: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=600&q=80',
  },
]

const testimonials = [
  {
    quote: 'Glamova completely transformed my skincare routine. The Rose Glow Serum is absolutely magical — my skin has never looked better.',
    name: 'Sophia L.',
    role: 'Verified Buyer',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80',
  },
  {
    quote: 'The lipsticks stay on all day and the colors are so rich and pigmented. I get compliments everywhere I go!',
    name: 'Priya R.',
    role: 'Beauty Blogger',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
  },
  {
    quote: 'Finally a brand that takes clean beauty seriously without compromising on luxury. Glamova is my forever brand.',
    name: 'Isabelle M.',
    role: 'Skincare Enthusiast',
    img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=200&q=80',
  },
]

export default function Home() {
  const heroRef = useRef(null)
  const counterRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 })
      tl.fromTo('.hero-tag', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' })
        .fromTo('.hero-h1 span', { y: 80, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.9, ease: 'power4.out' }, '-=0.3')
        .fromTo('.hero-sub', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.4')
        .fromTo('.hero-actions', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.4')
        .fromTo('.hero-badge', { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.4)' }, '-=0.5')

      gsap.to('.hero-img', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true }
      })

      counterRefs.current.forEach((el, i) => {
        if (!el) return
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          onEnter: () => {
            gsap.fromTo(el, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, delay: i * 0.1, ease: 'power3.out' })
          }
        })
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div>
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="Glamova Beauty"
            className="hero-img w-full h-[120%] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/60 to-charcoal/20"/>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24 grid md:grid-cols-2 gap-16 items-center w-full">
          <div>
            <div className="hero-tag inline-flex items-center gap-2 border border-rose/50 text-rose text-xs font-semibold tracking-[0.12em] uppercase px-4 py-2 rounded-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-rose animate-pulse"/>
              New Collection — Spring 2026
            </div>

            <h1 className="hero-h1 font-display text-6xl md:text-7xl font-semibold text-white leading-[1.05] mb-6 overflow-hidden">
              {'Beauty That\nFeels Like You'.split('\n').map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <span className="block">{line.split(' ').map((w, j) => (
                    <span key={j} className="inline-block mr-3">{w}</span>
                  ))}</span>
                </span>
              ))}
            </h1>

            <p className="hero-sub text-white/65 text-lg leading-relaxed mb-10 max-w-lg">
              Glamova brings you clean, luxurious cosmetics crafted from nature's finest ingredients — for every skin type, every mood, every moment.
            </p>

            <div className="hero-actions flex flex-wrap gap-4">
              <Link to="/services" className="btn-primary">Shop Collections</Link>
              <Link to="/about" className="btn-outline">Our Story</Link>
            </div>
          </div>

          {/* Floating badge */}
          <div className="hidden md:flex justify-end">
            <div className="hero-badge bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-xs">
              <div className="font-display text-5xl font-bold text-white mb-1">4.9★</div>
              <div className="text-white/60 text-sm mb-6">Average Customer Rating</div>
              <div className="flex -space-x-3">
                {[
                  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80',
                  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80',
                  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=80&q=80',
                ].map((src, i) => (
                  <img key={i} src={src} alt="Customer" className="w-10 h-10 rounded-full object-cover border-2 border-white/30"/>
                ))}
                <div className="w-10 h-10 rounded-full bg-rose flex items-center justify-center text-white text-xs font-bold border-2 border-white/30">
                  +50K
                </div>
              </div>
              <p className="text-white/50 text-xs mt-3">Verified happy customers</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 z-10">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse"/>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-rose py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              ref={el => counterRefs.current[i] = el}
              className="stat-card bg-rose px-8 py-10"
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2">{value}</div>
              <div className="text-white/70 text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="py-24 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <img
                src={IMAGES.about}
                alt="Glamova beauty products"
                className="w-full h-[500px] object-cover rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-charcoal text-white p-6 rounded-sm shadow-xl w-44">
                <div className="font-display text-3xl font-bold text-rose">2012</div>
                <div className="text-white/60 text-xs mt-1">Founded</div>
                <div className="text-sm mt-2">12+ years of luxury beauty</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <p className="text-rose text-xs font-semibold tracking-[0.18em] uppercase mb-4">Our Story</p>
            <div className="line-accent mb-6"/>
            <h2 className="font-display text-5xl font-semibold text-charcoal leading-tight mb-6">
              Clean Beauty, Rooted in Nature
            </h2>
            <p className="text-slate leading-relaxed mb-4">
              Glamova was born from a passion for beauty that doesn't compromise. We believe that what you put on your skin should be as pure as what you put in your body — effective, ethical, and exquisitely luxurious.
            </p>
            <p className="text-slate leading-relaxed mb-8">
              Our 200+ products are formulated by expert cosmetic chemists and tested by beauty professionals to ensure they perform beautifully — every time.
            </p>
            <Link to="/about" className="btn-primary inline-block">Learn Our Story</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── COLLECTIONS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-rose text-xs font-semibold tracking-[0.18em] uppercase mb-4">What We Offer</p>
              <div className="line-accent mx-auto mb-6"/>
              <h2 className="font-display text-5xl font-semibold text-charcoal">Our Collections</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map(({ title, desc, img }, i) => (
              <ScrollReveal key={title} direction="up" delay={i * 0.08}>
                <div className="card-lift group overflow-hidden rounded-sm bg-white border border-gray-100 shadow-sm">
                  <div className="overflow-hidden h-52 relative img-overlay">
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4 z-10">
                      <span className="bg-rose text-white text-xs font-semibold px-3 py-1 rounded-sm">{title}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate text-sm leading-relaxed mb-4">{desc}</p>
                    <Link to="/services" className="text-rose text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Shop now
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

      {/* ── WHY GLAMOVA ── */}
      <section className="py-24 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose blur-3xl"/>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold blur-3xl"/>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <p className="text-rose text-xs font-semibold tracking-[0.18em] uppercase mb-4">Why Choose Us</p>
            <div className="w-12 h-0.5 bg-rose mb-6"/>
            <h2 className="font-display text-5xl font-semibold text-white leading-tight mb-8">
              The Glamova Standard of Beauty
            </h2>
            {[
              ['100% Clean Ingredients', 'No parabens, sulfates, or synthetic fragrances. Ever.'],
              ['Dermatologist Tested', 'Every formula is clinically tested for safety and efficacy.'],
              ['Cruelty Free & Vegan', 'We never test on animals and use no animal-derived ingredients.'],
              ['Sustainable Packaging', 'Eco-conscious packaging that loves the planet as much as we do.'],
            ].map(([title, desc]) => (
              <div key={title} className="flex gap-4 mb-5">
                <div className="w-1 h-12 bg-rose rounded-full shrink-0 mt-1"/>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">{title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </ScrollReveal>
          <ScrollReveal direction="right">
            <img
              src={IMAGES.feature}
              alt="Glamova beauty"
              className="w-full h-[520px] object-cover rounded-sm shadow-2xl shadow-black/50"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-rose text-xs font-semibold tracking-[0.18em] uppercase mb-4">Customer Love</p>
              <div className="line-accent mx-auto mb-6"/>
              <h2 className="font-display text-5xl font-semibold text-charcoal">What Our Customers Say</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, role, img }, i) => (
              <ScrollReveal key={name} direction="up" delay={i * 0.1}>
                <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-rose h-full flex flex-col">
                  <svg className="w-8 h-8 text-rose/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.884-3.995 3.006-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.884-3.996 3.006-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="text-slate text-sm leading-relaxed flex-1 mb-6 italic">{quote}</p>
                  <div className="flex items-center gap-3">
                    <img src={img} alt={name} className="w-10 h-10 rounded-full object-cover"/>
                    <div>
                      <div className="font-semibold text-charcoal text-sm">{name}</div>
                      <div className="text-slate text-xs">{role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-32 overflow-hidden">
        <img
          src={IMAGES.team}
          alt="Glamova beauty"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/75"/>
        <ScrollReveal>
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <p className="text-rose text-xs font-semibold tracking-[0.18em] uppercase mb-4">Start Your Journey</p>
            <h2 className="font-display text-5xl md:text-6xl font-semibold text-white mb-6">
              Discover Your Perfect Look
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Explore our full range of luxury beauty products and find what makes you glow.
            </p>
            <Link to="/services" className="btn-primary text-base px-10 py-4 inline-block">
              Shop All Collections
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
