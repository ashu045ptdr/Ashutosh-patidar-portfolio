import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-2xl shadow-2xl shadow-purple-900/20 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-xl font-bold text-zinc-50">
          <Code2 className="text-sky-500" />
          <span>Ashutosh</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-sm font-medium text-zinc-400 hover:text-sky-400 transition-colors bg-zinc-800/30 px-4 py-2 rounded-full border border-white/5 hover:bg-zinc-800/80">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a href="mailto:ashupatidar1432@gmail.com" className="hidden md:flex items-center justify-center bg-gradient-to-r from-sky-500 to-purple-500 text-white px-6 py-2.5 rounded-full font-medium shadow-lg hover:scale-105 hover:-translate-y-0.5 transition-all">
          Let's Talk
        </a>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-zinc-50 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 p-4 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="block text-zinc-200 font-medium hover:text-sky-400 p-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
