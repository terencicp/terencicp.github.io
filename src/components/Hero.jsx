import React, { useState, useEffect } from 'react';
import { ChevronsDown } from 'lucide-react';

const Hero = () => {
  const roles = ["Data Scientist", "Software Engineer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullRole = roles[currentRoleIndex];
      if (isDeleting) {
        setDisplayedRole(current => fullRole.substring(0, current.length - 1));
        setTypingSpeed(30);
      } else {
        setDisplayedRole(current => fullRole.substring(0, current.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && displayedRole === fullRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedRole === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [displayedRole, isDeleting, roles, typingSpeed]);

  const smoothScrollToProjects = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector("#projects");
    if (targetElement) {
      const navbarHeight = 60; // Approximate navbar height
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const smoothScrollToAbout = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector("#about");
    if (targetElement) {
      const navbarHeight = 60; // Approximate navbar height
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-sky-600 via-sky-500 to-sky-700 text-white flex flex-col justify-center items-center text-center relative overflow-hidden px-4">
      {/* Subtle animated background shapes */}
      <div className="absolute inset-0 z-0 opacity-10">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/20 rounded-full animate-hero-pulse"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      <div className="z-10">
        <img 
          src="/terenci-fake-min-nobg.png" 
          alt="Terenci Claramunt" 
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-sky-300 shadow-xl transition-transform duration-500 hover:scale-105"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/160x160/E0F2FE/0EA5E9?text=TC"; }}
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">
          Terenci Claramunt
        </h1>
        <p className="text-2xl md:text-3xl mb-8 h-10 animate-fade-in-up">
          <span className="border-r-2 border-sky-300 pr-1">{displayedRole}</span><span className="ml-1 animate-blink">_</span>
        </p>
        <p className="px-2 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-500">
          Leveraging data to build innovative solutions
        </p>
        <a 
          href="#projects" 
          onClick={smoothScrollToProjects}
          className="bg-white text-sky-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-sky-100 transition-all duration-300 transform hover:scale-105 animate-bounce-slow"
        >
          View my work
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-pulse cursor-pointer hover:text-sky-200 transition-colors" onClick={smoothScrollToAbout}>
         <ChevronsDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
