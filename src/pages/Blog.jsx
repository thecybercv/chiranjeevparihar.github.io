import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import BlogDetail from './BlogDetail';

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('/src/data/blogs.json')
      .then((res) => res.json())
      .then(setBlogs)
      .catch(() => setBlogs([]));
  }, []);
  return (
    <section>
      <h2 className="text-3xl font-bold text-cyberorange mb-8 text-center">Blog</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}

function Blog() {
  return (
    <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path=":id" element={<BlogDetail />} />
    </Routes>
  );
}

export default Blog;


