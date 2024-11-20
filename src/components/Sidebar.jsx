// import { NavLink } from 'react-router-dom';
//
// const Sidebar = () => {
//     const menuItems = [
//         { icon: '📊', text: 'Dashboard', path: '/' },
//         { icon: '📈', text: 'Analytics', path: '/analytics' },
//         { icon: '📝', text: 'Data Entry', path: '/data-entry' },
//     ];
//
//     return (
//         <div className="w-64 bg-[#242424] p-4">
//             <div className="flex items-center gap-2 mb-8">
//                 <span className="text-[#9ee637] text-2xl font-bold">Sales Tracker</span>
//             </div>
//             <nav className="space-y-2">
//                 {menuItems.map((item) => (
//                     <NavLink
//                         key={item.path}
//                         to={item.path}
//                         className={({ isActive }) =>
//                             `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
//                                 isActive ? 'bg-[#9ee637] text-black' : 'hover:bg-[#333]'
//                             }`
//                         }
//                     >
//                         <span>{item.icon}</span>
//                         <span>{item.text}</span>
//                     </NavLink>
//                 ))}
//             </nav>
//         </div>
//     );
// };
//
// export default Sidebar;



// import { NavLink } from 'react-router-dom';
//
// const Sidebar = () => {
//     const menuItems = [
//         { icon: '📊', text: 'Dashboard', path: '/' },
//         { icon: '📈', text: 'Analytics', path: '/analytics' },
//         { icon: '📝', text: 'Data Entry', path: '/data-entry' },
//     ];
//
//     return (
//         <div className="fixed top-0 left-0 h-full w-64 bg-[#242424] p-4">
//             <div className="flex items-center gap-2 mb-8">
//                 <span className="text-[#9ee637] text-2xl font-bold">Sales Tracker</span>
//             </div>
//             <nav className="space-y-2">
//                 {menuItems.map((item) => (
//                     <NavLink
//                         key={item.path}
//                         to={item.path}
//                         className={({ isActive }) =>
//                             `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
//                                 isActive ? 'bg-[#9ee637] text-black' : 'hover:bg-[#333]'
//                             }`
//                         }
//                     >
//                         <span>{item.icon}</span>
//                         <span>{item.text}</span>
//                     </NavLink>
//                 ))}
//             </nav>
//         </div>
//     );
// };
//
// export default Sidebar;


import { AiOutlineDashboard, AiOutlineBarChart } from 'react-icons/ai';
import { BiData, BiPackage } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="bg-dark text-light w-64 h-screen flex flex-col p-4">
            <h1 className="text-primary text-2xl font-bold mb-6">Sales Tracker</h1>
            <Link className="mb-4 flex items-center gap-3" to="/dashboard">
                <AiOutlineDashboard size={24} /> Dashboard
            </Link>
            <Link className="mb-4 flex items-center gap-3" to="/analytics">
                <AiOutlineBarChart size={24} /> Analytics
            </Link>
            <Link className="mb-4 flex items-center gap-3" to="/data-entry">
                <BiData size={24} /> Data Entry
            </Link>
            <Link className="mb-4 flex items-center gap-3" to="/manage-products">
                <BiPackage size={24} /> Manage Products
            </Link>
        </div>
    );
};

export default Sidebar;