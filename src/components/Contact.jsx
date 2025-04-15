import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

function ContactSection() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending your message...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "951966d0-4c89-44d5-9994-141b01990e40"); // Replace with your actual key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! We'll be in touch soon.");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log("Error", error);
      setResult("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/dark-bg2.jpg" alt="Dark background" className="w-full h-full object-cover brightness-50" />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="h-1 w-10 bg-warning"></div>
              <p className="mx-4 text-warning font-semibold">GET IN TOUCH</p>
              <div className="h-1 w-10 bg-warning"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ready to elevate your event experience? Reach out to us for inquiries, 
              bookings, or to discuss how we can make your special occasion unforgettable.
            </p>
          </motion.div>
        </div>

        {/* Contact Content - Two Columns */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
          >
            <h3 className="text-2xl font-bold text-warning mb-6">Send Us a Message</h3>
            
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white font-medium block">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-warning/50 text-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white font-medium block">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-warning/50 text-white"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-white font-medium block">Phone Number (Optional)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-warning/50 text-white"
                  placeholder="Your Phone Number"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="event_type" className="text-white font-medium block">Event Type</label>
                <select 
                  id="event_type" 
                  name="event_type" 
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-warning/50 text-white"
                >
                  <option value="" className="bg-gray-900">Select event type</option>
                  <option value="Wedding" className="bg-gray-900">Wedding</option>
                  <option value="Corporate" className="bg-gray-900">Corporate Event</option>
                  <option value="Birthday" className="bg-gray-900">Birthday Party</option>
                  <option value="Gala" className="bg-gray-900">Gala Dinner</option>
                  <option value="Other" className="bg-gray-900">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-white font-medium block">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-warning/50 text-white resize-none"
                  placeholder="Tell us about your event and requirements..."
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-gradient-to-r from-amber-500 to-warning text-black font-bold rounded-lg transition-all hover:from-warning hover:to-amber-500 disabled:opacity-70 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : "Send Message"}
                </button>
                
                {result && (
                  <div className={`mt-4 p-3 rounded-lg text-center ${result.includes("success") ? "bg-green-900/50 text-green-300" : "bg-amber-900/50 text-amber-300"}`}>
                    {result}
                  </div>
                )}
              </div>
            </form>
          </motion.div>

          {/* Right Column - Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-warning mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-8">
                Have questions or ready to book our services? Reach out to us through any of the 
                channels below. Our team is ready to assist you in creating an unforgettable event.
              </p>
            </div>
            
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="flex items-start bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <div className="bg-warning/20 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-warning" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Email Us</h4>
                  <p className="text-gray-400">For inquiries and bookings</p>
                  <a href="mailto:info@angeltopclass.co.za" className="text-warning hover:underline">jucusiphokazi10@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <div className="bg-warning/20 p-3 rounded-full mr-4">
                  <FaPhone className="text-warning" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">WhatsApp/Call Us</h4>
                  <p className="text-gray-400">We're available 24/7</p>
                  <a href="tel:+27123456789" className="text-warning hover:underline">+27 72 191 7182</a>
                </div>
              </div>
              
              <div className="flex items-start bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <div className="bg-warning/20 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-warning" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Our Location</h4>
                  <p className="text-gray-400">Based in</p>
                  <p className="text-warning">Johannesburg, South Africa</p>
                </div>
              </div>
              
              <div className="flex items-start bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <div className="bg-warning/20 p-3 rounded-full mr-4">
                  <FaClock className="text-warning" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Business Hours</h4>
                  <p className="text-gray-400">Always available</p>
                  <p className="text-warning">24/7 Service</p>
                </div>
              </div>
            </div>
            
            
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-warning/30 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-40 right-10 w-12 h-12 border-2 border-warning/30 rounded-full animate-pulse hidden lg:block"></div>
      
      {/* Custom animation for floating elements */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}

export default ContactSection;