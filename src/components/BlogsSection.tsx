
import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function BlogsSection() {
  const blogs = [
    {
      title: "Fine-Tuning BERT for Paraphrase Detection: A Step-by-Step Guide",
      excerpt: "This article provides a step-by-step guide to fine-tuning BERT for paraphrase detection task using the benchmark datasets.",
      date: "Mar 16, 2025",
      readTime: "7 min read",
      tags: ["NLP", "Paraphrase Detection"],
      image: "Birthday.png",
      link: "https://medium.com/@viswadarshanrramiya/fine-tuning-bert-for-paraphrase-detection-a-step-by-step-guide-54fc90836d0d"
    },
    {
      title: "Is Paraphrase Detection Still a Challenge in the Era of Sentence Transformers?",
      excerpt: "In the era of Sentence Transformers, paraphrase detection isn't solved — it's evolving.",
      date: "May 23, 2025",
      readTime: "3 min read",
      tags: ["SBERT", "Paraphrase Detection"],
      image: "Your paragraph text.jpg",
      link: "https://medium.com/@viswadarshanrramiya/is-paraphrase-detection-still-a-challenge-in-the-era-of-sentence-transformers-0d9be3f3b672"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="blogs-section" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 relative">
            <span className="relative inline-block">
              Latest Blog Posts
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/60 to-primary/30 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Insights, tutorials, and thoughts on design, development, and emerging technologies.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-950 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
              whileHover={{ y: -5 }}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70" />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-3">
                  {blog.tags.map((tag, i) => (
                    <div key={i} className="flex items-center text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </div>
                  ))}
                </div>
                
                <h3 className="text-xl font-display font-semibold mb-3">{blog.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{blog.excerpt}</p>
                
                <div className="mt-auto">
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  
                  <Button asChild variant="link" className="px-0 text-primary">
                    <a href={blog.link} className="group inline-flex items-center">
                      Read More
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </motion.span>
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" className="group">
            View All Blog Posts
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
