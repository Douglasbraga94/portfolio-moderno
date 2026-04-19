import React from 'react';
import Terminal from '../common/Terminal';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: "c7a8e1",
      company: "Central IT",
      role: "Desenvolvedor Web Pleno",
      period: "2021 – Atual",
      tasks: [
        "Desenvolvimento Full Stack (Java/Angular)",
        "Criação de componentes reutilizáveis em Angular",
        "Implementação de APIs RESTful",
        "Otimização de banco de dados (SQL Server/PostgreSQL)"
      ]
    },
    {
      id: "b2f4d9",
      company: "Globalweb",
      role: "Desenvolvedor Web / Analista Automação",
      period: "2022 – Atual",
      tasks: [
        "Automações complexas (JavaScript/LowCode)",
        "Dashboards executivos e relatórios KPI",
        "Implementação de rotinas de backend",
        "Personalização avançada de interfaces (UX)"
      ]
    },
    {
      id: "a1e0c5",
      company: "MPF (Ministério Público Federal)",
      role: "Estagiário de TI",
      period: "2018 – 2020",
      tasks: [
        "Scripts de automação (Shell/Batch)",
        "Suporte técnico Windows e hardware"
      ]
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <Terminal title="history" command="git log --oneline --graph">
        <div className="experience-timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="exp-item">
              <div className="exp-node">
                <span className="commit-id">{exp.id}</span>
                <span className="exp-meta">({exp.period})</span>
              </div>
              <div className="exp-content">
                <h3 className="exp-title">{exp.role} @ <span className="company">{exp.company}</span></h3>
                <ul className="exp-tasks">
                  {exp.tasks.map((task, ti) => (
                    <li key={ti}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Terminal>
    </section>
  );
};

export default Experience;
