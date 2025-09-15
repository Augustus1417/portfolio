import React, { useState, useEffect } from 'react';
import { Briefcase } from 'lucide-react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Setup from './components/Setup';
import Footer from './components/Footer';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const techStack = [
    { name: 'JavaScript', color: 'from-yellow-400 to-yellow-600', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', color: 'from-blue-500 to-blue-700', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'Python', color: 'from-green-400 to-blue-500', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'C#', color: 'from-purple-500 to-purple-700', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
    { name: 'Dart', color: 'from-blue-400 to-cyan-500', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg' },
    { name: 'Kotlin', color: 'from-orange-500 to-purple-600', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg' },
    { name: 'PHP', color: 'from-purple-600 to-blue-600', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
    { name: 'React', color: 'from-cyan-400 to-cyan-600', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'React Native', color: 'from-cyan-500 to-purple-600', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original.svg' },
    { name: 'Flutter', color: 'from-blue-400 to-cyan-600', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
    { name: 'TailwindCSS', color: 'from-cyan-400 to-blue-500', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'FastAPI', color: 'from-teal-500 to-green-600', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
    { name: 'Node.js', color: 'from-green-500 to-green-700', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'MySQL', color: 'from-blue-600 to-orange-500', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'Git', color: 'from-orange-500 to-red-600', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' }
  ];

  const projects = [
    {
      name: "Tech In The Box",
      description: "Full-stack e-commerce platform built with React, FastAPI, and MySQL. Complete shopping experience with user authentication and inventory management.",
      tech: ["React", "FastAPI", "MySQL"],
      colors: { bg: "from-blue-500 to-cyan-500", hover: "hover:border-cyan-500/50", text: "text-cyan-400 hover:text-cyan-300" },
      url: "https://github.com/Augustus1417/Tech-In-The-Box",
      icon: <Briefcase size={32} className="text-white" />
    },
    {
      name: "Table Tennis Scoreboard",
      description: "Android app built with React Native for tracking table tennis matches. Created for a school sports event with real-time scoring.",
      tech: ["React Native", "JavaScript", "Mobile"],
      colors: { bg: "from-purple-500 to-pink-500", hover: "hover:border-purple-500/50", text: "text-purple-400 hover:text-purple-300" },
      url: "https://github.com/Augustus1417/Table-Tennis-Scoreboard",
      icon: <span className="text-2xl">🏓</span>
    },
  ];

  const certificates = [
    {
      name: "IT Specialist - Databases",
      url: "https://www.credly.com/badges/0ee28d74-be77-471b-b836-45c749e14d61/public_url",
      issuer: "Certiport",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "IT Specialist - Python",
      url: "https://www.credly.com/badges/6909d1b8-e3dd-4065-9826-b5115cf1d129/public_url",
      issuer: "Certiport",
      color: "from-yellow-500 to-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">

      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <Nav activeSection={activeSection} />

      <Hero/>

      <About/>

      <TechStack techStack={techStack}/>

      <Projects projects={projects}/>

      <Certificates certificates={certificates}/>

      <Setup/>

      <Footer/>
    </div>
  );
};

export default Portfolio;