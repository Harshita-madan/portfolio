import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 dark:bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Me
              </span>
            </h2>

            <div className="space-y-5 text-gray-300 text-lg font-poppins leading-relaxed">
              <p>
                Hey! I'm{" "}
                <motion.span
                  className="font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Abhay Madan
                </motion.span>
                , an Electrical Engineering student at{" "}
                <strong>Delhi Technological University (formerly DCE)</strong> with a deep
                passion for web development, open-source, competitive programming, and
                everything space-related.
              </p>
              <p>
                I thrive on building impactful tech, and my love for innovation has led me to
                exciting hackathon experiences — securing a <strong>Top 100</strong> position
                out of 3700+ teams in the{" "}
                <strong>GDG Hack2skill Hackathon</strong>, and finishing in the{" "}
                <strong>Top 5</strong> at <strong>Infronix</strong>, IIIT Delhi.
              </p>
              <p>
                You’ll often find me collaborating at hackathons or working on personal projects
                like <strong>Yojana Guru</strong>, <strong>Health-Chat Nexus</strong>, and{" "}
                <strong>Pixel Patrika</strong>, which reflect my curiosity and problem-solving
                drive.
              </p>
              <p>
                My journey started just a year ago with my first website. Since then, I’ve
                explored a wide range of technologies and design principles to build applications
                that are not only functional but also visually stellar.
              </p>
            </div>
          </div>

          {/* Image on Right */}
          <motion.div
            className="w-full h-auto max-w-md mx-auto z-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="/IMG_9115.jpg" // ✅ must match the exact filename in public
              alt="About Illustration"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
