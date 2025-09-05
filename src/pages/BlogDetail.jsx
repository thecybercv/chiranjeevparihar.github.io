import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

function BlogDetail() {
  const { id } = useParams();
  const [content, setContent] = useState('');
  const [meta, setMeta] = useState({});

  useEffect(() => {
    fetch(`/src/blog/${id}.md`)
      .then((res) => res.text())
      .then((text) => {
        const { content, data } = matter(text);
        setContent(content);
        setMeta(data);
      })
      .catch(() => {
        setContent('# Not found');
        setMeta({ title: 'Not found' });
      });
  }, [id]);

  if (!content) return <div className="text-center py-12">Loading...</div>;

  return (
    <article className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-cyberorange mb-2">{meta.title}</h1>
      <div className="text-gray-400 text-sm mb-6">{meta.date}</div>
      <ReactMarkdown className="prose prose-invert max-w-none">{content}</ReactMarkdown>
    </article>
  );
}

export default BlogDetail;


