import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-6 pt-32 pb-24"
    >
      <div className="text-center z-10">
        {/* Heading + Subheading */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-purple-400 text-xl md:text-2xl font-mono">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight space-y-2">
            <span className="block">
              <span className="text-purple-400">Harshita</span> Madan
            </span>
            {/* <span className="block text-pink-400">_</span>
            <span className="block text-white font-extrabold">
              of Stellar Creations
            </span> */}
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl">
            Passionate developer and problem solver with hands-on experience in web development and modern technologies.
            Skilled in building responsive and user-friendly applications, with a strong foundation in data structures and algorithms."
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          onClick={scrollToAbout}
          className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-poppins mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore My Universe
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
        </motion.button>
      </div>

      {/* Floating Celestial Illustration */}
      <motion.div
        className="absolute right-10 top-1/3 hidden lg:block"
        animate={{ y: [0, -20, 0], rotate: [0, 360] }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        }}
      >
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 opacity-80" />
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-400 to-blue-500" />
          <div className="absolute top-8 left-8 w-4 h-4 rounded-full bg-white opacity-60" />
          <div className="text-2xl absolute top-12 left-12">✨</div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-white/60" size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;