import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';

const titles = [
  'Cybersecurity Enthusiast',
  'React Developer',
  'Open Source Advocate',
];

function useTypewriter(words, speed = 120, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const [pauseTyping, setPauseTyping] = useState(false);

  useEffect(() => {
    if (pauseTyping) {
      const t = setTimeout(() => setPauseTyping(false), pause);
      return () => clearTimeout(t);
    }
    if (subIndex === words[index].length + 1 && !deleting) {
      setPauseTyping(true);
      setDeleting(true);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, pauseTyping, words, speed, pause]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return `${words[index].substring(0, subIndex)}${blink ? '|' : ' '}`;
}

function Home() {
  const typewriter = useTypewriter(titles);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <ParticleBackground />
      
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 136, 0, 0.1) 0%, transparent 50%)`
        }}
      />

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-cyberorange/10 border border-cyberorange/30 rounded-full text-cyberorange text-sm font-mono mb-6">
              👋 Welcome to my digital space
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            <span className="text-cyberorange">Hi, I'm</span>{' '}
            <span className="text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Chiranjeev
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-mono text-gray-300 mb-8 h-12 flex items-center justify-center">
            <span className="typewriter-cursor bg-gradient-to-r from-cyberorange to-orange-300 bg-clip-text text-transparent">
              {typewriter}
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about <span className="text-cyberorange font-semibold">cybersecurity</span>, building modern web applications, and sharing knowledge through open source projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/cv.pdf"
              download
              className="group px-8 py-4 bg-gradient-to-r from-cyberorange to-orange-500 text-black font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                📄 Download CV
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-cyberorange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <Link
              to="/contact"
              className="group px-8 py-4 border-2 border-cyberorange text-cyberorange font-bold rounded-lg hover:bg-cyberorange hover:text-black transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                💬 Get In Touch
              </span>
              <div className="absolute inset-0 bg-cyberorange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "2+", label: "Years Experience", icon: "🚀" },
              { number: "10+", label: "Projects Completed", icon: "💻" },
              { number: "5+", label: "Blog Posts", icon: "📝" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group p-6 bg-gray-900/50 rounded-xl border border-cyberorange/20 hover:border-cyberorange/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-cyberorange mb-2 group-hover:text-orange-300 transition-colors">
                  {stat.number}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;


