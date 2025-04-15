import React from "react";
import { motion } from "framer-motion";
import { FaUtensils, FaGlassCheers, FaClipboardList, FaRegLightbulb, FaBroom } from "react-icons/fa";

function ServicesSection() {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/dark-bg2.jpg" alt="Dark background" className="w-full h-full object-cover brightness-50" />
        <div className="absolute inset-0 bg-black/70"></div> {/* Removed backdrop-blur-sm */}
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
              <p className="mx-4 text-warning font-semibold">WHAT WE OFFER</p>
              <div className="h-1 w-10 bg-warning"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From initial setup to final cleanup, our professional team handles every aspect of your event
              with precision and care.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Layout - Refactored for better balance */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Row 1: Two items */}
          {/* Setup - Spans 4 columns */}
          <motion.div 
            className="md:col-span-4 rounded-2xl overflow-hidden relative group h-[400px]"
            variants={itemVariants}
          >
            <img 
              src="/venue2.jpg" 
              alt="Event setup service" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90"></div>
            
            {/* Content - Increased z-index to ensure clarity */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
              <div className="bg-warning/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FaRegLightbulb className="text-warning" size={24} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Event Setup</h3>
              <p className="text-gray-300 mb-4 max-w-lg">
                Our team handles complete event setup, from tables and chairs to linens and place settings.
                We ensure everything is perfectly arranged before your guests arrive.
              </p>
              <div className="h-1 w-20 bg-warning"></div>
            </div>
            
            {/* Glassy border effect - Removed backdrop blur */}
            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none z-10"></div>
          </motion.div>

          {/* Decoration - Spans 2 columns */}
          <motion.div 
            className="md:col-span-2 rounded-2xl overflow-hidden relative group h-[400px]"
            variants={itemVariants}
          >
            <img 
              src="pink-deco.jpg" 
              alt="Event decoration service" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90"></div>
            
            {/* Content - Increased z-index to ensure clarity */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="bg-warning/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FaUtensils className="text-warning" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Decoration</h3>
              <p className="text-gray-300 mb-4">
                Transform your venue with our elegant decoration services. We create stunning atmospheres
                tailored to your event theme and preferences.
              </p>
              <div className="h-1 w-20 bg-warning"></div>
            </div>
            
            {/* Glassy border effect - Removed backdrop blur */}
            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none z-10"></div>
          </motion.div>

          {/* Row 2: Three items of equal width */}
          {/* Food & Drinks - Spans 2 columns */}
          <motion.div 
            className="md:col-span-2 rounded-2xl overflow-hidden relative group h-[350px]"
            variants={itemVariants}
          >
            <img 
              src="food-deco.jpg" 
              alt="Food and drinks service" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90"></div>
            
            {/* Content - Increased z-index to ensure clarity */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="bg-warning/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FaGlassCheers className="text-warning" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Food & Drinks Service</h3>
              <p className="text-gray-300 mb-4">
                Professional serving of meals and beverages with elegance and precision.
                We ensure your guests enjoy a seamless dining experience.
              </p>
              <div className="h-1 w-20 bg-warning"></div>
            </div>
            
            {/* Glassy border effect - Removed backdrop blur */}
            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none z-10"></div>
          </motion.div>

          {/* Waiters/Waitresses - Spans 2 columns */}
          <motion.div 
            className="md:col-span-2 rounded-2xl overflow-hidden relative group h-[350px]"
            variants={itemVariants}
          >
            <img 
              src="waiters.jpg" 
              alt="Professional waitstaff service" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90"></div>
            
            {/* Content - Increased z-index to ensure clarity */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="bg-warning/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FaClipboardList className="text-warning" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Professional Waitstaff</h3>
              <p className="text-gray-300 mb-4">
                Our trained waiters and waitresses provide attentive service, taking orders and ensuring
                your guests' needs are met promptly and courteously.
              </p>
              <div className="h-1 w-20 bg-warning"></div>
            </div>
            
            {/* Glassy border effect - Removed backdrop blur */}
            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none z-10"></div>
          </motion.div>

          {/* Clearing Up - Spans 2 columns */}
          <motion.div 
            className="md:col-span-2 rounded-2xl overflow-hidden relative group h-[350px]"
            variants={itemVariants}
          >
            <img 
              src="clearup.jpg" 
              alt="Event cleanup service" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90"></div>
            
            {/* Content - Increased z-index to ensure clarity */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="bg-warning/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FaBroom className="text-warning" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Clearing & Cleanup</h3>
              <p className="text-gray-300 mb-4">
                After your event concludes, our team efficiently handles all clearing and cleanup,
                leaving the venue spotless and ready for inspection.
              </p>
              <div className="h-1 w-20 bg-warning"></div>
            </div>
            
            {/* Glassy border effect - Removed backdrop blur */}
            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none z-10"></div>
          </motion.div>
        </motion.div>

        {/* Featured Service - Full Width Highlight */}
        <motion.div 
          className="mt-6 rounded-2xl overflow-hidden relative group h-[300px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img 
            src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Complete event service" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          
          {/* Content - Increased z-index to ensure clarity */}
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 max-w-3xl z-20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Complete Event Solutions</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Experience seamless event execution with our comprehensive service packages. 
              From initial consultation to final cleanup, we handle every detail so you can 
              focus on enjoying your special occasion.
            </p>
            <div className="inline-block w-fit p-1 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500">
              <button className="btn bg-black hover:bg-black/80 text-warning px-8 py-3 rounded-lg font-bold">
                Request a Quote
              </button>
            </div>
          </div>
          
          {/* Glassy border effect - Removed backdrop blur */}
          <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none z-10"></div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-1 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500">
            <button className="btn bg-black hover:bg-black/80 text-warning px-8 py-3 rounded-lg font-bold">
              Book Our Services
            </button>
          </div>
          <p className="text-gray-400 mt-4">
            Customized packages available to suit your specific event needs
          </p>
        </motion.div>
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

export default ServicesSection;