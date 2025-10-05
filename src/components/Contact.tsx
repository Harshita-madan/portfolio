import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16 font-poppins"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Make{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Contact
          </span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-poppins">
                Let's Connect
              </h3>
              <p className="text-gray-300 text-lg font-poppins">
                Ready to embark on a new project? Whether you're looking to
                build something extraordinary or just want to say hello, I'd
                love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "madanharshita2gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 9773576310" },
                { icon: MapPin, label: "Location", value: "Delhi,India" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                    <item.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-poppins">
                      {item.label}
                    </p>
                    <p className="text-white font-semibold font-poppins">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex space-x-6 pt-4">
              <motion.a
                href="https://github.com/Harshita-madan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.4-.8 1.4-.8.2-.6.4-1.1.7-1.3-2.5-.3-5.1-1.2-5.1-5.5 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 .9.9-.3 1.9-.5 2.8-.5s1.9.2 2.8.5c2.1-1.2 3-.9 3-.9.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 2.9 0 4.3-2.6 5.2-5.1 5.5.4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
                </svg>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/harshita-madan-02abc/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-1 0-1.7-.8-1.7-1.7s.7-1.7 1.7-1.7 1.7.8 1.7 1.7-.7 1.7-1.7 1.7zm13.5 10.3h-3v-4.5c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4v4.6h-3v-9h2.8v1.2h.1c.4-.8 1.3-1.5 2.7-1.5 2.9 0 3.4 1.9 3.4 4.3v5z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form - Floating Satellite Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative p-8 rounded-xl bg-white/5 backdrop-blur-md border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              {/* Satellite decoration */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Send className="text-white" size={20} />
                </div>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 text-sm font-semibold mb-2 font-poppins"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-500/60 focus:outline-none transition-colors duration-300 font-poppins"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 text-sm font-semibold mb-2 font-poppins"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-500/60 focus:outline-none transition-colors duration-300 font-poppins"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 text-sm font-semibold mb-2 font-poppins"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-500/60 focus:outline-none transition-colors duration-300 resize-none font-poppins"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 font-poppins"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  <span>Launch Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
