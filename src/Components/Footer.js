import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-shipe-cove-600 text-slite-yellow py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-semibold">🔌 ElectroShop</h2>
          <p className="mt-2 text-sm">Your Trusted Electrical Partner</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="text-sm">📍 123 Electric Ave, Voltage City</p>
          <p className="text-sm">📞 (123) 456-7890</p>
          <p className="text-sm">✉️ support@electroshop.com</p>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:underline"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:underline"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:underline"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-slite-yellow/30 pt-4 text-center text-sm">
        <p>© 2025 ElectroShop. All rights reserved.</p>
        <p className="mt-1">
          <a href="/privacy" className="hover:underline">Privacy Policy</a> | 
          <a href="/terms" className="hover:underline ml-2">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
