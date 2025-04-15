import React, { useState, useEffect } from 'react';
import { FaHome, FaInfoCircle, FaClipboardList, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('/');
    const [scrolled, setScrolled] = useState(false);
    
    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const links = [
        {
            name: "Home",
            path: "/",
            icon: <FaHome className="mr-2" />
        }, {
            name: "About Us",
            path: "/#about",
            icon: <FaInfoCircle className="mr-2" />
        }, {
            name: "Services",
            path: "/#services",
            icon: <FaClipboardList className="mr-2" />
        }, {
            name: "Contact",
            path: "/#contact",
            icon: <FaEnvelope className="mr-2" />
        }
    ];
    
    const handleLinkClick = (path) => {
        setActiveLink(path);
        setIsOpen(false);
    };
    
    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
            <div className="w-[90%] max-w-7xl mx-auto">
                <div className={`
                    w-full rounded-xl 
                    backdrop-blur-xl 
                    border border-white/20 
                    shadow-lg shadow-black/5
                    ${scrolled ? 'bg-[#0f172a]/80' : 'bg-[#0f172a]/60'}
                    transition-all duration-300
                `}>
                    <div className="flex items-center justify-between px-4 py-3">
                        {/* Logo */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center"
                        >
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mr-3">
                                <span className="text-white font-bold text-lg">A</span>
                            </div>
                            <h1 className="text-xl md:text-2xl font-bold text-warning hidden sm:block">
                                Angel <span className="text-white">Top Class Events</span>
                            </h1>
                            <h1 className="text-xl font-bold text-warning sm:hidden">
                                ATCE
                            </h1>
                        </motion.div>
                        
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            {links.map((link, index) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className={`
                                        relative px-4 py-2 rounded-lg 
                                        font-medium transition-all duration-200
                                        flex items-center
                                        hover:bg-white/10
                                        ${activeLink === link.path ? 'text-blue-400' : 'text-warning hover:text-white'}
                                    `}
                                    onClick={() => handleLinkClick(link.path)}
                                >
                                    <a href={link.path} className="flex items-center">
                                        {link.icon}
                                        {link.name}
                                    </a>
                                    {activeLink === link.path && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 rounded-full"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </motion.div>
                            ))}
                            
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="ml-4 px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-lg shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-200"
                            >
                                Book Now
                            </motion.button>
                        </div>
                        
                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button 
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 rounded-lg bg-white/10 text-warning hover:bg-white/20 transition-colors"
                            >
                                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                            </button>
                        </div>
                    </div>
                    
                    {/* Mobile Navigation */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="md:hidden overflow-hidden"
                            >
                                <div className="px-4 py-3 space-y-2 border-t border-white/10">
                                    {links.map((link) => (
                                        <a
                                            key={link.path}
                                            href={link.path}
                                            onClick={() => handleLinkClick(link.path)}
                                            className={`
                                                block px-3 py-2 rounded-lg 
                                                font-medium transition-all duration-200
                                                flex items-center
                                                hover:bg-white/10
                                                ${activeLink === link.path ? 'text-blue-400' : 'text-warning hover:text-white'}
                                            `}
                                        >
                                            {link.icon}
                                            {link.name}
                                        </a>
                                    ))}
                                    <button className="w-full mt-3 px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-lg shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-200">
                                        Book Now
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    );
}