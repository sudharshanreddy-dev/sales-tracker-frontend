// import { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import { format } from 'date-fns';
// import salesData from '../data/sales.json';
//
// const Dashboard = () => {
//     const [timeframe, setTimeframe] = useState('daily');
//     const [dateRange, setDateRange] = useState({ start: '', end: '' });
//     const [filteredSales, setFilteredSales] = useState([]);
//     const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });
//
//     useEffect(() => {
//         const filtered = salesData.sales.sort((a, b) => {
//             const aVal = a[sortConfig.key];
//             const bVal = b[sortConfig.key];
//             return sortConfig.direction === 'asc' ? aVal - bVal : bVal - aVal;
//         });
//         setFilteredSales(filtered);
//     }, [timeframe, dateRange, sortConfig]);
//
//     return (
//         <div className="space-y-6">
//             <div className="flex justify-between items-center">
//                 <h1 className="text-2xl font-bold">Dashboard</h1>
//                 <div className="flex gap-4">
//                     <select
//                         value={timeframe}
//                         onChange={(e) => setTimeframe(e.target.value)}
//                         className="bg-[#333] rounded-lg px-4 py-2"
//                     >
//                         <option value="daily">Daily</option>
//                         <option value="monthly">Monthly</option>
//                         <option value="yearly">Yearly</option>
//                         <option value="custom">Custom</option>
//                     </select>
//                     {timeframe === 'custom' && (
//                         <div className="flex gap-2">
//                             <input
//                                 type="date"
//                                 value={dateRange.start}
//                                 onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
//                                 className="bg-[#333] rounded-lg px-4 py-2"
//                             />
//                             <input
//                                 type="date"
//                                 value={dateRange.end}
//                                 onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
//                                 className="bg-[#333] rounded-lg px-4 py-2"
//                             />
//                         </div>
//                     )}
//                 </div>
//             </div>
//
//             <div className="bg-[#242424] p-6 rounded-xl">
//                 <LineChart width={800} height={300} data={filteredSales}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="date" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Line type="monotone" dataKey="amount" stroke="#9ee637" />
//                 </LineChart>
//             </div>
//
//             <div className="bg-[#242424] p-6 rounded-xl">
//                 <div className="overflow-x-auto">
//                     <table className="w-full">
//                         <thead>
//                         <tr className="border-b border-[#333]">
//                             <th className="p-3 text-left">Date</th>
//                             <th className="p-3 text-left">Product</th>
//                             <th className="p-3 text-left">Quantity</th>
//                             <th className="p-3 text-left">Amount</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {filteredSales.map((sale, index) => (
//                             <tr key={index} className="border-b border-[#333]">
//                                 <td className="p-3">{format(new Date(sale.date), 'MMM dd, yyyy')}</td>
//                                 <td className="p-3">{sale.product}</td>
//                                 <td className="p-3">{sale.quantity}</td>
//                                 <td className="p-3">${sale.amount.toLocaleString()}</td>
//                             </tr>
//                         ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Dashboard;

//
// import { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import { format } from 'date-fns';
// import { fetchSales } from '../services/api';
//
// const Dashboard = () => {
//     const [timeframe, setTimeframe] = useState('daily');
//     const [dateRange, setDateRange] = useState({ start: '', end: '' });
//     const [sales, setSales] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });
//
//     useEffect(() => {
//         const loadSales = async () => {
//             try {
//                 setLoading(true);
//                 const data = await fetchSales();
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
//     const filteredSales = sales
//         .filter(sale => {
//             if (!dateRange.start || !dateRange.end) return true;
//             const saleDate = new Date(sale.date);
//             return saleDate >= new Date(dateRange.start) && saleDate <= new Date(dateRange.end);
//         })
//         .sort((a, b) => {
//             const aVal = a[sortConfig.key];
//             const bVal = b[sortConfig.key];
//             return sortConfig.direction === 'asc' ? aVal - bVal : bVal - aVal;
//         });
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
//     return (
//         <div className="space-y-6">
//             <div className="flex justify-between items-center">
//                 <h1 className="text-2xl font-bold">Dashboard</h1>
//                 <div className="flex gap-4">
//                     <select
//                         value={timeframe}
//                         onChange={(e) => setTimeframe(e.target.value)}
//                         className="bg-[#333] rounded-lg px-4 py-2"
//                     >
//                         <option value="daily">Daily</option>
//                         <option value="monthly">Monthly</option>
//                         <option value="yearly">Yearly</option>
//                         <option value="custom">Custom</option>
//                     </select>
//                     {timeframe === 'custom' && (
//                         <div className="flex gap-2">
//                             <input
//                                 type="date"
//                                 value={dateRange.start}
//                                 onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
//                                 className="bg-[#333] rounded-lg px-4 py-2"
//                             />
//                             <input
//                                 type="date"
//                                 value={dateRange.end}
//                                 onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
//                                 className="bg-[#333] rounded-lg px-4 py-2"
//                             />
//                         </div>
//                     )}
//                 </div>
//             </div>
//
//             <div className="bg-[#242424] p-6 rounded-xl">
//                 <LineChart width={800} height={300} data={filteredSales}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis
//                         dataKey="date"
//                         tickFormatter={(date) => format(new Date(date), 'MMM dd')}
//                     />
//                     <YAxis />
//                     <Tooltip
//                         labelFormatter={(date) => format(new Date(date), 'MMM dd, yyyy')}
//                         formatter={(value) => [`$${value.toLocaleString()}`, 'Amount']}
//                     />
//                     <Legend />
//                     <Line type="monotone" dataKey="amount" stroke="#9ee637" />
//                 </LineChart>
//             </div>
//
//             <div className="bg-[#242424] p-6 rounded-xl">
//                 <div className="overflow-x-auto">
//                     <table className="w-full">
//                         <thead>
//                         <tr className="border-b border-[#333]">
//                             <th className="p-3 text-left">Date</th>
//                             <th className="p-3 text-left">Product</th>
//                             <th className="p-3 text-left">Quantity</th>
//                             <th className="p-3 text-left">Amount</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {filteredSales.map((sale) => (
//                             <tr key={sale._id} className="border-b border-[#333]">
//                                 <td className="p-3">{format(new Date(sale.date), 'MMM dd, yyyy')}</td>
//                                 <td className="p-3">{sale.product}</td>
//                                 <td className="p-3">{sale.quantity}</td>
//                                 <td className="p-3">${sale.amount.toLocaleString()}</td>
//                             </tr>
//                         ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;


import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { api } from '../services/api';

const Dashboard = () => {
    // State management
    const [sales, setSales] = useState([]);
    const [filteredSales, setFilteredSales] = useState([]);
    const [editingSale, setEditingSale] = useState(null);
    const [timeframe, setTimeframe] = useState('all');
    const [dateRange, setDateRange] = useState({
        start: '',
        end: ''
    });
    const [sortConfig, setSortConfig] = useState({
        key: 'date',
        direction: 'desc'
    });
    const [summary, setSummary] = useState({
        totalSales: 0,
        totalRevenue: 0,
        averageOrder: 0
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch initial data
    useEffect(() => {
        fetchSales();
    }, []);

    // Apply filters and sorting
    useEffect(() => {
        filterAndSortSales();
    }, [sales, timeframe, dateRange, sortConfig]);

    const fetchSales = async () => {
        try {
            setLoading(true);
            const response = await api.getSales();
            setSales(response.data);
            setError(null);
        } catch (err) {
            setError('Failed to fetch sales data');
            console.error('Error fetching sales:', err);
        } finally {
            setLoading(false);
        }
    };

    const filterAndSortSales = () => {
        let filtered = [...sales];

        // Apply timeframe filter
        if (timeframe !== 'all') {
            const today = new Date();
            const startDate = new Date();

            switch (timeframe) {
                case 'today':
                    startDate.setHours(0, 0, 0, 0);
                    break;
                case 'week':
                    startDate.setDate(today.getDate() - 7);
                    break;
                case 'month':
                    startDate.setMonth(today.getMonth() - 1);
                    break;
                case 'year':
                    startDate.setFullYear(today.getFullYear() - 1);
                    break;
                case 'custom':
                    if (dateRange.start && dateRange.end) {
                        filtered = filtered.filter(sale => {
                            const saleDate = new Date(sale.date);
                            return saleDate >= new Date(dateRange.start) &&
                                saleDate <= new Date(dateRange.end);
                        });
                    }
                    break;
                default:
                    break;
            }

            if (timeframe !== 'custom') {
                filtered = filtered.filter(sale => new Date(sale.date) >= startDate);
            }
        }

        // Apply sorting
        filtered.sort((a, b) => {
            let aVal = a[sortConfig.key];
            let bVal = b[sortConfig.key];

            // Convert dates for comparison
            if (sortConfig.key === 'date') {
                aVal = new Date(aVal);
                bVal = new Date(bVal);
            }

            if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
            if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });

        setFilteredSales(filtered);

        // Calculate summary statistics
        const totalSales = filtered.length;
        const totalRevenue = filtered.reduce((sum, sale) => sum + sale.amount, 0);
        const averageOrder = totalSales > 0 ? totalRevenue / totalSales : 0;

        setSummary({
            totalSales,
            totalRevenue,
            averageOrder
        });
    };

    const handleSort = (key) => {
        setSortConfig(prev => ({
            key,
            direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
        }));
    };

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            await api.updateSale(editingSale._id, editingSale);
            setEditingSale(null);
            fetchSales();
        } catch (error) {
            console.error('Error updating sale:', error);
            setError('Failed to update sale');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this sale?')) {
            try {
                await api.deleteSale(id);
                fetchSales();
            } catch (error) {
                console.error('Error deleting sale:', error);
                setError('Failed to delete sale');
            }
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#9ee637]"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {error && (
                <div className="bg-red-500 text-white p-4 rounded-lg">
                    {error}
                </div>
            )}

            {/* Header and Controls */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Sales Dashboard</h1>
                <div className="flex gap-4">
                    <select
                        value={timeframe}
                        onChange={(e) => setTimeframe(e.target.value)}
                        className="bg-[#333] rounded-lg px-4 py-2"
                    >
                        <option value="all">All Time</option>
                        <option value="today">Today</option>
                        <option value="week">Last 7 Days</option>
                        <option value="month">Last 30 Days</option>
                        <option value="year">Last Year</option>
                        <option value="custom">Custom Range</option>
                    </select>

                    {timeframe === 'custom' && (
                        <div className="flex gap-2">
                            <input
                                type="date"
                                value={dateRange.start}
                                onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                                className="bg-[#333] rounded-lg px-4 py-2"
                            />
                            <input
                                type="date"
                                value={dateRange.end}
                                onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                                className="bg-[#333] rounded-lg px-4 py-2"
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-3 gap-6">
                <div className="bg-[#242424] p-6 rounded-xl">
                    <h3 className="text-lg text-gray-400 mb-2">Total Sales</h3>
                    <p className="text-2xl font-bold">{summary.totalSales}</p>
                </div>
                <div className="bg-[#242424] p-6 rounded-xl">
                    <h3 className="text-lg text-gray-400 mb-2">Total Revenue</h3>
                    <p className="text-2xl font-bold">${summary.totalRevenue.toLocaleString()}</p>
                </div>
                <div className="bg-[#242424] p-6 rounded-xl">
                    <h3 className="text-lg text-gray-400 mb-2">Average Order</h3>
                    <p className="text-2xl font-bold">${summary.averageOrder.toLocaleString()}</p>
                </div>
            </div>

            {/* Sales Chart */}
            <div className="bg-[#242424] p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-4">Sales Trend</h2>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={filteredSales}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                                dataKey="date"
                                tickFormatter={(date) => format(new Date(date), 'MMM dd')}
                            />
                            <YAxis />
                            <Tooltip
                                labelFormatter={(date) => format(new Date(date), 'MMM dd, yyyy')}
                                formatter={(value) => [`$${value}`, 'Amount']}
                            />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="amount"
                                stroke="#9ee637"
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Sales Table */}
            <div className="bg-[#242424] p-6 rounded-xl overflow-x-auto">
                <h2 className="text-xl font-bold mb-4">Sales History</h2>
                <table className="w-full">
                    <thead>
                    <tr className="border-b border-[#333]">
                        <th
                            className="p-3 text-left cursor-pointer hover:text-[#9ee637]"
                            onClick={() => handleSort('date')}
                        >
                            Date {sortConfig.key === 'date' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                        </th>
                        <th
                            className="p-3 text-left cursor-pointer hover:text-[#9ee637]"
                            onClick={() => handleSort('product')}
                        >
                            Product {sortConfig.key === 'product' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                        </th>
                        <th
                            className="p-3 text-left cursor-pointer hover:text-[#9ee637]"
                            onClick={() => handleSort('quantity')}
                        >
                            Quantity {sortConfig.key === 'quantity' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                        </th>
                        <th
                            className="p-3 text-left cursor-pointer hover:text-[#9ee637]"
                            onClick={() => handleSort('amount')}
                        >
                            Amount {sortConfig.key === 'amount' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                        </th>
                        <th className="p-3 text-left">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredSales.map((sale) => (
                        <tr key={sale._id} className="border-b border-[#333]">
                            {editingSale && editingSale._id === sale._id ? (
                                <>
                                    <td className="p-3">
                                        <input
                                            type="date"
                                            value={editingSale.date.split('T')[0]}
                                            onChange={(e) => setEditingSale({...editingSale, date: e.target.value})}
                                            className="bg-[#333] rounded px-2 py-1 w-full"
                                        />
                                    </td>
                                    <td className="p-3">
                                        <input
                                            type="text"
                                            value={editingSale.product}
                                            onChange={(e) => setEditingSale({...editingSale, product: e.target.value})}
                                            className="bg-[#333] rounded px-2 py-1 w-full"
                                        />
                                    </td>
                                    <td className="p-3">
                                        <input
                                            type="number"
                                            value={editingSale.quantity}
                                            onChange={(e) => setEditingSale({...editingSale, quantity: Number(e.target.value)})}
                                            className="bg-[#333] rounded px-2 py-1 w-full"
                                        />
                                    </td>
                                    <td className="p-3">
                                        <input
                                            type="number"
                                            value={editingSale.amount}
                                            onChange={(e) => setEditingSale({...editingSale, amount: Number(e.target.value)})}
                                            className="bg-[#333] rounded px-2 py-1 w-full"
                                        />
                                    </td>
                                    <td className="p-3">
                                        <button
                                            onClick={handleEdit}
                                            className="bg-[#9ee637] text-black px-2 py-1 rounded mr-2"
                                        >
                                            Save
                                        </button>
                                        <button
                                            onClick={() => setEditingSale(null)}
                                            className="bg-gray-600 px-2 py-1 rounded"
                                        >
                                            Cancel
                                        </button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td className="p-3">{format(new Date(sale.date), 'MMM dd, yyyy')}</td>
                                    <td className="p-3">{sale.product}</td>
                                    <td className="p-3">{sale.quantity}</td>
                                    <td className="p-3">${sale.amount.toLocaleString()}</td>
                                    <td className="p-3">
                                        <button
                                            onClick={() => setEditingSale(sale)}
                                            className="bg-[#9ee637] text-black px-2 py-1 rounded mr-2"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(sale._id)}
                                            className="bg-red-600 px-2 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;