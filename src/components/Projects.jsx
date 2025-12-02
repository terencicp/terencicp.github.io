import React from 'react';
import { MessagesSquare, Briefcase, Github, ShoppingCart, Bot, Table, BarChartBig, Share2, Globe, Notebook, LayoutDashboard, Linkedin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const projectsData = [
  {
    id: 7,
    icon: MessagesSquare,
    title: "Mastodon topic modeling",
    category: "Natural Language Processing",
    description: "Automated pipeline that identifies and summarizes trending topics on Mastodon daily using BERTopic.",
    technologies: ["Python", "BERTopic", "Ollama"],
    buttons: [{
      icon: Github,
      label: "Code",
      url: "https://github.com/terencicp/mastodon-topics"
    }, {
      icon: Globe,
      label: "Demo",
      url: "https://mastodon-topics.streamlit.app/"
    }] 
  },
  {
    id: 1,
    icon: ShoppingCart,
    title: "Point of sale prototype",
    category: "Front-end web development",
    description: "Web app built as a prototype for a retail client. It allows salespeople to generate quotes, invoices and returns.",
    technologies: ["JavaScript", "React", "Tailwind CSS"],
    buttons: [{
      icon: Github,
      label: "Code",
      url: "https://github.com/terencicp/pos-demo"
    }, {
      icon: Globe,
      label: "Demo",
      url: "https://terencicp.github.io/pos-demo"
    }] 
  },
  {
    id: 2,
    icon: Bot,
    title: "Web scraping AI agent",
    category: "AI Engineering, Web scraping",
    description: "AI agent that given a natural language query can search the web and efficiently extract a list of structured data.",
    technologies: ["Python", "OpenAI API", "Selenium"],
    buttons: [{
      icon: Github,
      label: "Github",
      url: "https://github.com/terencicp/ai-web-scraper"
    }] 
  },
  {
    id: 3,
    icon: Table,
    title: "E-commerce data analysis",
    category: "Data analysis, Databases",
    description: "Kaggle notebook showcasing the capabilities of SQL for data analysis. The goal: To perform all data manipulation using SQL only.",
    technologies: ["SQL", "Python"],
    buttons: [{
      icon: Notebook,
      label: "Kaggle",
      url: "https://www.kaggle.com/code/terencicp/sql-challenge-e-commerce-data-analysis"
    }] 
  },
  {
    id: 4,
    icon: BarChartBig,
    title: "Videogame sales dashboard",
    category: "Data visualization",
    description: "Interactive Tableau dashboard exploring games available on the Steam store. Choose a tag to view its statistics and popularity.",
    technologies: ["Tableau"],
    buttons: [{
      icon: LayoutDashboard,
      label: "Tableau",
      url: "https://public.tableau.com/app/profile/terencicp/viz/steam-games/Dash"
    }] 
  },
  {
    id: 5,
    icon: Linkedin,
    title: "LinkedIn jobs analysis",
    category: "Data analysis, Web scraping",
    description: "Report analising data from 3569 entry-level data analysis jobs, web scraped from LinkedIn.",
    technologies: ["Python", "SQL"],
    buttons: [{
      icon: Github,
      label: "Code",
      url: "https://github.com/terencicp/linkedin-job-scraper"
    }, {
      icon: Notebook,
      label: "Results",
      url: "https://terencicp.github.io/linkedin/"
    }] 
  },
  {
    id: 6,
    icon: Share2,
    title: "Musical collaborations graph",
    category: "Data visualization",
    description: "Interactive network plot of collaborations between the top Spotify artists in 2022.",
    technologies: ["Python", "Flourish"],
    buttons: [{
      icon: Share2,
      label: "Flourish",
      url: "https://public.flourish.studio/story/2151064/"
    }] 
  }
];

const ProjectCard = ({ project }) => (
  <div className="bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-sky-300 flex flex-col h-full">
    {project.icon && (
      <div className="bg-gradient-to-r from-sky-50 to-blue-50 py-4 px-6 justify-center items-center h-22 shrink-0 hidden md:flex border-b border-slate-100">
        <project.icon size={48} className="text-sky-500" />
      </div>
    )}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-sky-700 mb-2">{project.title}</h3>
      <p className="text-sm text-slate-500 mb-2 font-medium">{project.category}</p>
      <p className="text-slate-600 text-sm mb-4 flex-grow">{project.description}</p>
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-slate-500 mb-1">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <span key={tech} className="bg-sky-100 text-sky-700 px-2 py-1 text-xs rounded-md font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-auto flex space-x-3">
        {project.buttons?.map((button, index) => (
          <a 
            key={index}
            href={button.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`font-medium py-2 px-4 rounded-lg transition-colors text-sm flex items-center justify-center flex-grow ${
              (project.buttons.length === 1) || (index === project.buttons.length - 1)
                ? "text-white bg-sky-500 hover:bg-sky-600"
                : "text-sky-600 hover:text-sky-700 border border-sky-500 hover:bg-sky-50"
            }`}
          >
            <button.icon size={16} className="mr-2" /> {button.label}
          </a>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => (
  <AnimatedSection id="projects" className="bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-700 mb-4 md:mb-16 flex items-center justify-center">
        <Briefcase className="mr-3 text-sky-500" size={36} /> My projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {projectsData.map((project, index) => (
          <div 
            key={project.id} 
            className="transition-all duration-500 ease-out transform opacity-0 translate-y-5 animate-card-enter"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default Projects;
