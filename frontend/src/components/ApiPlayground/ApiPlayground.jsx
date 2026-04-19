import React, { useState } from 'react';
import Terminal from '../common/Terminal';
import './ApiPlayground.css';

const ApiPlayground = () => {
  const [endpoint, setEndpoint] = useState('/api/profile');
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.demo-token-active');

  const executeRequest = async () => {
    setIsLoading(true);
    setResponse(null);
    
    // Simulate API delay to show the "fetching" state
    setTimeout(() => {
      let data = {};
      switch(endpoint) {
        case '/api/profile':
          data = {
            name: "Douglas Rodrigues Braga",
            role: "Full Stack Developer",
            location: "DF, Brazil",
            phone: "(61) 9****-1931",
            email: "dougbraga00@hotmail.com"
          };
          break;
        case '/api/skills':
          data = [
            { category: "Back-end", items: ["Java", "Node.js", "Spring Boot"] },
            { category: "Front-end", items: ["Angular", "React", "TypeScript"] }
          ];
          break;
        case '/api/experience':
          data = [
            { id: "c7a8e1", company: "Central IT", role: "Desenvolvedor Web Pleno", period: "2021 – Atual" },
            { id: "b2f4d9", company: "Globalweb", role: "Desenvolvedor Web", period: "2022 – Atual" },
            { id: "a1e0c5", company: "MPF", role: "Estagiário de TI", period: "2018 – 2020" }
          ];
          break;
        case '/api/projects':
          data = [
            { name: "Cadastro_Surdos_CCB", tech: "Vue.js, Node.js", desc: "Gestão de dados e integração de hardware." },
            { name: "Instagram_Data_Monitor", tech: "Python, Docker", desc: "Coleta e análise de dados de redes sociais." },
            { name: "Monitoramento_Geoespacial", tech: "Node.js, Ruby", desc: "Visualização de dados epidemiológicos." }
          ];
          break;
        default:
          data = { message: "Endpoint response simulation" };
      }
      setResponse(data);
      setIsLoading(false);
    }, 800);
  };

  return (
    <section className="api-section" id="api">
      <Terminal title="console" command={`curl -X GET https://portfolio-api-douglas.onrender.com${endpoint} -H "Authorization: Bearer [TOKEN]"`}>
        <div className="api-playground">
          <div className="api-controls">
            <div className="select-wrapper">
              <label>ENDPOINT:</label>
              <select value={endpoint} onChange={(e) => setEndpoint(e.target.value)}>
                <option value="/api/profile">GET /api/profile</option>
                <option value="/api/skills">GET /api/skills</option>
                <option value="/api/experience">GET /api/experience</option>
                <option value="/api/projects">GET /api/projects</option>
              </select>
            </div>
            <button className="execute-btn" onClick={executeRequest} disabled={isLoading}>
              {isLoading ? "EXECUTING..." : "RUN COMMAND"}
            </button>
          </div>

          <div className="token-info">
            <span className="label">DEMO_TOKEN:</span>
            <code className="token-value">{token}</code>
          </div>

          <div className="response-area">
            <div className="response-header">RESPONSE_BODY</div>
            <pre className="response-content">
              {isLoading ? (
                <span className="loading-text">Fetching data from secure server...<span className="cursor"></span></span>
              ) : response ? (
                JSON.stringify(response, null, 2)
              ) : (
                <span className="placeholder-text">// Press RUN to fetch data</span>
              )}
            </pre>
          </div>
        </div>
      </Terminal>
    </section>
  );
};

export default ApiPlayground;
