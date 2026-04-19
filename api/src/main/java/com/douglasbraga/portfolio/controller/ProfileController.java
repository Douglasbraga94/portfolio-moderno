package com.douglasbraga.portfolio.controller;

import com.douglasbraga.portfolio.dto.ProfileDTO;
import com.douglasbraga.portfolio.service.ResumeDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ProfileController {

    @Autowired
    private ResumeDataService resumeDataService;

    @GetMapping("/profile")
    public ProfileDTO getProfile() {
        return resumeDataService.getProfile();
    }

    @GetMapping("/skills")
    public List<Map<String, Object>> getSkills() {
        return resumeDataService.getSkills();
    }

    @GetMapping("/experience")
    public List<Map<String, Object>> getExperience() {
        return resumeDataService.getExperience();
    }
}
