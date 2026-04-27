import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "I'm Backend Developer | Python & APIs",
    "I'm Python Developer | Flask • Django • REST APIs",
    "I'm Full Stack Developer | Python & JavaScript",
    "I'm AI & Python Developer",
    "I'm Python Developer | Data & Automation",
    "Hey ..",
    "How are you..?"
  ];
  
  useEffect(() => {
    let timer;
    const currentRole = roles[loopNum % roles.length];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }, 50); // Speed of deleting
    } else {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, text.length + 1));
        if (text.length === currentRole.length) {
          // Pause at the end before deleting
          timer = setTimeout(() => setIsDeleting(true), 1500);
        }
      }, 100); // Speed of typing
    }
    
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <section id="home" className="pt-24 pb-32 px-6 lg:px-16 flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center gap-4 max-w-4xl mx-auto z-10">
        <h3 className="text-gray-400 font-mono text-xl tracking-wide mb-2">
          Welcome To My World
        </h3>
        
        <h1 className="text-5xl sm:text-7xl font-bold text-white mb-2 font-sans tracking-tight">
          I'm Pijush
        </h1>

        {/* Three colored circles */}
        <div className="flex gap-3 mb-4 my-2">
          <div className="w-6 h-6 rounded-full border-[3px] border-pink-500"></div>
          <div className="w-6 h-6 rounded-full border-[3px] border-red-500"></div>
          <div className="w-6 h-6 rounded-full border-[3px] border-yellow-500"></div>
        </div>

        {/* Typing effect */}
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-primary mb-12 min-h-[50px] md:min-h-[60px] flex items-center justify-center">
          {text}<span className="animate-pulse">_</span>
        </div>

        {/* Download Resume Button */}
        <a href="/resume.pdf" download="Pijush_Pakrashi_Resume.pdf" className="px-8 py-3 bg-primary text-black font-bold font-mono rounded-full hover:scale-105 transition-transform duration-300 inline-block text-center cursor-pointer">
          Download Resume
        </a>
      </div>
    </section>
  )
}
