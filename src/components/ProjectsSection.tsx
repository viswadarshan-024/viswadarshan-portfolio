
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with seamless checkout and inventory management.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Portfolio Website",
      description: "A minimalist portfolio for a photographer showcasing their work with elegant animations.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Health & Fitness App",
      description: "A comprehensive fitness tracking application with personalized workout plans.",
      tags: ["React Native", "Firebase", "Redux"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      demoLink: "#"
    },
    {
      title: "Real Estate Platform",
      description: "A platform connecting property buyers, sellers, and agents with advanced filtering.",
      tags: ["Vue.js", "Express", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects-section" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            A selection of my recent work, showcasing my skills in design and development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
