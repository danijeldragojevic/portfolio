import React from "react";
import {
  Check,
  Cpu,
  Filter,
  Database,
  Server,
  GitBranch,
  BookOpen,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      name: "Testing Types",
      icon: <Check className="text-highlight" size={24} />,
      skills: [
        "End-to-End Testing",
        "Smoke Testing",
        "Regression Testing",
        "Integration Testing",
      ],
    },
    {
      name: "Automation Tools",
      icon: <Cpu className="text-highlight" size={24} />,
      skills: ["Selenium WebDriver", "TestNG", "Maven"],
    },
    {
      name: "Programming Languages",
      icon: <Filter className="text-highlight" size={24} />,
      skills: ["Java", "JavaScript (basic)"],
    },
    {
      name: "API Testing",
      icon: <Server className="text-highlight" size={24} />,
      skills: ["Postman", "REST Assured"],
    },
    {
      name: "Version Control",
      icon: <GitBranch className="text-highlight" size={24} />,
      skills: ["Git", "GitHub"],
    },
    {
      name: "CI/CD",
      icon: <Cpu className="text-highlight" size={24} />,
      skills: ["Azure Pipelines"],
    },
    {
      name: "Database",
      icon: <Database className="text-highlight" size={24} />,
      skills: ["Basic SQL querying for test validation"],
    },
    {
      name: "Project Management",
      icon: <BookOpen className="text-highlight" size={24} />,
      skills: ["Azure Boards", "Azure DevOps"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-darkBg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-sm uppercase tracking-wider text-highlight/80 mb-2">
            My Expertise
          </span>
          <h2 className="section-heading">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-highlight/10 mr-3">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-darkText">{category.name}</h3>
              </div>

              <ul className="space-y-2 pl-2">
                {category.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-darkSubtle flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-highlight/70 mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-darkText mb-4">
            Professional Development
          </h3>
          <ul className="max-w-2xl mx-auto">
            <li className="text-darkSubtle mb-2 flex items-center justify-center">
              <Check size={18} className="text-highlight mr-2" />
              Continuously learning new testing methodologies and automation
              frameworks
            </li>
            <li className="text-darkSubtle flex items-center justify-center">
              <Check size={18} className="text-highlight mr-2" />
              Regular attendance at software testing webinars and workshops
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
