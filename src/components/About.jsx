import React from 'react';
import { User } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const About = () => (
  <AnimatedSection id="about" className="bg-slate-50">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-700 mb-6 md:mb-12 flex items-center justify-center">
        <User className="mr-3 text-sky-500" size={36} /> About me
      </h2>
      <div className="text-slate-700 text-lg space-y-6">
        <p>
          Hello! My name is <strong className="text-sky-600">Terry</strong>, I started in tech 10 years ago as a solopreneur, <strong className="text-sky-600">building web and mobile apps</strong> on my own. Later, I realized that social network data is extremely valuable, which led me to study Data Science. I love transforming raw data into usable insights that can drive business value.
        </p>
        <p>
          I recently completed my <strong className="text-sky-600">Data Science degree</strong>, with a thesis focused on topic modeling for social networks. Last summer I interned at Dow Jones where I contributed to an <strong className="text-sky-600">AI engineering</strong> project. Currently, I'm working as a <strong className="text-sky-600">Full Stack Web Developer</strong> using JavaScript, building a custom ERP solution for a retail client using React and Next.js.
        </p>
      </div>
    </div>
  </AnimatedSection>
);

export default About;
