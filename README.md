# GenCMS

This project is a minimal CMS prototype built with [Vaadin Hilla](https://hilla.dev/) and Spring Boot. It uses an LLM to generate styled HTML pages from a text prompt and stores them in an H2 database.

## Features

- **Prompt to HTML** – Submit a text prompt (and optional image) to generate page content.
- **Auto publish** – Store generated pages in the database with a slug.
- **Dynamic rendering** – Pages are served dynamically by slug.
- **React router** – Routes are defined for the page editor and generated pages.

## Getting started

1. Ensure you have Java 17 and Maven installed.
2. Update `src/main/resources/application.properties` with your OpenAI API key:

```properties
spring.ai.openai.api-key=sk-your-api-key
```

3. Start the application:

```bash
mvn spring-boot:run
```

4. Open `http://localhost:8080/editor` to generate and publish pages.
5. Visit `http://localhost:8080/page/{slug}` to view a generated page.

Generated pages are stored in `./data/cmsdb` using the H2 file database.

