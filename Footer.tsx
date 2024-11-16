import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h4 className="text-lg font-bold mb-2">Stay Connected</h4>
          <p className="mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
          <form className="mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md border border-gray-300 mt-4 mb-4"
            />
            <button className="bg-indigo-600 text-white p-2 rounded-r-md">Subscribe</button>
          </form>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-indigo-400">Facebook</a>
            <a href="#" className="hover:text-indigo-400">Twitter</a>
            <a href="#" className="hover:text-indigo-400">LinkedIn</a>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-sm">© 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;