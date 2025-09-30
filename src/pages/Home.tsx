import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {Users, Award, Calendar, Building2, ChefHat, Heart, Star, Trophy, ChevronLeft, ChevronRight} from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/services'); 
  };
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  const stats = [
    {
      icon: Trophy,
      number: '160,000+',
      label: 'Guests Served in a Single Day',
      subtitle: '(Guinness Record)',
      color: 'text-yellow-600'
    },
    {
      icon: Award,
      number: '22+',
      label: 'Years of Catering Excellence',
      color: 'text-blue-600'
    },
    {
      icon: Calendar,
      number: '1500+',
      label: 'Events Catered',
      color: 'text-red-600'
    },
    {
      icon: Building2,
      number: '15+',
      label: 'Trusted by Corporates',
      color: 'text-green-600'
    }
  ];

  const corporateClients = [
    'NCC', 'Powermech Projects Ltd', 'KMC Constructions', 'Powerwave Technologies',
    'MSN Labs', 'CCRT (Center for Culture Resource & Training)', 'Rishi Engg College',
    'Sietel Ltd', 'IJM Infrastructure Ltd', 'Cleon Labs', 'Vasantha Tool Crafts Pvt Ltd',
    'YTPS Raichur', 'Vott, Gachibowli', 'Sage IT Whitefield', 'University of Hyderabad'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-20 lg:py-32 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('../assets/Home.jpg')" }} 
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="cursive-heading text-4xl md:text-5xl mb-4">
              Sri Ramaiah's
            </div>
            <h1 className="heading text-4xl md:text-6xl font-bold mb-6 text-shadow">
              Shiva Sai Caterers
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl mb-8 leading-relaxed text-shadow">
                Welcome to Shiva Sai Caterers, where culinary excellence meets unwavering commitment to your special occasions...
              </p>
              <button onClick={handleClick} className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition">
                Explore Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Our <span className="text-blue-600">Achievements</span>
            </h2>
            
            {/* Desktop Grid View */}
            <div className="hidden lg:grid grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 text-center"
                >
                  <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                  {stat.subtitle && (
                    <p className="text-sm text-yellow-600 font-semibold mt-1">{stat.subtitle}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Mobile/Tablet Swipe Cards */}
            <div className="lg:hidden relative">
              <div className="overflow-hidden">
                <motion.div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentStatIndex * 100}%)` }}
                >
                  {stats.map((stat, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="card p-8 text-center mx-auto max-w-sm"
                      >
                        <stat.icon className={`h-16 w-16 mx-auto mb-6 ${stat.color}`} />
                        <h3 className="text-4xl font-bold text-gray-800 mb-3">{stat.number}</h3>
                        <p className="text-gray-600 font-medium text-lg">{stat.label}</p>
                        {stat.subtitle && (
                          <p className="text-sm text-yellow-600 font-semibold mt-2">{stat.subtitle}</p>
                        )}
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={() => setCurrentStatIndex(prev => prev > 0 ? prev - 1 : stats.length - 1)}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 text-gray-600 hover:text-blue-600 transition-colors z-10"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => setCurrentStatIndex(prev => prev < stats.length - 1 ? prev + 1 : 0)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 text-gray-600 hover:text-blue-600 transition-colors z-10"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {stats.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStatIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentStatIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Corporate Clients Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Trusted by <span className="text-red-600">Leading Corporates</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {corporateClients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <p className="text-sm font-medium text-gray-700">{client}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white">
      
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Unforgettable Memories?
            </h2>
            <p className="text-xl mb-8 text-opacity-90">
              Let us bring our decades of experience to your next special occasion.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}  
              className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;