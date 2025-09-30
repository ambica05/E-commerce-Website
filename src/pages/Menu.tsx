import React, { useState} from 'react';
import { motion } from 'framer-motion';
import { Leaf, Drumstick, ChefHat, X } from 'lucide-react';

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

  const menuCategories = [
    {
      id: 'veg',
      title: 'Vegetarian Menu',
      icon: Leaf,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      description: 'Pure vegetarian delicacies prepared with traditional recipes'
    },
    {
      id: 'non-veg',
      title: 'Non-Vegetarian Menu',
      icon: Drumstick,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      description: 'Authentic non-vegetarian dishes with aromatic spices'
    },
    {
      id: 'chinese',
      title: 'Chinese Cuisine',
      icon: ChefHat,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      description: 'Indo-Chinese fusion dishes loved by all'
    },
    {
      id: 'north-indian',
      title: 'North Indian',
      icon: ChefHat,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      description: 'Rich and flavorful North Indian specialties'
    },
    {
      id: 'south-indian',
      title: 'South Indian',
      icon: ChefHat,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      description: 'Traditional South Indian comfort food'
    }
  ];

  const vegMenuLayouts = {
    basic: {
      title: 'Basic Veg Menu',
      items: [
        'Sweet ×1', 'Hot ×1', 'Roti ×1', 'Special Veg Rice ×1',
        'Special Veg Curry ×1', 'Veg Fry ×1', 'Veg Curry ×1',
        'Dal ×1', 'Sambhar ×1', 'Chutney ×2'
      ]
    },
    special: {
      title: 'Special Veg Menu',
      items: [
        'Veg Starter ×1', 'Welcome Drink ×1', 'Sweet ×2', 'Hot ×2',
        'Roti ×1', 'Special Veg Rice ×2', 'Special Curry ×1',
        'Veg Curries ×2', 'Veg Fry ×1', 'Dal ×1', 'Sambhar ×1',
        'Green Salad', 'Ice Cream ×1', 'Pan'
      ]
    },
    deluxe: {
      title: 'Deluxe Veg Menu',
      items: [
        'Welcome Drinks ×2', 'Veg Starters ×2', 'Roti ×2',
        'Special Rice ×3', 'Special Curry ×3', 'Veg Curry ×2',
        'Fry ×2', 'Dal ×1', 'Sambhar ×2', 'Green Salad',
        'Ice Cream ×2', 'Pan', 'Chutney'
      ]
    }
  };

  const nonVegMenuLayouts = {
    basic: {
      title: 'Basic Non-Veg Menu',
      items: [
        'Non-Veg Rice Item ×1 ', 'Non-Veg Curry ×1', 'Salad', 'Sweet',
        'Veg Starter', 'Roti', 'Veg Curry', 'Special Veg Rice'
      ]
    },
    special: {
      title: 'Special Non-Veg Menu',
      items: [
        'Sweet', 'Veg & Non-Veg Starter ×1', 'Roti ×1',
        'Veg & Non-Veg Curry ×1', 'Non-Veg Rice Item ×1',
        'Special Veg Rice', 'Mouth Fresheners & Pan',
        'Welcome Drink ×1', 'Non-Veg Fry ×1'
      ]
    },
    deluxe: {
      title: 'Deluxe Non-Veg Menu',
      items: [
        'Sweets ×2', 'Hot ×2', 'Veg & Non-Veg Starters ×2',
        'Welcome Drinks ×2', 'Rotis ×2', 'Veg & Non-Veg Curries ×2',
        'Non-Veg Rice Item ×1', 'Non-Veg Special Rice',
        'Non-Veg Fries ×2'
      ]
    }
  };

  const counters = {
    veg: ['Chaat', 'Fruits', 'Breakfast', 'Pan', 'Chinese'],
    nonVeg: ['Starters', 'Welcome Drinks', 'BBQ', 'Pan', 'Ice Cream', 'Fruit']
  };

  const commonItems = {
    veg: ['Rice', 'Papad', 'Curd', 'Curd Chutney', 'Pickles & Powders', 'Water'],
    nonVeg: ['White Rice', 'Sambhar', 'Dal', 'Veg Fry', 'Chutney', 'Pickles & Powders', 'Papad', 'Water', 'Mirchi ka Salan', 'Raitha']
  };

  const MenuModal = ({ menuType, onClose }: { menuType: string; onClose: () => void }) => {
    const isVeg = menuType === 'veg';
    const layouts = isVeg ? vegMenuLayouts : nonVegMenuLayouts;
    
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">
              {isVeg ? 'Vegetarian' : 'Non-Vegetarian'} Menu Layouts
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="p-6 space-y-8">
            {Object.entries(layouts).map(([key, layout]) => (
              <div key={key} className="card p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{layout.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {layout.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {isVeg ? 'Veg' : 'Non-Veg'} Counters
                </h3>
                <div className="space-y-2">
                  {counters[isVeg ? 'veg' : 'nonVeg'].map((counter, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700">{counter}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {isVeg ? 'Veg' : 'Non-Veg'} Common Items
                </h3>
                <div className="space-y-2">
                  {commonItems[isVeg ? 'veg' : 'nonVeg'].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

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
            Our <span className="text-blue-600">Menu</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of authentic cuisines, carefully crafted to satisfy every palate. 
            From traditional South Indian to contemporary fusion dishes.
          </p>
        </motion.div>
      </section>

      {/* Menu Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 cursor-pointer group hover:scale-105 transition-all duration-300"
              onClick={() => {
                if (category.id === 'veg' || category.id === 'non-veg') {
                  setSelectedMenu(category.id);
                }
              }}
            >
              <div className={`${category.bgColor} rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className={`h-8 w-8 ${category.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              {(category.id === 'veg' || category.id === 'non-veg') && (
                <div className="text-blue-600 font-semibold text-sm">
                  Click to view layouts →
                </div>
              )}
              {!['veg', 'non-veg'].includes(category.id) && (
                <div className="text-gray-500 text-sm">
                  Coming soon...
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Note Section */}
      <section className="bg-gray-50 py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Customized to Your Needs
            </h2>
            <p className="text-gray-600 mb-6">
              All our menus are flexible and can be customized according to your preferences, dietary requirements, and budget. 
              We believe in creating the perfect dining experience for every occasion.
            </p>
            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 inline-block">
              <p className="text-yellow-800 font-medium">
                💡 Note: Prices are not displayed as they vary based on customization, quantity, and location. 
                Contact us for personalized quotes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedMenu && (
        <MenuModal
          menuType={selectedMenu}
          onClose={() => setSelectedMenu(null)}
        />
      )}
    </div>
  );
};

export default Menu;