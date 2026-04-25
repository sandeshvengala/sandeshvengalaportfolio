import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Resume', to: '/resume' },
  { label: 'Projects', to: '/projects' },
  //{ label: 'Contact', to: '/contact' }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('portfolio-theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/70 backdrop-blur-xl transition dark:border-paper/10 dark:bg-ink/70">
      <nav className="mx-auto flex w-[min(1120px,92vw)] items-center justify-between py-3.5">
        <Link to="/" className="font-display text-[1.85rem] leading-none tracking-tight">
          {/* Sandesh Vengala */}
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-ink/10 bg-white/75 px-3 py-2 dark:border-paper/10 dark:bg-ink/40 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.17em] transition ${
                  isActive ? 'bg-accent/10 text-accent' : 'hover:text-accent'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 bg-white/70 transition hover:border-accent hover:text-accent dark:border-paper/20 dark:bg-ink/45 md:hidden"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span className="relative h-4 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  mobileOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  mobileOpen ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>

          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 bg-white/70 transition hover:border-accent hover:text-accent dark:border-paper/20 dark:bg-ink/45"
            type="button"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2.4M12 19.6V22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2 12h2.4M19.6 12H22M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M20.2 15.4A8.8 8.8 0 1 1 8.6 3.8a7.4 7.4 0 1 0 11.6 11.6Z" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-ink/10 bg-paper/95 shadow-lg backdrop-blur-sm dark:border-paper/10 dark:bg-ink/95 md:hidden"
          >
            <motion.div
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mx-auto flex w-[min(1120px,92vw)] flex-col gap-1 py-4"
            >
              <p className="px-1 pb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Menu</p>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ y: -6, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -6, opacity: 0 }}
                  transition={{ duration: 0.16, delay: index * 0.03 }}
                >
                  <NavLink
                    to={item.to}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-lg px-2 py-3 text-[15px] font-semibold uppercase tracking-[0.14em] transition ${
                        isActive
                          ? 'text-accent'
                          : 'text-ink/85 hover:text-accent dark:text-paper/85'
                      }`
                    }
                  >
                    <span>{item.label}</span>
                    <span className="text-accent/60">/</span>
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
