
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  avatar: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "Working with this professional was a game-changer for our business. The attention to detail and commitment to excellence resulted in a product that exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CEO at TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 2,
      content: "The level of creativity and technical skill demonstrated throughout our project was impressive. I couldn't be happier with the final result.",
      author: "Mark Wilson",
      position: "Product Manager",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 3,
      content: "An absolute pleasure to work with. The ability to understand our vision and translate it into a beautiful, functional design was remarkable.",
      author: "Emily Chen",
      position: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            What Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Don't just take my word for it - hear from the people I've had the pleasure of working with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-md dark:shadow-gray-800/20 border border-gray-200 dark:border-gray-800 relative"
            >
              <div className="absolute top-6 right-6 text-gray-200 dark:text-gray-800">
                <Quote className="w-10 h-10" />
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
