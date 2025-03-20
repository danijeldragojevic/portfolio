import React from "react";
import { Github, Linkedin } from "lucide-react";
import { GitLabIcon } from "./icons/GitLabIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-darkBg border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <a href="#home" className="text-2xl font-bold text-darkText">
              <span className="highlight-text">Danijel</span> Dragojevic
            </a>
            <p className="text-sm text-darkSubtle mt-2">
              QA Automation Engineer
            </p>
          </div>

          <div className="flex space-x-4 mb-6 md:mb-0">
            <a
              href="https://www.linkedin.com/in/danijel-dragojevic-71636a239/"
              className="w-10 h-10 rounded-full bg-darkCard flex items-center justify-center text-darkSubtle hover:text-highlight transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/danijeldragojevic"
              className="w-10 h-10 rounded-full bg-darkCard flex items-center justify-center text-darkSubtle hover:text-highlight transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://gitlab.com/danijeldragojevic"
              className="w-10 h-10 rounded-full bg-darkCard flex items-center justify-center text-darkSubtle hover:text-highlight transition-colors"
              aria-label="GitLab"
            >
              <GitLabIcon size={18} />
            </a>
          </div>

          <div className="text-sm text-darkSubtle text-center md:text-right">
            <p>&copy; {currentYear} Danijel Dragojevic. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
