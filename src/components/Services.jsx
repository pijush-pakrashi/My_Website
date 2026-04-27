export default function Services() {
  const services = [
    {
      title: "Backend Development",
      desc: "I build robust, scalable backends using Node.js, Express, and Java. From RESTful APIs to complex TCP transactional systems.",
      icon: "fas fa-server"
    },
    {
      title: "AI & Robotics",
      desc: "Developing autonomous drone systems, computer vision models with OpenCV, and integrating machine learning into hardware.",
      icon: "fas fa-robot"
    },
    {
      title: "Full-Stack Web Apps",
      desc: "Creating end-to-end applications with React.js, Tailwind CSS, and seamless database integrations (MongoDB, PostgreSQL).",
      icon: "fas fa-layer-group"
    },
    {
      title: "Systems Networking",
      desc: "Low-level socket programming, custom client-server architectures, and handling multi-threaded connections.",
      icon: "fas fa-network-wired"
    }
  ]

  return (
    <section id="services" className="py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-mono font-bold text-white mb-12 tracking-wide text-center">
          My <span className="text-primary">Services</span>
        </h2>

        {/* Changed from flex col to a grid and added group hover animations */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((srv, i) => (
            <div 
              key={i} 
              className="service-card p-8 flex flex-col gap-4 relative overflow-hidden group hover:border-primary/40 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(16,185,129,0.05)]"
            >
              {/* Animated Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-[#262626] flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300 z-10">
                <i className={`${srv.icon} text-lg`}></i>
              </div>

              <h3 className="text-2xl font-bold text-white font-mono z-10">{srv.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-sans z-10">
                {srv.desc}
              </p>
              
              {/* Decorative line */}
              <div className="mt-4 w-12 h-1 bg-[#262626] group-hover:w-24 group-hover:bg-primary transition-all duration-500 rounded-full z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
