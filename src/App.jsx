// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Dashboard from './components/Dashboard';
// import Analytics from './components/Analytics';
// import DataEntry from './components/DataEntry';
// import './App.css';
//
// function App() {
//   return (
//       <Router>
//         <div className="flex min-h-screen bg-[#1a1a1a] text-white">
//           <Sidebar />
//           <main className="flex-1 p-6">
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/analytics" element={<Analytics />} />
//               <Route path="/data-entry" element={<DataEntry />} />
//             </Routes>
//           </main>
//         </div>
//       </Router>
//   );
// }
//
// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import DataEntry from './components/DataEntry';
import './App.css';

function App() {
    return (
        <Router>
            <div className="flex bg-[#1a1a1a] text-white min-h-screen">
                <Sidebar />
                <main className="flex-1 ml-64 p-6">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/analytics" element={<Analytics />} />
                        <Route path="/data-entry" element={<DataEntry />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;

