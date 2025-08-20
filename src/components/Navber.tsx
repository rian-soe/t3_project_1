import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm' : 'bg-white/80 dark:bg-gray-900/80'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {/* Replace the text "Rian Soe" with your image logo */}
            <img 
              src="/images/RianSoe.png"
              alt="Rian Soe Logo"
              className="w-10 h-10 rounded-full object-cover shadow-md"
            />

          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium ${router.asPath === item.href ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'} transition-colors`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>
          {/* Mobile theme toggle */}
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;