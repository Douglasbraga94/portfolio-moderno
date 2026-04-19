import React from 'react';
import Terminal from '../common/Terminal';
import './Education.css';

const Education = () => {
  const education = [
    {
      title: "Licenciatura em Computação",
      institution: "Universidade de Brasília (UnB)"
    }
  ];

  const certifications = [
    "ITIL Foundation V4 – Axelos",
    "API Restful com NodeJS, Restify e MongoDB – Udemy",
    "Web Moderno Completo com JavaScript – Udemy",
    "Engenharia de Requisitos – Fundação Bradesco"
  ];

  return (
    <section className="education-section" id="education">
      <Terminal title="viewer" command="cat education.txt">
        <div className="education-content">
          <div className="edu-block">
            <h3 className="section-label">[ FORMAÇÃO ACADÊMICA ]</h3>
            {education.map((edu, i) => (
              <div key={i} className="edu-item">
                <p className="edu-title">{edu.title}</p>
                <p className="edu-inst">{edu.institution}</p>
              </div>
            ))}
          </div>
          
          <div className="edu-block">
            <h3 className="section-label">[ CERTIFICAÇÕES ]</h3>
            <ul className="cert-list">
              {certifications.map((cert, i) => (
                <li key={i}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </Terminal>
    </section>
  );
};

export default Education;
