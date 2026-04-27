import React, { useState } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Python', 'AI', 'Backend', 'FullStack', 'React JS'];
  
  const projects = [
    {
      title: "Autonomous Drone System",
      desc: "An AI-powered drone control application using Python, OpenCV, and machine learning for real-time object detection.",
      category: "AI",
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=400&h=200&fit=crop"
    },
    {
      title: "TCP Transaction Engine",
      desc: "A complex three-tier transactional system featuring COMMIT/ROLLBACK logic built with Python socket programming.",
      category: "Python",
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&h=200&fit=crop"
    },
    {
      title: "AgriMarket Platform",
      desc: "A full-stack e-commerce web application with real-time delivery tracking and UPI integrations.",
      category: "FullStack",
      github: "https://github.com/pijush-pakrashi/FarmNest.git",
      live: "https://farmnest.netlify.app/",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=400&h=200&fit=crop"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="py-16 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map(f => (
            <button 
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full font-mono text-sm font-bold transition-colors ${
                activeFilter === f 
                  ? 'bg-primary text-black' 
                  : 'bg-[#121212] text-white hover:bg-[#262626]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj, i) => (
            <div 
              key={i} 
              className="service-card p-5 flex flex-col gap-4 group hover:border-primary/40 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(16,185,129,0.05)] relative overflow-hidden"
            >
              {/* Animated Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Image */}
              <div className="w-full h-48 rounded-xl overflow-hidden bg-[#0a0a0a] z-10">
                <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              
              <h3 className="text-lg font-bold text-white font-mono mt-2">{proj.title}</h3>
              
              <p className="text-xs text-gray-400 font-mono leading-relaxed flex-1">
                {proj.desc}
              </p>
              
              <div className="flex gap-4 mt-4">
                <a href={proj.github} className="px-4 py-2 rounded-full border border-[#262626] text-white text-xs font-mono hover:bg-[#262626] transition-colors">
                  GitHub link
                </a>
                <a href={proj.live} className="px-4 py-2 rounded-full border border-[#262626] text-white text-xs font-mono hover:bg-[#262626] transition-colors">
                  Live link
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
