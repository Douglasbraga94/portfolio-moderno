package com.douglasbraga.portfolio.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProfileDTO {
    private String name;
    private String title;
    private String location;
    private String phone;
    private String email;
    private String linkedin;
    private String github;
    private String summary;
    private List<String> languages;
}
