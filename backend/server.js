const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;
const SECRET_KEY = process.env.APP_JWT_SECRET || 'portfolio_super_secret_key_2026_douglas_braga';

app.use(cors());
app.use(express.json());

// Middleware para validar JWT
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, SECRET_KEY, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

// Dados do Currículo (Mesmo do Java)
const resumeData = {
    profile: {
        name: "Douglas Rodrigues Braga",
        title: "Desenvolvedor Full Stack Pleno | Java | Angular | Node.js | React",
        location: "Sobradinho, DF",
        phone: "(61) 9****-1931",
        email: "dougbraga00@hotmail.com",
        linkedin: "linkedin.com/in/douglas-rodrigues-braga",
        github: "github.com/Douglasbraga94",
        summary: "Desenvolvedor Full Stack, atuando no ciclo completo de desenvolvimento de software. Especialista na construção de aplicações escaláveis utilizando Java e Node.js no back-end, integrados a interfaces modernas com Angular e React."
    },
    skills: [
        { category: "Back-end", items: ["Java", "Node.js", "Express", "Spring Boot"] },
        { category: "Front-end", items: ["Angular", "React", "Vue", "TypeScript"] },
        { category: "Database", items: ["SQL Server", "PostgreSQL"] },
        { category: "DevOps", items: ["Docker", "Git", "ITIL V4"] }
    ],
    experience: [
        { id: "c7a8e1", company: "Central IT", role: "Desenvolvedor Web Pleno", period: "2021 – Atual" },
        { id: "b2f4d9", company: "Globalweb", role: "Desenvolvedor Web", period: "2022 – Atual" },
        { id: "a1e0c5", company: "MPF", role: "Estagiário de TI", period: "2018 – 2020" }
    ],
    projects: [
        { name: "Cadastro_Surdos_CCB", tech: "Vue.js, Node.js", desc: "Gestão de dados e integração de hardware." },
        { name: "Instagram_Data_Monitor", tech: "Python, Docker", desc: "Coleta e análise de dados de redes sociais." },
        { name: "Monitoramento_Geoespacial", tech: "Node.js, Ruby", desc: "Visualização de dados epidemiológicos." }
    ]
};

// Endpoints Públicos
app.post('/api/auth/token', (req, res) => {
    const token = jwt.sign({ user: 'portfolio-visitor' }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token, type: 'Bearer', expiresIn: 3600 });
});

// Endpoints Protegidos
app.get('/api/profile', authenticateJWT, (req, res) => res.json(resumeData.profile));
app.get('/api/skills', authenticateJWT, (req, res) => res.json(resumeData.skills));
app.get('/api/experience', authenticateJWT, (req, res) => res.json(resumeData.experience));
app.get('/api/projects', authenticateJWT, (req, res) => res.json(resumeData.projects));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
