
import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out with any questions or project inquiries.
          </p>
        </motion.div>
      </div>

      <ContactSection />
    </div>
  );
};

export default Contact;
