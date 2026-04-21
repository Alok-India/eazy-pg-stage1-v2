import { useState } from 'react';

const whatsappUrl =
  "https://wa.me/917042722201?text=Hi%20I%20want%20to%20know%20about%20Eazy-PG";

const amenities = [
  "Bed",
  "Light",
  "Fan",
  "AC",
  "RO water",
  "Kitchen",
  "Washroom",
  "Refrigerator",
  "Washing machine",
];

const roomTypes = [
  {
    title: "Single Sharing",
    price: "₹15,000/month",
    description:
      "A private and comfortable option for working professionals who prefer more personal space and a quieter routine.",
    features: ["Bed included", "AC and fan", "Washroom access", "Ideal for focused living"],
  },
  {
    title: "Double Sharing",
    price: "₹8,000/month",
    description:
      "A practical and affordable option for professionals who want comfort, essential amenities, and better value.",
    features: ["Budget friendly", "Shared comfort", "Daily-use essentials", "Professional-friendly setup"],
  },
];

const galleryItems = [
  {
    title: "Modern Room",
    label: "Spacious and comfortable single room",
    imageUrl: "https://images.unsplash.com/photo-1560440021-33f9b867899d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Clean Washroom",
    label: "Hygienic and well-maintained washroom facilities",
    imageUrl: "https://images.unsplash.com/photo-1616041012359-5f21273934d4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Equipped Kitchen",
    label: "Shared kitchen with essential amenities",
    imageUrl: "https://images.unsplash.com/photo-1582268611958-f2ed257488cd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Property Exterior",
    label: "Modern and well-kept building exterior",
    imageUrl: "https://images.unsplash.com/photo-1549419147-19a9d20c4515?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const faqs = [
  {
    question: "Who is Eazy-PG best suited for?",
    answer:
      "Eazy-PG is designed for working professionals looking for a simple, comfortable, and convenient place to stay in Greater Noida West.",
  },
  {
    question: "Do you offer options for both men and women?",
    answer:
      "Yes. Eazy-PG is intended for both men and women, depending on availability and property rules.",
  },
  {
    question: "What room types are available?",
    answer:
      "Currently, Eazy-PG offers single sharing and double sharing options.",
  },
  {
    question: "Can I contact directly on WhatsApp?",
    answer:
      "Yes. You can enquire directly on WhatsApp for availability, visits, and room details.",
  },
];

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    roomType: 'Single Sharing',
    moveInMonth: '',
    occupation: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    phoneNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newErrors = { fullName: '', phoneNumber: '' };
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
      isValid = false;
    }

    const phoneRegex = /^[0-9]{10,15}$/; // Basic 10-15 digit number check
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required.';
      isValid = false;
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Enter a valid phone number (10-15 digits).';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      console.log('Form Data:', formData);
      alert('Enquiry submitted successfully! (Check console for data)');
      // In a real app, send formData to your backend here
      setFormData({ // Clear form after successful submission
        fullName: '',
        phoneNumber: '',
        roomType: 'Single Sharing',
        moveInMonth: '',
        occupation: '',
        message: '',
      });
    }
  };

  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-6 lg:px-8">
          <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Eazy-PG
              </p>
              <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                Simple PG living for working professionals
              </h1>
            </div>
            <nav className="flex flex-wrap gap-3 text-sm text-slate-600">
              <a href="#rooms" className="transition hover:text-slate-950">
                Rooms
              </a>
              <a href="#amenities" className="transition hover:text-slate-950">
                Amenities
              </a>
              <a href="#gallery" className="transition hover:text-slate-950">
                Gallery
              </a>
              <a href="#contact" className="transition hover:text-slate-950">
                Contact
              </a>
            </nav>
          </header>

          <div className="grid gap-10 py-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-10">
            <div className="space-y-6">
              <div className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                Greater Noida West, India
              </div>
              <div className="space-y-4">
                <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                  Comfortable stays that keep life easy.
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">
                  Eazy-PG offers clean, practical, and professional-friendly accommodation for people who want a dependable place to live near work.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Enquire now
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-950 hover:text-slate-950"
                >
                  WhatsApp us
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-2xl font-bold">2</p>
                  <p className="mt-1 text-sm text-slate-600">Room options available</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-2xl font-bold">Both</p>
                  <p className="mt-1 text-sm text-slate-600">Suitable for men & women</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-2xl font-bold">Simple</p>
                  <p className="mt-1 text-sm text-slate-600">Essential amenities included</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Why Eazy-PG
              </p>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-200">
                <li>• Designed for working professionals</li>
                <li>• Single and double sharing options</li>
                <li>• Daily-use essentials already available</li>
                <li>• Convenient location in Greater Noida West</li>
              </ul>
              <div className="mt-8 rounded-2xl bg-white/10 p-5">
                <p className="text-sm text-slate-300">Direct contact</p>
                <p className="mt-2 text-xl font-semibold">WhatsApp: +91 7042722201</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="rooms" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Room options
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Simple and practical stay options
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Eazy-PG currently offers clear and straightforward room choices for working professionals.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {roomTypes.map((room) => (
            <article
              key={room.title}
              className="rounded-3xl border border-slate-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                {room.title}
              </p>
              <p className="mt-4 text-2xl font-bold text-slate-950">{room.price}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{room.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {room.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="amenities" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Amenities
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Everyday essentials already covered
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                A simple setup with the core facilities working professionals usually need for day-to-day living.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {amenities.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Gallery preview
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready for real property photos
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            No photos have been added yet, so the website currently uses clean placeholders. Real photos can be added later without changing the layout.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-sm font-medium text-slate-600">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Why people enquire
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Clear details. Direct WhatsApp contact. Easy decision-making.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                A lead-generation website should keep things simple: show the room options, explain the essentials, and make it easy to contact you quickly.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="font-semibold">{faq.question}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Contact & enquiry
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Book a visit or ask for room availability
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              This Stage 1 version keeps enquiries simple. Visitors can fill the form or continue directly on WhatsApp.
            </p>
            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold text-slate-500">Location</p>
              <p className="mt-2 text-lg font-semibold text-slate-950">Greater Noida West, India</p>
              <p className="mt-4 text-sm text-slate-600">WhatsApp: +91 7042722201</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-700">Full name</label>
              <input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full rounded-2xl border px-4 py-3 outline-none transition focus:border-slate-950 ${errors.fullName ? 'border-red-500' : 'border-slate-300'}`}
                placeholder="Enter your name"
                required
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
            </div>
            <div>
              <label htmlFor="phoneNumber" className="mb-2 block text-sm font-medium text-slate-700">Phone number</label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`w-full rounded-2xl border px-4 py-3 outline-none transition focus:border-slate-950 ${errors.phoneNumber ? 'border-red-500' : 'border-slate-300'}`}
                placeholder="Enter phone number"
                required
              />
              {errors.phoneNumber && <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>}
            </div>
            <div>
              <label htmlFor="roomType" className="mb-2 block text-sm font-medium text-slate-700">Preferred room type</label>
              <select
                id="roomType"
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
              >
                <option>Single Sharing</option>
                <option>Double Sharing</option>
              </select>
            </div>
            <div>
              <label htmlFor="moveInMonth" className="mb-2 block text-sm font-medium text-slate-700">Move-in month</label>
              <input
                id="moveInMonth"
                name="moveInMonth"
                value={formData.moveInMonth}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
                placeholder="e.g. May 2026"
              />
            </div>
            <div>
              <label htmlFor="occupation" className="mb-2 block text-sm font-medium text-slate-700">Occupation</label>
              <input
                id="occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
                placeholder="Working professional"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="min-h-32 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
                placeholder="Tell us which room type you are looking for"
              />
            </div>
            <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Submit enquiry
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-950 hover:text-slate-950"
              >
                Continue on WhatsApp
              </a>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 Eazy-PG. All rights reserved.</p>
          <p>Simple PG living in Greater Noida West.</p>
        </div>
      </footer>
    </main>
  );
}
