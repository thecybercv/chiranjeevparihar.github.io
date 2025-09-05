import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-cyberblack text-white border-t border-cyberorange mt-8">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-cyberorange font-bold text-lg mb-2">&copy; {new Date().getFullYear()} Chiranjeev Parihar</div>
            <p className="text-gray-400 text-sm">Cybersecurity Enthusiast & Full-Stack Developer</p>
          </div>
          <div className="flex gap-6 text-2xl">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-cyberorange transition-colors transform hover:scale-110"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-cyberorange transition-colors transform hover:scale-110"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-cyberorange transition-colors transform hover:scale-110"
              title="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


