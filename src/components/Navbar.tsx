import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
const navLinks = [
{
  name: 'About',
  href: '#about'
},
{
  name: 'Projects',
  href: '#projects'
},
{
  name: 'Design',
  href: '#design'
},
{
  name: 'Skills',
  href: '#skills'
},
{
  name: 'Contact',
  href: '#contact'
}];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <motion.nav
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-display font-bold tracking-tight text-white flex items-center gap-2 group">
          
          <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-sm glow-box group-hover:scale-110 transition-transform duration-300">
            N
          </span>
          Nayani
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group">
            
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          )}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-white/10 border border-white/10 text-sm font-medium hover:bg-white/20 hover:border-accent/50 transition-all duration-300 glow-box-hover">
            
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden glass border-t border-white/10 mt-4">
          
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-white py-2">
              
                  {link.name}
                </a>
            )}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.nav>);

}