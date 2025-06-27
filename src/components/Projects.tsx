import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Yojana Guru",
      description: "An AI-powered platform that helps users discover personalized government schemes through multilingual chatbot support, voice search, and smart filtering based on user profiles.",
      planet: "Mars",
      color: "from-red-500 to-orange-500",
      tech: ["React.js", "Express", "Groq", "Node.js"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      source: "https://github.com/nikhil-agrawal123/health-chat-nexus",
      demo: "https://yojana-guru.vercel.app"
    },
    {
      title: "Health-Chat-Nexus",
      description: "AI-powered platform that pre-screens symptoms through smart chatbots and connects patients with doctors via seamless video consultations.",
      planet: "Jupiter",
      color: "from-orange-500 to-yellow-500",
      tech: ["React.js", "TensorFlow", "Node.js", "NLP"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      source: "https://github.com/your-username/health-chat-nexus",
      demo: "https://health-chat-nexus.vercel.app"
    },
    {
      title: "Pixel Patrika",
      description: "E-commerce platform for selling posters built using Next.js",
      planet: "Saturn",
      color: "from-purple-500 to-pink-500",
      tech: ["Next.js", "Stripe", "MongoDB"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      source: "https://github.com/your-username/pixel-patrika",
      demo: "https://pixel-patrika.vercel.app"
    },
    {
      title: "ShaktiGuard",
      description: "It is a full-stack application designed to enhance women's safety by providing features such as identifying the safest path, detecting deepfake media, SOS calling, and managing emergency contacts.",
      planet: "Neptune",
      color: "from-blue-500 to-cyan-500",
      tech: ["React.js", "Twilio", "GrasshopperAPI"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      source: "https://github.com/your-username/shaktiguard",
      demo: "https://shaktiguard.vercel.app"
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16 font-poppins"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 overflow-hidden">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

                  {/* Planet indicator */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center text-white font-bold text-sm font-poppins`}>
                      {project.planet[0]}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 font-poppins">{project.title}</h3>
                  <p className="text-gray-300 mb-6 font-poppins">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30 font-poppins"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors font-poppins"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </motion.a>

                    <motion.a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors font-poppins"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={16} />
                      <span>Source</span>
                    </motion.a>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
