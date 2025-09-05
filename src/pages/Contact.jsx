import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle sending the form data
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Contact Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-cyberorange mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss cybersecurity? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg border border-cyberorange/30">
            <h2 className="text-2xl font-bold text-white mb-6">Send me a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 text-white border border-cyberorange/30 focus:border-cyberorange outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 text-white border border-cyberorange/30 focus:border-cyberorange outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-3 rounded bg-gray-800 text-white border border-cyberorange/30 focus:border-cyberorange outline-none transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-cyberorange text-black font-bold py-3 rounded-lg hover:bg-orange-500 transition-colors transform hover:scale-105"
              >
                Send Message
              </button>
              {submitted && (
                <div className="text-green-400 text-center">
                  ✅ Thank you! Your message has been sent.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-cyberorange text-xl" />
                  <span className="text-gray-300">chiranjeev@example.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaPhone className="text-cyberorange text-xl" />
                  <span className="text-gray-300">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-cyberorange text-xl" />
                  <span className="text-gray-300">India</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-cyberorange hover:text-black transition-colors"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-cyberorange hover:text-black transition-colors"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-cyberorange hover:text-black transition-colors"
                >
                  <FaTwitter className="text-2xl" />
                </a>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-cyberorange/30">
              <h3 className="text-lg font-bold text-cyberorange mb-3">Quick Response</h3>
              <p className="text-gray-300 text-sm">
                I typically respond to messages within 24 hours. For urgent matters, feel free to reach out via social media.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;


