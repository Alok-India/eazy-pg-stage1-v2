"use client";

import { useState } from 'react';

const whatsappUrl =
  "https://wa.me/917042722201?text=Hi%20I%20want%20to%20know%20about%20Eazy-PG";

const amenities = [
  "Bed", "Light", "Fan", "AC", "RO water", "Kitchen", "Washroom", "Refrigerator", "Washing machine",
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

export default function Home() {
  const [formData, setFormData] = useState({ fullName: '', phoneNumber: '', roomType: 'Single Sharing', moveInMonth: '', occupation: '', message: '' });
  const [errors, setErrors] = useState({ fullName: '', phoneNumber: '' });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let newErrors = { fullName: '', phoneNumber: '' };
    let isValid = true;
    if (!formData.fullName.trim()) { newErrors.fullName = 'Required'; isValid = false; }
    if (!formData.phoneNumber.trim()) { newErrors.phoneNumber = 'Required'; isValid = false; }
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
            <div className="bg-white/90 p-2 rounded-xl backdrop-blur-sm">
              <img src="/images/eazy-pg-logo.png" alt="Logo" className="h-10 w-auto" />
            </div>
            <nav className="hidden md:flex gap-10 text-white font-medium text-lg drop-shadow-md">
              <a href="#rooms" className="hover:text-[var(--secondary-color)] transition">Rooms</a>
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

          <div className="bg-[var(--light-background)] p-12 lg:p-20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">Full Name</label>
                  <input name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-5 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[var(--primary-color)] transition bg-white" placeholder="Alok Singh" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">Phone Number</label>
                  <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full p-5 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[var(--primary-color)] transition bg-white" placeholder="+91..." />
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
