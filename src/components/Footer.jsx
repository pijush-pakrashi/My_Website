import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 lg:px-12 mt-12 bg-[#0a0a0a] border-t border-[#262626]">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between gap-12 sm:gap-6">
        
        {/* Column 1: Pages */}
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <h4 className="text-primary font-mono font-bold tracking-wide mb-2">Pages</h4>
          <Link to="/" className="text-gray-400 hover:text-white font-mono text-sm transition-colors">Home</Link>
          <Link to="/about" className="text-gray-400 hover:text-white font-mono text-sm transition-colors">About</Link>
          <Link to="/work" className="text-gray-400 hover:text-white font-mono text-sm transition-colors">Work</Link>
        </div>

        {/* Column 2: Legal */}
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <h4 className="text-primary font-mono font-bold tracking-wide mb-2">Legal</h4>
          <a href="#" className="text-gray-400 hover:text-white font-mono text-sm transition-colors">Terms</a>
          <a href="#" className="text-gray-400 hover:text-white font-mono text-sm transition-colors">Privacy</a>
        </div>

        {/* Column 3: Socials */}
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <h4 className="text-primary font-mono font-bold tracking-wide mb-2">Socials</h4>
          <a href="https://github.com/pijush-pakrashi" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white font-mono text-sm transition-colors">Github</a>
          <a href="#" className="text-gray-400 hover:text-white font-mono text-sm transition-colors">Twitter</a>
          <a href="https://www.linkedin.com/in/गुru๛-pijush" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white font-mono text-sm transition-colors">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-white font-mono text-sm transition-colors">YouTube</a>
        </div>

      </div>
    </footer>
  )
}
