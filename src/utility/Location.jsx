import React, { useState } from "react";
import { motion } from "framer-motion";
import coffee from "../assets/coffee.png";

const Location = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState("today");

  const availableTimes = {
    today: [
      { time: "9:00 AM", available: true },
      { time: "10:30 AM", available: true },
      { time: "12:00 PM", available: false },
      { time: "2:00 PM", available: true },
      { time: "3:30 PM", available: true },
      { time: "5:00 PM", available: false },
      { time: "6:30 PM", available: true },
    ],
    tomorrow: [
      { time: "9:00 AM", available: true },
      { time: "10:30 AM", available: true },
      { time: "12:00 PM", available: true },
      { time: "2:00 PM", available: false },
      { time: "3:30 PM", available: true },
      { time: "5:00 PM", available: true },
      { time: "6:30 PM", available: true },
    ],
  };

  const handleTimeSelect = (time) => {
    if (time.available) {
      setSelectedTime(time.time);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-16 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Location Info & Booking */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 text-amber-600 font-medium text-sm"
              >
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span>Available Location</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl heading  md:text-5xl font-light text-gray-900 leading-tight"
              >
                Spacely Café
                <span className="block header  text-2xl md:text-3xl text-gray-600 font-extralight mt-2">
                  GRA Phase 2, Port Harcourt
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-gray-600 text-lg leading-relaxed max-w-lg"
              >
                Premium workspace in the heart of Rivers State. Perfect for
                meetings, remote work, or creative sessions with our signature
                coffee blends.
              </motion.p>
            </div>

            {/* Location Details */}
            <motion.div
              variants={itemVariants}
              className="bg-white header  rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-amber-500">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <span className="text-gray-800">
                    15 Aba Road, GRA Phase 2, Port Harcourt, Rivers State
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-amber-500">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <span className="text-gray-800">+234 801 234 5678</span>
                </div>
              </div>
            </motion.div>

            {/* Date Selection */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Select Date
              </h3>
              <div className="flex space-x-3">
                {[
                  { key: "today", label: "Today" },
                  { key: "tomorrow", label: "Tomorrow" },
                ].map((date) => (
                  <motion.button
                    key={date.key}
                    onClick={() => setSelectedDate(date.key)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex-1 p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedDate === date.key
                        ? "border-amber-400 bg-amber-50 text-amber-800"
                        : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <div className="font-medium">{date.label}</div>
                    <div className="text-sm opacity-70">{date.date}</div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Time Selection */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Available Times
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {availableTimes[selectedDate].map((timeSlot, index) => (
                  <motion.button
                    key={timeSlot.time}
                    onClick={() => handleTimeSelect(timeSlot)}
                    disabled={!timeSlot.available}
                    whileHover={timeSlot.available ? { scale: 1.05 } : {}}
                    whileTap={timeSlot.available ? { scale: 0.95 } : {}}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`p-3 rounded-lg font-medium transition-all duration-300 ${
                      !timeSlot.available
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : selectedTime === timeSlot.time
                        ? "bg-amber-500 text-white shadow-lg"
                        : "bg-white text-gray-700 border border-gray-200 hover:border-amber-300 hover:bg-amber-50"
                    }`}
                  >
                    {timeSlot.time}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Book Button */}
            {selectedTime && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book for {selectedTime}
                </motion.button>
              </motion.div>
            )}
          </motion.div>

          {/* Right Side - Coffee Image */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
            >
              {/* Background decoration */}
              <div className="absolute -inset-8 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-3xl blur-2xl"></div>

              {/* Coffee image placeholder - replace with your coffee import */}
              <div className="relative bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8">
                <div className="aspect-square rounded-xl flex items-center justify-center">
                  <div className="text-6xl"><img src={coffee} alt="" /></div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-4 right-4 w-6 h-6 bg-white rounded-full opacity-70"
                />

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-8 left-6 w-4 h-4 bg-amber-300 rounded-full opacity-50"
                />
              </div>

              {/* Coffee steam effect */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-gradient-to-t from-gray-200 to-transparent rounded-full blur-sm"
              />
            </motion.div>

            {/* Ambient text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg"
            >
              <span className="text-sm text-gray-600">
                Fresh brewed daily ☕
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Location;
