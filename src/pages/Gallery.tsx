import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const navigate = useNavigate();
  const galleryImages = [
    {
      url: 'https://i.pinimg.com/1200x/5f/74/18/5f74188769227b94fc62af3312d1b208.jpg',
      title: 'Wedding Decor Setup',
      category: 'Weddings'
    },
    {
      url: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Buffet Counter Display',
      category: 'Buffet'
    },
    {
      url: 'https://i.pinimg.com/1200x/d2/b5/f3/d2b5f3bc5e4e7c99ac245b7bc902f0e9.jpg',
      title: 'Live Cooking Station',
      category: 'Live Stations'
    },
    {
      url: 'https://i.pinimg.com/736x/4f/d8/51/4fd8513a20ebab568ae0afb64bc46804.jpg',
      title: 'Traditional South Indian Plating',
      category: 'Plating'
    },
   
    {
      url: 'https://i.pinimg.com/736x/75/9f/ba/759fba928c9ca686801d6220e0c571ac.jpg',
      title: 'Corporate Event Setup',
      category: 'Corporate'
    },
    {
      url: 'https://i.pinimg.com/736x/84/31/80/84318052bb7a8f5321fee035ff295a8b.jpg',
      title: 'Dessert Counter',
      category: 'Desserts'
    },
    {
      url: 'https://i.pinimg.com/736x/3b/c7/e5/3bc7e554810eeb021b4dce2c3854a287.jpg',
      title: 'Family Function Catering',
      category: 'Family'
    },
    {
      url: 'https://i.pinimg.com/1200x/7b/36/0b/7b360b3dbadbbfdfbdeed591bfcdb832.jpg',
      title: 'Traditional Banana Leaf Service',
      category: 'Traditional'
    }
  ];

  const categories = ['All', 'Weddings', 'Buffet', 'Live Stations', 'Plating', 'Decor', 'Corporate'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

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
            Our <span className="text-blue-600">Gallery</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Take a visual journey through our culinary creations and event setups. 
            See how we transform ordinary occasions into extraordinary memories.
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${selectedCategory}-${index}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end">
                <div className="p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-primary py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Creating Memories Since 1988
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">1500+</div>
                <div className="text-lg">Events Catered</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">160K+</div>
                <div className="text-lg">Guests Served</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">22+</div>
                <div className="text-lg">Years of Excellence</div>
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
              Ready to Create Your Own Gallery?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let us capture the beauty of your special occasion with our exceptional catering services.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Plan Your Event
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;