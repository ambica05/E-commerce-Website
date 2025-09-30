import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { motion } from 'framer-motion';
import { Heart, Users, Building2, Home, Coffee, Utensils } from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Heart,
      title: 'Weddings',
      description: 'Make your special day unforgettable with our traditional and contemporary wedding catering services. From intimate ceremonies to grand celebrations.',
      features: ['Traditional South Indian cuisine', 'Multi-cuisine options', 'Professional service staff', 'Custom menu planning'],
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Users,
      title: 'Seminars',
      description: 'Professional catering for corporate seminars, workshops, and training sessions. Keep your attendees energized with quality refreshments.',
      features: ['Business lunch packages', 'Coffee break services', 'Flexible timing', 'Professional presentation'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Building2,
      title: 'Company Food',
      description: 'Regular corporate meal services for offices, factories, and institutions. Nutritious and delicious meals for your workforce.',
      features: ['Daily meal contracts', 'Bulk catering solutions', 'Nutritious menu options', 'Timely delivery'],
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Home,
      title: 'Family Functions',
      description: 'Celebrate life\'s precious moments with our family-friendly catering services. Perfect for birthdays, anniversaries, and gatherings.',
      features: ['Customized portions', 'Family-style service', 'Traditional recipes', 'Flexible packages'],
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Coffee,
      title: 'Small Gatherings',
      description: 'Intimate catering solutions for small parties, meetings, and social gatherings. Quality service regardless of size.',
      features: ['Minimum order flexibility', 'Quick setup', 'Personalized service', 'Variety of cuisines'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Utensils,
      title: 'Special Events',
      description: 'Customized catering for festivals, cultural events, and special occasions. Bringing authentic flavors to your celebrations.',
      features: ['Festival specials', 'Cultural cuisine', 'Event planning support', 'Decorative presentation'],
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate family gatherings to grand corporate events, we provide exceptional catering services 
            tailored to make every occasion memorable and delicious.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 group hover:scale-105 transition-transform duration-300"
            >
              <div className={`${service.bgColor} rounded-full w-16 h-16 flex items-center justify-center mb-4`}>
                <service.icon className={`h-8 w-8 ${service.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className={`w-2 h-2 rounded-full ${service.color.replace('text-', 'bg-')} mr-2`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Our <span className="text-red-600">Process</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Consultation</h3>
                <p className="text-gray-600">We discuss your requirements, preferences, and budget to create the perfect menu.</p>
              </div>
              <div className="text-center">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Planning</h3>
                <p className="text-gray-600">Our team carefully plans every detail from menu to service staff arrangement.</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Preparation</h3>
                <p className="text-gray-600">Fresh ingredients are sourced and dishes are prepared with utmost care and hygiene.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Service</h3>
                <p className="text-gray-600">Professional service delivery ensuring your event runs smoothly and memorably.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ready to Plan Your Event?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today for a personalized consultation and let us make your next event extraordinary.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="btn-primary mr-4"
            >
              Get Quote
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/menu')}
              className="btn-secondary"
            >
              View Menu
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;