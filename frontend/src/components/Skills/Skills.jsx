import React from 'react';
import Terminal from '../common/Terminal';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      name: "Back-end",
      skills: ["Java (J2EE)", "Node.js", "Express", "APIs RESTful", "Spring Boot"]
    },
    {
      name: "Front-end",
      skills: ["Angular (TS, RxJS)", "React.js", "Vue.js", "HTML5/CSS3", "SASS/Bootstrap"]
    },
    {
      name: "Database",
      skills: ["SQL Server", "PostgreSQL", "Query Optimization", "Procedures"]
    },
    {
      name: "DevOps & Tools",
      skills: ["Git", "Docker", "VS Code", "Postman", "ITIL V4"]
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <Terminal title="packages" command="apt list --installed">
        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div key={i} className="skill-category">
              <h3 className="category-name"># {cat.name}</h3>
              <ul className="skill-list">
                {cat.skills.map((skill, si) => (
                  <li key={si} className="skill-item">
                    <span className="skill-name">{skill}</span>
                    <span className="skill-status">[INSTALLED]</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Terminal>
    </section>
  );
};

export default Skills;
