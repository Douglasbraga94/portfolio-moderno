import React from 'react';
import Terminal from '../common/Terminal';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <Terminal title="profile" command="whoami">
        <div className="about-content">
          <p className="summary-text">
            Desenvolvedor Full Stack Pleno com atuação no ciclo completo de desenvolvimento de software. 
            Especialista na construção de aplicações escaláveis utilizando Java e Node.js no back-end, 
            integrados a interfaces modernas com Angular e React.
          </p>
          <div className="info-grid">
            <div className="info-item">
              <span className="label">LOC:</span>
              <span className="value">Sobradinho, DF</span>
            </div>
            <div className="info-item">
              <span className="label">EML:</span>
              <span className="value">dougbraga00@hotmail.com</span>
            </div>
            <div className="info-item">
              <span className="label">LNK:</span>
              <span className="value">linkedin.com/in/douglas-rodrigues-braga</span>
            </div>
            <div className="info-item">
              <span className="label">GHB:</span>
              <span className="value">github.com/Douglasbraga94</span>
            </div>
          </div>
          <p className="vision-text">
            Sólida experiência em modelagem e otimização de bancos de dados (SQL Server, PostgreSQL) 
            e criação de APIs RESTful. Background em ITIL v4, alinhando desenvolvimento técnico com visão de negócio.
          </p>
        </div>
      </Terminal>
    </section>
  );
};

export default About;
