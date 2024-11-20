// import { useState } from 'react';
// import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import salesData from '../data/sales.json';
//
// const Analytics = () => {
//     const [dateRange, setDateRange] = useState({ start: '', end: '' });
//     const COLORS = ['#9ee637', '#7ab92d', '#5c8c23', '#3d5f19', '#1f320f'];
//
//     const productStats = salesData.sales.reduce((acc, sale) => {
//         if (!acc[sale.product]) {
//             acc[sale.product] = { name: sale.product, value: 0, sales: 0 };
//         }
//         acc[sale.product].value += sale.quantity;
//         acc[sale.product].sales += sale.amount;
//         return acc;
//     }, {});
//
//     const chartData = Object.values(productStats);
//
//     return (
//         <div className="space-y-6">
//             <div className="flex justify-between items-center">
//                 <h1 className="text-2xl font-bold">Analytics</h1>
//                 <div className="flex gap-2">
//                     <input
//                         type="date"
//                         value={dateRange.start}
//                         onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
//                         className="bg-[#333] rounded-lg px-4 py-2"
//                     />
//                     <input
//                         type="date"
//                         value={dateRange.end}
//                         onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
//                         className="bg-[#333] rounded-lg px-4 py-2"
//                     />
//                 </div>
//             </div>
//
//             <div className="grid grid-cols-2 gap-6">
//                 <div className="bg-[#242424] p-6 rounded-xl">
//                     <h2 className="text-xl font-bold mb-4">Product Distribution</h2>
//                     <PieChart width={400} height={400}>
//                         <Pie
//                             data={chartData}
//                             cx={200}
//                             cy={200}
//                             labelLine={false}
//                             outerRadius={150}
//                             fill="#8884d8"
//                             dataKey="value"
//                         >
//                             {chartData.map((entry, index) => (
//                                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                             ))}
//                         </Pie>
//                         <Tooltip />
//                         <Legend />
//                     </PieChart>
//                 </div>
//
//                 <div className="bg-[#242424] p-6 rounded-xl">
//                     <h2 className="text-xl font-bold mb-4">Sales by Product</h2>
//                     <BarChart width={400} height={400} data={chartData}>
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <XAxis dataKey="name" />
//                         <YAxis />
//                         <Tooltip />
//                         <Legend />
//                         <Bar dataKey="sales" fill="#9ee637" />
//                     </BarChart>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Analytics;

//
// import { useState, useEffect } from 'react';
// import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import { api } from '../services/api';
//
// const Analytics = () => {
//     const [dateRange, setDateRange] = useState({ start: '', end: '' });
//     const [sales, setSales] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const COLORS = ['#9ee637', '#7ab92d', '#5c8c23', '#3d5f19', '#1f320f'];
//
//     useEffect(() => {
//         const loadSales = async () => {
//             try {
//                 const data = await api.getSales();
//                 setSales(data);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };
//
//         loadSales();
//     }, []);
//
//     if (loading) return (
//         <div className="flex justify-center items-center h-screen">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#9ee637]"></div>
//         </div>
//     );
//
//     if (error) return (
//         <div className="bg-red-500 text-white p-4 rounded-lg">
//             Error: {error}
//         </div>
//     );
//
//     const filteredSales = sales.filter(sale => {
//         if (!dateRange.start || !dateRange.end) return true;
//         const saleDate = new Date(sale.date);
//         return saleDate >= new Date(dateRange.start) && saleDate <= new Date(dateRange.end);
//     });
//
//     const productStats = filteredSales.reduce((acc, sale) => {
//         if (!acc[sale.product]) {
//             acc[sale.product] = { name: sale.product, value: 0, sales: 0 };
//         }
//         acc[sale.product].value += sale.quantity;
//         acc[sale.product].sales += sale.amount;
//         return acc;
//     }, {});
//
//     const chartData = Object.values(productStats);
//
//     return (
//         <div className="space-y-6">
//             <div className="flex justify-between items-center">
//                 <h1 className="text-2xl font-bold">Analytics</h1>
//                 <div className="flex gap-2">
//                     <input
//                         type="date"
//                         value={dateRange.start}
//                         onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
//                         className="bg-[#333] rounded-lg px-4 py-2"
//                     />
//                     <input
//                         type="date"
//                         value={dateRange.end}
//                         onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
//                         className="bg-[#333] rounded-lg px-4 py-2"
//                     />
//                 </div>
//             </div>
//
//             <div className="grid grid-cols-2 gap-6">
//                 <div className="bg-[#242424] p-6 rounded-xl">
//                     <h2 className="text-xl font-bold mb-4">Product Distribution</h2>
//                     <PieChart width={400} height={400}>
//                         <Pie
//                             data={chartData}
//                             cx={200}
//                             cy={200}
//                             labelLine={false}
//                             outerRadius={150}
//                             fill="#8884d8"
//                             dataKey="value"
//                         >
//                             {chartData.map((entry, index) => (
//                                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                             ))}
//                         </Pie>
//                         <Tooltip />
//                         <Legend />
//                     </PieChart>
//                 </div>
//
//                 <div className="bg-[#242424] p-6 rounded-xl">
//                     <h2 className="text-xl font-bold mb-4">Sales by Product</h2>
//                     <BarChart width={400} height={400} data={chartData}>
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <XAxis dataKey="name" />
//                         <YAxis />
//                         <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
//                         <Legend />
//                         <Bar dataKey="sales" fill="#9ee637" />
//                     </BarChart>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
//
// export default Analytics;


import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { api } from '../services/api';

const Analytics = () => {
    const [sales, setSales] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [dateRange, setDateRange] = useState('week'); // Default filter

    const COLORS = ['#9ee637', '#7ab92d', '#5c8c23', '#3d5f19', '#1f320f'];

    useEffect(() => {
        const fetchSales = async () => {
            try {
                const response = await api.getSales();
                setSales(response.data);
            } catch (err) {
                setError(err.message || 'Failed to fetch sales data');
            } finally {
                setLoading(false);
            }
        };
        fetchSales();
    }, []);

    const getFilteredSales = () => {
        const now = new Date();
        const ranges = {
            day: () => now.setDate(now.getDate() - 1),
            week: () => now.setDate(now.getDate() - 7),
            month: () => now.setMonth(now.getMonth() - 1),
            year: () => now.setFullYear(now.getFullYear() - 1),
        };

        const startDate = new Date(ranges[dateRange]());
        return sales.filter((sale) => new Date(sale.date) >= startDate);
    };

    const aggregateSalesData = (filteredSales) =>
        filteredSales.reduce((acc, sale) => {
            if (!acc[sale.product]) {
                acc[sale.product] = { name: sale.product, value: 0, sales: 0 };
            }
            acc[sale.product].value += sale.quantity;
            acc[sale.product].sales += sale.amount;
            return acc;
        }, {});

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#9ee637]"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-500 text-white p-4 rounded-lg">
                <p>Error: {error}</p>
            </div>
        );
    }

    const filteredSales = getFilteredSales();
    const chartData = Object.values(aggregateSalesData(filteredSales));

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Analytics</h1>
                <select
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    className="bg-[#333] rounded-lg px-4 py-2 text-white"
                >
                    <option value="day">Last Day</option>
                    <option value="week">Last Week</option>
                    <option value="month">Last Month</option>
                    <option value="year">Last Year</option>
                </select>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-[#242424] p-6 rounded-xl">
                    <h2 className="text-xl font-bold mb-4">Product Distribution</h2>
                    <PieChart width={300} height={300}>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>

                <div className="bg-[#242424] p-6 rounded-xl">
                    <h2 className="text-xl font-bold mb-4">Sales by Product</h2>
                    <BarChart width={300} height={300} data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                        <Legend />
                        <Bar dataKey="sales" fill="#9ee637" />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Analytics;

