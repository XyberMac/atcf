import React from "react";
import { FaUserTie, FaMapMarkerAlt, FaClock, FaUsers, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <section id="about" className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about-bg.jpg-BM1xUTCVZsOC8ZO1xGpiZpon3BNpMz.jpeg" 
          alt="Elegant table setting" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
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
              <p className="mx-4 text-warning font-semibold">OUR STORY</p>
              <div className="h-1 w-10 bg-warning"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover the passion and professionalism behind Angel Top Class Functions, 
              where every event becomes an unforgettable experience.
            </p>
          </motion.div>
        </div>

        {/* Main Content - Two Columns */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Decorative Elements */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-warning"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-4 border-b-4 border-warning"></div>
              
              {/* Team Image */}
              <img
                src="team.jpeg"
                alt="Angel Top Class Events Team"
                className="w-full h-auto rounded-lg shadow-2xl object-cover"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-warning text-black p-4 rounded-full shadow-lg">
                <FaAward size={32} />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-warning">Youth-Empowered Excellence</h3>
            <p className="text-gray-300">
              Angel Top Class Functions is a premier event staffing company based in Johannesburg, 
              South Africa. Under the visionary leadership of our supervisor Angel, we've built a 
              reputation for delivering exceptional service with professionalism and attention to detail.
            </p>
            
            <p className="text-gray-300">
              As a youth-empowered company, we believe in nurturing talent and creating opportunities 
              for young professionals in the hospitality industry. Our team consists of well-trained, 
              passionate individuals committed to making your event truly memorable.
            </p>

            {/* Key Features with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start">
                <div className="bg-warning/20 p-3 rounded-lg mr-4">
                  <FaUserTie className="text-warning" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Led by Angel</h4>
                  <p className="text-gray-400 text-sm">Visionary supervisor with passion for excellence</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-warning/20 p-3 rounded-lg mr-4">
                  <FaMapMarkerAlt className="text-warning" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Johannesburg Based</h4>
                  <p className="text-gray-400 text-sm">Serving the greater Gauteng area</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-warning/20 p-3 rounded-lg mr-4">
                  <FaUsers className="text-warning" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Youth Empowered</h4>
                  <p className="text-gray-400 text-sm">Creating opportunities for young professionals</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-warning/20 p-3 rounded-lg mr-4">
                  <FaClock className="text-warning" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">24/7 Availability</h4>
                  <p className="text-gray-400 text-sm">Always ready to serve day and night</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="btn btn-warning">Learn More About Us</button>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-center"
        >
          <div className="bg-black/50 backdrop-blur-md p-6 rounded-lg border border-warning/20">
            <h3 className="text-4xl font-bold text-warning mb-2">150+</h3>
            <p className="text-gray-300">Events Served</p>
          </div>
          
          <div className="bg-black/50 backdrop-blur-md p-6 rounded-lg border border-warning/20">
            <h3 className="text-4xl font-bold text-warning mb-2">25+</h3>
            <p className="text-gray-300">Team Members</p>
          </div>
          
          <div className="bg-black/50 backdrop-blur-md p-6 rounded-lg border border-warning/20">
            <h3 className="text-4xl font-bold text-warning mb-2">5+</h3>
            <p className="text-gray-300">Years Experience</p>
          </div>
          
          <div className="bg-black/50 backdrop-blur-md p-6 rounded-lg border border-warning/20">
            <h3 className="text-4xl font-bold text-warning mb-2">100%</h3>
            <p className="text-gray-300">Client Satisfaction</p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 border-2 border-warning/30 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute top-20 right-20 w-12 h-12 border-2 border-warning/30 rounded-full animate-pulse hidden lg:block"></div>
      
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

export default AboutUs;