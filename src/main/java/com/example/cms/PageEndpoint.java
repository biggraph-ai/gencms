
package com.example.cms;

import dev.hilla.Endpoint;
import org.springframework.beans.factory.annotation.Autowired;

@Endpoint
public class PageEndpoint {
    @Autowired
    private PageService service;

    public String generatePage(String prompt, String fileMeta) {
        return service.generateHtmlFromPrompt(prompt, fileMeta);
    }

    public PageContent autoGenerateAndPublish(String prompt, String fileMeta, String base64Image) {
        return service.autoPublishPage(prompt, fileMeta, base64Image);
    }

    public void savePage(PageContent page) {
        service.savePage(page);
    }

    public PageContent getPageBySlug(String slug) {
        return service.getPageBySlug(slug);
    }
}
