
import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about-section" className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Main avatar */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Avatar className="w-64 h-64 border-4 border-white dark:border-gray-800 shadow-lg">
                  <AvatarImage src="/placeholder.svg" alt="Profile Photo" />
                  <AvatarFallback className="text-4xl bg-primary/10">
                    ME
                  </AvatarFallback>
                </Avatar>
              </motion.div>
              
              {/* Background decorative elements */}
              <div className="absolute -z-10 inset-0 -m-6 rounded-full bg-gradient-to-tr from-primary/30 to-primary/5 blur-lg" />
              <div className="absolute -z-10 top-10 -right-10 w-20 h-20 rounded-full bg-secondary/30 blur-md" />
              <div className="absolute -z-10 -bottom-5 -left-5 w-16 h-16 rounded-full bg-accent/20 blur-md" />
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Hi, I'm [Your Name]</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate [Your Profession] with [X] years of experience specializing in [Your Specialities]. 
              I blend technical expertise with creative problem-solving to deliver exceptional solutions.
            </p>
            
            {/* Passion & Mission Cards */}
            <div className="space-y-4">
              <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-primary/10 to-transparent">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2 flex items-center">
                    <span className="bg-primary/20 rounded-full p-1 mr-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    My Passion
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    I'm passionate about creating meaningful digital experiences that solve real-world problems and making technology more accessible and intuitive for everyone.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-secondary/10 to-transparent">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2 flex items-center">
                    <span className="bg-secondary/20 rounded-full p-1 mr-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    My Mission
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    My mission is to leverage cutting-edge technologies to build innovative solutions that enhance human capabilities and contribute to a more connected and efficient world.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
