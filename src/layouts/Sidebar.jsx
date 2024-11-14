import React from 'react';
import { Home, Users, Settings, Mail } from 'lucide-react';

const Sidebar = ({ children }) => {
  const menuItems = [
    { title: 'Dashboard', icon: <Home size={20} />, path: '/' },
    { title: 'Users', icon: <Users size={20} />, path: '/users' },
    { title: 'Messages', icon: <Mail size={20} />, path: '/messages' },
    { title: 'Settings', icon: <Settings size={20} />, path: '/settings' },
  ];

  return (
    <div className="min-h-screen font-mono flex">
      {/* Fixed Sidebar with curved edge */}
      <aside className="fixed left-0 top-0 h-full w-72 bg-gradient-to-b from-gray-900 to-gray-950 
        rounded-tr-[42px] rounded-br-[42px] flex flex-col border-r border-gray-800 
        shadow-xl shadow-gray-950/50">
        {/* Logo Section with curved bottom */}
        <div className="p-8 border-b border-gray-800/50 rounded-br-[32px]">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-100 tracking-tighter">
              LOGO
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 mt-8 px-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="flex items-center mb-4 px-6 py-4 text-gray-400 hover:text-gray-100 
                hover:bg-gray-800/50 rounded-2xl transition-all duration-200 group"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 
                rounded-xl bg-gray-800/50 group-hover:bg-gray-800 
                group-hover:shadow-lg group-hover:shadow-gray-950/50 
                transition-all duration-200"
              >
                {item.icon}
              </span>
              <span className="ml-4 font-medium tracking-wide">
                {item.title}
              </span>
            </a>
          ))}
        </nav>

        {/* Footer Section with curved top */}
        <div className="border-t border-gray-800/50 p-8 rounded-tr-[32px]">
          <div className="space-y-3">
            <div className="text-sm text-gray-400 font-medium tracking-tight">
              © 2024 Your Company
            </div>
            <div className="flex flex-col space-y-2 text-xs">
              <a href="#" className="text-gray-500 hover:text-gray-100 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-100 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-72 flex justify-center">
        <div className="container max-w-4xl p-6 bg-gray-900 min-h-screen">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
