import React from 'react';

export default function Skills() {
  const techStack = [
    { name: "Python", icon: "fab fa-python text-yellow-400" },
    { name: "React.js", icon: "fab fa-react text-blue-400" },
    { name: "Node.js", icon: "fab fa-node-js text-green-500" },
    { name: "Django", icon: "fas fa-code text-green-700" },
    { name: "MongoDB", icon: "fas fa-leaf text-green-400" },
    { name: "PostgreSQL", icon: "fas fa-database text-blue-300" },
    { name: "Git", icon: "fab fa-git-alt text-orange-600" },
    { name: "Docker", icon: "fab fa-docker text-blue-500" },
    { name: "AWS", icon: "fab fa-aws text-orange-400" },
    { name: "Linux", icon: "fab fa-linux text-white" }
  ]

  return (
    <section id="skills" className="py-16 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        <h2 
          className="text-3xl md:text-4xl font-mono font-bold mb-12 text-center md:text-left inline-block"
          style={{ animation: 'float 4s ease-in-out infinite' }}
        >
          <span className="text-white">Featured</span> <br />
          <span className="text-primary">Tech Stack</span>
        </h2>

        {/* Grid with animation classes added */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {techStack.map((tech, i) => (
            <div 
              key={i} 
              className="tech-card p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(16,185,129,0.1)] group relative overflow-hidden"
              style={{ animation: `float 3s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <i className={`${tech.icon} text-3xl md:text-4xl transform group-hover:scale-110 transition-transform duration-300`}></i>
              <span className="text-xs font-mono text-gray-300 group-hover:text-white transition-colors">{tech.name}</span>
            </div>
          ))}
        </div>

      </div>
      
      {/* Adding the keyframes directly in the component for the float animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
      `}} />
    </section>
  )
}
