import React from 'react';

export default function Experience() {
  const experiences = [
    {
      role: "Backend & Systems Developer",
      project: "Transactional TCP System",
      duration: "2023 - Present",
      desc: "Architected a three-tier TCP client-server system featuring COMMIT/ROLLBACK logic, timeouts, and custom acknowledgment protocols using Python."
    },
    {
      role: "Full-Stack Engineer",
      project: "AgriMarket E-Commerce",
      duration: "2023",
      desc: "Built a quick-commerce platform using React, Node.js, and MongoDB. Integrated real-time delivery tracking and Razorpay UPI payments."
    },
    {
      role: "AI / Robotics Programmer",
      project: "Autonomous Drone Control",
      duration: "2022 - 2023",
      desc: "Developed machine learning pipelines using Python and OpenCV for real-time object detection and autonomous waypoint navigation."
    }
  ]

  return (
    <section id="experience" className="py-16 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <h2 
          className="text-3xl font-mono font-bold text-primary mb-12 tracking-wide text-center md:text-left inline-block"
          style={{ animation: 'float 4s ease-in-out infinite' }}
        >
          Experience
        </h2>

        <div className="flex flex-col gap-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#262626] before:to-transparent">
          {experiences.map((exp, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-[#0a0a0a] text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 hover:scale-110 transition-transform">
                <i className="fas fa-briefcase text-xs"></i>
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] service-card p-6 hover:border-primary/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(16,185,129,0.05)] transition-all duration-300">
                <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between mb-2">
                  <h3 className="font-bold text-white font-mono">{exp.role}</h3>
                  <span className="text-xs text-primary font-mono mt-1 xl:mt-0">{exp.duration}</span>
                </div>
                <h4 className="text-sm font-semibold text-gray-300 mb-3">{exp.project}</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
