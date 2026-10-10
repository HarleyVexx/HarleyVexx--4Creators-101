import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Music2, 
  Home, 
  BookOpen, 
  Briefcase,
  Scale,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import GoogleVerification from '@/components/GoogleVerification';

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: 'Home', icon: Home },
    { name: 'Catalog', path: 'Catalog', icon: Music2 },
    { name: 'Courses', path: 'Courses', icon: BookOpen },
    { name: 'Legal', path: 'Legal', icon: Scale },
    { name: 'Pitch', path: 'Pitch', icon: Briefcase },
  ];

  const isActive = (path) => {
    const pagePath = createPageUrl(path);
    return location.pathname === pagePath || location.pathname === pagePath + '/';
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696b23fcc6b052ee58958332/affaad626_Screenshot_20240924_102916_Snapchat.jpg"
          alt="HarleyVexx"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-red-950/80 to-black/90" />
      </div>
      
      <GoogleVerification />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-xl border-b-2 border-red-600/30" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center shadow-lg shadow-red-600/40 border-2 border-red-500/30 group-hover:shadow-red-500/60 transition-all">
                <Music2 className="w-5 h-5 text-red-200" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-red-400 to-red-200 bg-clip-text text-transparent hidden sm:block">
                HarleyVexx
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <Link key={item.path} to={createPageUrl(item.path)}>
                  <Button 
                    variant="ghost" 
                    className={`px-4 py-2 rounded-xl transition-all border-2 ${
                      isActive(item.path)
                        ? 'bg-red-600/30 text-white border-red-500/50 shadow-lg shadow-red-600/20'
                        : 'text-red-200/70 hover:text-white hover:bg-red-600/20 border-transparent hover:border-red-600/30'
                    }`}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-xl border-b-2 border-red-600/30"
              >
              <div className="px-6 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link 
                    key={item.path} 
                    to={createPageUrl(item.path)}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all border-2 ${
                      isActive(item.path)
                        ? 'bg-red-600/30 text-white border-red-500/50'
                        : 'text-red-200/70 hover:text-white hover:bg-red-600/20 border-transparent hover:border-red-600/30'
                    }`}>
                      <item.icon className="w-5 h-5" />
                      {item.name}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-20 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black/60 backdrop-blur-sm border-t-2 border-red-600/30">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="https://on.soundcloud.com/8uxkA023Egyf3umTwc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-950/30 hover:bg-red-900/40 border-2 border-red-600/20 hover:border-orange-500/50 transition-all text-red-100/80 hover:text-white text-sm shadow-lg shadow-black/20">
              <Music2 className="w-4 h-4" />
              SoundCloud
            </a>
            <a href="https://open.spotify.com/artist/346mU45SIZJ7KIiovuGFqZ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-950/30 hover:bg-red-900/40 border-2 border-red-600/20 hover:border-green-500/50 transition-all text-red-100/80 hover:text-white text-sm shadow-lg shadow-black/20">
              <Music2 className="w-4 h-4" />
              Spotify
            </a>
            <a href="https://open.spotify.com/artist/62ikTcuQMlEMKhgsW5SF42" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-950/30 hover:bg-red-900/40 border-2 border-red-600/20 hover:border-green-500/50 transition-all text-red-100/80 hover:text-white text-sm shadow-lg shadow-black/20">
              <Music2 className="w-4 h-4" />
              Spotify Alt
            </a>
            <a href="https://youtube.com/@harleyvexx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-950/30 hover:bg-red-900/40 border-2 border-red-600/20 hover:border-red-500/50 transition-all text-red-100/80 hover:text-white text-sm shadow-lg shadow-black/20">
              <Music2 className="w-4 h-4" />
              YouTube
            </a>
            <a href="https://www.instagram.com/harleyvexx4life" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-950/30 hover:bg-red-900/40 border-2 border-red-600/20 hover:border-pink-500/50 transition-all text-red-100/80 hover:text-white text-sm shadow-lg shadow-black/20">
              <Music2 className="w-4 h-4" />
              Instagram
            </a>
            <a href="https://www.tiktok.com/@thereal.harleyvexx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-950/30 hover:bg-red-900/40 border-2 border-red-600/20 hover:border-purple-500/50 transition-all text-red-100/80 hover:text-white text-sm shadow-lg shadow-black/20">
              <Music2 className="w-4 h-4" />
              TikTok
            </a>
            <a href="https://x.com/JadaSmith376901" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-950/30 hover:bg-red-900/40 border-2 border-red-600/20 hover:border-blue-500/50 transition-all text-red-100/80 hover:text-white text-sm shadow-lg shadow-black/20">
              <Music2 className="w-4 h-4" />
              X/Twitter
            </a>
            <a href="https://www.facebook.com/share/1C5z8o2nW8/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-950/30 hover:bg-red-900/40 border-2 border-red-600/20 hover:border-blue-600/50 transition-all text-red-100/80 hover:text-white text-sm shadow-lg shadow-black/20">
              <Music2 className="w-4 h-4" />
              Facebook
            </a>
            <a href="https://link.deezer.com/s/32cl4YiFmXavVKVZoqgkE" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-950/30 hover:bg-red-900/40 border-2 border-red-600/20 hover:border-amber-500/50 transition-all text-red-100/80 hover:text-white text-sm shadow-lg shadow-black/20">
              <Music2 className="w-4 h-4" />
              Deezer
            </a>
            <a href="https://vip.covergirl.maxim.com/p/X27SHTA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-950/30 hover:bg-red-900/40 border-2 border-red-600/20 hover:border-rose-500/50 transition-all text-red-100/80 hover:text-white text-sm shadow-lg shadow-black/20">
              <Music2 className="w-4 h-4" />
              Maxim
            </a>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-700 to-red-900 border-2 border-red-500/40 flex items-center justify-center">
                <Music2 className="w-4 h-4 text-red-200" />
              </div>
              <span className="text-white font-bold">HarleyVexx</span>
            </div>

            <p className="text-red-300/60 text-sm text-center">
              57M+ Streams | 100% Owned & Self-Built | EIN Verified
            </p>

            {/* Copyright & License */}
            <div className="text-center max-w-4xl">
              <p className="text-red-300/60 text-xs leading-relaxed">
                <a href="https://app.base44.com/apps/696b23fcc6b052ee58958332/editor/preview" className="hover:text-red-200 transition-colors">
                  HarleyVexx & HarleyVexx-4Creators'101
                </a>
                {' '}© {new Date().getFullYear()} by{' '}
                <a href="https://on.soundcloud.com/8uxkA023Egyf3umTwc" target="_blank" rel="noopener noreferrer" className="hover:text-red-200 transition-colors">
                  Jada Marie Smith
                </a>
                {' '}is licensed under{' '}
                <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer" className="hover:text-red-200 transition-colors">
                  Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International
                </a>
              </p>
              <div className="flex items-center justify-center gap-1 mt-2">
                <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="CC" className="w-4 h-4 opacity-80" />
                <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="BY" className="w-4 h-4 opacity-80" />
                <img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="NC" className="w-4 h-4 opacity-80" />
                <img src="https://mirrors.creativecommons.org/presskit/icons/nd.svg" alt="ND" className="w-4 h-4 opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
