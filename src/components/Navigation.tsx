import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Hamburger & Close icons

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu after clicking
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold text-white font-poppins"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Harshita Madan
            </span>
          </motion.div>

          {/* Hamburger Icon */}
          <button
            className="sm:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {menuOpen && (
            <div className="fixed inset-0 z-50 h-screen w-screen overflow-y-auto bg-slate-900/90 backdrop-blur-md px-6 py-6 font-poppins text-white">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Harshita Madan
                </span>
                <button onClick={() => setMenuOpen(false)}>
                  <X size={28} />
                </button>
              </div>

              <div className="mt-10 flex flex-col gap-6">
                {["hero", "about", "projects", "skills", "contact"].map(
                  (section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="text-left text-lg capitalize text-white hover:text-purple-300"
                    >
                      {section}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {/* Navigation Links (Desktop) */}
          <div className="hidden sm:flex space-x-8 font-poppins">
            {["hero", "about", "projects", "skills", "contact"].map(
              (section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 capitalize"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section}
                </motion.button>
              )
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
