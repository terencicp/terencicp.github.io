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
            Hello! My name is <strong className="text-sky-600">Terry</strong>, I started in tech 10 years ago as a solopreneur, when I <strong className="text-sky-600">built web and mobile apps</strong> on my own. Later, I realized that social network data is extremely valuable and I <strong className="text-sky-600">studied Data Science</strong> with the goal of learning efficient techniques to derive insights from data. I love transforming raw data into usable insight that can drive business value.
          </p>
          <p>
            During this time, I worked part time <strong className="text-sky-600">in sales at Apple</strong>. That experience taught me a lot about understanding what people need and explaining complex things in a simple way, skills that are surprisingly useful in my tech work today.
          </p>
          <p>
            <strong className="text-sky-600">Currently</strong>, I'm building a custom <strong className="text-sky-600">ERP full-stack web app</strong> for a retail business, using Javascript and Python. I am also a <strong className="text-sky-600">Machine Learning intern at Dow Jones</strong>, contributing to an AI engineering project. At the same time I'm preparing my <strong className="text-sky-600">Data Science degree thesis</strong>, focused on topic modeling for social networks.
          </p>
          <p>
            I'm now <strong className="text-sky-600">looking for roles in</strong> <strong className="text-sky-600">Data Analysis, Data Science, or AI Engineering</strong>. I want to use my mix of software development and data skills to find patterns, build smart systems, and create solutions that help businesses grow.
          </p>
        </div>
    </div>
  </AnimatedSection>
);

export default About;
