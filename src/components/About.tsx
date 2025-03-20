
import React from 'react';
import { Award, Code, FileText } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-darkBg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-sm uppercase tracking-wider text-highlight/80 mb-2">Who I Am</span>
          <h2 className="section-heading">About Me</h2>
        </div>
        
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7 animate-fade-in">
            <p className="text-darkSubtle leading-relaxed mb-6">
              I am a dedicated QA Automation Engineer with over 3 years of experience specializing in test automation and quality assurance. My expertise encompasses comprehensive testing strategies including end-to-end, smoke, regression, and integration testing, along with automation using Selenium with Java, API testing, and basic database testing.
            </p>
            <p className="text-darkSubtle leading-relaxed mb-6">
              Driven by a passion for ensuring software quality, I continuously expand my technical knowledge and stay current with emerging QA technologies and best practices.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="glass-card p-5 rounded-lg flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-highlight/10 mb-3">
                  <Award className="text-highlight" size={24} />
                </div>
                <h3 className="font-semibold text-darkText mb-1">Experience</h3>
                <p className="text-sm text-darkSubtle">3+ Years</p>
              </div>
              
              <div className="glass-card p-5 rounded-lg flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-highlight/10 mb-3">
                  <Code className="text-highlight" size={24} />
                </div>
                <h3 className="font-semibold text-darkText mb-1">Projects</h3>
                <p className="text-sm text-darkSubtle">500+ Test Scripts</p>
              </div>
              
              <div className="glass-card p-5 rounded-lg flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-highlight/10 mb-3">
                  <FileText className="text-highlight" size={24} />
                </div>
                <h3 className="font-semibold text-darkText mb-1">Test Coverage</h3>
                <p className="text-sm text-darkSubtle">80%+ Automation</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-highlight/30 to-highlight/10 blur"></div>
              <div className="relative overflow-hidden rounded-xl glass-card">
                <img 
                  src="/lovable-uploads/78f5b82e-3e33-42d6-88b7-19e9ab441c89.png" 
                  alt="Danijel Dragojevic" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
