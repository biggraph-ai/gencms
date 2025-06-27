
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageEndpoint } from 'Frontend/generated/endpoints.js';

export default function GeneratedView() {
  const { slug } = useParams();
  const [page, setPage] = useState<any>(null);

  useEffect(() => {
    if (slug) PageEndpoint.getPageBySlug(slug).then(setPage);
  }, [slug]);

useEffect(() => {
  if (page?.styleContent) {
    const style = document.createElement('style');
    style.innerHTML = page.styleContent;
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
    script.innerHTML = page.scriptContent;
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
      <div dangerouslySetInnerHTML={{ __html: page.htmlContent }} />
    </div>
  ) : (
    <p>Loading…</p>
  );
}
