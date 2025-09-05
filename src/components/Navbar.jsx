import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-cyberblack/90 backdrop-blur border-b border-cyberorange">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-cyberorange font-bold text-xl">Chiranjeev Parihar</Link>
        <div className="flex items-center gap-6">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition-colors px-2 py-1 rounded hover:bg-cyberorange/20 ${isActive ? 'text-cyberorange' : 'text-white'}`
              }
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


