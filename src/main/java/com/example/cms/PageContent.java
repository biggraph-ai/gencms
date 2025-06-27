
package com.example.cms;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class PageContent {
    @Id
    @GeneratedValue
    private Long id;

    private String slug;
    private String title;

    @Lob
    private String htmlContent;

    private boolean published;
    private String summary;
    private String prompt;
    private String theme;

    @Lob
    private String scriptContent;

    @Lob
    private String styleContent;

    @Lob
    private String base64Image;

    private LocalDateTime createdAt;

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public void setTitle(String prompt) {
        this.title = prompt;
    }

    public void setPrompt(String prompt) {
        this.prompt = prompt;
    }

    public void setHtmlContent(String html) {
        this.htmlContent = html;
    }

    public void setBase64Image(String base64Image) {
        this.base64Image = base64Image;
    }

    public void setPublished(boolean b) {
        this.published = b;
    }

    public void setCreatedAt(LocalDateTime now) {
        this.createdAt = now;
    }
}
