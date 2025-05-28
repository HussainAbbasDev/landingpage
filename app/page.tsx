"use client";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Home() {
  // Smooth scroll handler for nav links
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const testimonialCards = [
    {
      type: 'quote',
      text: '"GAsoft helped us launch our product with a beautiful landing page that brought in more leads than ever!"',
      user: 'Hussain Abbas',
    },
    {
      type: 'icon',
      icon: 'check',
    },
    {
      type: 'quote',
      text: '"The GAsoft team made the process seamless and stress-free. Our landing page looks amazing and loads super fast!"',
      user: 'Mohammad Abbas',
    },
    {
      type: 'icon',
      icon: 'triangle',
    },
  ];

  // FAQ data
  const faqData = [
    {
      q: 'What is a landing page?',
      a: 'A landing page is a single web page designed to convert visitors into leads or customers, tailored for a specific campaign or business goal.'
    },
    {
      q: 'Is my data secure?',
      a: 'Yes, GAsoft uses best practices to keep your data safe and private on all landing pages.'
    },
    {
      q: 'How fast can I get my page?',
      a: 'Basic landing pages are delivered in 4-5 days, with more advanced options taking up to 2-3 weeks.'
    },
    {
      q: 'Do I need hosting or hardware?',
      a: 'No, we handle all hosting and technical details for you. You just focus on your business.'
    },
    {
      q: 'How much does it cost?',
      a: 'Our packages start at $50 for a basic landing page. See the Pricing section for details.'
    },
    {
      q: 'Can I scale or update later?',
      a: 'Absolutely! We design with your growth in mind and offer easy updates and scalability.'
    },
  ];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    try {
      const formData = new FormData();
      formData.append('Name', form.name);
      formData.append('Email', form.email);
      formData.append('Phone', form.phone);
      formData.append('Business Type', form.company);
      formData.append('Message', form.message);
      await fetch('https://script.google.com/macros/s/AKfycbwqr3-vihhgvcjqxjxAyaYRFW8K2ImC6DeITkz0kQy1fW_d7kHFu3F-o3eeugCf8MNfvg/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });
      setFormStatus('success');
      setForm({ name: '', email: '', phone: '', company: '', message: '' });
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="bg-[#0a0a0a] text-[#ededed] font-sans min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        id="hero"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.99}}
        variants={fadeInUp}
        className="relative flex flex-col items-center justify-center min-h-[60vh] px-4 text-center bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0a]"
      >
        
                <header className="w-full flex justify-between items-center max-w-6xl mx-auto mb-20 pt-3 mt-0 bg-white/30 rounded-xl backdrop-blur-md px-6 py-3">
          
          <div className="flex items-center gap-2">
            {/* Placeholder Logo */}
            <Image src="/logo.png" alt="GAsoft Logo" width={40} height={40} className="rounded-full" />
            <span className="font-bold text-lg tracking-wide">GAsoft</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-purple-400 transition" onClick={e => handleNavClick(e, 'about')}>About</a>
            <a href="#benefits" className="hover:text-purple-400 transition" onClick={e => handleNavClick(e, 'benefits')}>Benefits</a>
            <a href="#services" className="hover:text-purple-400 transition" onClick={e => handleNavClick(e, 'services')}>Services</a>
            <a href="#pricing" className="hover:text-purple-400 transition" onClick={e => handleNavClick(e, 'pricing')}>Pricing</a>
            <a href="#contact" className="hover:text-purple-400 transition" onClick={e => handleNavClick(e, 'contact')}>Contact</a>
          </nav>
          <a href="#contact" className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-2 rounded-full font-semibold shadow-lg">Get Started</a>
        </header>
        
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Affordable Landing Pages for Small Businesses</h1>
        <p className="max-w-xl mx-auto text-lg md:text-xl mb-6 text-gray-300">Empower your business with visually stunning, SEO-optimized landing pages. Minimal backend, maximum design and discoverability.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
          <div className="bg-[#181828] rounded-xl px-6 py-4 shadow-lg flex flex-col items-center">
            <span className="font-bold text-lg">$50</span>
            <span className="text-xs text-gray-400">Starting at</span>
          </div>
          <div className="bg-[#181828] rounded-xl px-6 py-4 shadow-lg flex flex-col items-center">
            <span className="font-bold text-lg">4-5 Days</span>
            <span className="text-xs text-gray-400">Fast Delivery</span>
          </div>
          <div className="bg-[#181828] rounded-xl px-6 py-4 shadow-lg flex flex-col items-center">
            <span className="font-bold text-lg">SEO</span>
            <span className="text-xs text-gray-400">Optimized</span>
          </div>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <section className="w-full flex justify-center items-center py-2 md:py-4 bg-transparent -mt-4 mb-4 z-10 relative">
        <div className="flex flex-wrap justify-center gap-8 md:gap-10 max-w-6xl">
          {testimonialCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className={
                card.type === 'quote'
                  ? `relative bg-[#191922] rounded-3xl shadow-lg p-8 w-[290px] h-[220px] flex flex-col justify-between ${idx === 0 ? 'rotate-[-8deg]' : 'rotate-[-4deg]'}`
                  : `relative bg-[#191922] rounded-3xl shadow-lg p-8 w-[220px] h-[220px] flex items-center justify-center ${idx === 1 ? 'rotate-[6deg]' : 'rotate-[5deg]'}`
              }
            >
              {card.type === 'quote' ? (
                <>
                  <p className="text-white text-lg mb-0 leading-snug">{card.text}</p>
                  <div className="absolute left-6 bottom-6 flex items-center gap-2">
                    {/* Anonymous SVG Avatar */}
                    
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" fill="#fff" fillOpacity=".2"/><ellipse cx="12" cy="17" rx="7" ry="4" fill="#fff" fillOpacity=".2"/></svg>
                    </div>
                    <span className="font-bold text-white text-base">{card.user}</span>
                  </div>
                </>
              ) : card.icon === 'check' ? (
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                  <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" fill="#fff" fillOpacity=".12"/><path d="M15 22l4 4 7-7" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              ) : (
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" fill="#fff" fillOpacity=".12"/><path d="M20 13l5 10h-10l5-10z" fill="#fff" fillOpacity=".7"/><path d="M20 13l5 10h-10l5-10z" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/></svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
  
      {/* About Section */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeInUp}
        className="max-w-6xl mx-auto py-20 px-2"
      >
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between mt-3">
          {/* Left: Text and Features */}
          <div className="flex-[1.3] min-w-[400px]">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#23233a] text-white text-sm font-semibold">About Us</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white leading-tight">About GAsoft Landing Page Solutions</h2>
            <p className="text-base text-gray-300 mb-8 max-w-xl">At GAsoft, we are dedicated to helping small businesses grow online with beautiful, high-converting landing pages. Our team combines design expertise and technical know-how to deliver fast, secure, and affordable web solutions.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-6">
              {[
                'Scalability & Flexibility',
                'SEO Optimization',
                'Data Security',
                'Fast Delivery',
                'Seamless Integration',
                'Cost Efficiency',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3 mt-2">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#a259ff"/><path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-white font-semibold text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Glowing Card with Icon */}
          <div className="flex flex-1 justify-center items-center min-w-[320px]">
            <div className="relative flex items-center justify-center">
              {/* Layered effect */}
              <div className="absolute w-64 h-64 rounded-2xl bg-[#23233a] opacity-60 -top-6 -left-6 z-0" />
              <div className="absolute w-64 h-64 rounded-2xl bg-[#23233a] opacity-40 top-6 left-6 z-0" />
              <div className="relative w-64 h-64 rounded-2xl bg-gradient-to-b from-[#23233a] to-[#181828] flex items-center justify-center shadow-2xl z-10">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-xl">
                  <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" rx="16" fill="url(#paint0_linear)"/><path d="M16 32l8-8 8 8" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="paint0_linear" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse"><stop stopColor="#a259ff"/><stop offset="1" stopColor="#6a82fb"/></linearGradient></defs></svg>
                </div>
              </div>
              <div className="absolute w-64 h-16 rounded-b-2xl bg-purple-700 blur-2xl opacity-40 bottom-0 left-0 z-0" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        id="benefits"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeInUp}
        className="max-w-6xl mx-auto py-20 px-2"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6">
          {/* Scalable Resources (spans 2 rows) */}
          <div className="relative bg-[#181828] rounded-2xl shadow-lg p-8 flex flex-col row-span-2 min-h-[340px]">
            <span className="font-bold text-xl mb-2 text-white">Scalable Resources</span>
            <span className="text-gray-300 text-base mb-6">Our landing page solutions grow with your business needs.</span>
            <div className="flex-1 flex flex-col justify-end">
              <div className="bg-gradient-to-br from-[#a259ff22] to-[#6a82fb11] rounded-xl p-4 mt-4 flex items-center gap-3">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#a259ff"/><path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-white font-medium">Cost Efficiency</span>
              </div>
              <div className="mt-6 h-20 w-full bg-gradient-to-t from-[#6a82fb33] to-transparent rounded-lg" />
            </div>
          </div>
          {/* Reduced IT Expenses */}
          <div className="bg-[#181828] rounded-2xl shadow-lg p-8 flex flex-col min-h-[160px]">
            <span className="font-bold text-xl mb-2 text-white">Reduced IT Expenses</span>
            <span className="text-gray-300 text-base mb-4">Cut down on tech costs with our affordable landing page packages.</span>
            <div className="flex gap-2 mt-auto">
              {/* Placeholder Avatars */}
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center border-2 border-[#23233a]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" fill="#fff" fillOpacity=".3"/><ellipse cx="12" cy="17" rx="7" ry="4" fill="#fff" fillOpacity=".15"/></svg>
                </div>
              ))}
            </div>
          </div>
          {/* Enhanced Accessibility */}
          <div className="bg-[#181828] rounded-2xl shadow-lg p-8 flex flex-col min-h-[160px]">
            <span className="font-bold text-xl mb-2 text-white">Enhanced Accessibility</span>
            <span className="text-gray-300 text-base mb-4">Your landing page, accessible everywhere, always.</span>
            <div className="flex flex-col gap-2 mt-auto">
              {/* User with stars */}
              {[{name:'Harry P'},{name:'Jimmy L'}].map((user) => (
                <div key={user.name} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" fill="#fff" fillOpacity=".3"/><ellipse cx="12" cy="17" rx="7" ry="4" fill="#fff" fillOpacity=".15"/></svg>
                  </div>
                  <span className="text-white text-sm font-medium">{user.name}</span>
                  <div className="flex gap-0.5 ml-2">
                    {[...Array(5)].map((_,i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="none"><polygon points="10,2 12.5,7.5 18,8 13.5,12 15,18 10,15 5,18 6.5,12 2,8 7.5,7.5" fill="#FFD600"/></svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Automatic Updates */}
          <div className="bg-[#181828] rounded-2xl shadow-lg p-8 flex flex-col min-h-[160px] items-start justify-between">
            <span className="font-bold text-xl mb-2 text-white">Automatic Updates</span>
            <span className="text-gray-300 text-base mb-4">Stay current, effortlessly, with our managed updates.</span>
            <div className="flex items-center justify-center w-full mt-auto">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="6" y="8" width="12" height="2" rx="1" fill="#fff" fillOpacity=".7"/><rect x="6" y="14" width="12" height="2" rx="1" fill="#fff" fillOpacity=".7"/></svg>
              </div>
            </div>
          </div>
          {/* Business Continuity */}
          <div className="bg-[#181828] rounded-2xl shadow-lg p-8 flex flex-col min-h-[160px] items-start justify-between">
            <span className="font-bold text-xl mb-2 text-white">Business Continuity</span>
            <span className="text-gray-300 text-base mb-4">Always online, always ready, with robust backup and support.</span>
            <div className="flex items-center justify-center w-full mt-auto">
              <div className="w-full h-10 rounded-lg bg-gradient-to-r from-[#23233a] to-[#23233a99] flex items-center px-3 gap-2">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="10" cy="12" r="3" fill="#fff" fillOpacity=".15"/><rect x="15" y="10" width="5" height="4" rx="2" fill="#fff" fillOpacity=".10"/></svg>
                <div className="w-24 h-3 bg-[#23233a] rounded-full" />
                <div className="w-10 h-3 bg-[#23233a] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeInUp}
        className="max-w-5xl mx-auto py-20 px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Landing Page Design */}
          <div className="bg-[#181828] rounded-xl p-6 flex flex-col items-center shadow-lg">
            <span className="mb-3">
              {/* Monitor SVG */}
              <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><rect x="5" y="9" width="26" height="16" rx="3" fill="#a259ff"/><rect x="9" y="25" width="18" height="2" rx="1" fill="#23233a"/><rect x="15" y="28" width="6" height="2" rx="1" fill="#23233a"/></svg>
            </span>
            <span className="font-bold text-lg mb-2">Landing Page Design</span>
            <span className="text-gray-400 text-sm">Modern, responsive, and beautiful.</span>
          </div>
          {/* SEO Optimization */}
          <div className="bg-[#181828] rounded-xl p-6 flex flex-col items-center shadow-lg">
            <span className="mb-3">
              {/* Magnifying Glass SVG */}
              <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><circle cx="16" cy="16" r="8" stroke="#6a82fb" strokeWidth="3"/><rect x="24" y="24" width="7" height="3" rx="1.5" transform="rotate(45 24 24)" fill="#6a82fb"/></svg>
            </span>
            <span className="font-bold text-lg mb-2">SEO Optimization</span>
            <span className="text-gray-400 text-sm">Rank higher, get found faster.</span>
          </div>
          {/* Analytics Integration */}
          <div className="bg-[#181828] rounded-xl p-6 flex flex-col items-center shadow-lg">
            <span className="mb-3">
              {/* Chart/Analytics SVG */}
              <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><rect x="8" y="20" width="4" height="8" rx="2" fill="#00c6fb"/><rect x="16" y="12" width="4" height="16" rx="2" fill="#a259ff"/><rect x="24" y="16" width="4" height="12" rx="2" fill="#6a82fb"/></svg>
            </span>
            <span className="font-bold text-lg mb-2">Analytics Integration</span>
            <span className="text-gray-400 text-sm">Track your visitors and growth.</span>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        id="faq"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeInUp}
        className="max-w-6xl mx-auto py-20 px-2"
      >
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
          {/* Left: Glowing Card with Question Mark */}
          <div className="flex-1 flex justify-center items-center min-w-[320px]">
            <div className="relative flex items-center justify-center">
              {/* Layered effect */}
              <div className="absolute w-64 h-64 rounded-2xl bg-[#23233a] opacity-60 -top-6 -left-6 z-0" />
              <div className="absolute w-64 h-64 rounded-2xl bg-[#23233a] opacity-40 top-6 left-6 z-0" />
              <div className="relative w-64 h-64 rounded-2xl bg-gradient-to-b from-[#23233a] to-[#181828] flex items-center justify-center shadow-2xl z-10">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-xl">
                  <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><circle cx="24" cy="24" r="22" fill="#a259ff"/><text x="24" y="32" textAnchor="middle" fontSize="32" fill="#fff">?</text></svg>
                </div>
              </div>
              <div className="absolute w-64 h-16 rounded-b-2xl bg-purple-700 blur-2xl opacity-40 bottom-0 left-0 z-0" />
            </div>
          </div>
          {/* Right: Heading and FAQ Grid */}
          <div className="flex-[1.3] min-w-[400px]">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#23233a] text-white text-sm font-semibold">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white leading-tight">Your Queries About <span className="block text-gray-400">GAsoft Landing Pages</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {faqData.map((item, i) => (
                <div key={item.q} className="bg-[#181828] rounded-xl shadow-lg text-white text-lg font-medium hover:bg-[#23233a] transition cursor-pointer overflow-hidden">
                  <div
                    className="flex items-center justify-between px-6 py-4 select-none"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className="ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-[#23233a]">
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20"
                        className={`transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}
                      >
                        <circle cx="10" cy="10" r="9" fill="#fff" fillOpacity=".08" />
                        <path d="M10 6v8M6 10h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </div>
                  <motion.div
                    initial={false}
                    animate={openFaq === i ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="px-6 pb-4 text-base text-gray-300"
                    style={{ overflow: 'hidden' }}
                  >
                    {openFaq === i && <div>{item.a}</div>}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        id="cta"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeInUp}
        className="w-full py-24 flex items-center justify-center relative"
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-tr from-purple-700 via-indigo-700 to-blue-500 opacity-60 blur-2xl rounded-3xl pointer-events-none" id="contact" />
        <div className="relative z-10 max-w-3xl w-full mx-auto bg-[#181828] rounded-3xl px-8 py-14 flex flex-col items-center text-center shadow-2xl border border-[#23233a]">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#23233a] text-white text-sm font-semibold">Fast, Modern, Affordable</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-2 text-white leading-tight">Take the Next Step Towards<br />Your Online Success!</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-400">Launch Your GAsoft Landing Page Today</h3>
          <p className="text-base text-gray-300 mb-8 max-w-xl">Unlock growth and efficiency with a beautiful, high-converting landing page for your business. Let us handle the tech, you focus on your goals.</p>
          <form className="bg-[#181828] rounded-xl p-8 shadow-lg flex flex-col gap-4" onSubmit={handleFormSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="flex-1 p-3 rounded bg-[#23233a] text-white placeholder-gray-400 outline-none"
                value={form.name}
                onChange={handleFormChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="flex-1 p-3 rounded bg-[#23233a] text-white placeholder-gray-400 outline-none"
                value={form.email}
                onChange={handleFormChange}
                required
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="flex-1 p-3 rounded bg-[#23233a] text-white placeholder-gray-400 outline-none"
                value={form.phone}
                onChange={handleFormChange}
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                className="flex-1 p-3 rounded bg-[#23233a] text-white placeholder-gray-400 outline-none"
                value={form.company}
                onChange={handleFormChange}
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Leave a message"
              className="p-3 rounded bg-[#23233a] text-white placeholder-gray-400 outline-none min-h-[100px]"
              value={form.message}
              onChange={handleFormChange}
              required
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-3 rounded-full font-semibold shadow-lg mt-2 disabled:opacity-60"
              disabled={formStatus === 'submitting'}
            >
              {formStatus === 'submitting' ? 'Submitting...' : 'Contact Now'}
            </button>
            {formStatus === 'success' && <div className="text-green-400 font-semibold mt-2">Message sent! Thank you for contacting us.</div>}
            {formStatus === 'error' && <div className="text-red-400 font-semibold mt-2">Something went wrong. Please try again.</div>}
          </form>
          <span className="text-sm text-gray-400 mt-2">For consultation and inquiry</span>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        id="pricing"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeInUp}
        className="max-w-6xl mx-auto py-20 px-2"
      >
        <h2 className="text-4xl font-extrabold mb-2 text-center text-white">Our Packages</h2>
        <h3 className="text-2xl font-bold mb-8 text-center text-gray-400">Choose the perfect landing page solution for your business</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
          {/* Standard */}
          <div className="bg-[#181828] rounded-3xl shadow-xl flex flex-col items-center p-8 min-w-[280px]">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
            </div>
            <div className="text-xl font-bold text-white mb-1">Standard</div>
            <div className="text-gray-400 mb-4">Best for simple campaigns</div>
            <div className="text-3xl font-extrabold mb-2 text-white">$299</div>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-[#23233a] text-white font-semibold py-2 rounded-lg shadow-md hover:bg-[#2d2d44] transition mb-4">Get Started</button>
            <div className="w-full border-b border-[#23233a] mb-4"></div>
            <div className="w-full text-left">
              <div className="font-semibold mb-2">What you will get</div>
              <ul className="text-gray-300 text-base space-y-1">
                <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> 1 Landing Page</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Basic SEO Setup</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> 4-5 Days Delivery</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Email Support</li>
              </ul>
            </div>
          </div>
          {/* Premium */}
          <div className="relative bg-[#181828] rounded-3xl shadow-xl flex flex-col items-center p-8 min-w-[280px] ring-2 ring-white ring-opacity-50">
             <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at top, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)'}}>
             </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </div>
            <div className="text-xl font-bold text-white mb-1">Premium</div>
            <div className="text-gray-400 mb-4">For growing businesses</div>
            <div className="text-3xl font-extrabold mb-2 text-white">$499</div>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-white text-[#23233a] font-semibold py-2 rounded-lg shadow-md hover:bg-gray-200 transition mb-4">Get Started</button>
            <div className="w-full border-b border-[#23233a] mb-4"></div>
            <div className="w-full text-left">
              <div className="font-semibold mb-2">What you will get</div>
              <ul className="text-gray-300 text-base space-y-1">
                <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Custom Graphics</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Contact Form & Analytics</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> 1-2 Weeks Delivery</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Priority Support</li>
              </ul>
            </div>
          </div>
          {/* Platinum */}
          <div className="bg-[#181828] rounded-3xl shadow-xl flex flex-col items-center p-8 min-w-[260px]">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            </div>
            <div className="text-xl font-bold text-white mb-1">Platinum</div>
            <div className="text-gray-400 mb-4">For comprehensive solutions</div>
            <div className="text-3xl font-extrabold mb-2 text-white">$799</div>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-[#23233a] text-white font-semibold py-2 rounded-lg shadow-md hover:bg-[#2d2d44] transition mb-4">Get Started</button>
            <div className="w-full border-b border-[#23233a] mb-4"></div>
            <div className="w-full text-left">
              <div className="font-semibold mb-2">What you will get</div>
              <ul className="text-gray-300 text-base space-y-1">
                <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> 3+ Pages </li>
                <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> SEO Included</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Advanced Analytics</li></ul>
            </div>
          </div>
          {/* Monthly Subscription */}
          <div className="bg-[#181828] rounded-3xl shadow-xl flex flex-col items-center p-8 min-w-[280px]">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 6.01l.01 0"></path><path d="M10.5 9h3l-1.5 6"></path></svg>
            </div>
            <div className="text-xl font-bold text-white mb-1">Monthly Subscription</div>
            <div className="text-gray-400 mb-4">Ongoing support and updates</div>
            <div className="text-3xl font-extrabold mb-2 text-white">$50 <span className="text-xl font-semibold text-gray-400">/ Month</span></div>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-[#23233a] text-white font-semibold py-2 rounded-lg shadow-md hover:bg-[#2d2d44] transition mb-4">Subscribe Now</button>
            <div className="w-full border-b border-[#23233a] mb-4"></div>
            <div className="w-full text-left">
              <div className="font-semibold mb-2">What you will get</div>
              <ul className="text-gray-300 text-base space-y-1">
                <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Monthly Content Updates</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Performance Monitoring</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Basic Security Checks</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Email Support</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

            {/* Footer */}
      <footer className="w-full py-16 bg-[#0a0a0a] text-[#ededed] text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-12 text-white">Power Your Business</h2>
          <div className="w-full border-t border-[#23233a] mt-8 pt-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {/* Left Column: Logo, Tagline, Social */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-2 mb-2 text-white">
                <Image src="/logo.png" alt="GAsoft Logo" width={32} height={32} className="rounded-full" />
                <span className="font-bold text-base tracking-wide">GAsoft</span>
              </div>
              <span className="text-gray-400 text-base mb-6">Innovate Faster, Scale Smarter.</span>
              <div className="flex gap-4">
                {/* Social Icons */}
                {[
                  {icon: 'facebook', url: '#'},
                  {icon: 'twitter', url: '#'},
                  {icon: 'linkedin', url: '#'},
                  {icon: 'github', url: '#'},
                ].map((social) => (
                  <a key={social.icon} href={social.url} className="text-gray-400 hover:text-white transition">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Middle Column: Pages */}
            <div className="flex flex-col gap-2">
              <span className="font-bold text-base mb-2">Pages</span>
              <a href="#about" className="text-gray-400 hover:text-white transition">About</a>
              <a href="#services" className="text-gray-400 hover:text-white transition">Services</a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition">Pricing</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
            </div>

            {/* Right Column: Contact Us */}
            <div className="flex flex-col gap-2">
              <span className="font-bold text-base mb-2">Contact Us</span>
              <a href="mailto:info@gsoft.com" className="text-gray-400 hover:text-white transition">info@gsoft.com</a>
              <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition">+1 (234) 567-890</a>
              <a href="#" className="text-gray-400 hover:text-white transition">123 Main St, City, Country</a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 text-gray-400 text-sm">&copy; {new Date().getFullYear()} GAsoft. All rights reserved.</div>
      </footer>
    </div>
  );
}
