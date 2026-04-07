import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, CheckCircle2, Leaf, ShieldCheck, Clock, Trash2, ChevronDown, ChevronUp, MapPin, Phone, Mail, Facebook } from "lucide-react";
import React, { useState, useRef } from "react";

const FadeIn = ({ children, delay = 0, className = "", direction = "up" }: { children: React.ReactNode, delay?: number, className?: string, direction?: "up" | "down" | "left" | "right" | "none", key?: React.Key }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ScaleIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectDetails: "",
    transactionalConsent: false,
    marketingConsent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://services.leadconnectorhq.com/hooks/XDEt0ukwnTyaC70aGZKy/webhook-trigger/75d97180-a3c3-4a81-ae68-80d92e6ec48f", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-zinc-900 font-sans selection:bg-olive-600 selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50 bg-white/80 backdrop-blur-md border border-zinc-200 rounded-full shadow-sm">
        <div className="px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="https://lh3.googleusercontent.com/d/1yIlD7SoKzDcRIGOFL4JgTTLVRdSLHGzm" 
              alt="Bomb City Cleaners Logo" 
              className="h-20 w-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
            <a href="#how-it-works" className="hover:text-olive-600 transition-colors">How it Works</a>
            <a href="#about-us" className="hover:text-olive-600 transition-colors">About Us</a>
            <a href="#faq" className="hover:text-olive-600 transition-colors">FAQ</a>
          </div>
          <a href="https://api.digitalhandyman.xyz/widget/booking/d7QBRsdPQ2V7wMT2ytIJ" className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-olive-600 hover:bg-olive-700 rounded-full transition-colors shadow-sm">
            Book Cleanout
          </a>
        </div>
      </nav>

      <main>
        {/* 1. Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-olive-600/10 via-zinc-50 to-zinc-50 -z-10" />
          
          <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tan-400/20 border border-tan-400/30 text-sm text-olive-600 font-medium mb-8"
            >
              <MapPin className="w-4 h-4" />
              <span>Amarillo • Canyon • Bushland</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-extrabold tracking-tight text-olive-600 mb-6 leading-[1.1] max-w-none lg:whitespace-nowrap"
            >
              Own Your Garage Space Again!
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-xl text-zinc-600 mb-12 leading-relaxed max-w-2xl"
            >
              Amarillo's premier garage cleanout service. We haul the junk, sweep the floors, and give you your space back.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="w-full relative rounded-3xl overflow-hidden border border-zinc-200 aspect-video md:aspect-[21/9] mb-12 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent z-10" />
              <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src="https://lh3.googleusercontent.com/d/1eELM0vb1fZtn5oTH94ZVA_-omeHGkT0M" 
                alt="Clean organized garage" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-3xl"
            >
              <a href="https://api.digitalhandyman.xyz/widget/booking/d7QBRsdPQ2V7wMT2ytIJ" className="w-full sm:w-auto flex-1 inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-white bg-olive-600 hover:bg-olive-700 rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(90,107,49,0.2)]">
                Schedule your cleanout
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              
              <div className="w-full sm:w-auto flex-1 bg-white border border-zinc-200 shadow-lg p-4 rounded-2xl flex items-center justify-center sm:justify-start gap-4 text-left">
                <div className="w-12 h-12 bg-tan-400/20 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-olive-600" />
                </div>
                <div>
                  <p className="text-zinc-900 font-bold text-lg leading-tight">100%</p>
                  <p className="text-zinc-500 text-sm leading-tight">Satisfaction Guaranteed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 6. Service Areas */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-sm font-medium text-olive-600 uppercase tracking-widest mb-10">Trusted by homeowners across the Panhandle</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { city: "Amarillo", state: "TX" },
                { city: "Canyon", state: "TX" },
                { city: "Bushland", state: "TX" }
              ].map((loc, i) => (
                <ScaleIn key={i} delay={i * 0.15}>
                  <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-zinc-200 hover:border-olive-300 hover:bg-zinc-50/80 transition-all hover:-translate-y-1 group shadow-sm hover:shadow-md">
                    <div className="w-12 h-12 bg-olive-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-olive-100 transition-colors">
                      <MapPin className="w-6 h-6 text-olive-600 transition-colors" />
                    </div>
                    <span className="text-2xl font-bold text-zinc-900 mb-1">{loc.city}</span>
                    <span className="text-zinc-500 font-medium">{loc.state}</span>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>

        {/* 2. How it works */}
        <section id="how-it-works" className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-olive-600 mb-6">How it works</h2>
              <p className="text-zinc-600 text-lg">We've streamlined the process so you don't have to lift a finger. Getting your garage back is as easy as 1-2-3.</p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Connecting line for desktop */}
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
                className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-olive-600/0 via-olive-600/20 to-olive-600/0 origin-left" 
              />

              {[
                {
                  step: "01",
                  title: "Book Your Cleanout",
                  desc: "Schedule online or give us a call. We'll give you a transparent, upfront estimate based on your needs."
                },
                {
                  step: "02",
                  title: "We Do the Heavy Lifting",
                  desc: "Our professional crew arrives on time, hauls away the junk, and handles all the sorting and loading."
                },
                {
                  step: "03",
                  title: "Enjoy Your Space",
                  desc: "We sweep the floors before we leave, giving you a clean, empty garage ready for your car or next project."
                }
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.2} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-white/80 backdrop-blur-sm border-2 border-olive-100 rounded-full flex items-center justify-center mb-8 shadow-md">
                    <span className="text-3xl font-black text-olive-600">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">{item.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 4. About Us */}
        <section id="about-us" className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-olive-600 mb-6">Why choose Bomb City?</h2>
              <p className="text-zinc-600 text-lg max-w-2xl">We don't just haul trash. We provide a premium service that respects your property and your time.</p>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Leaf className="w-6 h-6 text-olive-600" />,
                  title: "Eco-Friendly Disposal",
                  desc: "We sort your items to recycle and donate whatever we can before hitting the landfill."
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-olive-600" />,
                  title: "Dependable Team",
                  desc: "Our professional, hardworking crew shows up on time and treats your property with respect."
                },
                {
                  icon: <Clock className="w-6 h-6 text-olive-600" />,
                  title: "Fast Turnaround",
                  desc: "Most standard garage cleanouts are completed in a single day."
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-olive-600" />,
                  title: "Upfront Pricing",
                  desc: "No hidden fees or surprise charges. You'll know the cost before we start."
                },
                {
                  icon: <Trash2 className="w-6 h-6 text-olive-600" />,
                  title: "Broom-Swept Finish",
                  desc: "We don't just take the big stuff. We sweep the floors so the space is truly clean."
                },
                {
                  icon: <MapPin className="w-6 h-6 text-olive-600" />,
                  title: "Local & Reliable",
                  desc: "Locally owned and operated, proudly serving the Texas Panhandle."
                }
              ].map((feature, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white/60 backdrop-blur-sm border border-zinc-200 p-8 rounded-2xl hover:border-olive-300 hover:bg-zinc-50/80 transition-colors group shadow-sm hover:shadow-md">
                    <div className="w-12 h-12 bg-olive-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-olive-100 transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-3">{feature.title}</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Commercial Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white/60 backdrop-blur-sm border border-zinc-200 shadow-lg rounded-3xl overflow-hidden flex flex-col md:flex-row items-center">
              <div className="p-10 md:p-16 flex-1">
                <FadeIn direction="right">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tan-400/20 border border-tan-400/30 text-sm text-olive-600 font-medium mb-6">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Commercial Services</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-olive-600 mb-4">Business & Industrial Cleanouts</h2>
                  <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                    We don't just do homes. If you have a commercial garage, warehouse, or industrial space that needs clearing out, our team has the capacity and equipment to handle large-scale jobs efficiently. Keep your business running smoothly while we handle the mess.
                  </p>
                  <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-olive-600 hover:bg-olive-700 rounded-full transition-all hover:scale-105 active:scale-95 shadow-md">
                    Get a Commercial Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </FadeIn>
              </div>
              <div className="w-full md:w-2/5 h-64 md:h-auto self-stretch relative border-t md:border-t-0 md:border-l border-zinc-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-olive-600/10 to-transparent mix-blend-overlay z-10" />
                <motion.img 
                  initial={{ scale: 1.2, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  src="https://lh3.googleusercontent.com/d/1pj3WaszEP4JJbMZQmEbfAQvjGCpWRBmr" 
                  alt="Commercial warehouse cleanout" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. FAQ */}
        <section id="faq" className="py-24 lg:py-32">
          <div className="max-w-3xl mx-auto px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-olive-600 mb-6">Frequently Asked Questions</h2>
            </FadeIn>

            <div className="space-y-4">
              {[
                {
                  q: "What areas do you serve?",
                  a: "We are based in Amarillo, TX and proudly serve the surrounding areas including Canyon and Bushland."
                },
                {
                  q: "Do I need to be home for the cleanout?",
                  a: "Not necessarily. As long as we have clear access to the garage and have agreed on what needs to be removed, you don't need to be present."
                },
                {
                  q: "Are there any items you won't take?",
                  a: "Yes. For safety and legal reasons, we cannot take hazardous materials, wet paint, chemicals, motor oil, or asbestos."
                },
                {
                  q: "How much does a typical cleanout cost?",
                  a: "Our standard clean out costs $499. We do have $150 non-refundable deposit to lock in your garage transformation. The $150 deposit will roll into in your final payment once the clean has been completed."
                },
                {
                  q: "What happens to the stuff you haul away?",
                  a: "We are committed to eco-friendly practices. We sort through items to donate usable goods and recycle materials whenever possible, minimizing what goes to the landfill."
                }
              ].map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </section>

        {/* 7. Contact Form */}
        <section id="contact" className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold text-olive-600 mb-6">Ready to get your space back?</h2>
              <p className="text-zinc-600 text-lg mb-8">Fill out the form below and we'll get back to you within 24 hours with a free quote.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-zinc-700">
                  <div className="w-10 h-10 bg-olive-50 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-olive-600" />
                  </div>
                  <span className="font-medium">(806)336-9830</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-700">
                  <div className="w-10 h-10 bg-olive-50 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-olive-600" />
                  </div>
                  <span className="font-medium">bccleanout@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-700">
                  <div className="w-10 h-10 bg-olive-50 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-olive-600" />
                  </div>
                  <span className="font-medium">Amarillo, Canyon, & Bushland, TX</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              {isSubmitted ? (
                <div className="bg-white/60 backdrop-blur-sm border border-zinc-200 shadow-lg p-12 rounded-2xl text-center space-y-4">
                  <div className="w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-olive-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900">Thank you!</h3>
                  <p className="text-zinc-600">Your request has been received. We'll be in touch shortly to discuss your custom quote.</p>
                </div>
              ) : (
                <form className="bg-white/60 backdrop-blur-sm border border-zinc-200 shadow-lg p-8 rounded-2xl space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2 col-span-2 sm:col-span-1">
                      <label className="text-sm font-medium text-zinc-700">First Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:border-olive-500 focus:ring-1 focus:ring-olive-500 transition-all" 
                        placeholder="John" 
                      />
                    </div>
                    <div className="space-y-2 col-span-2 sm:col-span-1">
                      <label className="text-sm font-medium text-zinc-700">Last Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:border-olive-500 focus:ring-1 focus:ring-olive-500 transition-all" 
                        placeholder="Doe" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-700">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:border-olive-500 focus:ring-1 focus:ring-olive-500 transition-all" 
                      placeholder="john@example.com" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-700">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:border-olive-500 focus:ring-1 focus:ring-olive-500 transition-all" 
                      placeholder="(806) 555-0123" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-700">Tell us about your project</label>
                    <textarea 
                      rows={4} 
                      required
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:border-olive-500 focus:ring-1 focus:ring-olive-500 transition-all resize-none" 
                      placeholder="I have a 2-car garage full of old furniture and boxes..."
                    ></textarea>
                  </div>

                  <div className="space-y-4 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        required
                        checked={formData.transactionalConsent}
                        onChange={(e) => setFormData({ ...formData, transactionalConsent: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded border-zinc-300 text-olive-600 focus:ring-olive-500 cursor-pointer"
                      />
                      <span className="text-xs text-zinc-600 leading-relaxed group-hover:text-zinc-900 transition-colors">
                        I Consent to receive transactional messages from Bomb City Cleaners. at the phone number provided. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        required
                        checked={formData.marketingConsent}
                        onChange={(e) => setFormData({ ...formData, marketingConsent: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded border-zinc-300 text-olive-600 focus:ring-olive-500 cursor-pointer"
                      />
                      <span className="text-xs text-zinc-600 leading-relaxed group-hover:text-zinc-900 transition-colors">
                        I consent to receive marketing and promotional messages from Bomb City Cleaners at the phone number provided. Message frequency may vary. Message and Data rates may apply. Reply HELP for help or STOP to opt-out.
                      </span>
                    </label>
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-olive-600 hover:bg-olive-700 disabled:bg-olive-400 text-white font-bold py-4 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Get Your Custom Quote"
                    )}
                  </button>
                </form>
              )}
            </FadeIn>
          </div>
        </section>

        {/* 3. Bottom CTA */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 relative overflow-hidden rounded-3xl border border-olive-500 bg-olive-600 py-20 shadow-2xl">
            <div className="relative z-10 max-w-none mx-auto text-center px-4">
              <FadeIn>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-8 whitespace-nowrap">Stop parking in the driveway.</h2>
                <a href="https://api.digitalhandyman.xyz/widget/booking/d7QBRsdPQ2V7wMT2ytIJ" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-black bg-tan-400 hover:bg-tan-300 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(210,180,140,0.3)]">
                  Schedule your cleanout
                  <ArrowRight className="ml-2 w-6 h-6" />
                </a>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      {/* 8. Footer */}
      <footer className="bg-olive-600 pt-16 pb-8 border-t border-olive-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <img 
                  src="https://lh3.googleusercontent.com/d/1yIlD7SoKzDcRIGOFL4JgTTLVRdSLHGzm" 
                  alt="Bomb City Cleaners Logo" 
                  className="h-24 w-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-olive-100 max-w-sm mb-8">
                Amarillo's trusted garage cleanout experts. We haul the junk so you can reclaim your space.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-olive-700 flex items-center justify-center text-tan-300 hover:text-white hover:bg-olive-800 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
              <ul className="space-y-4 text-olive-100">
                <li><a href="#" className="hover:text-tan-300 transition-colors">Garage Cleanouts</a></li>
                <li><a href="#" className="hover:text-tan-300 transition-colors">Junk Removal</a></li>
                <li><a href="#" className="hover:text-tan-300 transition-colors">Estate Cleanouts</a></li>
                <li><a href="#" className="hover:text-tan-300 transition-colors">Appliance Removal</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
              <ul className="space-y-4 text-olive-100">
                <li><a href="#how-it-works" className="hover:text-tan-300 transition-colors">How it Works</a></li>
                <li><a href="#faq" className="hover:text-tan-300 transition-colors">FAQ</a></li>
                <li><a href="#contact" className="hover:text-tan-300 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-tan-300 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-olive-500 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-olive-200">
            <p>© {new Date().getFullYear()} Bomb City Cleaners. All rights reserved.</p>
            <p>Serving Amarillo, Canyon, and Bushland, TX.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FAQItem({ question, answer, delay }: { question: string, answer: string, delay: number, key?: React.Key }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FadeIn delay={delay}>
      <div className="border border-zinc-200 rounded-xl overflow-hidden bg-white/60 backdrop-blur-sm hover:bg-zinc-50/80 transition-colors shadow-sm">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
        >
          <span className="font-bold text-zinc-900 text-lg pr-8">{question}</span>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-olive-600 flex-shrink-0" />
          ) : (
            <ChevronDown className="w-5 h-5 text-zinc-400 flex-shrink-0" />
          )}
        </button>
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="p-6 pt-0 text-zinc-600 leading-relaxed">
            {answer}
          </div>
        </motion.div>
      </div>
    </FadeIn>
  );
}
