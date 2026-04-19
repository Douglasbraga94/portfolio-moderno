package com.douglasbraga.portfolio.service;

import com.douglasbraga.portfolio.dto.ProfileDTO;
import org.springframework.stereotype.Service;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ResumeDataService {

    public ProfileDTO getProfile() {
        return ProfileDTO.builder()
                .name("Douglas Rodrigues Braga")
                .title("Desenvolvedor Full Stack Pleno | Java | Angular | Node.js | React")
                .location("Sobradinho, DF")
                .phone("(61) 9****-1931")
                .email("dougbraga00@hotmail.com")
                .linkedin("linkedin.com/in/douglas-rodrigues-braga")
                .github("github.com/Douglasbraga94")
                .summary("Desenvolvedor Full Stack, atuando no ciclo completo de desenvolvimento de software. Especialista na construção de aplicações escaláveis utilizando Java e Node.js no back-end, integrados a interfaces modernas com Angular e React.")
                .languages(Arrays.asList("Português (Nativo)", "Inglês (Técnico)"))
                .build();
    }

    public List<Map<String, Object>> getSkills() {
        return Arrays.asList(
            createSkill("Back-end", Arrays.asList("Java", "Node.js", "Express", "Spring Boot")),
            createSkill("Front-end", Arrays.asList("Angular", "React", "Vue", "TypeScript")),
            createSkill("Database", Arrays.asList("SQL Server", "PostgreSQL")),
            createSkill("DevOps", Arrays.asList("Docker", "Git", "ITIL V4"))
        );
    }

    public List<Map<String, Object>> getExperience() {
        return Arrays.asList(
            createExp("Central IT", "Desenvolvedor Web Pleno", "2021 – Atual"),
            createExp("Globalweb", "Desenvolvedor Web / Analista", "2022 – Atual"),
            createExp("MPF", "Estagiário de TI", "2018 – 2020")
        );
    }

    private Map<String, Object> createSkill(String category, List<String> items) {
        Map<String, Object> map = new HashMap<>();
        map.put("category", category);
        map.put("items", items);
        return map;
    }

    private Map<String, Object> createExp(String company, String role, String period) {
        Map<String, Object> map = new HashMap<>();
        map.put("company", company);
        map.put("role", role);
        map.put("period", period);
        return map;
    }
}
