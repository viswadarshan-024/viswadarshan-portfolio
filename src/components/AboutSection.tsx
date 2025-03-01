
import { motion } from "framer-motion";
import { Award, BookOpen, Briefcase, Cpu } from "lucide-react";

export default function AboutSection() {
  const skills = [
    "UX/UI Design", 
    "Front-end Development", 
    "Back-end Development", 
    "Mobile App Development",
    "Responsive Design", 
    "API Integration", 
    "Performance Optimization", 
    "Accessibility"
  ];

  return (
    <section id="about-section" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image placeholder - replace with your actual image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-2/5"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-black/5 to-black/30 dark:from-white/5 dark:to-white/10" />
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Portrait image" 
                className="rounded-xl shadow-xl w-full aspect-[4/5] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full md:w-3/5"
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
              About Me
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm a passionate professional dedicated to creating meaningful digital experiences. With a focus on user-centered design and modern technologies, I strive to build solutions that are not just functional, but also elegant and intuitive.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              When I'm not coding or designing, you can find me exploring new technologies, contributing to open-source projects, or enjoying the outdoors. I believe in continuous learning and pushing the boundaries of what's possible in the digital space.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <h3 className="font-medium">Education</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">University of Technology</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <h3 className="font-medium">Experience</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">5+ Years</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <h3 className="font-medium">Awards</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Best Design 2023</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <h3 className="font-medium">Projects</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">50+ Completed</p>
                </div>
              </div>
            </div>

            <h3 className="font-medium mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-800 dark:text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
