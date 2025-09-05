import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold text-cyberorange mb-4">404</h1>
      <p className="text-xl text-gray-300 mb-6">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="px-6 py-2 bg-cyberorange text-black font-semibold rounded hover:bg-orange-500 transition-colors">Go Home</Link>
    </div>
  );
}

export default NotFound;


