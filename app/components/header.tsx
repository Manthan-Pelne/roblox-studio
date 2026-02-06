"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { 
  Search, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Send, 
  Twitter, 
  ChevronDown, 
  Info, 
  User, 
  HelpCircle,
  LayoutGrid,
  Compass,
  Loader2
} from 'lucide-react';

const Header = ({ categories = [] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { theme, setTheme } = useTheme();

  // Handle Search Logic
  const handleSearch = useCallback(async (query: string) => {
    if (!query) {
      setSearchResults("");
      return;
    }
    setIsSearching(true);
    try {
      const response = await fetch(`/search-query/?q=${encodeURIComponent(query)}`);
      const html = await response.text();
      setSearchResults(html);
    } catch (error) {
      console.error("Search fetch failed", error);
    } finally {
      setIsSearching(false);
    }
  }, []);

  // Debounce effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery) handleSearch(searchQuery);
    }, 600);
    return () => clearTimeout(timer);
  }, [searchQuery, handleSearch]);

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults("");
  };

  return (
    <>
      <header className=" px-5 py-3 sticky top-0 bg-white w-full dark:bg-zinc-900 z-20">
        <div className="flex items-center gap-2 justify-between">
          
          {/* Mobile Logo */}
          <Link href="/" className="sm:hidden font-extrabold text-lg md:text-xl dark:text-white flex items-center gap-1 shrink-0 mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
              <path fill="#c73f27" d="M12 12.3L3.5 7.05L12 1.8l8.5 5.25z"/>
              <path fill="#ffb4cd" d="M12 22.2v-9.9l8.5-5.25v9.9z" opacity="0.25"/>
              <path fill="#ffb4cd" d="m12 22.2l-8.5-5.25v-9.9L12 12.3z" opacity="0.5"/>
            </svg> 
            Roblox <span className="text-primary">Studio.</span>
          </Link>

          {/* Desktop Left Actions */}
         <div></div>

          {/* Search Bar - Desktop & Mobile Slide-in */}
          <div className={`
            fixed top-0 left-0 w-full z-[100] p-2 md:p-0 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md transition-transform duration-300
            md:static md:translate-x-0 md:bg-transparent md:max-w-md md:mx-8
            ${isSearchOpen ? 'translate-x-0' : '-translate-x-full'}
          `}>
            <div className="w-full relative">
              <div className="relative flex items-center bg-white dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 hover:shadow-md transition-shadow">
                <input 
                  type="text" 
                  placeholder="Search assets..." 
                  className="w-full py-2 px-6 bg-transparent rounded-full focus:outline-none dark:text-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="hidden md:flex absolute right-2 p-1.5 bg-primary text-white rounded-full">
                  <Search size={16} />
                </button>
                <button onClick={closeSearch} className="md:hidden absolute right-2 p-1.5 bg-primary text-white rounded-full">
                  <X size={16} />
                </button>
              </div>

              {/* Search Results Dropdown */}
              {searchQuery && (
                <div className="absolute left-0 mt-2 w-full max-h-96 overflow-y-auto bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-2xl z-50">
                  <div className="p-4">
                    {isSearching ? (
                      <div className="flex items-center justify-center py-4 gap-2 text-sm text-zinc-500">
                        <Loader2 className="animate-spin" size={18} /> Searching...
                      </div>
                    ) : (
                      <div dangerouslySetInnerHTML={{ __html: searchResults }} />
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="md:hidden flex items-center gap-1">
              <button onClick={() => setIsSearchOpen(true)} className="p-2 text-zinc-600 dark:text-zinc-300">
                <Search size={20} />
              </button>
              <button onClick={() => setIsMenuOpen(true)} className="p-2 text-zinc-600 dark:text-zinc-300">
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu Overlay */}
      <div className={`
        fixed inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-sm z-[150] transition-transform duration-500
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-5 right-5 p-2">
          <X size={28} />
        </button>

        <div className="flex flex-col h-full p-8 overflow-y-auto">
          <Link href="/" className="font-extrabold text-2xl flex items-center gap-2 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="#E45137" d="M12 12.3L3.5 7.05L12 1.8l8.5 5.25z" />
            </svg>
            Roblox <span className="text-[#E45137]">Studio.</span>
          </Link>

          <nav className="space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Navigation</p>
              <div className="grid gap-2">
                <MobileNavLink href="/" icon={<LayoutGrid size={20}/>} label="Collections" />
                <MobileNavLink href="/explore" icon={<Compass size={20}/>} label="Explore" isNew />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Categories</p>
                <ChevronDown size={14} />
              </div>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((cat: any) => (
                  <Link key={cat.slug} href={`/categories/${cat.slug}`} className="text-sm py-2 px-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 capitalize">
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <div className="grid gap-2">
                <MobileNavLink href="/about" icon={<Info size={20}/>} label="About" />
                <MobileNavLink href="/contact" icon={<User size={20}/>} label="Contact" />
                <MobileNavLink href="/faq" icon={<HelpCircle size={20}/>} label="FAQ" />
                <Link href="/explore" className="w-full py-4 bg-primary text-white text-center font-bold rounded-xl mt-4">
                  Get Started
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

// Sub-component for mobile links
const MobileNavLink = ({ href, icon, label, isNew = false }: any) => (
  <Link href={href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors relative">
    {icon}
    <span className="font-medium">{label}</span>
    {isNew && <span className="ml-auto text-[10px] bg-red-500 text-white px-2 py-0.5 rounded-full font-bold">NEW</span>}
  </Link>
);

export default Header;