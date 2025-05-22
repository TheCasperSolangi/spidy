'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services',
      submenu: [
        { name: 'Web Development', href: '/services/web_development' },
        { name: 'Mobile Apps', href: '/services/mobile_apps' },
        { name: 'Penetration Testing', href: '#', comingSoon: true },
        { name: 'Cloud Solutions', href: '#', comingSoon: true }
      ]
    },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-md' : 'py-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">S</div>
          <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Spidy<span className="text-blue-600 dark:text-blue-400">Softs</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.submenu ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                  {item.name} <ChevronDown size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border-0">
                  {item.submenu.map((subItem) => (
                    <a key={subItem.name} href={subItem.href} className="w-full">
                      <DropdownMenuItem className="cursor-pointer font-medium hover:bg-gray-100 dark:hover:bg-gray-700">
                        {subItem.comingSoon ? (
                          <span className="flex items-center justify-between w-full">
                            {subItem.name} <span className="text-xs ml-2 text-orange-500">(Coming Soon)</span>
                          </span>
                        ) : subItem.name}
                      </DropdownMenuItem>
                    </a>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <a key={item.name} href={item.href} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors relative group">
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            )
          )}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
        
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 rounded-full shadow-lg hover:shadow-xl transition-all">
            <a href="/contact" className="text-white no-underline">Contact Us</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <button onClick={() => setDarkMode(!darkMode)} className="text-gray-700 dark:text-gray-200 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} className="text-blue-600 dark:text-blue-400" /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg lg:hidden border-t border-gray-200 dark:border-gray-700 animate-slideDown">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <div key={item.name} className="flex flex-col">
                <a href={item.href} className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors">
                  <div className="flex items-center justify-between">
                    {item.name}
                    {item.submenu && <ChevronDown size={16} />}
                  </div>
                </a>
                {item.submenu && (
                  <div className="ml-4 mt-1 flex flex-col space-y-2 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 py-1"
                      >
                        {subItem.comingSoon ? (
                          <span className="flex items-center justify-between">
                            {subItem.name} <span className="text-xs text-orange-500 ml-2">(Coming Soon)</span>
                          </span>
                        ) : subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2 mt-2 border-t border-gray-200 dark:border-gray-700">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg">
                <a href="/contact" className="text-white no-underline w-full block">Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}