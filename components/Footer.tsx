import React from 'react';
import { MessageSquare, Github, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 sm:px-0 mt-12 sm:mt-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <MessageSquare className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">KARES</span>
            </div>
            <p className="text-gray-400">
              Experience the magic of chatting with your favorite anime characters.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white">Features</Link></li>
              <li><Link href="/" className="hover:text-white">Pricing</Link></li>
              <li><Link href="/" className="hover:text-white">Chat Now</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white">About</Link></li>
              <li><Link href="/" className="hover:text-white">Blog</Link></li>
              <li><Link href="/" className="hover:text-white">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/MisbahAnsar" className="hover:text-white">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://x.com/Misba8069" className="hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="mailto:misbaansari444@gmail.com?subject=Hey jinwoo/Misbah&body=The project is nice btw?" 
              className="hover:text-white">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className='text-lg'>Made with ❤️ by <a href="https://github.com/MisbahAnsar" className="hover:text-white">Misbah Ansari</a></p>
        </div>
      </div>
    </footer>
  );
};