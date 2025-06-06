import React from 'react';
import { Mail, Users, Github, Trophy } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Contact = () => (
  <AnimatedSection id="contact" className="bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-700 mb-12 flex items-center justify-center">
        <Mail className="mr-3 text-sky-500" size={36} /> Get in touch
      </h2>
      <p className="text-center text-slate-600 text-lg max-w-2xl mx-auto mb-12">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 lg:space-x-8">
        <a href="mailto:terencids@icloud.com" className="flex items-center bg-sky-500 text-white px-6 py-3 md:px-8 rounded-lg shadow-md hover:bg-sky-600 transition-colors transform hover:scale-105 text-lg w-full md:w-40 justify-center">
          <Mail size={20} className="mr-2" /> Email
        </a>
        <a href="https://www.linkedin.com/in/terenci/" target="_blank" rel="noopener noreferrer" className="flex items-center text-sky-700 border-2 border-sky-600 px-6 py-3 md:px-8 rounded-lg hover:bg-sky-100 hover:text-sky-800 transition-colors transform hover:scale-105 text-lg w-full md:w-40 justify-center">
          <Users size={20} className="mr-2" /> LinkedIn
        </a>
        <a href="https://github.com/terencicp" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-700 border-2 border-slate-500 px-6 py-3 md:px-8 rounded-lg hover:bg-slate-100 hover:text-slate-800 transition-colors transform hover:scale-105 text-lg w-full md:w-40 justify-center">
          <Github size={20} className="mr-2" /> GitHub
        </a>
         <a href="https://www.kaggle.com/terencicp" target="_blank" rel="noopener noreferrer" className="flex items-center text-sky-600 border-2 border-sky-500 px-6 py-3 md:px-8 rounded-lg hover:bg-sky-50 hover:text-sky-700 transition-colors transform hover:scale-105 text-lg w-full md:w-40 justify-center">
          <Trophy size={20} className="mr-2" /> Kaggle
        </a>
      </div>
    </div>
  </AnimatedSection>
);

export default Contact;
