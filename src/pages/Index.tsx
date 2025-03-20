import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { toast } from "sonner";
import { ArrowDown, X } from "lucide-react";

const Index = () => {
  useEffect(() => {
    setTimeout(() => {
      toast.custom((t) => (
        <div className="relative flex w-full max-w-md flex-col items-start gap-3 rounded-lg border border-white/10 bg-darkCard p-6 shadow-lg">
          {/* Success Icon and Title */}
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-green-500/20 p-1">
                <svg
                  className="h-4 w-4 text-green-500"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="font-semibold text-darkText">
                Welcome to my portfolio!
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => toast.dismiss(t)}
              className="absolute -right-2 -top-2 rounded-full border-2 border-darkCard bg-white p-1.5 text-darkBg shadow-lg transition-all hover:bg-gray-100"
            >
              <X className="h-4 w-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Description */}
          <p className="text-sm text-darkSubtle">
            Feel free to explore and reach out if you have any questions.
          </p>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 h-1 w-full overflow-hidden rounded-b-lg">
            <div
              className="h-full bg-highlight/30"
              style={{
                animation: "progress 5s linear forwards",
                width: "100%",
              }}
            />
          </div>
        </div>
      )),
        {
          duration: 5000,
        };
    }, 1500);
  }, []);

  return (
    <div className="min-h-screen bg-darkBg text-darkText">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="h-screen relative flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-darkBg to-darkCard -z-10"></div>
        <div className="absolute inset-0 overflow-hidden -z-20">
          <div className="absolute -inset-[10%] opacity-30">
            {/* Animation pattern */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-highlight/20 rounded-full filter blur-[100px] animate-pulse"></div>
            <div
              className="absolute top-1/3 right-1/4 w-64 h-64 bg-highlight/10 rounded-full filter blur-[80px] animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p
              className="text-highlight tracking-wider uppercase text-sm mb-2 animate-fade-in opacity-0"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              QA Automation Engineer
            </p>

            <h1
              className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in opacity-0"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              Hi, I'm <span className="text-highlight">Danijel Dragojevic</span>
            </h1>

            <p
              className="text-xl text-darkSubtle mb-8 leading-relaxed animate-fade-in opacity-0"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              Specializing in automated testing solutions with Selenium and Java
              to ensure exceptional software quality
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-highlight text-darkBg font-medium rounded-lg hover:bg-highlight/90 transition-colors"
              >
                Contact Me
              </a>

              <a
                href="#about"
                className="px-8 py-3 border border-white/10 text-darkText rounded-lg hover:border-highlight/50 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-darkSubtle hover:text-highlight transition-colors animate-bounce"
          style={{ animationDuration: "2s" }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </section>

      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

// Add this to your global CSS file (src/index.css)
const styles = `
@keyframes progress {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
`;

// Add the styles to the document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Index;
