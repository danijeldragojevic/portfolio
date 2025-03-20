import React, { useState } from "react";
import { Github, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", text: "About" },
    { href: "#experience", text: "Experience" },
    { href: "#skills", text: "Skills" },
    { href: "#projects", text: "Projects" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <>
      <header className="w-full bg-darkBg/80 backdrop-blur-sm border-b border-white/10 fixed top-0 left-0 z-[100]">
        <div className="container mx-auto px-4 h-16">
          <nav className="h-full flex items-center justify-between">
            {/* Left navigation links */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.slice(0, Math.ceil(navLinks.length / 2)).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-darkSubtle hover:text-highlight transition-colors nav-link"
                >
                  {link.text}
                </a>
              ))}
            </div>

            {/* Centered GitHub button */}
            <div className="flex-shrink-0 mx-4">
              <a
                href="https://github.com/danijeldragojevic/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-darkCard rounded-full hover:bg-darkCard/80 transition-colors group relative z-[101] cursor-pointer"
                aria-label="View project on GitHub"
              >
                <Github
                  size={20}
                  className="text-darkSubtle group-hover:text-highlight transition-colors"
                />
                <span className="text-sm font-medium text-darkSubtle group-hover:text-highlight transition-colors hidden sm:inline">
                  View on GitHub
                </span>
                <span className="text-sm font-medium text-darkSubtle group-hover:text-highlight transition-colors sm:hidden">
                  GitHub
                </span>
              </a>
            </div>

            {/* Right navigation links */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.slice(Math.ceil(navLinks.length / 2)).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-darkSubtle hover:text-highlight transition-colors nav-link"
                >
                  {link.text}
                </a>
              ))}
            </div>

            {/* Mobile menu button - shown on small screens */}
            <button className="md:hidden text-darkSubtle hover:text-highlight">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-darkBg/95 z-[200] md:hidden">
          <div className="container mx-auto px-4 py-6">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-5 right-5 text-darkSubtle hover:text-highlight"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col items-center gap-6 mt-16">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-darkSubtle hover:text-highlight transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
