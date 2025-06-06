import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navbarHeight = 55; // Approximate navbar height (py-3 + content)
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    if (isOpen) setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-5 py-3 flex justify-between items-center">
        <a href="#home" onClick={(e) => smoothScroll(e, "#home")} className={`pl-1 text-2xl font-bold ${isScrolled ? 'text-sky-700' : 'text-white'}`}>
          Terenci Claramunt
        </a>
        <div className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={(e) => smoothScroll(e, link.href)} className={`transition-colors ${isScrolled ? 'text-slate-700 hover:text-sky-500' : 'text-white hover:text-sky-200'}`}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="md:hidden mt-1">
          <button onClick={() => setIsOpen(!isOpen)} className={`${isScrolled ? 'text-sky-700' : 'text-white'}`}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-lg py-2 absolute w-full">
          {navLinks.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => smoothScroll(e, link.href)}
              className="block px-6 py-3 text-slate-700 hover:bg-sky-100 hover:text-sky-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
