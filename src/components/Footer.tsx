import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="../assets/Logo.png" alt="Shiva Sai Caterers Logo" className="h-10 w-auto" />
              <div>
                <div className="cursive-heading text-xl text-red-400 leading-tight">Sri Ramaiah's</div>
                <div className="text-lg font-bold leading-tight">Shiva Sai Caterers</div>
              </div>
            </div>

            <p className="text-gray-300 mb-4 max-w-md">
              With over two decades of culinary excellence, we bring tradition, taste, and trust to your special occasions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61574801287379"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
                aria-label="Facebook Page"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/sriramaiah_caterers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors"
                aria-label="Instagram Page"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  H.no: 71/A, opp. Vinayaka Jewellers, JNTU, KPHB, Hyderabad - 500085
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-yellow-400" />
                <a href="tel:9246292884" className="text-gray-300 hover:text-white transition-colors">
                  9246292884
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-yellow-400" />
                <a href="mailto:shivasaicaterers03@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  shivasaicaterers03@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <p className="text-gray-300">B Koti Reddy - Owner</p>
              <a
                href="https://www.facebook.com/profile.php?id=61574801287379"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-400 hover:text-blue-300 transition-colors text-sm"
              >
                Shiva Sai Caterers Facebook Page
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Shiva Sai Caterers. All rights reserved. Serving excellence since 1988.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;