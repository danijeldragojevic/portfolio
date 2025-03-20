
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "QA Automation Engineer",
      company: "Dwelt Software",
      period: "January 2022 - Present · 3 years 3 months",
      location: "Banja Luka, Bosnia and Herzegovina",
      type: "Full-time",
      responsibilities: [
        "Designed and implemented comprehensive automated testing frameworks using Selenium WebDriver and Java, achieving 80% test coverage for critical business functionalities",
        "Developed and executed end-to-end test scenarios covering complete user journeys and business workflows",
        "Maintained robust E2E test suites ensuring full system functionality across multiple environments",
        "Created and executed daily smoke test suites to ensure build stability and core functionality",
        "Developed and maintained regression test suites covering critical business flows, reducing testing time by 70%",
        "Performed integration testing to validate system components and third-party service interactions",
        "Developed and maintained over 500 automated test scripts using TestNG framework",
        "Orchestrated API testing strategies using Postman and REST Assured, creating detailed test suites for RESTful services",
        "Executed database validation tests using SQL queries to verify data integrity and test results",
        "Performed basic database operations for test data setup and verification",
        "Integrated automated tests within Azure Pipelines, enabling continuous testing and deployment workflows",
        "Created and maintained detailed test documentation, including test plans, test cases, and bug reports using Azure Boards",
        "Collaborated with cross-functional teams to identify and resolve software defects early in the development cycle",
        "Mentored junior QA team members in automation best practices and testing methodologies"
      ],
      technologies: "Selenium, Java, TestNG, Maven, Git, Azure Pipelines, Postman, REST Assured, Basic SQL, Azure Boards"
    },
    {
      title: "Technical Support Representative",
      company: "NCR Corporation",
      period: "August 2021 - November 2021 · 4 months",
      location: "Banja Luka, Bosnia and Herzegovina",
      type: "Full-time",
      responsibilities: [
        "Provided technical support for enterprise-level software applications",
        "Diagnosed and resolved complex technical issues while maintaining high customer satisfaction",
        "Documented technical solutions and contributed to the knowledge base",
        "Collaborated with development teams to escalate and resolve software bugs",
        "Gained valuable experience in customer communication and problem-solving"
      ],
      technologies: ""
    }
  ];

  return (
    <section id="experience" className="py-20 bg-darkCard">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-sm uppercase tracking-wider text-highlight/80 mb-2">Work History</span>
          <h2 className="section-heading">Professional Experience</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="timeline-dot"></div>
              <div className="glass-card p-6 rounded-lg mb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-darkText">{exp.title}</h3>
                    <p className="text-highlight">{exp.company} <span className="text-sm text-darkSubtle ml-2">{exp.type}</span></p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <div className="flex items-center text-sm text-darkSubtle mb-1">
                      <Calendar size={14} className="mr-1" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center text-sm text-darkSubtle">
                      <MapPin size={14} className="mr-1" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-highlight before:rounded-full text-sm text-darkSubtle">
                      {resp}
                    </li>
                  ))}
                </ul>
                
                {exp.technologies && (
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <p className="text-sm font-medium text-darkText">Technologies used:</p>
                    <p className="text-sm text-darkSubtle">{exp.technologies}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
