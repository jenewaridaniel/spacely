import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: ''
  });
  
  const [focusedField, setFocusedField] = useState('');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const inputVariants = {
    focused: {
      scale: 1.02,
      transition: { duration: 0.2 }
    },
    unfocused: {
      scale: 1,
      transition: { duration: 0.2 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md"
      >
        <motion.div variants={itemVariants} className="text-center mb-8">
          <h1 className="heading text-3xl md:text-5xl tracking-wider font-semibold text-gray-900 mb-2">Create Account</h1>
          <p className="text-gray-600">Join us to get started</p>
        </motion.div>

        <motion.form
          variants={itemVariants}
          onSubmit={handleSubmit}
          className="bg-white header  rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6"
        >
          <div className="space-y-4">
            <motion.div
              variants={inputVariants}
              animate={focusedField === 'fullName' ? 'focused' : 'unfocused'}
            >
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                onFocus={() => setFocusedField('fullName')}
                onBlur={() => setFocusedField('')}
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
                placeholder="Enter your full name"
                required
              />
            </motion.div>

            <motion.div
              variants={inputVariants}
              animate={focusedField === 'email' ? 'focused' : 'unfocused'}
            >
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField('')}
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
                placeholder="Enter your email"
                required
              />
            </motion.div>

            <motion.div
              variants={inputVariants}
              animate={focusedField === 'phoneNumber' ? 'focused' : 'unfocused'}
            >
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                onFocus={() => setFocusedField('phoneNumber')}
                onBlur={() => setFocusedField('')}
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
                placeholder="Enter your phone number"
                required
              />
            </motion.div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="heading w-full bg-amber-600 hover:bg-amber-400 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Create Account
          </motion.button>

          <motion.div variants={itemVariants} className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link className=' underline' to='/login'>
              <button
                type="button"
                className="text-blue-500 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Sign in
              </button> 
              </Link>
            </p>
          </motion.div>
        </motion.form>

        <motion.div variants={itemVariants} className="text-center mt-6">
          <p className="text-xs text-gray-500">
            By creating an account, you agree to our{' '}
            <button className="text-blue-500 hover:text-blue-600 underline">
              Terms of Service
            </button>{' '}
            and{' '}
            <button className="text-blue-500 hover:text-blue-600 underline">
              Privacy Policy
            </button>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Signup;