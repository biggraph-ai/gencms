
import React, { useState } from 'react';
import { PageEndpoint } from 'Frontend/generated/endpoints.js';

export default function PageEditor() {
  const [prompt, setPrompt] = useState('');
  const [html, setHtml] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [base64, setBase64] = useState('');

  const toBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve((reader.result as string).split(',')[1]);
      reader.onerror = error => reject(error);
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    setFile(f ?? null);
    if (f) {
      const b64 = await toBase64(f);
      setBase64(b64);
    }
  };

  const generate = async () => {
    const fileMeta = file ? file.name : '';
    const result = await PageEndpoint.generatePage(prompt, fileMeta);
    if (result !== undefined) {
    setHtml(result);
    }

  };

  const autoPublish = async () => {
    const fileMeta = file?.name ?? '';
    await PageEndpoint.autoGenerateAndPublish(prompt, fileMeta, base64);
    alert("Page auto-published!");
  };

  return (
    <div>
      <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Enter prompt" />
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={generate}>Generate</button>
      <button onClick={autoPublish}>Auto Publish</button>
      {base64 && <img src={`data:image/png;base64,${base64}`} style={{ maxWidth: '100%' }} />}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
