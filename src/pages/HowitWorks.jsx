import React from "react";
import { motion } from "framer-motion";
import signup from "../assets/signup.png";
import search from "../assets/search.png";
import work from "../assets/work.png";
import works from "../assets/works.png";
import PhotoAlbum from "../utility/PhotoAlbum";
import Testimonial from "./Testimonal";
import Location from "../utility/Location";

const HowitWorks = () => {
  const steps = [
    {
      icon: signup,
      title: "Sign Up",
      description: "Create your free account to get started.",
      delay: 0.2,
    },
    {
      icon: search,
      title: "Search Available Workspaces",
      description: "Find workspaces nearby or by your preferred location.",
      delay: 0.4,
    },
    {
      icon: work,
      title: "Choose Your Preferred Workroom",
      description:
        "Pick the workspace that fits your needs whether it's a private room, open desk, or meeting space.",
      delay: 0.6,
    },
    {
      icon: works,
      title: "Book and Start Working",
      description:
        "Reserve your spot instantly and get to work with all the amenities you need.",
      delay: 0.8,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 heading">
            How It{" "}
            <span className="text-amber-500 border-b-8 border-gray-900 relative">
              Works
              <span className="absolute bottom-0 left-0 w-full h-2 md:h-3 bg-gray-900 -z-10"></span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Get started with Spacely in just a few simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: step.delay }}
              viewport={{ once: true }}
              className="bg-amber-50 rounded-xl p-6 md:p-8 flex flex-col items-center text-center transition-all duration-300"
            >
              <div className="bg-white p-4 mb-6">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-36 h-36 object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-700 mb-4">{step.description}</p>
              <div className="mt-auto text-3xl font-bold text-gray-300">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h1 className=" text-6xl text-center pt-6 heading uppercase">
          Our Ambience
        </h1>

        <div className=" flex justify-center pt-3">
          <p className=" header text-center max-w-2xl">
            Spacely provides modern, welcoming workspaces that inspire focus and
            creativity, blending professionalism with comfort to meet the needs
            of students, freelancers, and business professionals alike.
          </p>
        </div>
      </div>

      <div className=" flex justify-center">
        <PhotoAlbum />
      </div>
      <section id="testimonal">
        <Testimonial />
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="mt-14 flex justify-center"
      >
        <button className="bg-gray-950 w-72 hover:bg-gray-800 transition-colors sm:w-72 text-gray-50 py-4 px-8 text-lg rounded-lg shadow-lg">
          Get Started
        </button>
      </motion.div>

      <section id="location">
        <Location/>
      </section>
    </section>
  );
};

export default HowitWorks;
