
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageEndpoint } from 'Frontend/generated/endpoints.js';
import DOMPurify from 'dompurify';

export default function GeneratedView() {
  const { slug } = useParams();
  const [page, setPage] = useState<any>(null);

  useEffect(() => {
    if (slug) PageEndpoint.getPageBySlug(slug).then(setPage);
  }, [slug]);

useEffect(() => {
  if (page?.styleContent) {
    const style = document.createElement('style');
    style.textContent = DOMPurify.sanitize(page.styleContent, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
    });
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }
  return undefined; // ✅ this fixes: "not all code paths return a value"
}, [page]);

useEffect(() => {
  if (page?.scriptContent) {
    const script = document.createElement('script');
    script.textContent = DOMPurify.sanitize(page.scriptContent, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
    });
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }
  return undefined; // ✅
}, [page]);

  return page ? (
    <div className={`page-wrapper theme-${page.theme}`}>
      <h1>{page.title}</h1>
      {page.base64Image && (
        <img src={`data:image/png;base64,${page.base64Image}`} alt="Uploaded" style={{ maxWidth: '100%' }} />
      )}
      <div
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(page.htmlContent) }}
      />
    </div>
  ) : (
    <p>Loading…</p>
  );
}
