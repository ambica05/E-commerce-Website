import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Clock, MapPin, Users, Award } from 'lucide-react';

const milestones = [
  {
    title: 'The Beginning',
    description: 'Started as Sri Ramaiah Caterers in Vijayawada, rooted in authentic South Indian culinary traditions.',
  },
  {
    title: 'Expansion to Hyderabad',
    description: 'Began serving clients in Hyderabad with full-scale vegetarian and non-vegetarian catering services.',
  },
  {
    title: 'Guinness Record Feat',
    description: 'Catered to over 160,000 guests at Annamayya Lakshagalarchana — featured in the Guinness Book of World Records.',
  },
  {
    title: '1500+ Events Catered',
    description: 'Crossed the milestone of serving at 1500+ events across Telangana and Andhra Pradesh.',
  },
  {
    title: 'Corporate Trust & Scale',
    description: 'Became trusted caterers for top corporates like NCC, MSN Labs, University of Hyderabad, and more.',
  },
  {
    title: 'A New Digital Home',
    description: 'Launched a new website with joyful aesthetics, WhatsApp-integrated contact form, and detailed menu layouts.',
  },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-blue-600">Shiva Sai Caterers</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              With over two decades of culinary excellence, Shiva Sai Caterers has become a trusted name for unforgettable dining experiences across Telangana and Andhra Pradesh. It began as Sri Ramaiah Caterers in 1988 and has served Hyderabad since 2003. From intimate family functions to large-scale corporate events, we bring tradition, taste, and trust to your plate.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Our <span className="text-red-600">Core Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card p-6 text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Tradition</h3>
                <p className="text-gray-600">Preserving authentic flavors and time-honored recipes passed down through generations</p>
              </div>
              <div className="card p-6 text-center">
                <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Quality</h3>
                <p className="text-gray-600">Using only the finest ingredients and maintaining the highest standards of preparation</p>
              </div>
              <div className="card p-6 text-center">
                <Clock className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Reliability</h3>
                <p className="text-gray-600">Consistent service delivery with punctuality and professional excellence</p>
              </div>
              <div className="card p-6 text-center">
                <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
                <p className="text-gray-600">Continuously evolving our offerings while respecting traditional roots</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Our <span className="text-blue-600">Journey</span>
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="card p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full flex-shrink-0"></div>
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience the <span className="cursive-heading text-yellow-300">Sri Ramaiah's</span> Difference
            </h2>
            <p className="text-xl mb-8">
              Join thousands of satisfied customers who have made their events memorable with us.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Plan Your Event
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default About;