
import { useEffect } from "react";
import { motion } from "framer-motion";
import { BookText, Calendar, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Research = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const researches = [
    {
      title: "Enhancing Masked Word Prediction in Tamil Language Models: A Synergistic Aproach Using BERT and SBERT",
      journal: "ICON Conference - ACL Anthology",
      date: "December 2024",
      abstract: "This research explores the challenges of masked word prediction and sentence-level semantic analysis in Tamil NLP, leveraging a synergistic combination of BERT and SBERT.",
      link: "https://aclanthology.org/2024.icon-1.55/"
    },
    {
      title: "Comparative Insights into Modern Architectures for Paraphrase Detection",
      journal: "ICCIDS Conference - Springer IFIP AICT",
      date: "February 2025",
      abstract: "A comprehensive comparison of Transformer-based BERT models for paraphrase detection, demonstrating their strengths and trade-offs.",
      link: ""
    },
    {
      title: "Optimizing Tamil Tokenizers: The Limits of Pretrained Models",
      journal: "ICTACT Journals",
      date: "May 2025",
      abstract: "This paper examines how implementing Tamil tokenizers from scratch for domain and task specific datasets.",
      link: ""
    },
    {
      title: "XLNet meets paraphrase detection",
      journal: "ICTACT Journals",
      date: "May 2025",
      abstract: "This paper fine-tunes XLNet for paraphrase detection on MRPC, achieving strong benchmark-level performance.",
      link: ""
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
    <div className="min-h-screen py-20 bg-gray-950 select-none">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-6 relative">
            <span className="relative inline-block">
              Research Publications
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/60 to-primary/30 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-400">
            Exploring AI technology and Natural Language Processing through academic research and industry applications.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8"
        >
          {researches.map((research, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <BookText className="text-primary w-6 h-6" />
                    <span className="text-base font-medium text-gray-400">{research.journal}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="text-gray-400 w-5 h-5" />
                    <span className="text-sm text-gray-400">{research.date}</span>
                  </div>
                </div>
                
                <h2 className="text-2xl font-display font-semibold mb-4 text-white">{research.title}</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">{research.abstract}</p>
                
                <div className="flex justify-end">
                  <Button asChild variant="outline" className="group">
                    <a href={research.link} target="_blank" rel="noreferrer">
                      Read Full Paper
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </motion.span>
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Research;
