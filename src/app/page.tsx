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
    description: "Private sanctuary for focused professionals.",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop",
    features: ["Bed included", "AC & Fan", "Washroom", "Personal Space"],
  },
  {
    title: "Double Sharing",
    price: "₹8,000",
    description: "Shared comfort with premium essentials.",
    image: "https://images.unsplash.com/photo-1555854817-5a226a7f802b?q=80&w=2070&auto=format&fit=crop",
    features: ["Budget Friendly", "Shared Comfort", "Daily Essentials", "Great Value"],
  },
];

const galleryItems = [
  { title: "The Master Suite", label: "Elegant and spacious living", imageUrl: "https://images.unsplash.com/photo-1560440021-33f9b867899d?q=80&w=2940&auto=format&fit=crop" },
  { title: "Modern Amenities", label: "Hygienic and sleek facilities", imageUrl: "https://images.unsplash.com/photo-1616041012359-5f21273934d4?q=80&w=2940&auto=format&fit=crop" },
  { title: "Gourmet Kitchen", label: "Fully equipped for your needs", imageUrl: "https://images.unsplash.com/photo-1582268611958-f2ed257488cd?q=80&w=2940&auto=format&fit=crop" },
  { title: "Premium Exterior", label: "Located in prime Greater Noida West", imageUrl: "https://images.unsplash.com/photo-1549419147-19a9d20c4515?q=80&w=2940&auto=format&fit=crop" },
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
    <main className="bg-white">
      {/* Hero Section with Big Image Backdrop */}
      <section className="relative h-[80vh] w-full">
        <img 
          src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop" 
          alt="Luxury Interior" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-6 lg:p-12">
          <header className="flex justify-between items-center">
            <img src="/images/eazy-pg-logo.png" alt="Logo" className="h-12 w-auto bg-white/10 rounded px-2" />
            <nav className="hidden md:flex gap-8 text-white font-medium">
              <a href="#rooms">Rooms</a>
              <a href="#gallery">Gallery</a>
              <a href="#contact">Contact</a>
            </nav>
          </header>
          <div className="max-w-3xl text-white pb-12">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">Elevated Living for Professionals.</h1>
            <p className="mt-6 text-xl text-slate-200">Modern PG accommodation in Greater Noida West.</p>
            <div className="mt-10 flex gap-4">
              <a href="#contact" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition">Book a Visit</a>
              <a href={whatsappUrl} className="bg-emerald-500 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-600 transition">WhatsApp Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section id="rooms" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Refined Room Options</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {roomTypes.map((room) => (
            <div key={room.title} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl aspect-video">
                <img src={room.image} alt={room.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="mt-6 flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-bold">{room.title}</h3>
                  <p className="text-slate-500 mt-2">{room.description}</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-blue-600">{room.price}</span>
                  <p className="text-sm text-slate-400">/month</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Gallery */}
      <section id="gallery" className="bg-slate-900 py-24 px-6 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Property Showcase</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryItems.map((item, idx) => (
              <div key={idx} className="relative aspect-square overflow-hidden rounded-lg gallery-card">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Experience it yourself.</h2>
            <p className="text-lg text-slate-600 mb-8">Schedule a walkthrough of our Greater Noida West property today.</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white">
                <img src="/images/eazy-pg-logo.png" alt="Logo" className="w-full h-full object-contain p-1" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">Eazy-PG</span>
                <span className="text-sm text-slate-500">Greater Noida West, India</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-slate-50 p-8 rounded-3xl space-y-4">
            <input name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-4 rounded-xl border border-slate-200" placeholder="Your Name" />
            <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full p-4 rounded-xl border border-slate-200" placeholder="Phone Number" />
            <select name="roomType" value={formData.roomType} onChange={handleChange} className="w-full p-4 rounded-xl border border-slate-200">
              <option>Single Sharing</option>
              <option>Double Sharing</option>
            </select>
            <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-4 rounded-xl border border-slate-200 h-32" placeholder="Message"></textarea>
            <button className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition">Send Enquiry</button>
          </form>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-100 text-center text-slate-400 text-sm">
        © 2026 Eazy-PG • Premium Living for Professionals
      </footer>
    </main>
  );
}
