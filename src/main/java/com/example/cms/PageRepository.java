
package com.example.cms;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PageRepository extends JpaRepository<PageContent, Long> {
    PageContent findBySlug(String slug);
}
