import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Product Designer",
      company: "TechFlow",
      content:
        "Spacely made finding quiet, reliable workspaces easy. The flexible booking options fit perfectly with my unpredictable schedule.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Marcus Rivera",
      role: "Engineering Lead",
      company: "InnovateCorp",
      content:
        "Thanks to Spacely, our team always has fast internet and comfortable spaces when working remotely. It’s a real productivity booster.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Emma Thompson",
      role: "Creative Director",
      company: "Studio Bright",
      content:
        "Booking a workspace through Spacely is so simple and convenient. The amenities and quiet environment help me focus deeply.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "David Park",
      role: "Startup Founder",
      company: "NextGen Solutions",
      content:
        "Spacely gives us flexible options for scaling our workspace needs without long-term commitments. Perfect for growing teams.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 5000; // 5 seconds per slide
    const interval = 50; // Update every 50ms for smooth progress

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + (interval / duration) * 100;

        if (newProgress >= 100) {
          setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
          );
          return 0;
        }

        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  return (
    <section className="py-32 px-6 bg-white min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header - Apple style minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-3 tracking-tight">
            What teams say
          </h2>
          <h3 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight">
            about{" "}
            <span className="font-medium text-black heading ">Spacely</span>
          </h3>
        </motion.div>

        {/* Testimonial Card - Clean Apple aesthetic */}
        <div className="relative mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-center px-8"
            >
              {/* Quote */}
              <div className="mb-12">
                <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-light max-w-3xl mx-auto">
                  "{testimonials[currentIndex].content}"
                </p>
              </div>

              {/* Author */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-1 ring-gray-200">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg font-medium text-gray-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-gray-400 text-sm font-light">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Bar Navigation - Apple style */}
        <div className="max-w-md mx-auto mb-20">
          {/* Progress Track */}
          <div className="relative mb-8">
            <div className="h-0.5 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-black rounded-full"
                style={{
                  width: `${
                    (currentIndex * 100 + progress) / testimonials.length
                  }%`,
                }}
                transition={{ duration: 0.05, ease: "linear" }}
              />
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-between items-center">
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={testimonial.id}
                onClick={() => goToSlide(index)}
                className={`flex-1 text-center py-3 px-2 transition-all duration-300 ${
                  index === currentIndex
                    ? "text-black"
                    : "text-gray-400 hover:text-gray-600"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-xs font-medium mb-1">
                  {testimonial.name.split(" ")[0]}
                </div>
                <div className="text-xs text-gray-400">
                  {testimonial.company}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
