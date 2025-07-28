import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-white/80'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
            {/* Replace the text "Rian Soe" with your image logo */}
            <img 
              src="/images/RianSoe.png" // Replace with the actual URL of your logo image
              alt="Rian Soe Logo"
              className="h-10 md:h-10" // Adjust height as needed with Tailwind CSS classes
            />
          </Link>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium ${router.asPath === item.href ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} transition-colors`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;