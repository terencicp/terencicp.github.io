import React from 'react';
import { Layers, Brackets, Braces, Server, BarChartBig, Hash, ChartBarDecreasing, FileText, Github, FileJson, Grid3x3, Globe, Bot, Waypoints, Table, Sigma, LayoutDashboard, Cuboid } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const skillsData = [
  // Programming Languages
  { name: "Python", icon: <Brackets size={24} /> },
  { name: "JavaScript", icon: <Braces size={24} /> },
  { name: "R", icon: <Hash size={24} /> },

  // Data & Analytics
  { name: "Data Analysis", icon: <ChartBarDecreasing size={24} /> },
  { name: "Machine Learning", icon: <Bot size={24} /> },
  { name: "Data Visualization", icon: <BarChartBig size={24} /> },
  { name: "Statistics", icon: <Sigma size={24} /> },
  { name: "NLP", icon: <FileText size={24} /> },
  { name: "Data Engineering", icon: <Waypoints size={24} /> },

  // Web Development
  { name: "Web Development", icon: <Globe size={24} /> },
  
  // Databases & Cloud
  { name: "SQL", icon: <Table size={24} /> },
  { name: "NoSQL", icon: <FileJson size={24} /> },
  { name: "AWS", icon: <Server size={24} /> },
  
  // Tools & Platforms
  { name: "Git", icon: <Github size={24} /> },
  { name: "Docker", icon: <Cuboid size={24} /> },
  { name: "Tableau", icon: <LayoutDashboard size={24} /> },
  { name: "Excel", icon: <Grid3x3 size={24} /> },
];

const Skills = () => (
  <AnimatedSection id="skills" className="bg-slate-50">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-700 mb-8 md:mb-16 flex items-center justify-center">
        <Layers className="mr-3 text-sky-500 hidden sm:block" size={36} /> Skills & Technologies
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 text-center">
        {skillsData.map((skill, index) => (
          <div 
            key={skill.name} 
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 animate-card-enter"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="text-sky-500 mb-3 flex justify-center items-center h-10">
              {React.cloneElement(skill.icon, { size: 32 })}
            </div>
            <h3 className="font-semibold text-slate-700">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default Skills;
