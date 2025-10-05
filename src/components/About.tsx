import { motion } from "framer-motion";
import harshitaPhoto from "../../Harshita photo 2 new.jpg";

const About = () => {
  return (
      <section id="about" className="py-24 px-6 dark:bg-slate-950">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center z-10"
            initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Text Content */}
          <motion.div className="z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins z-10">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 z-10">
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
                  Harshita Madan
                </motion.span>
              </p>
              <p>
                I am currently pursuing a Bachelor's Degree in Computer Science with specialization in Data Science at Netaji
                Subhas University Of Technology. I am passionate towards learning how to solve complex problems and drive innovation.
                I have built a strong foundation in Data Structures and algorithms , web development , operating systems , database management systems, OOPS programming and computer networks.
                
                I am proficient in programming languages such as C and C++ and have hands-on experience with modern web technologies and frameworks, including MongoDB, Express.js, React.js, Node.js, Tailwind CSS, HTML, CSS, and JavaScript.
                I am well-versed in deploying web applications using platforms like Render and Vercel, and have experience building and consuming RESTful APIs.
                I regularly work with developer tools like Visual Studio Code and Google Colab which enhance my efficiency and productivity. 
                Additionally, I am skilled in using GitHub for version control and collaborative development. My passion for problem-solving has driven me to solve 700+ problems across various coding platforms, sharpening my logical thinking and algorithmic skills. 
              </p>
            </div>
          </motion.div>

          {/* Image on Right */}
          <motion.div
            className="w-full h-auto max-w-md mx-auto z-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={harshitaPhoto}
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
