export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-16 flex flex-col items-center text-center">
      {/* Avatar */}
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden mb-6 mx-auto bg-[#121212]">
        <img src="/personal-photo.png" alt="Pijush" className="w-full h-full object-cover" />
      </div>

      {/* Name */}
      <h2 className="text-3xl font-bold font-mono text-white mb-3 tracking-wide">
        Mr_<span className="text-primary">Pijush</span>
      </h2>

      {/* Location */}
      <div className="flex items-center justify-center gap-2 text-gray-300 font-mono text-sm mb-8">
        <i className="fas fa-location-dot"></i>
        <span>kolkata, West Bengal - 700105</span>
      </div>

      {/* Text */}
      <p className="max-w-4xl mx-auto text-gray-400 font-mono text-sm md:text-base leading-loose">
        "I'm a Python Developer and B.Tech CSE student passionate about building scalable backend systems, working with AI & autonomous robotics, and crafting seamless web experiences. I enjoy solving complex problems with clean Python code, exploring machine learning tools, and contributing to open-source projects. Always curious and eager to learn, I thrive in collaborative environments that challenge me to grow."
      </p>
    </section>
  )
}
