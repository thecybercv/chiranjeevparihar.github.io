import { Link } from 'react-router-dom';

function BlogCard({ blog }) {
  return (
    <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col border border-cyberorange/30">
      {blog.cover && (
        <img src={blog.cover} alt={blog.title} className="h-40 w-full object-cover" />
      )}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-cyberorange mb-2">{blog.title}</h3>
        <p className="text-gray-300 mb-4 flex-1">{blog.summary}</p>
        <div className="text-xs text-gray-400 mb-2">{blog.date}</div>
        <Link to={`/blog/${blog.id}`} className="mt-auto text-cyberorange hover:underline">Read More</Link>
      </div>
    </div>
  );
}

export default BlogCard;


