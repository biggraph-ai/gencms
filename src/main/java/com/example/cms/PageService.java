
package com.example.cms;

import org.springframework.ai.chat.ChatClient;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class PageService {
    private final ChatClient chatClient;
    private final PageRepository repository;

    public PageService(ChatClient chatClient, PageRepository repository) {
        this.chatClient = chatClient;
        this.repository = repository;
    }

    public String generateHtmlFromPrompt(String prompt, String fileMeta) {
        String fullPrompt = "Create a styled HTML page for: " + prompt + "\nImage/file context: " + fileMeta;
        return chatClient.call(fullPrompt);
    }

    public PageContent autoPublishPage(String prompt, String fileMeta, String base64Image) {
        String html = generateHtmlFromPrompt(prompt, fileMeta);
        String slug = prompt.toLowerCase().replaceAll("\s+", "-");

        PageContent page = new PageContent();
        page.setSlug(slug);
        page.setTitle(prompt);
        page.setPrompt(prompt);
        page.setHtmlContent(html);
        page.setBase64Image(base64Image);
        page.setPublished(true);
        page.setCreatedAt(LocalDateTime.now());

        return repository.save(page);
    }

    public void savePage(PageContent page) {
        repository.save(page);
    }

    public PageContent getPageBySlug(String slug) {
        return repository.findBySlug(slug);
    }
}
