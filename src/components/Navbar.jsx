import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  const getLinkClasses = (linkPath) => {
    const isActive = path === linkPath;
    return `relative transition-colors group pb-1 ${isActive ? 'text-primary animate-pulse font-bold' : 'text-white hover:text-primary'}`;
  }
  return (
    <nav className="w-full py-6 px-6 lg:px-16 flex justify-between items-center bg-[#0a0a0a] border-b border-transparent">
      {/* Left: Logo */}
      <Link to="/" className="text-2xl font-bold font-mono text-white tracking-wide hover:opacity-80 transition-opacity">
        <span className="text-primary">P</span>ijush
      </Link>
      
      {/* Center: Links (Hidden on small screens) */}
      <div className="hidden md:flex gap-8 text-sm font-mono tracking-wide">
        <Link to="/" className={getLinkClasses('/')}>
          Home
          <span className={`absolute left-0 bottom-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${path === '/' ? 'scale-x-100 bg-primary' : ''}`}></span>
        </Link>
        <Link to="/about" className={getLinkClasses('/about')}>
          About
          <span className={`absolute left-0 bottom-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${path === '/about' ? 'scale-x-100 bg-primary' : ''}`}></span>
        </Link>
        <Link to="/work" className={getLinkClasses('/work')}>
          Work
          <span className={`absolute left-0 bottom-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${path === '/work' ? 'scale-x-100 bg-primary' : ''}`}></span>
        </Link>
        <Link to="/contact" className={getLinkClasses('/contact')}>
          Contact
          <span className={`absolute left-0 bottom-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${path === '/contact' ? 'scale-x-100 bg-primary' : ''}`}></span>
        </Link>
      </div>

      {/* Right: Social & Button */}
      <div className="hidden md:flex items-center gap-6">
        <div className="flex gap-4 text-white text-sm">
          <a href="https://github.com/pijush-pakrashi" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/गुru๛-pijush" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="hover:text-primary transition-colors"><i className="fab fa-x-twitter"></i></a>
        </div>
        <Link to="/contact" className="px-5 py-2 border border-[#262626] text-white font-mono text-sm rounded-lg hover:bg-white hover:text-black transition-colors">
          Let's Talk
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <button className="md:hidden text-white hover:text-primary transition-colors">
        <i className="fas fa-bars text-xl"></i>
      </button>
    </nav>
  )
}
