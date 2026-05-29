import { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const categories = ['Skincare','Lip Color','Foundation','Eye Makeup','Serums & Oils','Gift Sets','General Inquiry','Wholesale','Press & Media']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', category: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1400)
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-charcoal overflow-hidden">
        <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1600&q=80" alt="Contact" className="absolute inset-0 w-full h-full object-cover opacity-20"/>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-rose text-xs font-semibold tracking-[0.18em] uppercase mb-4">Get in Touch</p>
            <div className="w-12 h-0.5 bg-rose mx-auto mb-6"/>
            <h1 className="font-display text-6xl font-semibold text-white mb-6">We'd Love to Hear From You</h1>
            <p className="text-white/60 text-lg">Questions, collaborations, or just want to say hi — reach out and we'll respond within 24 hours.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Info + Form */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-12">
          {/* Info */}
          <ScrollReveal direction="left" className="md:col-span-2">
            <h2 className="font-display text-4xl font-semibold text-charcoal mb-8">Contact Information</h2>

            <div className="space-y-6 mb-10">
              {[
                { label: 'Address', value: '8 Beauty Lane\nLuxe District, NY 10001', icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>
                )},
                { label: 'Phone', value: '+1 (800) 452-6968', icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
                )},
                { label: 'Email', value: 'hello@glamova.com', icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
                )},
                { label: 'Hours', value: 'Mon – Sat: 9:00am – 7:00pm\nSunday: Online support only', icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                )},
              ].map(({ label, value, icon }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-sm bg-rose/10 flex items-center justify-center text-rose shrink-0 mt-0.5">{icon}</div>
                  <div>
                    <p className="font-semibold text-charcoal text-sm mb-0.5">{label}</p>
                    <p className="text-slate text-sm whitespace-pre-line leading-relaxed">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=700&q=80"
              alt="Glamova store"
              className="w-full h-52 object-cover rounded-sm shadow-md"
            />
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal direction="right" className="md:col-span-3">
            <div className="bg-white rounded-sm shadow-sm border border-gray-100 p-10">
              {sent ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-rose/10 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                    </svg>
                  </div>
                  <h3 className="font-display text-3xl font-semibold text-charcoal mb-3">Message Sent!</h3>
                  <p className="text-slate mb-8">Our team will get back to you within 24 hours.</p>
                  <button onClick={() => setSent(false)} className="btn-primary">Send Another</button>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl font-semibold text-charcoal mb-8">Send Us a Message</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-5 mb-5">
                      {[
                        { key: 'name', label: 'Full Name', type: 'text', placeholder: 'Jane Doe', required: true },
                        { key: 'email', label: 'Email Address', type: 'email', placeholder: 'jane@email.com', required: true },
                        { key: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 555 000 0000' },
                      ].map(({ key, label, type, placeholder, required }) => (
                        <div key={key}>
                          <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">{label}</label>
                          <input
                            type={type}
                            placeholder={placeholder}
                            required={required}
                            value={form[key]}
                            onChange={e => set(key, e.target.value)}
                            className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-charcoal placeholder-gray-400 transition-all"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="mb-5">
                      <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">Category</label>
                      <select
                        value={form.category}
                        onChange={e => set('category', e.target.value)}
                        className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-charcoal transition-all"
                      >
                        <option value="">Select a category</option>
                        {categories.map(d => <option key={d}>{d}</option>)}
                      </select>
                    </div>
                    <div className="mb-7">
                      <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">Message</label>
                      <textarea
                        rows={4}
                        placeholder="How can we help you..."
                        value={form.message}
                        onChange={e => set('message', e.target.value)}
                        className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-charcoal placeholder-gray-400 resize-none transition-all"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full flex items-center justify-center gap-3"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                          </svg>
                          Sending...
                        </>
                      ) : 'Send Message'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
