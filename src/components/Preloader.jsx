import React, { useState, useEffect } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col items-center justify-center animate-fadeOut">
      <div className="text-4xl md:text-5xl lg:text-7xl font-bold text-white font-mono tracking-wide flex gap-3 md:gap-5">
        <span className="inline-block animate-[slideUp_0.6s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.2s' }}>Hey</span>
        <span className="inline-block animate-[slideUp_0.6s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.6s' }}>I'm</span>
        <span className="text-primary inline-block animate-[slideUp_0.6s_ease-out_forwards] opacity-0" style={{ animationDelay: '1.0s' }}>PIJUSH</span>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}} />
    </div>
  );
}
