"use client";

import { useState } from 'react';

const whatsappUrl =
  "https://wa.me/917042722201?text=Hi%20I%20want%20to%20know%20about%20Eazy-PG";

const amenities = [
  "Fully furnished rooms",
  "High-speed Wi-Fi",
  "Air conditioning",
  "RO drinking water",
  "Modern kitchen access",
  "Attached / shared washroom",
  "Housekeeping support",
  "Washing machine",
  "Power backup",
];

const roomTypes = [
  {
    title: "Single Sharing",
    price: "₹15,000",
    description: "Your own private, sun-drenched sanctuary.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000",
    features: ["Bed included", "AC & Fan", "Washroom", "Personal Space"],
  },
  {
    title: "Double Sharing",
    price: "₹8,000",
    description: "Shared comfort with a warm, communal vibe.",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1000",
    features: ["Budget Friendly", "Shared Comfort", "Daily Essentials", "Great Value"],
  },
];

const galleryItems = [
  { title: "Cozy Living", label: "Warm and inviting interiors", imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000" },
  { title: "Modern Kitchen", label: "Everything you need to feel at home", imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000" },
  { title: "Comfortable Bedroom", label: "Restful nights in style", imageUrl: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&q=80&w=1000" },
  { title: "Peaceful Exterior", label: "A quiet corner in Greater Noida West", imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000" },
];

const faqs = [
  {
    question: "Who is Eazy-PG best suited for?",
    answer: "Eazy-PG is ideal for working professionals and serious students looking for a clean, dependable, and well-located stay in Greater Noida West.",
  },
  {
    question: "Do you offer options for both men and women?",
    answer: "Yes. Occupancy depends on availability and property rules, but the accommodation concept supports both men and women.",
  },
  {
    question: "What room types are available?",
    answer: "Currently, Eazy-PG offers single sharing and double sharing rooms with essential amenities included.",
  },
  {
    question: "How do I enquire quickly?",
    answer: "You can submit the enquiry form on the website or continue directly on WhatsApp for faster coordination.",
  },
];

export default function Home() {
  const [formData, setFormData] = useState({ fullName: '', phoneNumber: '', roomType: 'Single Sharing', moveInMonth: '', occupation: '', message: '' });
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let newErrors: any = {};
    let isValid = true;
    if (!formData.fullName.trim()) { newErrors.fullName = 'Required'; isValid = false; }
    if (!formData.phoneNumber.trim()) { newErrors.phoneNumber = 'Required'; isValid = false; }
    if (!formData.moveInMonth.trim()) { newErrors.moveInMonth = 'Please mention your expected move-in month.'; isValid = false; }
    if (!formData.occupation.trim()) { newErrors.occupation = 'Please enter your occupation.'; isValid = false; }
    
    setErrors(newErrors);
    if (isValid) { alert('Enquiry Sent!'); }
  };

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1600" 
          alt="Cozy Interior" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-between p-6 lg:p-12">
          <header className="flex justify-between items-center">
            <div className="bg-white/95 p-3 rounded-xl backdrop-blur-sm shadow-md">
              <img src="/images/eazy-pg-logo.png" alt="Logo" className="h-24 w-auto object-contain" />
            </div>
            <nav className="hidden md:flex gap-10 text-white font-medium text-lg drop-shadow-md">
              <a href="#rooms" className="hover:text-[var(--secondary-color)] transition">Rooms</a>
              <a href="#amenities" className="hover:text-[var(--secondary-color)] transition">Amenities</a>
              <a href="#gallery" className="hover:text-[var(--secondary-color)] transition">Gallery</a>
              <a href="#contact" className="hover:text-[var(--secondary-color)] transition">Contact</a>
            </nav>
          </header>
          <div className="max-w-4xl text-white pb-16 drop-shadow-lg">
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight font-serif">A place that feels like home.</h1>
            <p className="mt-6 text-2xl text-slate-100 font-sans max-w-xl">Premium, cozy PG living for professionals in the heart of Greater Noida West.</p>
            <div className="mt-12 flex flex-wrap gap-5">
              <a href="#contact" className="bg-[var(--primary-color)] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">View Availability</a>
              <a href={whatsappUrl} className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Warm Room Options */}
      <section id="rooms" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[var(--primary-color)] font-bold tracking-widest uppercase text-sm">Your Next Home</span>
          <h2 className="text-5xl font-bold font-serif mt-3">Thoughtfully Designed Spaces</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-16">
          {roomTypes.map((room) => (
            <div key={room.title} className="group cursor-pointer bg-white rounded-[2.5rem] overflow-hidden card-shadow border border-slate-50 transition-all hover:shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={room.image} alt={room.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full font-bold text-[var(--primary-color)]">
                  {room.price} <span className="text-xs text-slate-500 font-normal">/mo</span>
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-3xl font-bold font-serif">{room.title}</h3>
                <p className="text-[var(--muted-text)] mt-4 leading-relaxed">{room.description}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {room.features.map(f => (
                    <span key={f} className="bg-[var(--accent-color)] text-[var(--primary-color)] px-4 py-2 rounded-lg text-xs font-bold">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Redesigned Amenities Section */}
      <section id="amenities" className="bg-slate-50 py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
          <div>
            <span className="text-emerald-700 font-bold tracking-widest uppercase text-xs">Amenities</span>
            <h2 className="text-5xl font-bold font-serif mt-6 leading-tight">Everyday essentials, presented with more confidence</h2>
            <p className="text-[var(--muted-text)] mt-8 text-lg leading-relaxed">
              The amenity section now feels less generic and more like a property listing buyers or renters would trust at a glance.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {amenities.map((item) => (
              <div
                key={item}
                className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center text-center"
              >
                <span className="font-medium text-slate-800 leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-[var(--accent-color)] py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-bold font-serif">Curated Living Spaces</h2>
              <p className="text-[var(--muted-text)] mt-4 text-lg">Clean, modern, and filled with natural light. Every corner is built for comfort.</p>
            </div>
            <a href="#contact" className="text-[var(--primary-color)] font-bold border-b-2 border-[var(--primary-color)] pb-1 hover:text-[var(--foreground)] transition">Enquire about rooms →</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {galleryItems.map((item, idx) => (
              <div key={idx} className="group relative aspect-square overflow-hidden rounded-3xl card-shadow">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-1000" />
                <div className="absolute inset-0 bg-[var(--primary-color)]/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why People Enquire (FAQ Style) */}
      <section className="bg-[#0a0a0c] py-28 px-6 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-16">
          <div>
            <span className="text-orange-400 font-bold tracking-widest uppercase text-xs">Why People Enquire</span>
            <h2 className="text-5xl font-bold font-serif mt-6 leading-tight text-white">Clear value, clean visuals, direct contact.</h2>
            <p className="text-slate-400 mt-8 text-lg leading-relaxed">
              A good property landing page should look trustworthy fast. This version leans into that with a cleaner palette, better hierarchy, and stronger visual cues.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-[#16161a] p-10 rounded-3xl border border-white/5">
                <h4 className="text-xl font-bold mb-4">{faq.question}</h4>
                <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cozy Contact Section */}
      <section id="contact" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-[3rem] card-shadow border border-slate-50 overflow-hidden grid lg:grid-cols-2">
          <div className="p-12 lg:p-20 flex flex-col justify-center">
            <h2 className="text-5xl font-bold font-serif mb-8 leading-tight">Ready to join the Eazy-PG family?</h2>
            <p className="text-lg text-[var(--muted-text)] mb-12">Drop us a line or come over for a warm cup of tea and a tour of our Greater Noida West property.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[var(--accent-color)] flex items-center justify-center flex-shrink-0">
                   <img src="/images/eazy-pg-logo.png" alt="Eazy-PG" className="w-8 h-auto" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Greater Noida West</h4>
                  <p className="text-[var(--muted-text)]">Premium Living, India</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0 text-emerald-600">
                  <span className="font-bold">W</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl">+91 7042722201</h4>
                  <p className="text-[var(--muted-text)]">WhatsApp Enquiries</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-12 lg:p-20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">Full Name</label>
                  <input name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-5 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[var(--primary-color)] transition bg-white" placeholder="Alok Singh" />
                  {errors.fullName && <p className="text-xs text-red-600 font-medium ml-1">{errors.fullName}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">Phone Number</label>
                  <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full p-5 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[var(--primary-color)] transition bg-white" placeholder="+91..." />
                  {errors.phoneNumber && <p className="text-xs text-red-600 font-medium ml-1">{errors.phoneNumber}</p>}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">Move-in month</label>
                  <input name="moveInMonth" value={formData.moveInMonth} onChange={handleChange} className="w-full p-5 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[var(--primary-color)] transition bg-white" placeholder="e.g. May 2026" />
                  {errors.moveInMonth && <p className="text-xs text-red-600 font-medium ml-1">{errors.moveInMonth}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">Occupation</label>
                  <input name="occupation" value={formData.occupation} onChange={handleChange} className="w-full p-5 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[var(--primary-color)] transition bg-white" placeholder="Working professional" />
                  {errors.occupation && <p className="text-xs text-red-600 font-medium ml-1">{errors.occupation}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">Room Choice</label>
                <select name="roomType" value={formData.roomType} onChange={handleChange} className="w-full p-5 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[var(--primary-color)] transition bg-white appearance-none">
                  <option>Single Sharing</option>
                  <option>Double Sharing</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-5 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[var(--primary-color)] transition bg-white h-32" placeholder="Tell us about yourself..."></textarea>
              </div>
              <button className="w-full bg-[var(--foreground)] text-white py-6 rounded-2xl font-bold text-lg hover:shadow-xl transition-all active:scale-95">Send My Enquiry</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-20 text-center">
        <img src="/images/eazy-pg-logo.png" alt="Eazy-PG" className="h-8 w-auto mx-auto opacity-30 mb-6" />
        <p className="text-sm text-[var(--muted-text)] font-sans">
          © 2026 Eazy-PG • Premium Living for Working Professionals • Greater Noida West
        </p>
      </footer>
    </main>
  );
}
