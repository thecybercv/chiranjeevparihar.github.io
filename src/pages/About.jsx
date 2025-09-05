import { FaReact, FaLock, FaCode, FaShieldAlt, FaDatabase, FaCloud } from 'react-icons/fa';

const skills = [
  { name: 'React/Next.js', icon: <FaReact className="text-cyan-400" />, level: 90 },
  { name: 'Cybersecurity', icon: <FaLock className="text-cyberorange" />, level: 85 },
  { name: 'JavaScript/TypeScript', icon: <FaCode className="text-yellow-300" />, level: 88 },
  { name: 'Security Analysis', icon: <FaShieldAlt className="text-red-400" />, level: 80 },
  { name: 'Database Design', icon: <FaDatabase className="text-green-400" />, level: 75 },
  { name: 'Cloud Security', icon: <FaCloud className="text-blue-400" />, level: 70 },
];

function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* About Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-cyberorange mb-6">About Me</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate cybersecurity enthusiast and full-stack developer with a strong focus on building secure, modern web applications.
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">My Story</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                With over 2 years of experience in cybersecurity and web development, I've dedicated my career to understanding and implementing security best practices in modern applications.
              </p>
              <p>
                I specialize in React development, security analysis, and creating robust systems that protect against common vulnerabilities. My passion lies in bridging the gap between development and security.
              </p>
              <p>
                When I'm not coding, you'll find me writing about cybersecurity trends, contributing to open source projects, or exploring the latest security tools and techniques.
              </p>
            </div>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg border border-cyberorange/30">
            <h3 className="text-2xl font-bold text-cyberorange mb-6">Quick Facts</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyberorange rounded-full"></span>
                Based in India
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyberorange rounded-full"></span>
                Available for freelance projects
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyberorange rounded-full"></span>
                Open source contributor
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyberorange rounded-full"></span>
                Security researcher
              </li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-gray-900 p-6 rounded-lg border border-cyberorange/30">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{skill.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                    <span className="text-cyberorange font-bold">{skill.level}%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-cyberorange h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;


