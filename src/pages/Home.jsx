import React from "react";
import { motion } from "framer-motion";
import cloud from "../assets/cloud.png";
import pep from "../assets/pep.png";
import persone from "../assets/persone.png";
import walking from "../assets/walking.png";
import HowitWorks from "./HowitWorks";

const Home = () => {
  // Cloud animations
  const leftToRightVariants = {
    initial: { x: "-30%", opacity: 0 },
    animate: {
      x: "130%",
      opacity: 0.7,
      transition: {
        x: {
          duration: 18,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        },
        opacity: { duration: 0.5 },
      },
    },
  };

  const rightToLeftVariants = {
    initial: { x: "130%", opacity: 0 },
    animate: {
      x: "-30%",
      opacity: 0.7,
      transition: {
        x: {
          duration: 22,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: 3,
        },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <section id="home" className="bg-amber-50 relative min-h-screen overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
          >
            <circle cx="20" cy="20" r="1" fill="#f59e0b"></circle>
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-amber-50/80 to-white/80"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
          {/* Clouds */}
          <motion.div
            className="absolute top-1/4 left-0 z-20 pointer-events-none"
            variants={leftToRightVariants}
            initial="initial"
            animate="animate"
          >
            <img
              src={cloud}
              alt="Cloud"
              className="w-48 md:w-56 lg:w-64 opacity-80 mix-blend-lighten"
            />
          </motion.div>

          <motion.div
            className="absolute top-1/3 right-0 z-20 pointer-events-none"
            variants={rightToLeftVariants}
            initial="initial"
            animate="animate"
          >
            <img
              src={cloud}
              alt="Cloud"
              className="w-56 md:w-64 lg:w-72 opacity-80 mix-blend-lighten"
            />
          </motion.div>

          {/* Title */}
          <div className="container mx-auto px-4 text-center">
            <h1 className="heading relative z-30 uppercase font-medium text-xl md:text-4xl text-gray-800 leading-tight mb-2">
              Welcome to
            </h1>
            <h1 className="heading relative z-30 uppercase font-bold text-7xl md:text-8xl lg:text-9xl text-gray-900 tracking-wider">
              spacely
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-14 flex justify-center"
          >
            <button className="bg-gray-950 w-72 hover:bg-gray-800 transition-colors sm:w-72 text-gray-50 py-4 px-8 text-lg rounded-lg shadow-lg">
              Find Workspace
            </button>
          </motion.div>
        </section>

        {/* Pep Character */}
        <section className="relative ">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <img
                src={pep}
                alt="Pep character"
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>
        </section>

        {/* Tagline Section */}
        <section id="about" className="relative py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
              {/* Left Image - Desktop Only */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="hidden lg:block flex-1 max-w-md"
              >
                <img
                  src={persone}
                  alt="Person working"
                  className="w-full h-auto object-contain max-h-[70vh]"
                />
              </motion.div>

              {/* Center Content */}
              <section className="flex-1 max-w-2xl text-center lg:text-left">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-tight tracking-wider"
                >
                  Made in Rivers,
                  <br />
                  <span className="text-amber-500 tracking-widest">
                    Designed for the World
                  </span>
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="mt-8"
                >
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    <strong>Spacely</strong> connects busy individuals to
                    flexible, fully equipped workspaces in Port Harcourt,
                    offering tiered services to boost{" "}
                    <strong>productivity</strong>.
                  </p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="mt-8"
                  >
                    <button className="bg-gray-950 hover:bg-gray-800 transition-colors w-full sm:w-72 text-gray-50 py-4 px-8 text-lg rounded-lg shadow-lg">
                      Our Story
                    </button>
                  </motion.div>
                </motion.div>
              </section>

              {/* Right Image - Desktop Only */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="hidden lg:block flex-1 max-w-md"
              >
                <img
                  src={walking}
                  alt="Person walking"
                  className="w-full h-auto object-contain max-h-[70vh]"
                />
              </motion.div>
            </div>

            {/* Mobile Images - Stacked */}
            <div className="lg:hidden mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="flex justify-center"
              >
                <img
                  src={persone}
                  alt="Person working"
                  className="max-w-xs w-full h-auto"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="flex justify-center"
              >
                <img
                  src={walking}
                  alt="Person walking"
                  className="max-w-xs w-full hidden md:flex h-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>
        {/* how it works */}
        <section id="how">
          <HowitWorks />
        </section>
      </div>

   
    </section>
  );
};

export default Home;
