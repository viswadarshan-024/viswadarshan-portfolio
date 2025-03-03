
import { motion } from "framer-motion";
import { Award, BookOpen, Briefcase, Cpu, Heart, Target } from "lucide-react";

export default function AboutSection() {
  const skills = ["Python", "Natural Language Processing", "Generative AI", "Deep Learning", "Machine Learning", "Android Studio", "Java", "Team Leadership"];
  
  const fadeInUpVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  const listItemVariants = {
    hidden: {
      opacity: 0,
      y: 10
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    })
  };
  
  return <section id="about-section" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image with animations */}
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.3
        }} variants={fadeInUpVariants} className="w-full md:w-2/5">
            <div className="relative">
              <motion.div className="absolute -inset-4 rounded-xl bg-gradient-to-tr from-primary/10 to-primary/5" animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.02, 1]
            }} transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "mirror"
            }} />
              <motion.div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-black/5 to-black/30 dark:from-white/5 dark:to-white/10" whileHover={{
              opacity: 0.7
            }} />
              <motion.img 
                src="public/lovable-uploads/512a72eb-2d73-4597-a699-d1fcca24a462.png" 
                alt="public/lovable-uploads/512a72eb-2d73-4597-a699-d1fcca24a462.png" 
                className="rounded-xl shadow-xl w-full aspect-[4/5] object-cover" 
                loading="eager" 
                whileHover={{
                  scale: 1.03
                }} 
                transition={{
                  duration: 0.3
                }} 
              />
            </div>
          </motion.div>

          {/* Content with animations */}
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.3
        }} variants={fadeInUpVariants} className="w-full md:w-3/5">
            <motion.h2 className="text-3xl md:text-4xl font-display font-semibold mb-6" initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }}>
              About Me
            </motion.h2>
            
            <motion.p className="text-gray-600 dark:text-gray-400 mb-6" variants={fadeInUpVariants}>I am a pre-final year B.Tech student in Computer Science and Business Systems, specializing in Natural Language Processing (NLP), Generative AI, and AI system development. My expertise lies in low-resource language processing, LLM fine-tuning, tokenization, and scalable AI deployment.</motion.p>
            
            <motion.p className="text-gray-600 dark:text-gray-400 mb-8" variants={fadeInUpVariants} transition={{
            delay: 0.1
          }}>I actively work on AI research and real-world applications, including multilingual chatbots, AI-driven learning platforms, and storytelling AI. With a deep technical focus, I build efficient and high-performing AI models while continuously exploring new advancements in the field.</motion.p>

            {/* Passion & Mission Section */}
            <motion.div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm" variants={fadeInUpVariants} transition={{
            delay: 0.2
          }}>
              <div className="flex flex-col space-y-6">
                <motion.div className="flex items-start gap-4" whileHover={{
                x: 5
              }} transition={{
                type: "spring",
                stiffness: 300
              }}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-lg mb-2">My Passion</h3>
                    <p className="text-gray-600 dark:text-gray-400">I am deeply passionate about Natural Language Processing, Generative AI, and multilingual AI systems, with a strong focus on low-resource languages like Tamil. I thrive on solving complex AI challenges, from custom tokenization and LLM fine-tuning to real-world AI applications that make AI more accessible, efficient, and impactful.</p>
                  </div>
                </motion.div>
                
                <motion.div className="flex items-start gap-4" whileHover={{
                x: 5
              }} transition={{
                type: "spring",
                stiffness: 300
              }}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-lg mb-2">My Mission</h3>
                    <p className="text-gray-600 dark:text-gray-400">My mission is to advance AI research and development by building scalable, high-performance AI models and applications. I aim to bridge the gap between cutting-edge AI research and real-world implementation, ensuring that AI serves diverse linguistic and cultural communities. Through continuous learning, experimentation, and innovation, I strive to push the boundaries of AI-driven language understanding and human-computer interaction.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8" variants={fadeInUpVariants} transition={{
            delay: 0.3
          }}>
              <motion.div className="flex items-center gap-3" whileHover={{
              x: 5
            }} transition={{
              type: "spring",
              stiffness: 300
            }}>
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <h3 className="font-medium">Education</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">TCE, Madurai</p>
                </div>
              </motion.div>
              
              <motion.div className="flex items-center gap-3" whileHover={{
              x: 5
            }} transition={{
              type: "spring",
              stiffness: 300
            }}>
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <h3 className="font-medium">Projects</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">15+ Completed</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUpVariants} transition={{
            delay: 0.4
          }}>
              <h3 className="font-medium mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => <motion.span key={index} custom={index} variants={listItemVariants} initial="hidden" whileInView="visible" viewport={{
                once: true
              }} whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(var(--primary), 0.2)"
              }} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-800 dark:text-gray-200 transition-colors duration-300">
                    {skill}
                  </motion.span>)}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
}
