import React from 'react';
import Terminal from '../common/Terminal';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      name: "Cadastro_Surdos_CCB",
      tech: "Vue.js, Node.js, SQL",
      desc: "Gestão de dados com integração de hardware para código de barras."
    },
    {
      name: "Instagram_Data_Monitor",
      tech: "Python, Docker, JS",
      desc: "Coleta e análise de dados comportamentais em redes sociais."
    },
    {
      name: "Monitoramento_Geoespacial",
      tech: "Node.js, Ruby, Docker",
      desc: "Visualização de dados epidemiológicos em mapas interativos."
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <Terminal title="explorer" command="ls -la ~/projects">
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <div key={i} className="project-card">
              <div className="project-header">
                <span className="file-perm">drwxr-xr-x</span>
                <span className="file-owner">douglas</span>
                <span className="file-name">{proj.name}</span>
              </div>
              <div className="project-body">
                <p className="project-desc">{proj.desc}</p>
                <div className="project-tech">
                  <span className="tech-tag">{proj.tech}</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn-link">./view_source</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Terminal>
    </section>
  );
};

export default Projects;
