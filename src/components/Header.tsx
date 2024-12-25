import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link } from './Link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 px-6 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-grow">
          <Link href="/" className="brand">
            <img src="/images/logo-links-webflow-template.svg" alt="Links X Template - Logo" className="h-8" />
          </Link>
        </div>
        
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row items-center gap-6">
            <li>
              <Link href="/homes/youtuber">Home</Link>
            </li>
            <li className="relative group">
              <button className="flex items-center gap-1">
                Pages <span className="ml-1">▼</span>
              </button>
              <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 w-64">
                <div className="grid gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Homes</h3>
                    <ul className="space-y-2">
                      <li><Link href="/homes/youtuber">YouTuber</Link></li>
                      <li><Link href="/homes/substack">Substack</Link></li>
                      <li><Link href="/homes/instagram">Instagram</Link></li>
                      {/* Add other home links */}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link 
                href="https://webflow.com/templates/html/links-x-app-website-template" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Buy template
              </Link>
            </li>
          </ul>
        </nav>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}