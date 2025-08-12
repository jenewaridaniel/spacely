import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../assets/Spacely.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Story", href: "#story" },
    { name: "Focus Space", href: "#focus" },
    { name: "Location", href: "#location" },
    { name: "How It Works", href: "#how" },
    { name: "Testimonal", href: "#testimonal" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="header bg-amber-50 border-b border-gray-100"
    >
      <div className=" px-4 fixed w-full z-50 backdrop-blur-md ">
        <div className="flex  justify-around items-center h-16 py-11">
        {/* spacely branding */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
          >
            <img src={logo} className="w-36 md:w-52 py-1" alt="Spacely Logo" />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                whileHover={{ y: -1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <motion.button
              onClick={() => {
                setLoading(true);
                setTimeout(() => setLoading(false), 2000); // reset after 2s for demo
              }}
              className="px-4 py-3 w-44 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition-colors flex items-center justify-between"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Circle Arrow Container */}
              <div className="relative w-8 h-8 flex items-center justify-center">
                {/* Circular border animation */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-500"
                  initial={{ strokeDasharray: 100, strokeDashoffset: 100 }}
                  animate={
                    loading
                      ? { rotate: 360, borderColor: "#3B82F6" }
                      : { rotate: 0 }
                  }
                  transition={{
                    duration: 1.5,
                    repeat: loading ? Infinity : 0,
                    ease: "linear",
                  }}
                ></motion.div>

                {/* Arrow */}
                <ArrowRight className="w-4 h-4" />
              </div>
              Sign Up
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeInOut" }}
            >
              <div className="flex flex-col h-full p-4">
                {/* Sidebar Header with Close Button */}
                <div className="flex justify-end p-2">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-1 rounded-md focus:outline-none"
                  >
                    <X size={24} className="text-gray-700" />
                  </button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 mt-4 space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>

                {/* CTA Button at Bottom */}
                <div className="p-4">
                  <button className="w-full px-4 py-3 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition-colors">
                    Sign Up
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
