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
import { ThemeToggle } from './themeToggle';
import { SearchResultCard } from './searchResultCard';
import { searchCards } from '../actions/searchAction';

const Header = ({ categories = [] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Handle Search Logic
useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchQuery.length >= 2) {
        setIsSearching(true);
        const results = await searchCards(searchQuery);
        setSearchResults(results);
        setIsSearching(false);
      } else {
        setSearchResults([]);
      }
    }, 400); // 400ms is usually the sweet spot for UX

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  return (
    <>
      <header className=" px-5 py-3 sticky top-0 bg-white w-full dark:bg-transparent z-20">
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

       {/* Desktop Search Wrapper */}
        <div className="relative w-full max-w-md mx-auto mt-1">
          <div className="relative flex items-center bg-[#FAFAFA] dark:bg-zinc-800 rounded-full border focus-within:border-secondary dark:focus-within:border-secondary/70 active:shadow focus-within:shadow transition-all duration-200">
            <Search size={18} className="ml-4 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Search assets..." 
              className="w-full py-2 px-3 bg-transparent font-semibold placeholder:font-black placeholder:italic focus:outline-none placeholder:text-muted-foreground/50 dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="mr-2 p-1">
                <X size={14} className="text-zinc-400" />
              </button>
            )}
          </div>

          {/* Results Dropdown */}
          {searchQuery.length >= 2 && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl overflow-hidden z-[100]">
              <div className="p-2 max-h-[400px] overflow-y-auto">
                {isSearching ? (
                  <div className="flex items-center justify-center py-8 text-zinc-500 gap-2">
                    <Loader2 className="animate-spin" size={20} />
                    <span className="text-sm">Searching...</span>
                  </div>
                ) : searchResults.length > 0 ? (
                  searchResults.map((card: any) => (
                    <SearchResultCard
                      key={card._id} 
                      card={card} 
                      onClick={() => setSearchQuery("")} 
                    />
                  ))
                ) : (
                  <div className="py-8 text-center text-sm text-zinc-500">
                    No assets found for "{searchQuery}"
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle/>
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